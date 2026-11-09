// app/resume/page.tsx
import React from "react";

export const metadata = { title: "Resume" };

const button =
  "inline-block px-4 py-2 rounded-xl bg-white/5 border border-neutral-700/50 text-neutral-200 font-mono text-sm hover:bg-white/10 hover:border-neutral-600 hover:text-white transition-all duration-300";

// public/resume-preview.png is an image of public/rayyan-hussain.pdf.
// When the PDF changes, replace the preview image as well.
export default function ResumePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <h1 className="font-mono text-4xl text-white">Resume</h1>
          <p className="mt-2 text-neutral-400">My one-page resume, ready to view or download.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/rayyan-hussain.pdf" target="_blank" rel="noopener noreferrer" className={button}>
              [ view pdf ]
            </a>
            <a href="/rayyan-hussain.pdf" download="Rayyan-Hussain-Resume.pdf" className={button}>
              [ download pdf ]
            </a>
          </div>
          </div>

          <a
            href="/rayyan-hussain.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-2 md:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
            <img
              src="/resume-preview.png"
              alt="Preview of Rayyan Hussain's resume. Open the PDF for the full text."
              className="w-full h-auto rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
