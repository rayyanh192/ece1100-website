// app/about/page.tsx
import React from "react";

export const metadata = { title: "About Me" };

const card =
  "rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md";
const sectionTitle = "font-mono text-2xl text-white flex items-center gap-2";

const achievements = [
  "1st Place, Human Impact: NVIDIA Spark Hackathon, January 2026 (Power2ThePeople)",
  "2nd Place: AWS x INRIX Hackathon, October 2025 (DevAngel)",
  "4th Place among 350+ participants and Best Freshman Hack: Hack For Humanity, February 2025 (Sheltr)",
  "1st Place, Novice: SCU ACM Winter Challenge, 2025 (Sentiment Enabler)",
  "Kuehler Grant recipient for multirobot adaptive-navigation research",
  "Co-author of a 3-D cluster control paper published for the 2026 IEEE Aerospace Conference",
];

const technicalSkills = [
  "Python", "Java", "C", "C++", "Swift", "Go", "SQL", "HTML", "React", "Flask",
  "AWS", "ROS", "Linux", "Docker", "Git", "Postman",
];

const functionalSkills = [
  "Creative problem solving", "Logic", "Rhetoric", "Evidence-based decisions",
  "User-centered design", "Effective communication",
];

export default function AboutPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12 flex flex-col gap-6">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <h1 className="font-mono text-4xl text-white">About Me</h1>
            <p className="mt-2 text-neutral-400">The longer version of who I am and how I got here.</p>
          </div>

          {/* Story */}
          <section className={card}>
            <img
              src="/rayhome.png"
              alt="Rayyan Hussain looking out over a mountain lake"
              className="mx-auto mb-4 md:float-right md:ml-6 md:mb-2 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-neutral-700/50"
            />
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> My Story
            </h2>
            <div className="mt-4 space-y-4 text-neutral-200 leading-relaxed">
              <p>
                I&apos;m Rayyan Hussain, a junior studying Computer Engineering at Georgia Tech, and I expect
                to graduate in May 2028. What pulls me in is building: the ASCII art moving behind this page,
                machine learning for robots, and anything I can pull together over a hackathon weekend.
              </p>
              <p>
                My path started at Santa Clara University, where I studied computer science and engineering
                before transferring to Georgia Tech. Hackathons became my training ground there. My project
                Sentiment Enabler, which shows opposing viewpoints on controversial topics side by side, won
                the novice division of the SCU ACM Winter Challenge. A few weeks later, my team built Sheltr,
                a platform that helps people find verified shelters during emergencies, and took 4th place
                among 350+ participants along with Best Freshman Hack.
              </p>
              <p>
                Hackathons taught me to move fast, and research taught me to be precise. At the Robotics
                Systems Lab, I earned a Kuehler Grant to work on cluster-controlled drones, tuned the PID
                loops that kept a two-drone formation within 0.1 m of its path, and designed the 24-camera
                motion capture testbed we used to track them. That work ended with a co-authored paper for
                the 2026 IEEE Aerospace Conference.
              </p>
              <p>
                Since then, I&apos;ve moved closer to the systems that make AI useful in the real world. My
                team won 1st place for Human Impact at an NVIDIA hackathon by running a legal guidance
                assistant locally on a DGX Spark. I spent this past summer at CrowdStrike building LLM agents
                for an internal development pipeline, and I&apos;m co-founding a startup building a real-time
                voice agent for developers. I also serve as Vice President of ACM at Santa Clara, where I help
                run hackathons that draw 1,000+ participants.
              </p>
              <p>
                I&apos;m looking for software engineering internships in ML infrastructure, GPU systems, or
                platform engineering starting in May 2027.
              </p>
            </div>
          </section>

          {/* Education */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Education
            </h2>
            <h3 className="mt-4 font-mono text-xl text-white">Georgia Institute of Technology</h3>
            <p className="text-neutral-300">B.S. Computer Engineering | Expected May 2028</p>
            <p className="mt-3 text-neutral-200 leading-relaxed">
              <span className="text-white">Planned threads:</span> Distributed System &amp; Software Design
              and Information Internetworks.
            </p>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              <span className="text-white">Fall 2026 coursework:</span> ECE Discovery Practicum, Programming
              Hardware/Software Systems, Data Structures &amp; Algorithms, and Discrete Math for CS.
            </p>
          </section>

          {/* Skills */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Skills
            </h2>
            <h3 className="mt-4 font-mono text-lg text-white">Technical</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="px-2 py-1 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="mt-4 font-mono text-lg text-white">Functional</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {functionalSkills.map((skill) => (
                <span key={skill} className="px-2 py-1 rounded text-xs font-mono bg-neutral-800/50 text-neutral-300">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Achievements
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-200">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <figure className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="/nvidiawin.jpeg"
                  alt="The Power2ThePeople team with event hosts at the NVIDIA Spark Hackathon"
                  className="w-full h-56 object-cover rounded-xl border border-neutral-800/70"
                />
                <img
                  src="/awswin.png"
                  alt="The DevAngel team in front of a screen announcing 2nd place"
                  className="w-full h-56 object-cover rounded-xl border border-neutral-800/70"
                />
              </div>
              <figcaption className="mt-2 text-sm text-neutral-400">
                With my teams at the NVIDIA Spark Hackathon (left) and the AWS x INRIX Hackathon (right).
              </figcaption>
            </figure>
          </section>

          {/* Interests */}
          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Outside of Engineering
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              I&apos;m a runner, a coffee drinker, and a risk taker by nature. Most of my late-night coding
              happens to lo-fi and hip-hop, and you can see what I&apos;m listening to on my home page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
