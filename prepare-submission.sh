#!/bin/bash

# Pear Documentation Redesign - Submission Preparation Script
# This script prepares your work for submission by:
# 1. Moving reference materials to a separate folder
# 2. Cleaning up temporary files
# 3. Creating proper .gitignore
# 4. Showing what will be submitted

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   Pear Docs - Submission Prep${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 1: Create reference materials folder
echo -e "${YELLOW}Step 1: Creating reference materials folder...${NC}"
REFERENCE_DIR="$SCRIPT_DIR/reference-materials-DO-NOT-SUBMIT"
mkdir -p "$REFERENCE_DIR"
echo -e "${GREEN}✓ Created: $REFERENCE_DIR${NC}"
echo ""

# Step 2: Move reference materials
echo -e "${YELLOW}Step 2: Moving reference materials...${NC}"

# Root level reference files
if [ -f "DELIVERABLES-SUMMARY.md" ]; then
    mv DELIVERABLES-SUMMARY.md "$REFERENCE_DIR/"
    echo -e "${GREEN}✓ Moved: DELIVERABLES-SUMMARY.md${NC}"
fi

# new-docs reference files
if [ -f "new-docs/README.md" ]; then
    mv new-docs/README.md "$REFERENCE_DIR/"
    echo -e "${GREEN}✓ Moved: new-docs/README.md${NC}"
fi

if [ -f "new-docs/VIDEO-SCRIPT.md" ]; then
    mv new-docs/VIDEO-SCRIPT.md "$REFERENCE_DIR/"
    echo -e "${GREEN}✓ Moved: new-docs/VIDEO-SCRIPT.md${NC}"
fi

if [ -f "new-docs/INDEX.md" ]; then
    mv new-docs/INDEX.md "$REFERENCE_DIR/"
    echo -e "${GREEN}✓ Moved: new-docs/INDEX.md${NC}"
fi

echo ""

# Step 3: Delete temporary/backup files
echo -e "${YELLOW}Step 3: Deleting temporary files...${NC}"

if [ -f "new-docs/index-old.md" ]; then
    rm new-docs/index-old.md
    echo -e "${GREEN}✓ Deleted: new-docs/index-old.md${NC}"
fi

if [ -f "new-docs/home.md" ]; then
    rm new-docs/home.md
    echo -e "${GREEN}✓ Deleted: new-docs/home.md${NC}"
fi

echo ""

# Step 4: Create .gitignore
echo -e "${YELLOW}Step 4: Creating .gitignore files...${NC}"

# Root .gitignore
cat > .gitignore << 'EOF'
# Reference materials (personal use only)
reference-materials-DO-NOT-SUBMIT/

# OS files
.DS_Store
Thumbs.db
*.swp
*.swo

# Editor directories
.vscode/
.idea/
*.sublime-*
EOF
echo -e "${GREEN}✓ Created: .gitignore${NC}"

# new-docs .gitignore
cat > new-docs/.gitignore << 'EOF'
# Dependencies
node_modules/
package-lock.json

# Build output
.vitepress/dist/
.vitepress/cache/

# Logs
*.log
npm-debug.log*

# OS files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
EOF
echo -e "${GREEN}✓ Created: new-docs/.gitignore${NC}"

echo ""

# Step 5: Create README for reference folder
echo -e "${YELLOW}Step 5: Creating README for reference folder...${NC}"
cat > "$REFERENCE_DIR/README.md" << 'EOF'
# Personal Reference Materials

**⚠️ DO NOT SUBMIT THIS FOLDER TO THE COMPANY**

This folder contains materials for your personal reference during the interview process:

## Contents

- **DELIVERABLES-SUMMARY.md** - Executive summary of all work completed
- **README.md** - Project navigation guide
- **VIDEO-SCRIPT.md** - Script for your 5-minute video presentation
- **INDEX.md** - Meta-navigation document

## Purpose

These files help you:
- Prepare your video presentation
- Navigate the project structure
- Understand what was delivered
- Remember key talking points

## What to Submit

Only submit the contents of the main `pear-docs-project` folder:
- `ANALYSIS.md`
- `new-docs/` (entire folder except what's in .gitignore)

## Video Presentation

Use `VIDEO-SCRIPT.md` to prepare your 5-minute video:
- Present findings
- Demo the prototype
- Explain your approach
- Discuss implementation plan

Good luck with your interview! 🚀
EOF
echo -e "${GREEN}✓ Created: reference-materials-DO-NOT-SUBMIT/README.md${NC}"

echo ""

# Step 6: Create submission checklist
echo -e "${YELLOW}Step 6: Creating submission checklist...${NC}"
cat > "$REFERENCE_DIR/SUBMISSION-CHECKLIST.md" << 'EOF'
# Submission Checklist

Before submitting your work, verify:

## ✅ Files to Include

### Root Level
- [ ] `ANALYSIS.md` - Your analysis document

### new-docs/
- [ ] `index.md` - Homepage (Alchemy-style)
- [ ] `STRUCTURE.md` - Complete reorganization plan
- [ ] `FRAMEWORK.md` - Framework justification
- [ ] `.vitepress/config.mjs` - VitePress configuration
- [ ] `package.json` - Dependencies
- [ ] `.gitignore` - Proper ignores configured

### Prototype Pages (5 key pages)
- [ ] `build/quickstart/index.md`
- [ ] `build/tutorials/first-app.md`
- [ ] `learn/concepts/index.md`
- [ ] `reference/api/index.md`
- [ ] `learn/data-structures/index.md`

### Additional Pages (placeholders)
- [ ] `resources/examples/index.md`
- [ ] `resources/troubleshooting/index.md`

## ❌ Files to Exclude

- [ ] `reference-materials-DO-NOT-SUBMIT/` folder (entire folder)
- [ ] `node_modules/` (should be in .gitignore)
- [ ] Any `.DS_Store` or editor files

## 📋 Pre-Submission Steps

1. [ ] Run this script: `./prepare-submission.sh`
2. [ ] Review the file list below
3. [ ] Test VitePress locally: `cd new-docs && npm run docs:dev`
4. [ ] Record your 5-minute video (use VIDEO-SCRIPT.md)
5. [ ] Compress the repo: `tar -czf pear-docs-submission.tar.gz --exclude='reference-materials-DO-NOT-SUBMIT' --exclude='node_modules' pear-docs-project/`
6. [ ] Submit!

## 🎬 Video Presentation

Your video should cover:
1. Analysis of current documentation (2 min)
2. Proposed solution and structure (1.5 min)
3. Live demo of prototypes (1 min)
4. Implementation plan (0.5 min)

Total: ~5 minutes

Use `reference-materials-DO-NOT-SUBMIT/VIDEO-SCRIPT.md` as your guide.

## 📊 Final Deliverables

What the company receives:
1. Analysis document (1 page)
2. 5 fully-implemented prototype pages
3. Complete structure with placeholders
4. Framework justification with setup guide
5. Working VitePress configuration
6. Video presentation link

Good luck! 🎉
EOF
echo -e "${GREEN}✓ Created: reference-materials-DO-NOT-SUBMIT/SUBMISSION-CHECKLIST.md${NC}"

echo ""
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}✓ Preparation Complete!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Step 7: Show summary
echo -e "${YELLOW}Summary of Changes:${NC}"
echo ""
echo -e "${GREEN}✓ Moved to reference folder:${NC}"
echo "  - DELIVERABLES-SUMMARY.md"
echo "  - new-docs/README.md"
echo "  - new-docs/VIDEO-SCRIPT.md"
echo "  - new-docs/INDEX.md"
echo ""
echo -e "${GREEN}✓ Deleted temporary files:${NC}"
echo "  - new-docs/index-old.md"
echo "  - new-docs/home.md"
echo ""
echo -e "${GREEN}✓ Created:${NC}"
echo "  - .gitignore (root)"
echo "  - new-docs/.gitignore"
echo "  - reference-materials-DO-NOT-SUBMIT/README.md"
echo "  - reference-materials-DO-NOT-SUBMIT/SUBMISSION-CHECKLIST.md"
echo ""

# Step 8: Show what will be submitted
echo -e "${BLUE}========================================${NC}"
echo -e "${YELLOW}Files Ready for Submission:${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

echo -e "${GREEN}Root Level:${NC}"
echo "  ✓ ANALYSIS.md"
echo "  ✓ .gitignore"
echo ""

echo -e "${GREEN}new-docs/:${NC}"
echo "  ✓ index.md (Homepage)"
echo "  ✓ STRUCTURE.md"
echo "  ✓ FRAMEWORK.md"
echo "  ✓ package.json"
echo "  ✓ .gitignore"
echo ""

echo -e "${GREEN}new-docs/.vitepress/:${NC}"
echo "  ✓ config.mjs"
echo ""

echo -e "${GREEN}new-docs/build/:${NC}"
echo "  ✓ quickstart/index.md"
echo "  ✓ tutorials/first-app.md"
echo ""

echo -e "${GREEN}new-docs/learn/:${NC}"
echo "  ✓ concepts/index.md"
echo "  ✓ data-structures/index.md"
echo ""

echo -e "${GREEN}new-docs/reference/:${NC}"
echo "  ✓ api/index.md"
echo ""

echo -e "${GREEN}new-docs/resources/:${NC}"
echo "  ✓ examples/index.md"
echo "  ✓ troubleshooting/index.md"
echo ""

echo -e "${BLUE}========================================${NC}"
echo -e "${YELLOW}Next Steps:${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "1. Review reference materials:"
echo "   ${BLUE}cd reference-materials-DO-NOT-SUBMIT${NC}"
echo "   ${BLUE}cat SUBMISSION-CHECKLIST.md${NC}"
echo ""
echo "2. Test the documentation locally:"
echo "   ${BLUE}cd new-docs && npm run docs:dev${NC}"
echo ""
echo "3. Record your video presentation:"
echo "   ${BLUE}Use reference-materials-DO-NOT-SUBMIT/VIDEO-SCRIPT.md${NC}"
echo ""
echo "4. Create submission archive:"
echo "   ${BLUE}cd ..${NC}"
echo "   ${BLUE}tar -czf pear-docs-submission.tar.gz \\${NC}"
echo "   ${BLUE}    --exclude='reference-materials-DO-NOT-SUBMIT' \\${NC}"
echo "   ${BLUE}    --exclude='node_modules' \\${NC}"
echo "   ${BLUE}    --exclude='.git' \\${NC}"
echo "   ${BLUE}    pear-docs-project/${NC}"
echo ""
echo -e "${GREEN}✓ Ready to submit!${NC}"
echo ""
echo -e "${RED}⚠️  IMPORTANT: Do NOT submit the 'reference-materials-DO-NOT-SUBMIT' folder${NC}"
echo ""

