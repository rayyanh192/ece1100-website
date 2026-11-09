// app/projects/page.tsx
import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const hackathonWins = projects.filter(
    (p) => p.category === "hackathon" && p.award
  );
  const otherProjects = projects.filter(
    (p) => !(p.category === "hackathon" && p.award)
  );

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-6xl px-6 pb-12">
          {/* Page Header */}
          <div className="mb-8 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <h1 className="font-mono text-4xl text-white">Projects</h1>
            <p className="mt-2 text-neutral-400">
              Things I&apos;ve built and hacked together.
            </p>
          </div>

          {/* Discovery Project Feature */}
          <section className="mb-12">
            <h2 className="font-mono text-2xl text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">{"//"}</span> Discovery Project
            </h2>
            <Link
              href="/projects/discovery"
              className="block rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-neutral-700/70"
            >
              <p className="font-mono text-sm text-emerald-400/80">ECE 1100 | Build in progress</p>
              <h3 className="mt-1 font-mono text-2xl text-white">Arduino Room Environment Monitor</h3>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                A hands-on hardware project that reads room temperature and humidity with an Arduino,
                shows the measurements on a small display, and uses LED indicators to signal whether
                the room is cold, comfortable, or hot.
              </p>
              <p className="mt-4 font-mono text-sm text-white">[ read the full feature ]</p>
            </Link>
          </section>

          {/* Hackathon Wins Section */}
          {hackathonWins.length > 0 && (
            <section className="mb-12">
              <h2 className="font-mono text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-emerald-400">{"//"}</span> Hackathon Wins
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {hackathonWins
                  .filter((p) => p.featured)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              {hackathonWins.filter((p) => !p.featured).length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {hackathonWins
                    .filter((p) => !p.featured)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              )}
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section>
              <h2 className="font-mono text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-neutral-500">{"//"}</span> More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
