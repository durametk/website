# Deployment Guide for Vercel/Netlify

## Overview

For deployment on **Vercel** or **Netlify**, you **ONLY need to update** the `api/send-email.ts` file. The frontend code (`src/lib/email.ts`) doesn't need any changes!

## What You Need to Do

### 1. Update `api/send-email.ts` ✅
   - **Already done!** The file has been updated with all features:
     - Validation
     - Auto-reply emails
     - Better HTML templates
     - Error handling

### 2. Set Environment Variable

#### For Vercel:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V`
   - **Environment**: Production, Preview, Development (select all)

#### For Netlify:
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_HRy7egPF_pBKnUwmUBmFybZ31UunB8j2V`
   - **Scopes**: All scopes (or specific ones)

### 3. File Structure for Deployment

Make sure your project has this structure:

```
your-project/
├── api/
│   └── send-email.ts          ← Serverless function (Vercel/Netlify)
├── src/
│   └── lib/
│       └── email.ts            ← Frontend code (NO CHANGES NEEDED)
└── ... (other files)
```

### 4. Vercel Configuration

**Vercel automatically detects** the `api/` folder and treats it as serverless functions. No additional configuration needed!

If you need a `vercel.json`, it should look like:
```json
{
  "functions": {
    "api/send-email.ts": {
      "maxDuration": 10
    }
  }
}
```

### 5. Netlify Configuration

For Netlify, you might need a `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[functions]
  directory = "api"
```

**Note**: Netlify might require the function to be in `.netlify/functions/` folder. Check Netlify's documentation for the exact structure.

### 6. Remove Local Development Server (Optional)

After deployment, you can:
- **Keep `server.js`** for local development (it won't affect deployment)
- **Remove the proxy** from `vite.config.ts` for production builds, or keep it for local dev

### 7. Test After Deployment

1. Deploy your site
2. Test the contact form
3. Check that emails are received at `aniketcoolshe@gmail.com`
4. Verify auto-reply emails are sent to users

## Important Notes

### Resend Test Mode
- Currently, Resend is in test mode
- Can only send to: `aniketcoolshe@gmail.com`
- To send to other emails, verify a domain in Resend dashboard

### Environment Variables
- The API key is hardcoded as fallback in `api/send-email.ts`
- **Recommended**: Use environment variables for security
- The code checks `process.env.RESEND_API_KEY` first, then falls back to hardcoded value

### No Frontend Changes Needed
- `src/lib/email.ts` calls `/api/send-email` 
- This works for both local dev (with proxy) and production (serverless function)
- **No changes required!**

## Summary

✅ **Only file changed**: `api/send-email.ts`  
✅ **Frontend code**: No changes needed  
✅ **Environment variable**: Set `RESEND_API_KEY` in Vercel/Netlify  
✅ **Deploy**: Push to GitHub and deploy!

