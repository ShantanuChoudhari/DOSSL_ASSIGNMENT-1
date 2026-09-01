# DOSSL_ASSIGNMENT-1


# Git Commands Cheat Sheet

This document contains the basic Git commands used in this project along with their purpose.

---

## 1. Check Git Installation

```bash
git --version
```

**Purpose:** Displays the installed Git version.

---

## 2. Initialize a Git Repository

```bash
git init
```

**Purpose:** Initializes a new Git repository in the current folder.

---

## 3. Check Repository Status

```bash
git status
```

**Purpose:** Shows the current state of the repository, including:
- Untracked files
- Modified files
- Staged files

---

## 4. Add a Specific File

```bash
git add filename
```

Example:

```bash
git add index.html
```

**Purpose:** Stages a specific file for commit.

---

## 5. Add All Files

```bash
git add .
```

**Purpose:** Stages all new and modified files in the current directory.

---

## 6. Commit Changes

```bash
git commit -m "Commit Message"
```

Example:

```bash
git commit -m "Initial Commit"
```

**Purpose:** Saves the staged changes to the Git repository with a descriptive message.

---

## 7. View Commit History

```bash
git log
```

**Purpose:** Displays the complete commit history.

---

## 8. View Short Commit History

```bash
git log --oneline
```

**Purpose:** Displays a concise, one-line summary of each commit.

---

## 9. Create a New Branch

```bash
git branch branch-name
```

Example:

```bash
git branch feature-login
```

**Purpose:** Creates a new branch without switching to it.

---

## 10. List All Branches

```bash
git branch
```

**Purpose:** Displays all local branches. The current branch is marked with `*`.

---

## 11. Switch to an Existing Branch

```bash
git checkout branch-name
```

Example:

```bash
git checkout main
```

**Purpose:** Switches to another branch.

---

## 12. Create and Switch to a Branch

```bash
git checkout -b branch-name
```

Example:

```bash
git checkout -b feature-login
```

**Purpose:** Creates a new branch and immediately switches to it.

---

## 13. Merge a Branch

```bash
git merge branch-name
```

Example:

```bash
git merge feature-login
```

**Purpose:** Merges another branch into the current branch.

---

## 14. Rename Current Branch

```bash
git branch -M main
```

**Purpose:** Renames the current branch to `main`.

---

## 15. Add a Remote Repository

```bash
git remote add origin <repository-url>
```

Example:

```bash
git remote add origin https://github.com/username/git-assignment.git
```

**Purpose:** Connects the local repository to a GitHub repository.

---

## 16. View Remote Repository

```bash
git remote -v
```

**Purpose:** Displays the configured remote repositories.

---

## 17. Push Changes to GitHub

```bash
git push origin main
```

**Purpose:** Uploads commits from the local repository to GitHub.

---

## 18. Push for the First Time

```bash
git push -u origin main
```

**Purpose:** Pushes the current branch and sets the upstream branch for future pushes.

---

## 19. Clone a Repository

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/username/git-assignment.git
```

**Purpose:** Downloads an existing GitHub repository to the local machine.

---

## 20. Pull Latest Changes

```bash
git pull origin main
```

**Purpose:** Downloads and merges the latest changes from GitHub.

---

## 21. Fetch Changes

```bash
git fetch
```

**Purpose:** Downloads updates from the remote repository without merging them.

---

## 22. Check Differences

```bash
git diff
```

**Purpose:** Shows the differences between the working directory and the last commit.

---

## 23. Remove a File from Staging

```bash
git restore --staged filename
```

Example:

```bash
git restore --staged index.html
```

**Purpose:** Removes a file from the staging area without deleting it.

---

## 24. Restore a Modified File

```bash
git restore filename
```

Example:

```bash
git restore index.html
```

**Purpose:** Discards local changes made to a file.

---

## 25. Delete a Branch

```bash
git branch -d branch-name
```

Example:

```bash
git branch -d feature-login
```

**Purpose:** Deletes a branch after it has been merged.

---

# Typical Git Workflow

```text
Create Project
      │
      ▼
git init
      │
      ▼
git status
      │
      ▼
git add .
      │
      ▼
git commit -m "Initial Commit"
      │
      ▼
git remote add origin <repository-url>
      │
      ▼
git push -u origin main
```

---

# Branching Workflow

```text
main
 │
 ├── git checkout -b feature-login
 │
 ├── Make changes
 │
 ├── git add .
 │
 ├── git commit -m "Added login page"
 │
 ├── git push origin feature-login
 │
 └── git checkout main
        │
        ▼
git merge feature-login
        │
        ▼
git push origin main
```

---


| Command | Description |
|----------|-------------|
| `git --version` | Check installed Git version |
| `git init` | Initialize a Git repository |
| `git status` | Check repository status |
| `git add .` | Stage all files |
| `git add <file>` | Stage a specific file |
| `git commit -m "message"` | Save changes |
| `git log` | View commit history |
| `git log --oneline` | View short commit history |
| `git branch` | List branches |
| `git branch <name>` | Create a branch |
| `git checkout <branch>` | Switch branch |
| `git checkout -b <branch>` | Create and switch branch |
| `git merge <branch>` | Merge a branch |
| `git branch -M main` | Rename current branch to main |
| `git remote add origin <url>` | Connect local repo to GitHub |
| `git remote -v` | View remote repository |
| `git push -u origin main` | First push to GitHub |
| `git push` | Upload commits |
| `git clone <url>` | Clone a repository |
| `git pull origin main` | Download latest changes |
| `git fetch` | Fetch updates without merging |
| `git diff` | Show file differences |
| `git restore <file>` | Discard local changes |
| `git restore --staged <file>` | Remove file from staging |
| `git branch -d <branch>` | Delete a branch |
