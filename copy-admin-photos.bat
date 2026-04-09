@echo off
echo Copying Administration photos to public folder...
if not exist "c:\OJT Website\public\admin-photos" mkdir "c:\OJT Website\public\admin-photos"
copy "c:\OJT Website\Administration images\*" "c:\OJT Website\public\admin-photos\"
echo Done! Photos copied successfully.
pause
