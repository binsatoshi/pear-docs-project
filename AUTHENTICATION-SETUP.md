# GitHub Authentication Setup

## Problem

GitHub no longer accepts password authentication. You need to use a Personal Access Token (PAT) instead.

## Solution: Create a Personal Access Token

### Step 1: Create a Token

1. Go to: https://github.com/settings/tokens

2. Click **"Generate new token"** → **"Generate new token (classic)"**

3. Give it a name: `Pear Docs Deployment`

4. Set expiration: Your choice (90 days, 1 year, or no expiration)

5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   
6. Scroll down and click **"Generate token"**

7. **IMPORTANT**: Copy the token immediately! You won't see it again.
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use the Token

When Git asks for your password, paste the token instead:

```bash
Username for 'https://github.com': binsatoshi
Password for 'https://binsatoshi@github.com': [PASTE YOUR TOKEN HERE]
```

**Note:** The token replaces your password, not your username.

### Step 3: Save Credentials (Optional)

To avoid entering the token every time:

```bash
# macOS - save to Keychain
git config --global credential.helper osxkeychain

# Now push again, and macOS will remember the token
git push origin main
```

## Alternative: GitHub CLI (Recommended)

If you don't have it, install GitHub CLI:

```bash
# Install via Homebrew
brew install gh

# Authenticate
gh auth login

# Follow the prompts, then:
git push origin main
```

The CLI will handle authentication automatically for all future pushes.

## Alternative: SSH (More Secure)

If you prefer SSH keys:

### 1. Generate SSH Key (if you don't have one)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Enter a passphrase (or leave empty)
```

### 2. Add SSH Key to GitHub

```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
```

1. Go to: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Paste the key
4. Click **"Add SSH key"**

### 3. Change Remote to SSH

```bash
git remote set-url origin git@github.com:binsatoshi/pear-docs-project.git
git push origin main
```

## Quick Fix (If You Have gh CLI)

```bash
gh auth login
git push origin main
```

## Full Deployment After Setup

Once authenticated:

```bash
cd /Users/admin/Documents/GitHub/pear-docs-project
git add .
git commit -m "Fix: Deploy from docs directory for GitHub Pages"
git push origin main
```

Then visit:
- **Actions**: https://github.com/binsatoshi/pear-docs-project/actions
- **Live Site**: https://binsatoshi.github.io/pear-docs-project/ (after ~3 min)

## Need Help?

- **Token Guide**: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- **SSH Guide**: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- **GitHub CLI**: https://cli.github.com/

