@echo off
echo ========================================================
echo Removing old local code and fetching newest GitHub code
echo ========================================================

cd /d "C:\OJT Website"

REM Fetch the newest code from GitHub
echo Fetching from GitHub...
git fetch origin

REM Reset everything to exactly match the remote "main" branch
echo Resetting local code...
git reset --hard origin/main

echo Entering new project folder...
cd College_Website-main

REM Install dependencies just in case the new code added some
echo Installing dependencies...
call npm install

echo ========================================================
echo Starting your new Github project server...
echo ========================================================
call npm run dev

pause
