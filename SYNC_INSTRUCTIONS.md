# 🔄 How to Sync Client's Repo

## 📋 Your Workflow

1. ✅ You make changes → Push to your repo
2. 🔄 You manually sync client's forked repo
3. 🚀 Netlify auto-deploys from client's repo

## 🎯 Step-by-Step Sync Process

### Method 1: GitHub Web Interface (Easiest)

1. **Go to Client's Forked Repo on GitHub**
   - Login to client's GitHub account (or ask them to do it)
   - Navigate to their forked repo

2. **Click "Sync Fork" Button**
   - You'll see a banner saying "This branch is X commits behind [your-repo]"
   - Click **"Sync fork"** button
   - Click **"Update branch"**

3. **Done!** Netlify will auto-deploy

### Method 2: Manual Pull Request

1. **Go to Client's Repo**
2. **Click "Contribute" → "Open pull request"**
3. **Select:**
   - Base: `client-repo/main`
   - Compare: `your-repo/main`
4. **Create pull request**
5. **Merge the pull request**
6. Netlify auto-deploys!

### Method 3: Command Line (If you have access)

```bash
# If you have access to client's repo locally
cd client-repo-folder
git pull upstream main  # or your repo URL
git push origin main
```

## ✅ After Syncing

Once client's repo is synced and Netlify deploys:

1. **Go to Netlify Dashboard**
2. **Your Site → Forms**
3. **Click `contact-form` → Settings → Form notifications**
4. **Add email notification**
5. **Set To:** `karthik.ramesh@duramettechnologies.com`
6. **Save**
7. **Repeat for `product-enquiry` form**

## 🎉 That's It!

After syncing and configuring email, your forms will work!

