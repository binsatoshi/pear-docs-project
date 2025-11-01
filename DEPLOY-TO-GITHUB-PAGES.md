# Deploy to GitHub Pages - Complete Guide

This guide shows you how to deploy your Pear documentation prototype to GitHub Pages **for free** as a live demo site.

---

## 🌐 What You'll Get

Your documentation will be live at:
```
https://YOUR-USERNAME.github.io/pear-docs-project/
```

**Features:**
- ✅ Free hosting
- ✅ HTTPS enabled
- ✅ Automatic deployment on every push
- ✅ Fast CDN delivery
- ✅ No credit card required

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Push to GitHub

If you haven't already pushed your project to GitHub:

```bash
cd /Users/admin/Documents/GitHub/pear-docs-project

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Pear documentation redesign"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/pear-docs-project.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 3: Update Configuration

The configuration is already set up! Just update the repository name in `.vitepress/config.mjs`:

```javascript
// Line 10 in new-docs/.vitepress/config.mjs
base: '/pear-docs-project/',  // Change if your repo has a different name
```

If your repo is named something else (e.g., `pear-redesign`), change it to:
```javascript
base: '/pear-redesign/',
```

### Step 4: Trigger Deployment

```bash
# Make a small change and push
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### Step 5: Wait for Deployment

1. Go to **Actions** tab in your GitHub repo
2. You'll see "Deploy VitePress site to Pages" running
3. Wait 2-3 minutes for it to complete
4. Your site will be live! 🎉

---

## 🔗 Access Your Live Site

**Your documentation is now live at:**
```
https://YOUR-USERNAME.github.io/pear-docs-project/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Example:**
If your username is `johndoe`, the URL will be:
```
https://johndoe.github.io/pear-docs-project/
```

---

## 📋 What Happens Automatically

Every time you push to the `main` branch:

1. ✅ GitHub Actions runs
2. ✅ Installs dependencies (`npm ci`)
3. ✅ Builds your VitePress site (`npm run docs:build`)
4. ✅ Deploys to GitHub Pages
5. ✅ Your live site updates automatically

**Build time:** ~2-3 minutes

---

## 🛠️ Troubleshooting

### Site shows 404 or broken styles

**Problem:** Wrong `base` configuration

**Solution:** Check `new-docs/.vitepress/config.mjs` line 10:
```javascript
base: '/YOUR-REPO-NAME/',  // Must match your repo name exactly
```

### Workflow fails with "permission denied"

**Problem:** GitHub Pages permissions not set

**Solution:**
1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Click **Save**

### Changes not showing up

**Problem:** Cache or wrong branch

**Solutions:**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check deployment status in **Actions** tab
- Verify you pushed to `main` branch

### Build fails with "module not found"

**Problem:** Missing dependencies

**Solution:**
```bash
cd new-docs
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

---

## 🎨 Custom Domain (Optional)

Want a custom domain like `docs.yoursite.com`?

### Step 1: Add DNS Records

In your domain registrar, add a CNAME record:
```
docs.yoursite.com  →  YOUR-USERNAME.github.io
```

### Step 2: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `docs.yoursite.com`
3. Click **Save**
4. Wait for DNS verification (~10 minutes)

### Step 3: Update VitePress Config

```javascript
// new-docs/.vitepress/config.mjs
base: '/',  // Change from '/pear-docs-project/' to '/'
```

---

## 📊 Monitoring & Analytics

### View Traffic

GitHub provides basic analytics:
1. Go to **Insights** tab
2. Click **Traffic**
3. See views and visitor stats

### Add Google Analytics

Add to `new-docs/.vitepress/config.mjs`:

```javascript
head: [
  ['script', { 
    async: true, 
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' 
  }],
  ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `]
]
```

---

## 🔄 Manual Deployment (Alternative Method)

If you prefer manual control:

```bash
cd new-docs

# Build the site
npm run docs:build

# The built site is in .vitepress/dist/
# You can deploy this folder to any static host
```

---

## 💡 Pro Tips

### Faster Deployments

The workflow is already optimized with:
- ✅ npm cache (faster installs)
- ✅ Concurrent jobs disabled (prevents conflicts)
- ✅ Minimal dependencies

### Preview Branch Deployments

Want to preview changes before merging?

Create `.github/workflows/preview.yml`:
```yaml
name: Deploy Preview
on:
  pull_request:
    branches: [main]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: cd new-docs && npm ci && npm run docs:build
      - uses: actions/upload-artifact@v3
        with:
          name: preview
          path: new-docs/.vitepress/dist
```

### Local Preview of Production Build

Test the production build locally:
```bash
cd new-docs
npm run docs:build
npm run docs:preview
```

---

## 🎯 For Your Interview Submission

### What to Include

**In your submission, provide:**

1. **Live Demo URL:**
   ```
   https://YOUR-USERNAME.github.io/pear-docs-project/
   ```

2. **GitHub Repository:**
   ```
   https://github.com/YOUR-USERNAME/pear-docs-project
   ```

3. **Note in your cover email:**
   ```
   Live demo: https://YOUR-USERNAME.github.io/pear-docs-project/
   
   The documentation is fully interactive and deployed automatically
   via GitHub Actions. You can browse all 5 prototype pages, test
   the search functionality, and experience the responsive design.
   ```

### Impressive Features to Highlight

✅ **Automatic CI/CD** - Deployed via GitHub Actions  
✅ **Live and interactive** - Not just screenshots  
✅ **Production-ready** - Uses same setup you'd use in production  
✅ **Fast loading** - Optimized build with CDN  
✅ **Mobile responsive** - Test on any device  
✅ **Search works** - Try the search functionality  

---

## ✅ Pre-Flight Checklist

Before sharing your live site:

- [ ] Site loads without errors
- [ ] All 5 prototype pages are accessible
- [ ] Navigation works correctly
- [ ] Search functionality works
- [ ] Responsive design on mobile
- [ ] No broken images or links
- [ ] Dark mode toggle works
- [ ] Code examples display properly

**Test URL:**
```
https://YOUR-USERNAME.github.io/pear-docs-project/
```

---

## 🎉 You're Done!

Your documentation is now:
- ✅ Live on the internet
- ✅ Automatically deployed
- ✅ Free forever
- ✅ Professional quality

**Share your live demo with the company and impress them with a fully-functional prototype!**

---

## 📞 Need Help?

**Common Resources:**
- GitHub Pages Docs: https://docs.github.com/en/pages
- VitePress Deployment: https://vitepress.dev/guide/deploy
- GitHub Actions: https://docs.github.com/en/actions

**Issues?**
Check the **Actions** tab in your GitHub repo for deployment logs.

---

**Last Updated:** November 1, 2025  
**Deployment Time:** ~3 minutes  
**Cost:** $0/month 🎉

