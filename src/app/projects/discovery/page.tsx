// app/projects/discovery/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = { title: "Discovery Project" };

const card =
  "rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md";
const sectionTitle = "font-mono text-2xl text-white flex items-center gap-2";

// TODO before the Showcase: add at least one photo or video you took of the project.
// Put the file in /public and add an entry here; the gallery appears automatically.
// Example: { src: "/discovery-build.jpg", alt: "Finished circuit on a breadboard", caption: "The finished build." }
const buildPhotos: { src: string; alt: string; caption: string }[] = [];

const timeline = [
  { dates: "Sep 30 - Oct 9", task: "Research Arduino sensor projects and identify the required components." },
  { dates: "Oct 10 - Oct 16", task: "Buy the Arduino, sensor, breadboard, display, LEDs, and other parts." },
  { dates: "Oct 17 - Oct 30", task: "Learn to wire the sensor to the Arduino and take temperature and humidity readings." },
  { dates: "Oct 31 - Nov 13", task: "Connect the display and LEDs and write the Arduino code that drives them." },
  { dates: "Nov 14 - Nov 20", task: "Combine the sensor, display, and LED circuits into one project." },
  { dates: "Nov 21 - Nov 30", task: "Test, troubleshoot, and record the final result in photos and video." },
];

const parts = [
  "Arduino Uno or similar microcontroller",
  "DHT11 or DHT22 temperature and humidity sensor",
  "Small LCD or OLED display",
  "Red, green, and blue LEDs with resistors",
  "Breadboard and jumper wires",
  "USB cable for programming and power",
];

function SystemDiagram() {
  const box = { fill: "#171717", stroke: "#525252", strokeWidth: 1.5, rx: 10 };
  const label = { fill: "#ffffff", fontFamily: "monospace", fontSize: 15, textAnchor: "middle" as const };
  const sub = { fill: "#a3a3a3", fontFamily: "monospace", fontSize: 12, textAnchor: "middle" as const };
  const line = { stroke: "#34d399", strokeWidth: 2, markerEnd: "url(#arrow)" };

  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-label="Block diagram: the temperature and humidity sensor sends readings to the Arduino, which drives the display and the red, green, and blue LEDs. USB supplies power and programming."
      className="w-full h-auto"
    >
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#34d399" />
        </marker>
      </defs>

      <rect x="20" y="110" width="170" height="80" {...box} />
      <text x="105" y="145" {...label}>DHT sensor</text>
      <text x="105" y="166" {...sub}>temp + humidity</text>

      <rect x="275" y="95" width="170" height="110" {...box} stroke="#34d399" />
      <text x="360" y="145" {...label}>Arduino</text>
      <text x="360" y="166" {...sub}>reads and decides</text>

      <rect x="275" y="10" width="170" height="50" {...box} />
      <text x="360" y="40" {...label}>USB power</text>

      <rect x="530" y="45" width="170" height="80" {...box} />
      <text x="615" y="80" {...label}>LCD or OLED</text>
      <text x="615" y="101" {...sub}>shows readings</text>

      <rect x="530" y="175" width="170" height="100" {...box} />
      <text x="615" y="205" {...label}>Status LEDs</text>
      <circle cx="580" cy="240" r="9" fill="#60a5fa" />
      <circle cx="615" cy="240" r="9" fill="#34d399" />
      <circle cx="650" cy="240" r="9" fill="#f87171" />
      <text x="580" y="267" {...sub} fontSize={10}>cold</text>
      <text x="615" y="267" {...sub} fontSize={10}>ok</text>
      <text x="650" y="267" {...sub} fontSize={10}>hot</text>

      <line x1="190" y1="150" x2="272" y2="150" {...line} />
      <line x1="360" y1="60" x2="360" y2="92" {...line} />
      <line x1="445" y1="130" x2="527" y2="90" {...line} />
      <line x1="445" y1="170" x2="527" y2="220" {...line} />
    </svg>
  );
}

export default function DiscoveryProjectPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12 flex flex-col gap-6">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <Link href="/projects" className="font-mono text-sm text-neutral-300 hover:text-white transition-colors">
              [ back to projects ]
            </Link>
            <p className="mt-4 font-mono text-sm text-emerald-400/80">ECE 1100 Discovery Project</p>
            <h1 className="mt-1 font-mono text-4xl text-white">Arduino Room Environment Monitor</h1>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 backdrop-blur-md">
            <p className="text-sm text-neutral-100">
              <span className="font-mono text-emerald-400">Status: build in progress.</span> This feature
              describes my project plan. I will add photos, video, and measured results here before the
              Discovery Project Showcase.
            </p>
          </div>

          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> Overview
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              I am building a small, self-contained device that monitors the environment of a room. An Arduino
              reads temperature and humidity from a digital sensor, shows the measurements on a small display,
              and lights an LED to signal whether the room is cold, comfortable, or hot. Most of my experience
              so far has been in software, so I chose this project to work directly with physical hardware.
            </p>
          </section>

          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> The Problem
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              Temperature and humidity shape how comfortable a room feels, but it is hard to judge either one
              accurately without an instrument. A reading on a screen is useful only if you stop and interpret
              it, so I want a device that gives both: exact numbers when you want detail, and a color you can
              understand from across the room at a glance. The engineering question behind the project is how
              software on a microcontroller can take input from a physical sensor and turn it into useful
              output in the real world.
            </p>
          </section>

          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> The Process
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              I am breaking the build into three circuits that I can test on their own before combining them.
              First comes the sensor, where the goal is simply to get reliable temperature and humidity
              readings into the Arduino. Next comes the display, which shows those readings. Last come the
              LEDs: blue for cold, green for comfortable, and red for hot, each with a resistor to limit its
              current. The code then ties everything together by repeatedly reading the sensor, updating the
              display, comparing the temperature against thresholds I will tune during testing, and lighting
              the matching LED. Building in stages means that when something goes wrong, I will know which
              part of the system to check first.
            </p>
            <figure className="mt-6 rounded-xl bg-black/30 border border-neutral-800/70 p-4">
              <SystemDiagram />
              <figcaption className="mt-2 text-sm text-neutral-400">
                Planned system: the Arduino reads the sensor, then drives the display and status LEDs.
              </figcaption>
            </figure>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono text-lg text-white">Parts</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-300">
                  {parts.map((part) => (
                    <li key={part}>{part}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-lg text-white">Resources</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  I plan to use the Interdisciplinary Design Commons (the Hive) and the ECE Instructional Labs
                  for access to electronics hardware and help with circuit design, along with beginner Arduino
                  tutorials and documentation for wiring the sensor, LEDs, and display.
                </p>
              </div>
            </div>

            <h3 className="mt-6 font-mono text-lg text-white">Timeline</h3>
            <ol className="mt-2 space-y-2">
              {timeline.map((item) => (
                <li key={item.dates} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                  <span className="sm:w-36 shrink-0 font-mono text-emerald-400/90">{item.dates}</span>
                  <span className="text-neutral-300">{item.task}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className={card}>
            <h2 className={sectionTitle}>
              <span className="text-emerald-400">{"//"}</span> The Outcome
            </h2>
            <p className="mt-4 text-neutral-200 leading-relaxed">
              The project will be complete when the Arduino receives temperature and humidity data from the
              sensor, shows those readings on the display, and uses the LEDs to indicate whether the room is
              cold, warm, or hot. I will test the finished device in a real room and share the results here.
            </p>
            <h3 className="mt-6 font-mono text-lg text-white">Skills I&apos;m Building</h3>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              This project gives me hands-on practice with breadboarding, circuit construction,
              microcontrollers, GPIO, and connecting sensors to hardware. It also teaches me how code running
              on a microcontroller can take input from physical sensors and use it to control outputs like
              LEDs and displays. That connects directly to my coursework in hardware/software systems and to
              my long-term interest in building products from the hardware level up.
            </p>

            {buildPhotos.length > 0 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {buildPhotos.map((photo) => (
                  <figure key={photo.src}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full rounded-xl border border-neutral-800/70"
                    />
                    <figcaption className="mt-2 text-sm text-neutral-400">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
