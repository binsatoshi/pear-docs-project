# 🚀 Publish to GitHub Pages - Quick Commands

## Run These Commands in Your Terminal

```bash
# Navigate to your project
cd /Users/admin/Documents/GitHub/pear-docs-project

# Stage all changes
git add .

# Commit the changes
git commit -m "Fix GitHub Actions workflow to deploy from docs directory"

# Push to GitHub (this will trigger automatic deployment)
git push origin main
```

## After Pushing

### 1. Monitor Deployment (2-3 minutes)
Visit: https://github.com/binsatoshi/pear-docs-project/actions

You'll see "Deploy VitePress site to Pages" running. Wait for the green checkmark ✅.

### 2. Enable GitHub Pages (First Time Only)

If this is your first deployment, you need to enable GitHub Pages:

1. Go to: https://github.com/binsatoshi/pear-docs-project/settings/pages

2. Under **"Build and deployment"** > **"Source"**:
   - Select: **"GitHub Actions"**
   
3. Under **Workflow permissions** (Settings → Actions → General):
   - Select: **"Read and write permissions"**
   - Check: **"Allow GitHub Actions to create and approve pull requests"**
   - Click **Save**

### 3. View Your Live Site
Once deployed, visit: **https://binsatoshi.github.io/pear-docs-project/**

---

## Troubleshooting

### If `git push` asks for authentication:

**Option 1 - GitHub CLI (Recommended):**
```bash
gh auth login
# Follow the prompts, then:
git push origin main
```

**Option 2 - Personal Access Token:**
1. Create a token at: https://github.com/settings/tokens
2. Select scopes: `repo` (full control of private repositories)
3. Use the token as your password when pushing

### If you see "Permission denied":

Check repository settings:
```
Settings → Actions → General → Workflow permissions
→ Select "Read and write permissions"
→ Save
```

### If the site shows 404:

The `base` path in `docs/.vitepress/config.mjs` must match your repo name:
```javascript
base: '/pear-docs-project/',  // ✅ Correct for binsatoshi/pear-docs-project
```

### If workflow fails with "Module not found":

```bash
cd docs
npm install
cd ..
git add docs/package-lock.json
git commit -m "Add package-lock.json"
git push origin main
```

---

## What I've Set Up For You

✅ Updated `.github/workflows/deploy.yml` - Deploys from `docs` directory (GitHub Pages standard)
✅ Verified `docs/.vitepress/config.mjs` - VitePress configuration with correct base path  
✅ Confirmed `ignoreDeadLinks: true` - Allows placeholder pages  
✅ Set base URL to `/pear-docs-project/` - Matches your repository name  

## Expected Timeline

| Step | Time |
|------|------|
| Run git commands | < 1 minute |
| GitHub Actions build | 2-3 minutes |
| Site goes live | Immediately after build |
| **Total** | **~3-4 minutes** |

---

## Quick Test

To test the build locally before pushing:

```bash
cd docs
npm install
npm run docs:build
npm run docs:preview
# Visit: http://localhost:4173/pear-docs-project/
```

Press `Ctrl+C` to stop the preview server.

**Note:** The `docs` directory is the standard location GitHub Pages looks for when using branch deployment, which is why we're using it instead of `new-docs`.

---

## All Set! 🎉

Just run the three git commands at the top of this file and you're done!

Your documentation will be live at:
**https://binsatoshi.github.io/pear-docs-project/**

