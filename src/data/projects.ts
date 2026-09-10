export type Status = "active" | "research" | "prototype" | "archived";

export interface Project {
  name: string;
  repo: string;
  tagline: string;
  description: string;
  languages: string[];
  status: Status;
  area: string;
  featured?: boolean;
}

export const STATUS_LABEL: Record<Status, string> = {
  active: "active",
  research: "research",
  prototype: "prototype",
  archived: "dormant",
};

const org = "https://github.com/Kullhem-io";

export const projects: Project[] = [
  {
    name: "Beaglewing",
    repo: `${org}/beaglewing`,
    tagline: "A keyboard, mouse, and clipboard bridge where the second computer sees real USB hardware.",
    description:
      "Slide your cursor off the edge of your Linux desktop and it comes out on the machine next to it, carried by an actual USB device, not a software agent. Think Synergy or Barrier, except the controlled machine needs nothing installed, nothing configured, and no network access to you at all. From its point of view, somebody plugged in a very good keyboard and mouse.",
    languages: ["Rust", "Python", "Pi 4"],
    status: "active",
    area: "Hardware-adjacent experiments",
    featured: true,
  },
  {
    name: "Crossplay",
    repo: `${org}/Crossplay`,
    tagline: "Stop putting every model behind a help desk. Give them a room, a game, and each other.",
    description:
      "An AI text RPG run by a parallel multi-agent engine. Several local LLMs each take a seat at the table: a Dungeon Master, a Narrator, and a party of Players. Seed a world with one topic and they play it. Mechanics first, prose second. Code owns the ledger; the DM owns the world. Watch, whisper into it, or pull up a chair.",
    languages: ["Go", "TypeScript", "React"],
    status: "active",
    area: "Strange but useful prototypes",
    featured: true,
  },
  {
    name: "Hybrid Local Agents",
    repo: `${org}/Research-Hybrid-Local-Agents-Proxies`,
    tagline: "Two local models, three GPUs, one question: what is the best way to use both at once.",
    description:
      "A benchmarking workspace for subagents versus a proxy router versus a hybrid of the two. Includes a GPU monitor dashboard, ten subagent definitions split between Qwen and Gemma, and the benchmark logs. First finding: Qwen-to-Qwen parallel is not parallel. llama-server serializes it, and the only real concurrency is across models.",
    languages: ["JavaScript", "Node", "llama.cpp"],
    status: "research",
    area: "Practical AI",
    featured: true,
  },
  {
    name: "BFGPOD",
    repo: `${org}/BFGPOD`,
    tagline: "Big Friendly GPU POD. Stable Video Diffusion with TensorRT, in Docker, on an RTX 3090.",
    description:
      "A complete container environment for image-to-video with SVD XT 1.1. Model download, engine build, and a repeatable setup tuned for 24 GB of consumer VRAM, so the second run takes minutes instead of an afternoon.",
    languages: ["Docker", "Shell", "TensorRT"],
    status: "prototype",
    area: "Practical AI",
    featured: true,
  },
  {
    name: "CC Link Manager",
    repo: `${org}/CCLinkManager`,
    tagline: "A small static app for keeping track of scheduled Zoom calls and joining them.",
    description:
      "Upcoming and past calls in one view, a join button and a copy-link on each, and a countdown to the next one. Past calls stay visible on purpose, because that is what you need when someone says the link did not work. Astro on GitHub Pages with Firestore behind it.",
    languages: ["Astro", "JavaScript", "Firestore"],
    status: "prototype",
    area: "Automation and workflow tools",
  },
  {
    name: "picord",
    repo: `${org}/picord`,
    tagline: "A Discord bot from the Raspberry Pi shortage. It watched rpilocator so you did not have to.",
    description:
      "A Go service that polled the rpilocator RSS feed, deduplicated alerts through Postgres, and posted new stock to a channel. Shipped as a docker-compose stack. It did its job. The shortage ended.",
    languages: ["Go", "Postgres", "Docker"],
    status: "archived",
    area: "Communication and coordination systems",
  },
];

export const spotlight = projects.find((p) => p.name === "Beaglewing")!;
export const featured = projects.filter((p) => p.featured && p !== spotlight);
