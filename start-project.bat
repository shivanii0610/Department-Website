@echo off
echo ============================================
echo  Department Website - Run Project
echo ============================================
echo.

cd /d "c:\OJT Website\College_Website-main"

echo [1/2] Installing dependencies...
call npm install
echo.

echo [2/2] Starting the Development Server...
echo  Open your browser at: http://localhost:5173
echo.

call npm run dev

pause