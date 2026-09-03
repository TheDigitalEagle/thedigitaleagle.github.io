---
layout: ../../layouts/Post.astro
title: Introducing Kullhem Labs
description: kullhem.io is now the front door for the lab, not a bio page.
date: 2026-09-03
---

For a while this domain pointed at a one-paragraph personal page. That never matched what was actually
happening under [github.com/Kullhem-io](https://github.com/Kullhem-io), so the site now reflects the lab instead.

## What the lab is

Kullhem Labs is an independent engineering lab for practical software, automation, infrastructure,
hardware-adjacent tools, and experimental interfaces. The shape of a project here is usually the same:
a real problem, the smallest working system that solves it, and enough discipline that it can be
understood under pressure later.

Some current threads:

- **Beaglewing**, a keyboard and mouse bridge where the target machine sees a real USB device, so there is nothing to install on it.
- **Crossplay**, a text RPG where several local LLMs each take a seat at the table and play together.
- **Hybrid local agents**, benchmarks for running two local models in parallel across three GPUs and finding out where the parallelism is real.

The full list is on the [projects page](/projects/).

## What this site is

A static Astro build on GitHub Pages. No backend, no tracking, no secrets. The project list is a hand-curated
file in the repo, so it stays honest without hitting the GitHub API at build time. A React and Vite rebuild
is on the roadmap for when the site needs to do more than describe things.

## What goes in Notes

Write-ups from the projects, the weird edge cases that took a day to find, and the occasional
"here is what actually worked" after a benchmark run. Documenting the edge cases is part of the
philosophy, so this is where they land.
