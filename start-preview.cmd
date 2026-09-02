@echo off
cd /d "%~dp0"
call npm run build
if errorlevel 1 (
  echo.
  echo The portfolio build failed. Review the message above.
  pause
  exit /b 1
)
start "Jaymark Portfolio Preview" http://127.0.0.1:4175/#services
call npm run preview -- --host 127.0.0.1 --port 4175 --strictPort
