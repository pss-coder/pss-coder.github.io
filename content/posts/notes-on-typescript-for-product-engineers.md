---
title: Notes on TypeScript for product engineers
description: The handful of TypeScript habits that have saved me the most time on product teams.
date: 2026-08-02
author: Pawandeep Singh Sekhon
draft: false
coverImage: ""
---

I'm not a type-system enthusiast, but a few TypeScript habits have paid for themselves many times over.

## Model your data first

Before writing UI, I write the types for the data it shows:

```ts
interface Project {
  title: string
  summary: string
  techStack: string[]
  liveUrl?: string
}
```

Once those are right, the components mostly write themselves.

## Prefer unions over booleans

A `status: 'idle' | 'loading' | 'error'` field is clearer than three booleans that can contradict each other.

## Let the compiler do code review

Turn on `strict` mode. It's annoying for a week and then it quietly catches bugs forever.
