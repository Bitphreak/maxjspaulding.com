import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: `Portfolio of projects and work by ${profile.name}.`,
};

export default function ProjectsPage() {
  // Sort projects by order, featured first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return a.order - b.order;
  });

  return (
    <main className="py-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-text-muted">
            A selection of projects I&apos;ve worked on
          </p>
        </div>

        {/* Projects Grid */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-text-muted mb-4">
            Interested in collaborating on a project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </Container>
    </main>
  );
}
