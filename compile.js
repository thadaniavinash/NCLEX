const fs = require('fs');
const path = require('path');

function compile() {
  console.log("Compiling NCLEX NGN Studio into a single file...");

  const buildDir = __dirname;
  let html = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

  // 1. Inline CSS
  const cssPath = path.join(buildDir, 'style.css');
  if (fs.existsSync(cssPath)) {
    console.log("Inlining style.css...");
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const cssTagPattern = /<link\s+rel=["']stylesheet["']\s+href=["']style\.css["']\s*\/?>/i;
    html = html.replace(cssTagPattern, `<style>\n${cssContent}\n</style>`);
  }

  // 2. Inline default-case.js
  const defaultCasePath = path.join(buildDir, 'default-case.js');
  if (fs.existsSync(defaultCasePath)) {
    console.log("Inlining default-case.js...");
    const jsContent = fs.readFileSync(defaultCasePath, 'utf8');
    const jsTagPattern = /<script\s+src=["']default-case\.js["']><\/script>/i;
    html = html.replace(jsTagPattern, `<script>\n${jsContent}\n</script>`);
  }

  // 3. Inline cases-data.js (Optional fallback - bypass if tag is not present in index.html)
  const casesDataPath = path.join(buildDir, 'cases-data.js');
  const jsTagPattern = /<script\s+src=["']cases-data\.js["']><\/script>/i;
  if (html.match(jsTagPattern) && fs.existsSync(casesDataPath)) {
    console.log("Inlining cases-data.js...");
    const jsContent = fs.readFileSync(casesDataPath, 'utf8');
    html = html.replace(jsTagPattern, `<script>\n${jsContent}\n</script>`);
  }

  // 4. Inline app.js
  const appPath = path.join(buildDir, 'app.js');
  if (fs.existsSync(appPath)) {
    console.log("Inlining app.js...");
    const jsContent = fs.readFileSync(appPath, 'utf8');
    const jsTagPattern = /<script\s+src=["']app\.js["']><\/script>/i;
    html = html.replace(jsTagPattern, `<script>\n${jsContent}\n</script>`);
  }

  // Write out the compiled file
  const distPath = path.join(buildDir, 'index_dist.html');
  fs.writeFileSync(distPath, html, 'utf8');
  console.log(`\nSuccess! Standalone file compiled at: ${distPath}`);
  console.log("You can now upload index_dist.html directly to Blackboard.");
}

compile();
