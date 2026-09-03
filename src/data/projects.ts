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
  active: "Active",
  research: "Research",
  prototype: "Prototype",
  archived: "Dormant",
};

const org = "https://github.com/Kullhem-io";

export const projects: Project[] = [
  {
    name: "Beaglewing",
    repo: `${org}/beaglewing`,
    tagline: "A keyboard, mouse, and clipboard bridge where the second computer sees real USB hardware.",
    description:
      "Slide your cursor off the edge of a Linux desktop and it comes out on the machine next to it, carried by a Raspberry Pi 4 in USB gadget mode. The controlled machine needs nothing installed, no network path back to you, and it works at the login screen, elevated prompts, and installers, because it is just a keyboard and mouse as far as the host knows.",
    languages: ["Rust", "Python", "Raspberry Pi"],
    status: "active",
    area: "Hardware-adjacent experiments",
    featured: true,
  },
  {
    name: "Crossplay",
    repo: `${org}/Crossplay`,
    tagline: "Stop putting every model behind a help desk. Give them a room, a game, and each other.",
    description:
      "An AI text RPG driven by a parallel multi-agent engine. Several local LLMs each take a seat at the table, a Dungeon Master, a Narrator, and a party of Players, and play an adventure seeded from a single topic. The engine owns the ledger (dice, HP, inventory, map); the models own the story. Watch, whisper into the world, or pull up a chair yourself.",
    languages: ["Go", "TypeScript", "React", "WebSocket"],
    status: "active",
    area: "Strange but useful prototypes",
    featured: true,
  },
  {
    name: "Hybrid Local Agents",
    repo: `${org}/Research-Hybrid-Local-Agents-Proxies`,
    tagline: "Benchmarking parallel subagent collaboration between two local LLMs across a three-GPU box.",
    description:
      "A research workspace for finding the best way to run Qwen and Gemma at the same time on one machine: subagents, a proxy-based router, or a hybrid. Includes a GPU monitor dashboard, ten subagent definitions, benchmark logs, and written findings on where parallelism is real and where llama-server quietly serializes it.",
    languages: ["JavaScript", "Node", "llama.cpp"],
    status: "research",
    area: "Practical AI",
    featured: true,
  },
  {
    name: "BFGPOD",
    repo: `${org}/BFGPOD`,
    tagline: "Big Friendly GPU POD: Dockerized Stable Video Diffusion with TensorRT on an RTX 3090.",
    description:
      "A complete Docker environment for running Stable Video Diffusion image-to-video XT 1.1 with TensorRT optimization. Automated model download, engine building, and a repeatable setup tuned for a 24 GB consumer GPU.",
    languages: ["Docker", "Shell", "TensorRT"],
    status: "prototype",
    area: "Practical AI",
    featured: true,
  },
  {
    name: "CC Link Manager",
    repo: `${org}/CCLinkManager`,
    tagline: "A small static app for keeping track of, and joining, scheduled Zoom calls.",
    description:
      "Upcoming and past calls in one tabbed view, a join button and copy-link on each, and a countdown to the next one. Built with Astro on GitHub Pages with Firestore behind it for live updates.",
    languages: ["Astro", "JavaScript", "Firestore"],
    status: "prototype",
    area: "Automation and workflow tools",
  },
  {
    name: "picord",
    repo: `${org}/picord`,
    tagline: "A Discord bot that watched the rpilocator feed and posted Raspberry Pi stock alerts.",
    description:
      "A Go service that polled the rpilocator RSS feed, deduplicated alerts through Postgres, and pushed new stock to a Discord channel. Built during the Pi shortage, shipped as a docker-compose stack.",
    languages: ["Go", "Postgres", "Docker"],
    status: "archived",
    area: "Communication and coordination systems",
  },
];

export const spotlight = projects.find((p) => p.name === "Beaglewing")!;
export const featured = projects.filter((p) => p.featured && p !== spotlight);
