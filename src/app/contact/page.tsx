// app/contact/page.tsx
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaXTwitter, FaPenNib, FaFileLines } from "react-icons/fa6";

export const metadata = { title: "Contact" };

const links = [
  { label: "Email", value: "rhussain40@gatech.edu", href: "mailto:rhussain40@gatech.edu", Icon: FaEnvelope },
  { label: "LinkedIn", value: "linkedin.com/in/rayyan-h", href: "https://www.linkedin.com/in/rayyan-h/", Icon: FaLinkedin },
  { label: "GitHub", value: "github.com/rayyanh192", href: "https://github.com/rayyanh192", Icon: FaGithub },
  { label: "X", value: "x.com/xrayz_0", href: "https://x.com/xrayz_0", Icon: FaXTwitter },
  { label: "Blog", value: "rrayyannh.substack.com", href: "https://rrayyannh.substack.com", Icon: FaPenNib },
  { label: "Resume", value: "Download my resume (PDF)", href: "/rayyan-hussain.pdf", Icon: FaFileLines },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-0 top-20 flex items-start justify-center z-10 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-4xl px-6 pb-12">
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <h1 className="font-mono text-4xl text-white">Contact</h1>
          <p className="mt-2 text-neutral-400">
            Recruiter, classmate, or fellow builder, I&apos;d love to hear from you. Email is the best way to
            reach me.
          </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex items-center gap-4 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-neutral-700/70"
              >
                <Icon className="shrink-0 text-2xl text-emerald-400/90" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block font-mono text-white">{label}</span>
                  <span className="block text-sm text-neutral-300 break-words">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-neutral-400 rounded-2xl bg-neutral-900/70 border border-neutral-800/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
            Company and organization logos on this site are trademarks of their respective owners and are used
            only to identify where I have worked or competed.
          </p>
        </div>
      </div>
    </div>
  );
}
