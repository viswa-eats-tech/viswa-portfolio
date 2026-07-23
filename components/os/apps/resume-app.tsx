"use client"

import { Download, Printer } from "lucide-react"
import {
  profile,
  experiences,
  projects,
  education,
  certifications,
  skillGroups,
} from "@/lib/portfolio-data"

export function ResumeApp() {

  const pdfPath = "/resume/Gaddam_Viswavijeth_Resume.pdf";

  const printResume = () => {
    const win = window.open(pdfPath, "_blank");

    if (!win) return;

    win.onload = () => {
      win.focus();
      win.print();
    };
  };

  return (
    <div className="p-6">
      {/* Toolbar */}
      <div className="mb-5 flex items-center justify-between print:hidden">
        <h1 className="text-xl font-semibold tracking-tight">
          Resume
        </h1>

        <div className="flex gap-2">
          <button
            onClick={printResume}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-3 py-1.5 text-xs font-medium transition hover:bg-foreground/10"
          >
            <Printer className="h-3.5 w-3.5" />
            Print
          </button>

          <a
            href={pdfPath}
            download="Gaddam_Viswavijeth_Resume.pdf"
            className="flex items-center gap-1.5 rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-sky-600"
          >
            <Download className="h-3.5 w-3.5" />
            PDF
          </a>
        </div>
      </div>
      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #resume-content, #resume-content * { visibility: visible; }
          #resume-content {
            position: fixed;
            left: 0; top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: white !important;
            color: black !important;
            font-size: 10pt;
          }
        }
      `}</style>

      {/* Resume Content */}
      <div
        id="resume-content"
        className="rounded-xl border border-border bg-white text-black dark:bg-[var(--os-window)] dark:text-foreground"
        style={{ fontFamily: "Computer Modern, Georgia, serif", fontSize: "10pt", padding: "1cm" }}
      >
        {/* Header */}
        <div className="text-center border-b border-gray-300 pb-3 mb-3">
          <h1 className="text-xl font-bold tracking-widest uppercase">{profile.name}</h1>
          <p className="text-xs mt-0.5 text-gray-600 dark:text-gray-400">{profile.location}</p>
          <p className="text-xs mt-0.5 text-gray-600 dark:text-gray-400">
            {profile.phone} · {" "}
            <a href={`mailto:${profile.email}`} className="text-blue-600 dark:text-sky-400">{profile.email}</a>
            {" "} · {" "}
            <a href={profile.github} className="text-blue-600 dark:text-sky-400">GitHub</a>
            {" "} · {" "}
            <a href={profile.linkedin} className="text-blue-600 dark:text-sky-400">LinkedIn</a>
          </p>
        </div>

        {/* Summary */}
        <ResumeSection title="Summary">
          <p className="text-xs leading-relaxed">
            Full-stack software developer with experience building scalable backend systems,
            real-time distributed applications, and AI-powered solutions using Node.js, React,
            React Native, GraphQL, and modern databases. Passionate about backend engineering,
            distributed systems, and Generative AI, with industry experience spanning enterprise
            software development and AI consulting.
          </p>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          {education.map((e) => (
            <div key={e.school} className="flex justify-between items-start mb-1 last:mb-0">
              <div>
                <span className="text-xs font-bold">{e.school}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400"> — {e.degree}</span>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-xs italic text-gray-500 dark:text-gray-400">{e.period}</p>
                <p className="text-xs font-medium">{e.details}</p>
              </div>
            </div>
          ))}
        </ResumeSection>

        {/* Work Experience */}
        <ResumeSection title="Work Experience">
          {experiences.map((e) => (
            <div key={e.company} className="mb-3 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold">{e.role} — {e.company}</span>
                </div>
                <span className="text-xs italic text-gray-500 dark:text-gray-400 shrink-0 ml-4">{e.period}</span>
              </div>
              <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-1">{e.location}</p>
              <ul className="list-disc pl-4 space-y-0.5">
                {e.highlights.map((h, i) => (
                  <li key={i} className="text-xs leading-relaxed">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Projects">
          {projects.filter((p) => p.showInResume).map((p) => (
            <div key={p.name} className="mb-3 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <a href={p.repo} className="text-xs font-bold text-blue-600 dark:text-sky-400 hover:underline">
                    {p.name}
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-400 italic"> — {p.description}</span>
                </div>
                <span className="text-xs italic text-gray-500 dark:text-gray-400 shrink-0 ml-4">{p.year}</span>
              </div>
              <p className="text-xs leading-relaxed mt-0.5 pl-0">{p.longDescription}</p>
            </div>
          ))}
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <div className="space-y-0.5">
            {skillGroups.map((g) => (
              <p key={g.category} className="text-xs">
                <span className="font-bold">{g.category}:</span>{" "}
                <span className="text-gray-700 dark:text-gray-300">
                  {g.skills.map((s) => s.name).join(", ")}
                </span>
              </p>
            ))}
          </div>
        </ResumeSection>

        {/* Certifications & Achievements */}
        <ResumeSection title="Achievements & Certifications">
          <ul className="list-disc pl-4 space-y-0.5">
            {certifications.map((c) => (
              <li key={c} className="text-xs">{c}</li>
            ))}
          </ul>
        </ResumeSection>
      </div>
    </div>
  )
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 mb-1">
        <h3
          className="text-xs font-bold uppercase tracking-wider"
          style={{ fontVariant: "small-caps", fontSize: "11pt" }}
        >
          {title}
        </h3>
        <div className="flex-1 border-t border-black dark:border-gray-400" />
      </div>
      {children}
    </div>
  )
}