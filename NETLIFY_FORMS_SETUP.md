# Netlify Forms Setup Guide

## ✅ What's Changed

We've switched from Resend API to **Netlify Forms** - a built-in feature that requires **NO API keys**!

### Benefits:
- ✅ No API keys needed
- ✅ No domain verification required
- ✅ Works immediately after deployment
- ✅ Built-in spam protection
- ✅ Free tier: 100 submissions/month
- ✅ Emails sent directly to `karthik.ramesh@duramettechnologies.com`

## 📋 Forms Configured

1. **Contact Form** (`contact-form`)
   - Location: Home page contact section
   - Fields: name, email, phone, industry, requirement, product

2. **Product Enquiry Form** (`product-enquiry`)
   - Location: Industry detail pages
   - Fields: name, email, phone, requirement, industry, product

## 🚀 Setup Steps

### Step 1: Deploy to Netlify

1. Push your code to GitHub
2. Deploy to Netlify (if not already deployed)
3. Netlify will automatically detect the forms

### Step 2: Configure Email Notifications

1. Go to **Netlify Dashboard** → Your Site → **Forms**
2. You'll see your forms: `contact-form` and `product-enquiry`
3. Click on a form → **Settings** → **Form notifications**
4. Click **Add notification**
5. Select **Email notification**
6. Configure:
   - **To**: `karthik.ramesh@duramettechnologies.com`
   - **From**: `noreply@duramettechnologies.com` (or leave default)
   - **Subject**: `New Contact Form Submission` (or customize)
7. Click **Save**

### Step 3: Test the Form

1. Visit your live site
2. Fill out the contact form
3. Submit
4. Check `karthik.ramesh@duramettechnologies.com` for the email!

## 📧 Email Configuration

The forms are configured to send emails to:
- **Recipient**: `karthik.ramesh@duramettechnologies.com` (set via hidden `_to` field)

You can customize the email template in Netlify Dashboard:
- Go to Forms → Settings → Email notifications
- Customize subject line and email template

## 🎯 How It Works

1. User fills out form on your website
2. Form submits to Netlify (automatically handled)
3. Netlify processes the form submission
4. Email is sent to `karthik.ramesh@duramettechnologies.com`
5. You receive the email with all form data

## 🔒 Spam Protection

- Built-in honeypot field (`bot-field`) - invisible to users, catches bots
- Netlify's spam filtering
- No CAPTCHA needed (but you can add one if needed)

## 📊 Form Submissions

View all form submissions in:
- **Netlify Dashboard** → **Forms** → **Submissions**

You can:
- View all submissions
- Export as CSV
- Set up webhooks for custom integrations

## 🗑️ Removing Resend Dependencies (Optional)

Since we're not using Resend anymore, you can optionally:

1. Remove Resend from `package.json` (if not needed elsewhere)
2. Remove `api/send-email.ts` and `netlify/functions/send-email.ts`
3. Remove `server.js` (if not using for local dev)
4. Remove `src/lib/email.ts` (or keep for future use)

But it's fine to keep them - they won't interfere with Netlify Forms.

## ✅ That's It!

Once you configure email notifications in Netlify Dashboard, your forms will work immediately. No waiting, no API keys, no domain verification needed!

## 🆘 Troubleshooting

**Form not submitting?**
- Check browser console for errors
- Make sure form has `data-netlify="true"` attribute
- Verify form name matches in hidden field

**Not receiving emails?**
- Check Netlify Dashboard → Forms → Settings → Notifications
- Verify email address is correct
- Check spam folder
- Check Netlify form submission logs

**Need help?**
- Netlify Forms docs: https://docs.netlify.com/forms/setup/
- Check Netlify Dashboard → Forms for submission logs

