---
name: groupgolftours-deploy
description: >
  Deploy code changes to groupgolftours.com via GitHub API → Vercel auto-deploy.
  Use whenever making ANY code change, commit, deployment, push, or file modification
  to the groupgolftours repository. Also use when fixing build errors, checking
  deployment status, or verifying changes are live.
  Trigger on: commit, deploy, push, build, Vercel, 'make this change', 'fix this',
  'update the code', groupgolftours repo, or any modification to the groupgolftours codebase.
---

# GroupGolfTours Deployment Skill

## Project Identity
- **Repo:** `digitalalchemistalex/groupgolftours`
- **GitHub Token:** `GITHUB_TOKEN_IN_PROJECT_FILES_ONLY`
- **Domain:** `groupgolftours.com` (TBD — confirm with client)
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Stack:** Next.js 14, TypeScript strict mode, Tailwind CSS
- **Vercel Token:** `VERCEL_TOKEN_IN_PROJECT_FILES_ONLY`

---

## CRITICAL RULES

### 1. ONE COMMIT, ONE DEPLOY
Never batch unrelated changes. Each commit = one logical unit. Wait for build success before next commit.

### 2. ALWAYS READ BEFORE WRITING
```python
import json, base64, urllib.request

TOKEN = "GITHUB_TOKEN_IN_PROJECT_FILES_ONLY"
REPO  = "digitalalchemistalex/groupgolftours"
BASE  = f"https://api.github.com/repos/{REPO}/contents"

def gh_get(path):
    req = urllib.request.Request(
        f"{BASE}/{path}",
        headers={"Authorization": f"token {TOKEN}"}
    )
    with urllib.request.urlopen(req) as r:
        data = json.load(r)
    return base64.b64decode(data['content']).decode(), data['sha']
```
**Never assume file contents. Always fetch first.**

### 3. SHA MANAGEMENT
Every file update REQUIRES current SHA. Get SHA from GET response, use immediately in PUT. Get fresh SHA for each file when updating multiple files sequentially.

### 4. NEVER CHANGE PAGES WITHOUT APPROVAL
Present findings first. Wait for explicit "yes" or "do it" before touching any live page.

### 5. BUILD BEFORE PUSHING
```bash
npm run build 2>&1 | tail -20
```
Fix ALL TypeScript and build errors before any commit. A failed build blocks all subsequent deploys.

### 6. NEVER TOUCH WORKING SEO
- Never change URL slugs after launch
- Never bulk-edit meta titles/descriptions without MASTER approval
- Never change canonicals without MASTER approval

---

## Deployment Workflow

### Step 1: Read the file
```python
content, sha = gh_get("app/page.tsx")
print(f"SHA: {sha}")
print(content[:2000])
```

### Step 2: Make minimal change
Change ONLY what was requested. Do not refactor adjacent code.

### Step 3: Commit via GitHub API
```python
def gh_put(path, content, sha, message):
    encoded = base64.b64encode(content.encode()).decode()
    body = json.dumps({
        "message": message,
        "content": encoded,
        "sha": sha
    }).encode()
    req = urllib.request.Request(
        f"{BASE}/{path}", data=body, method="PUT",
        headers={
            "Authorization": f"token {TOKEN}",
            "Content-Type": "application/json"
        }
    )
    with urllib.request.urlopen(req) as r:
        data = json.load(r)
    return data['commit']['sha']

commit_sha = gh_put("app/page.tsx", new_content, sha, "fix: update homepage hero copy")
print(f"Committed: {commit_sha}")
```

### Step 4: Create new file (no SHA needed)
```python
def gh_create(path, content, message):
    encoded = base64.b64encode(content.encode()).decode()
    body = json.dumps({
        "message": message,
        "content": encoded
    }).encode()
    req = urllib.request.Request(
        f"{BASE}/{path}", data=body, method="PUT",
        headers={
            "Authorization": f"token {TOKEN}",
            "Content-Type": "application/json"
        }
    )
    with urllib.request.urlopen(req) as r:
        data = json.load(r)
    return data['commit']['sha']
```
⚠️ Will 422 if file already exists. Check first with gh_get.

### Step 5: Wait for build (90–120 seconds typical)
```bash
sleep 100
curl -s -H "Authorization: token GITHUB_TOKEN_IN_PROJECT_FILES_ONLY" \
  "https://api.github.com/repos/digitalalchemistalex/groupgolftours/commits/$COMMIT_SHA/status" | python3 -c "
import json, sys
data = json.load(sys.stdin)
print(f'Build: {data.get(\"state\",\"unknown\")}')
for s in data.get('statuses', []):
    print(f'  {s[\"context\"]}: {s[\"state\"]}')
"
```

### Step 6: Verify on live site
```bash
curl -s "https://groupgolftours.com/?t=$(date +%s)" | grep "expected content"
```

---

## Check Repo Exists / Initialize
```bash
# Check if repo exists
curl -s -H "Authorization: token GITHUB_TOKEN_IN_PROJECT_FILES_ONLY" \
  "https://api.github.com/repos/digitalalchemistalex/groupgolftours" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print(d.get('name', 'NOT FOUND'), d.get('default_branch', ''))
"
```

## List Files in Directory
```python
def gh_list(path=""):
    req = urllib.request.Request(
        f"{BASE}/{path}",
        headers={"Authorization": f"token {TOKEN}"}
    )
    with urllib.request.urlopen(req) as r:
        data = json.load(r)
    for item in data:
        print(f"{item['type']:6} {item['path']}")
```

---

## Common Build Failures

### TypeScript Strict Mode
```typescript
// BAD
const data = result.data
data.forEach(...)  // Error: possibly undefined

// GOOD
const data = result.data
if (data && data.length > 0) {
  data.forEach(...)
}
```

### Client vs Server Components
```typescript
// BAD — export metadata from client component
'use client'
export const metadata = { title: '...' }  // ERROR

// GOOD — metadata in layout.tsx or server page.tsx
// Client component in separate file, imported into server page
```

### Missing 'use client' directive
```typescript
// 'use client' MUST be first line, before ANY imports
'use client'

import { useState } from 'react'
```

### URL Encoding for Next.js App Router
- `app/(marketing)/page.tsx` — use as-is in GitHub API
- Square brackets: `[` → `%5B`, `]` → `%5D` when using curl directly

---

## Commit Message Format
```
feat: add Pebble Beach destination page
fix: correct hero copy on homepage
chore: add Somersett course images
seo: add LocalBusiness schema to destination pages
```

---

## Build Error Recovery
1. **STOP** — do NOT push more commits on top of a broken build
2. Check build logs via GitHub commit status
3. Fix the specific error only
4. Push fix commit
5. Verify build succeeds
6. Only then continue other work

---

## Vercel API (if needed)
```bash
# List deployments
curl -H "Authorization: Bearer VERCEL_TOKEN_IN_PROJECT_FILES_ONLY" \
  "https://api.vercel.com/v6/deployments?limit=5" | python3 -m json.tool

# Get deployment status
curl -H "Authorization: Bearer VERCEL_TOKEN_IN_PROJECT_FILES_ONLY" \
  "https://api.vercel.com/v13/deployments/$DEPLOYMENT_ID" | python3 -c "
import json, sys
d = json.load(sys.stdin)
print(d.get('readyState'), d.get('url'))
"
```


## Apostrophe / Quote Handling in TSX — CRITICAL RULES

**Never use Python string replacement to fix apostrophes in TSX files.**

### Rule: Know where the apostrophe lives

| Location | Correct Fix | Wrong Fix |
|----------|-------------|-----------|
| JS string literal: `'it\'s fine'` | Use `\'` escape OR switch to double quotes: `"it's fine"` | `\\'` (double escape) — breaks string |
| JSX text node: `<p>it's fine</p>` | Use `&apos;`: `<p>it&apos;s fine</p>` | `\'` — ESLint error |
| JSX attribute string: `title="it's"` | Already safe in double quotes | n/a |

### Rule: Template literal backticks
Python regex that replaces `'` patterns can accidentally escape backticks.
Always verify the fix with `repr(line)` before pushing.
Check: `\`` in file = BROKEN. Should be plain `` ` ``

### Rule: Verify before pushing
```python
# After fix, print repr of changed lines to verify
for i, (a, b) in enumerate(zip(original.split('\n'), fixed.split('\n')), 1):
    if a != b:
        print(f"Line {i}:")
        print(f"  BEFORE: {repr(a)}")
        print(f"  AFTER:  {repr(b)}")
```
