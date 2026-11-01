---
title: Building a portfolio you can update from Markdown
description: Why I moved my portfolio's projects, experience and writing out of the code and into plain Markdown files.
date: 2026-10-28
author: Pawandeep Singh Sekhon
draft: false
coverImage: ""
---

For a long time, updating my portfolio meant opening a React component, finding the right array and hoping I didn't break the layout. So I stopped keeping content in code.

## The setup

Everything on the site now comes from files in a `content/` folder:

- **Projects** are Markdown files with a few fields at the top.
- **Work experience** lives in one JSON file.
- **Blog posts**, like this one, are Markdown files.

A small admin page edits those files and commits them to GitHub. Each commit triggers a rebuild, and GitHub Pages serves the result for free.

## What I'd do differently

Start with plain files on day one. A CMS is easy to add later; untangling content from components is not.
