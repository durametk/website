@echo off
REM Batch script to pull and push changes
REM Usage: push-changes.bat [commit-message]

setlocal

if "%1"=="" (
    set "COMMIT_MSG=Update changes"
) else (
    set "COMMIT_MSG=%*"
)

echo === Git Pull and Push Script ===
echo.

REM Step 1: Check and stage changes
echo Checking git status...
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo Found uncommitted changes. Staging all changes...
    git add .
    if %errorlevel% neq 0 (
        echo Error: Failed to stage changes!
        exit /b 1
    )
    echo [OK] All changes staged
    echo.
    
    REM Step 2: Commit changes
    echo Committing changes with message: "%COMMIT_MSG%"
    git commit -m "%COMMIT_MSG%"
    if %errorlevel% neq 0 (
        echo Error: Commit failed!
        exit /b 1
    )
    echo [OK] Changes committed
    echo.
) else (
    echo No uncommitted changes found.
    echo.
)

REM Step 3: Pull latest changes
echo Pulling latest changes from origin/main...
git pull origin main
if %errorlevel% neq 0 (
    echo Error: Pull failed! Please resolve conflicts manually.
    exit /b 1
)
echo [OK] Pull successful
echo.

REM Step 4: Push changes
echo Pushing changes to origin/main...
git push origin main
if %errorlevel% neq 0 (
    echo Error: Push failed!
    exit /b 1
)
echo [OK] Push successful
echo.

echo === All done! ===
endlocal

