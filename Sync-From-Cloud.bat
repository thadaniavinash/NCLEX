@echo off
title Sync NCLEX Studio from Cloud
echo ================================================================
echo   Syncing NCLEX Studio from Supabase Cloud to Local Files...
echo ================================================================
echo.
cd /d "%~dp0"
node sync-from-supabase.js
echo.
echo Sync finished. You may close this window.
pause
