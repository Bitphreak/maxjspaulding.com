import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ExperienceCard from "@/components/ExperienceCard";
import { profile, experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional work history and career journey of ${profile.name}.`,
};

export default function ExperiencePage() {
  return (
    <main className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <p className="text-xl text-text-muted">
            My professional journey and career highlights
          </p>
        </div>

        {/* Timeline */}
        <section className="mb-12">
          <div className="max-w-3xl">
            {experience.map((entry) => (
              <ExperienceCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-semibold mb-4">Want to know more?</h2>
          <p className="text-text-muted mb-6">
            Download my resume for a complete overview of my professional background.
          </p>
          <div className="flex flex-wrap gap-4">
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
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-primary font-medium rounded-lg hover:bg-surface hover:border-primary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
