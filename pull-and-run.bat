@echo off
echo ============================================
echo  Pulling latest code from GitHub...
echo ============================================
cd /d "c:\OJT Website"
git pull origin main
echo.
echo ============================================
echo  Installing dependencies...
echo ============================================
cd "c:\OJT Website\College_Website-main"
npm install
echo.
echo ============================================
echo  Starting the Dev Server...
echo ============================================
npm run dev
pause
