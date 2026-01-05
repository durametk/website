# Email API Setup Instructions

## Quick Start

1. **Start the Email API Server:**
   ```bash
   npm run server
   ```
   This will start the server on `http://localhost:3001`

2. **Start the Vite Dev Server (in a separate terminal):**
   ```bash
   npm run dev
   ```
   This will start the frontend on `http://localhost:8080`

   **OR** run both together:
   ```bash
   npm run dev:all
   ```

## Troubleshooting

### If you see "Submission Failed":

1. **Check if the email server is running:**
   - Open `http://localhost:3001/api/health` in your browser
   - You should see: `{"status":"ok","message":"Email API server is running"}`

2. **Check the browser console:**
   - Open Developer Tools (F12)
   - Look for any error messages in the Console tab
   - Check the Network tab to see if the request to `/api/send-email` is being made

3. **Check the server console:**
   - Look at the terminal where `npm run server` is running
   - You should see logs when a request is received

4. **Common Issues:**
   - **Server not running**: Make sure `npm run server` is running
   - **Port conflict**: If port 3001 is in use, change it in `server.js`
   - **CORS issues**: The server has CORS enabled, but if issues persist, check the server logs
   - **Vite proxy not working**: Restart the Vite dev server after changing `vite.config.ts`

## Testing the API Directly

You can test the email API directly using:

```bash
# Using PowerShell (Windows)
Invoke-RestMethod -Uri "http://localhost:3001/api/send-email" -Method POST -ContentType "application/json" -Body '{"name":"Test","email":"test@example.com","phone":"1234567890","industry":"Test","requirement":"Test requirement"}'
```

## Email Configuration

- **Recipient Email**: `anikecoolshe@gmail.com`
- **Resend API Key**: Configured in `server.js`
- **Auto-reply**: Enabled - users receive an automatic confirmation email

