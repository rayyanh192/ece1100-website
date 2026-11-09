// app/career-goals/page.tsx
import React from "react";

export const metadata = { title: "Career Goals" };

const card =
  "rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md";
const sectionTitle = "font-mono text-2xl text-white flex items-center gap-2";

const roadmap = [
  {
    term: "Fall 2026",
    courses: "ECE 1100 Discovery Practicum, ECE 2035 Programming Hardware/Software Systems, CS 1332 Data Structures & Algorithms, CS 2050 Discrete Math",
    beyond: "Build my Discovery Project and start getting involved with Supercomputing @ GT.",
  },
  {
    term: "Spring 2027",
    courses: "ECE 2031 Digital Design Lab, ECE 2040 Circuit Analysis, ECE 4150 Cloud Computing, CS 2340 Objects and Design, CS 4400 Databases",
    beyond: "Find on-campus research and recruit for a summer internship.",
  },
  {
    term: "Summer 2027",
    courses: "ISYE 3770 Statistics & Applications",
    beyond: "Software engineering internship in ML infrastructure, GPU systems, or platform engineering.",
  },
  {
    term: "Fall 2027",
    courses: "ECE 3011 Junior Design, ECE 3058 Architecture, Systems, Concurrency & Energy, ECE 3005 Professional Communication, CS 3510 Algorithms",
    beyond: "Undergraduate research in a systems or ML infrastructure lab, and full-time recruiting.",
  },
  {
    term: "Spring 2028",
    courses: "ECE 4015 Culminating Design, ECE 3600 Computer Communications, ECE 4795 GPU Programming, CS 3251 Computer Networking, CS 4440 Emerging Database Technologies",
    beyond: "Finish senior design, graduate in May 2028, and secure a full-time offer.",
  },
];

const steps = [
  {
    title: "Supercomputing @ GT",
    text: "Join Team Phoenix, the Vertically Integrated Projects team behind Georgia Tech's Student Cluster Competition entry, for hands-on experience building and tuning HPC clusters and GPU workloads.",
  },
  {
    title: "More time in industry",
    text: "Add internships to my time at CrowdStrike to see which problem spaces I find most compelling. I'm also weighing a spring term in industry through the Center for Career Discovery and Development.",
  },
  {
    title: "Undergraduate research",
    text: "Work with a faculty member in a systems or ML infrastructure lab, possibly with PURA funding, to go deeper into GPU programming, distributed systems, and ML inference than classes can take me.",
  },
];

export default function CareerGoalsPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12 flex flex-col gap-6">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <h1 className="font-mono text-4xl text-white">Career Goals</h1>
            <p className="mt-2 text-neutral-400">Where I want to go, and how I plan to get there.</p>
          </div>

          {/* Vision */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> The Long-Term Vision
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              My long-term goal is to start my own company and solve a problem I care about from scratch.
              Before that, I want to learn how great products get built by working at the frontier of the
              industry.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/30">
                <h3 className="font-mono text-lg text-white">In 5 years</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Working as an engineer at a late-stage, fast-moving tech startup on the frontier of its
                  sub-industry.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/30">
                <h3 className="font-mono text-lg text-white">In 10 years</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  With solid industry experience and a clear niche, working as an entrepreneur and building
                  my own company.
                </p>
              </div>
            </div>
          </section>

          {/* Threads */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Why These Threads
            </h2>
            <div className="mt-4 space-y-3 text-neutral-200 leading-relaxed">
              <p>
                <span className="text-white">Distributed System &amp; Software Design</span> gives me the
                full-stack technical depth to build products from the hardware level up through the software.
                That matters at a fast-moving startup, and it matters even more when starting a company.
              </p>
              <p>
                <span className="text-white">Information Internetworks</span> adds a strong understanding of
                networks and distributed systems, which most modern products depend on to scale, especially
                real-time AI applications.
              </p>
            </div>
          </section>

          {/* Roadmap */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> From Here to There
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              This plan comes from my ECE Roadmap. Each term pairs key coursework with experience outside the
              classroom, and I expect it to change as I learn more.
            </p>
            <ol className="mt-4 space-y-3">
              {roadmap.map((item) => (
                <li key={item.term} className="p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/30">
                  <h3 className="font-mono text-lg text-white">{item.term}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    <span className="text-neutral-100">Coursework:</span> {item.courses}
                  </p>
                  <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                    <span className="text-neutral-100">Beyond class:</span> {item.beyond}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Key steps */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Key Steps Beyond the Classroom
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step) => (
                <div key={step.title} className="p-4 rounded-xl bg-neutral-800/30 border border-neutral-700/30">
                  <h3 className="font-mono text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gaps */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> What I Still Need to Learn
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              I still need more hands-on industry experience to decide which problem space I want to commit
              to, whether that is ML infrastructure, real-time AI, or something else. I also want to learn the
              business side of building a company, including finding product-market fit and raising funding.
              Co-founding a startup while I&apos;m in school is already teaching me some of that firsthand.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
