const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

// Helper to determine content type from file extension
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Handle POST api save
  if (req.method === 'POST' && req.url === '/api/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data.cases || !data.standalone) {
          throw new Error("Missing 'cases' or 'standalone' property in request body.");
        }
        
        // Construct standard cases-data.js contents
        const jsContent = `window.NCLEX_CASES = ${JSON.stringify(data.cases, null, 2)};\nwindow.NCLEX_STANDALONE = ${JSON.stringify(data.standalone, null, 2)};\n`;
        
        const filePath = path.join(PUBLIC_DIR, 'cases-data.js');
        fs.writeFileSync(filePath, jsContent, 'utf8');
        
        console.log(`[NCLEX BACKEND] Directly wrote updates to: ${filePath}`);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Data saved successfully to cases-data.js!' }));
      } catch (err) {
        console.error('[NCLEX BACKEND] Save error:', err.message);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Handle static file serving (GET requests)
  if (req.method === 'GET') {
    // Prevent directory traversal
    let safeUrl = req.url.split('?')[0].split('#')[0];
    if (safeUrl === '/') {
      safeUrl = '/index.html';
    }

    const filePath = path.join(PUBLIC_DIR, safeUrl);
    
    // Check if path is actually inside the repo folder
    if (!filePath.startsWith(PUBLIC_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }

    fs.exists(filePath, (exists) => {
      if (!exists) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      // Check if directory
      if (fs.statSync(filePath).isDirectory()) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      
      // Stream file output
      const stream = fs.createReadStream(filePath);
      stream.on('error', (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      });
      stream.pipe(res);
    });
    return;
  }

  // Fallback for other HTTP methods
  res.writeHead(405, { 'Content-Type': 'text/plain' });
  res.end('405 Method Not Allowed');
});

server.listen(PORT, () => {
  console.log('================================================================');
  console.log(`  NCLEX NGN Case Study Studio is running at:`);
  console.log(`  http://localhost:${PORT}`);
  console.log('================================================================');
  console.log('  Press Ctrl+C in this terminal window to stop the server.');
  console.log('  All saves inside the editor will write directly to your disk.');
});
