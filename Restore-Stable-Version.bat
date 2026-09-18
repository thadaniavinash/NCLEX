@echo off
title Revert to Stable Release
echo ================================================================
echo   NCLEX NGN Platform - Version Restore Utility
echo ================================================================
echo.
echo Current Git Tags available:
git tag -l
echo.
echo Available Physical Snapshots on E: Drive:
if exist "E:\NCLEX_NGN_Antigravity_Snapshots" (
    dir "E:\NCLEX_NGN_Antigravity_Snapshots" /b
) else (
    echo [No E: drive snapshots folder found]
)
echo.
echo ================================================================
echo If you wish to revert your working repository to a stable tag,
echo run the following in terminal or PowerShell:
echo.
echo    git restore --source=v1.0-stable .
echo    node upload-to-supabase.js
echo    git commit -m "Rollback to v1.0-stable"
echo.
echo ================================================================
pause
