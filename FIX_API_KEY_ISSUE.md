# 🔧 Fix API Key Issue

## ⚠️ Problem

Error: "The duramettechnologies.com domain is not verified"

**This means:** The API key in your code doesn't match the Resend account where the domain is verified.

## ✅ Temporary Fix (Works Now!)

I've updated the code to use Resend's test email (`onboarding@resend.dev`) which works immediately without domain verification.

**The form will work now!** But emails will come from `onboarding@resend.dev` instead of your domain.

## 🔑 Permanent Fix (Use Your Domain)

### Step 1: Get Correct API Key

1. Go to: https://resend.com/api-keys
2. **Important**: Login to the **SAME Resend account** where `duramettechnologies.com` shows as "Verified"
3. Copy the API key from that account

### Step 2: Update Code

Update these files with the correct API key:

1. `netlify/functions/send-email.ts` - Line 5
2. `api/send-email.ts` - Line 6  
3. `server.js` - Line 9

Replace: `re_2dz3tHHJ_HGwXiSLcCfR924BFyk8TqFit`

With: Your correct API key

### Step 3: Change Back to Your Domain

In `netlify/functions/send-email.ts`, change:

```typescript
const fromEmail = "Duramet Technologies <onboarding@resend.dev>"; // Test email
```

Back to:

```typescript
const fromEmail = "Duramet Technologies <noreply@duramettechnologies.com>"; // Your domain
```

### Step 4: Deploy

```bash
git add .
git commit -m "Update to correct Resend API key"
git push origin main
```

## 🎯 Current Status

- ✅ Form works (using test email)
- ⏳ Need correct API key to use your domain
- ⏳ After updating API key, change back to `noreply@duramettechnologies.com`

## 🧪 Test Now

The form should work immediately with the test email. Then fix the API key to use your domain!

