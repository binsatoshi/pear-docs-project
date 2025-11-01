# Quick Deploy to GitHub Pages

**Deploy your live demo in 5 minutes!**

---

## ⚡ Super Quick Steps

### 1. Push to GitHub
```bash
cd /Users/admin/Documents/GitHub/pear-docs-project
git init
git add .
git commit -m "Pear documentation redesign prototype"
git remote add origin https://github.com/YOUR-USERNAME/pear-docs-project.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to: `https://github.com/YOUR-USERNAME/pear-docs-project/settings/pages`
2. Under **Source**, select: **GitHub Actions**
3. Done!

### 3. Your Site is Live! 🎉
```
https://YOUR-USERNAME.github.io/pear-docs-project/
```

Wait 2-3 minutes after pushing for the deployment to complete.

---

## 🔧 Already Pushed? Just Do This

If your code is already on GitHub:

### Enable Pages:
`Settings` → `Pages` → Source: `GitHub Actions`

### Check Deployment:
`Actions` tab → Watch "Deploy VitePress site to Pages"

### Access Site:
`https://YOUR-USERNAME.github.io/pear-docs-project/`

---

## 📝 For Your Submission

**Include this in your cover email:**

```
Live Demo: https://YOUR-USERNAME.github.io/pear-docs-project/

The documentation prototype is fully interactive and deployed 
automatically via GitHub Actions. You can browse all 5 prototype 
pages, test the search functionality, and experience the 
responsive design on any device.
```

---

## ⚠️ Troubleshooting

**404 Error?**
Check `new-docs/.vitepress/config.mjs` line 10:
```javascript
base: '/pear-docs-project/',  // Must match your repo name
```

**Permissions Error?**
`Settings` → `Actions` → `General` → Enable "Read and write permissions"

**Need full guide?**
See `DEPLOY-TO-GITHUB-PAGES.md` for complete instructions

---

**That's it! Your live demo is ready to impress! 🚀**

