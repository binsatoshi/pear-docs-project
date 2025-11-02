# GitHub Pages Deployment Steps

## Current Status

Your repository has:
- ✅ GitHub Actions workflow configured (`.github/workflows/deploy.yml`)
- ✅ VitePress documentation set up
- ⚠️ Uncommitted changes to `new-docs/package.json`
- ❓ GitHub Pages may not be enabled yet

## Steps to Deploy

### Step 1: Commit and Push Changes

Open your terminal and run these commands:

```bash
cd /Users/admin/Documents/GitHub/pear-docs-project

# Stage all changes
git add .

# Commit changes
git commit -m "Update configuration for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

If you get authentication errors, you may need to:
- Run `gh auth login` (if you have GitHub CLI installed)
- Or set up a Personal Access Token (PAT) for HTTPS authentication

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/binsatoshi/pear-docs-project

2. Click on **Settings** tab

3. In the left sidebar, click **Pages**

4. Under **Build and deployment**, ensure:
   - **Source** is set to **"GitHub Actions"** (not "Deploy from a branch")
   
5. If it says "GitHub Pages is currently disabled", you need to enable it by selecting "GitHub Actions" from the Source dropdown

### Step 3: Verify Workflow Permissions

While you're in Settings:

1. Go to **Settings** → **Actions** → **General**

2. Scroll down to **Workflow permissions**

3. Ensure **"Read and write permissions"** is selected

4. Check **"Allow GitHub Actions to create and approve pull requests"**

5. Click **Save**

### Step 4: Trigger Deployment

After pushing your changes, the GitHub Actions workflow should automatically run.

To monitor it:

1. Go to the **Actions** tab: https://github.com/binsatoshi/pear-docs-project/actions

2. You should see a workflow run called "Deploy VitePress site to Pages"

3. Click on it to see the progress

4. Wait for it to complete (typically 2-3 minutes)

### Step 5: Access Your Live Site

Once the workflow completes successfully, your site will be live at:

```
https://binsatoshi.github.io/pear-docs-project/
```

## Troubleshooting

### If the workflow fails:

1. **Check the error message** in the Actions tab
   - Click on the failed workflow run
   - Expand the failed step to see the error
   
2. **Common issues:**
   - **Permission denied**: Check workflow permissions (Step 3 above)
   - **Build errors**: The `docs/.vitepress/config.mjs` file already has `ignoreDeadLinks: true` configured
   - **Module not found**: Run `cd docs && npm install` locally, commit `package-lock.json`, and push

### If you get a 404 error on the live site:

The `base` configuration in `docs/.vitepress/config.mjs` must match your repository name:

```javascript
base: '/pear-docs-project/',  // Must match repo name exactly
```

**Note:** We use the `docs` directory (not `new-docs`) because it's the standard location GitHub Pages recognizes for branch deployment, and it makes the setup more conventional.

### If GitHub Pages doesn't show up in Settings:

Your repository might be private. GitHub Pages is free for public repositories. If your repo is private, you'll need:
- GitHub Pro, Team, or Enterprise account to use GitHub Pages
- Or make the repository public

## Manual Build Test (Optional)

To verify the site builds correctly before pushing:

```bash
cd docs
npm install
npm run docs:build
```

If this succeeds, you should see a `docs/.vitepress/dist/` directory with your built site.

You can preview it locally with:
```bash
npm run docs:preview
```

Then visit: http://localhost:4173/pear-docs-project/

## Quick Command Summary

```bash
# Full deployment sequence
cd /Users/admin/Documents/GitHub/pear-docs-project
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Then visit:
# https://github.com/binsatoshi/pear-docs-project/actions (to monitor)
# https://binsatoshi.github.io/pear-docs-project/ (your live site)
```

## Expected Timeline

- **Commit & Push**: < 1 minute
- **GitHub Actions Build**: 2-3 minutes  
- **GitHub Pages Deployment**: < 1 minute
- **Total**: ~3-5 minutes from push to live

## Support

If you encounter issues not covered here, check:
- GitHub Actions logs for specific error messages
- GitHub Pages status: https://www.githubstatus.com/
- VitePress deployment guide: https://vitepress.dev/guide/deploy#github-pages

