import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${profile.name} - background, career journey, and professional values.`,
};

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-text-muted">{profile.bio.short}</p>
        </div>

        {/* Extended Bio */}
        <section className="mb-12">
          <div className="prose prose-invert max-w-none">
            {profile.bio.extended.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-text-primary leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Career Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Career Highlights</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-primary">
                20+ years of experience in software engineering and architecture
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-primary">
                Currently leading architecture initiatives at {profile.company}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-primary">
                Passionate about mentoring engineers and building scalable systems
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-text-primary">
                Active contributor to open source and technical communities
              </span>
            </li>
          </ul>
        </section>

        {/* Resume Download */}
        <section className="bg-surface rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="text-text-muted mb-6">
            Download my resume to learn more about my professional background and experience.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume (PDF)
          </a>
        </section>

        {/* CTA */}
        <section className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            Want to learn more about my work?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/experience"
              className="text-primary hover:text-secondary transition-colors"
            >
              View Experience →
            </Link>
            <Link
              href="/projects"
              className="text-primary hover:text-secondary transition-colors"
            >
              See Projects →
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
