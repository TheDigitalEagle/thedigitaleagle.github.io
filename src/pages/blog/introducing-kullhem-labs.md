---
layout: ../../layouts/Post.astro
title: Introducing Kullhem Labs
description: kullhem.io is the front door for the lab now, not a bio page.
date: 2026-09-03
---

For a while this domain pointed at one paragraph about me. That never matched what was actually
going on under [github.com/Kullhem-io](https://github.com/Kullhem-io), so the site is about the lab now.

## What the lab is

An independent engineering lab for practical software, automation, infrastructure, hardware-adjacent
tools, and experimental interfaces. Most projects here have the same shape: a real problem, the
smallest system that actually solves it, and enough discipline that I can still understand it under
pressure six months later.

A few things on the bench right now:

- **Beaglewing.** A keyboard and mouse bridge where the target machine sees a real USB device. Nothing to install on it, no network path back to you, works at the login screen.
- **Crossplay.** A text RPG where several local LLMs each take a seat at the table and play together. Code owns the ledger, the DM owns the world.
- **Hybrid local agents.** Two local models, three GPUs, and benchmarks to find out where the parallelism is real and where llama-server is quietly queueing everything.

The full list is in the [catalog](/projects/).

## What this site is

A static Astro build on GitHub Pages. No backend, no tracking, no secrets. The catalog is a hand-edited
file in the repo, so it stays honest without hitting the GitHub API on every build. A React and Vite
rebuild is on the list for when the site needs to do more than describe things. Until then, this is enough.

## What goes in Notes

Write-ups from the projects. The weird edge cases that took a day to find. The occasional "here is what
actually worked" after a benchmark run. Documenting the edge cases is one of the rules, so this is where
they land.
