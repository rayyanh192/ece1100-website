// app/experience/page.tsx
import React from "react";
import { FaMicrophone } from "react-icons/fa";

export const metadata = { title: "Experience" };

type Role = {
  title: string;
  org: string;
  dates: string;
  image?: { src: string; alt: string };
  points: string[];
  link?: string;
};

const work: Role[] = [
  {
    title: "Software Engineer Intern",
    org: "CrowdStrike | Sunnyvale, CA",
    dates: "June 2026 - September 2026",
    image: { src: "/crowdstrike.png", alt: "CrowdStrike logo" },
    points: [
      "Designed and built LLM-powered agents that automate three stages of an internal development pipeline (code review triage, build validation, and deploy checks), eliminating a manual step performed on every pull request.",
      "Developed API-driven automation to reconcile 10K+ configuration items across 30+ services, cutting config drift and manual data upkeep.",
      "Integrated these agentic workflows into existing CI/CD tooling, targeting a projected ~6 hours/week reduction in engineering toil for the platform team.",
    ],
  },
  {
    title: "Co-Founder / Lead Engineer",
    org: "Stealth Startup | San Francisco, CA",
    dates: "January 2026 - Present",
    points: [
      "Building a real-time AI voice agent to empower developer productivity.",
      "Implementing continuous listening, combined speech and text LLM context, and streaming inference with early-start text-to-speech and a Redis \"sentence-starter\" cache, enabling natural turn-taking at ~50-100 ms perceived latency.",
      "Using PostgreSQL for durable session state and analytics, and created a workflow for users to write code and test its execution.",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Robotics Systems Lab @ Santa Clara University",
    dates: "June 2025 - December 2025",
    image: { src: "/rsl.png", alt: "Robotics Systems Lab logo" },
    points: [
      "Co-authored a paper on 3-D cluster control, published for the 2026 IEEE Aerospace Conference.",
      "Awarded a Kuehler Grant to research multirobot adaptive navigation with cluster-controlled drones.",
      "Implemented PID loops in ROS 2 that kept a two-drone autonomous formation within 0.1 m of desired paths.",
      "Designed a 24-camera OptiTrack testbed (0.2 mm accuracy) and modular Linux-based distributed systems for real-time 3-D tracking and control of Crazyflie microdrones.",
    ],
    link: "https://www.scu.edu/engineering/labs--research/labs/robotic-systems-lab/",
  },
];

const leadership: Role[] = [
  {
    title: "Vice President",
    org: "Association for Computing Machinery (ACM) | Santa Clara, CA",
    dates: "May 2025 - Present",
    image: { src: "/acm.png", alt: "ACM logo" },
    points: [
      "Leading end-to-end planning and execution of campus-wide hackathons at Santa Clara University, drawing 1,000+ participants.",
      "Raised $85,000 in annual club funds within four months of joining the board.",
      "Coordinating with engineers and managers from AWS, Intel, ServiceNow, and Roblox through structured sprint planning and milestone tracking.",
    ],
  },
];

function RoleCard({ role }: { role: Role }) {
  return (
    <div className="mx-auto w-full flex flex-col md:flex-row items-center gap-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {role.image ? (
        <img
          src={role.image.src}
          alt={role.image.alt}
          className="w-32 h-32 md:w-56 md:h-56 shrink-0 rounded-full object-cover border-2 border-neutral-700/50"
        />
      ) : (
        <div className="w-32 h-32 md:w-56 md:h-56 shrink-0 rounded-full grid place-items-center bg-neutral-800/60 border-2 border-neutral-700/50">
          <FaMicrophone className="text-5xl md:text-7xl text-emerald-400/80" aria-hidden="true" />
        </div>
      )}

      <div className="min-w-0">
        <h3 className="font-mono text-2xl md:text-3xl text-white">{role.title}</h3>
        <p className="mt-1 font-mono text-lg md:text-xl text-neutral-300">{role.org}</p>
        <p className="mt-1 font-mono text-sm text-neutral-400">{role.dates}</p>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-200">
          {role.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {role.link && (
          <a
            href={role.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-mono text-sm text-neutral-300 hover:text-white transition-colors"
          >
            [ visit the lab ]
          </a>
        )}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6 pb-12 flex flex-col gap-6">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <h1 className="font-mono text-4xl text-white">Experience</h1>
            <p className="mt-2 text-neutral-400">
              Where I&apos;ve worked, researched, and led.
            </p>
          </div>

          <h2 className="font-mono text-2xl text-white flex items-center gap-2">
            <span className="text-emerald-400">{"//"}</span> Work &amp; Research
          </h2>
          {work.map((role) => (
            <RoleCard key={role.org} role={role} />
          ))}

          <h2 className="mt-6 font-mono text-2xl text-white flex items-center gap-2">
            <span className="text-emerald-400">{"//"}</span> Leadership
          </h2>
          {leadership.map((role) => (
            <RoleCard key={role.org} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}
