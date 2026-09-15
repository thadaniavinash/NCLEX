@echo off
title NCLEX NGN Case Study Studio
echo ================================================================
echo   Starting NCLEX NGN Case Study Studio...
echo   Local server is running at http://localhost:3000
echo   All edits will save directly to your hard drive and json/ folder!
echo ================================================================
echo.
cd /d "%~dp0"
start http://localhost:3000
node server.js
pause
