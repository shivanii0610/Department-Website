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
npm install
echo.
echo ============================================
echo  Starting the NEW Project Dev Server...
echo  URL: http://localhost:5174
echo ============================================
npx vite --port 5174
pause
