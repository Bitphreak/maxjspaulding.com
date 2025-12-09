import Container from "./Container";
import { profile } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
