import { Metadata } from "next";
import { profile } from "@/lib/content";
import SocialLinks from "@/components/SocialIcons";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: profile.bio.short,
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description: profile.bio.short,
    type: "website",
    url: "https://maxjspaulding.com",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: profile.bio.short,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container className="py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary">
            {profile.name}
          </h1>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Title and Company */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-text-muted">
              {profile.title}
            </p>
            {profile.companyUrl ? (
              <a
                href={profile.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:text-secondary transition-colors"
              >
                {profile.company}
              </a>
            ) : (
              <p className="text-lg text-primary">{profile.company}</p>
            )}
          </div>

          {/* Location */}
          <p className="text-text-muted">{profile.location}</p>

          {/* Social Links */}
          <SocialLinks
            email={profile.email}
            linkedin={profile.links.linkedin}
            github={profile.links.github}
            className="mt-4"
          />

          {/* Short Bio */}
          <p className="max-w-md text-text-muted mt-6">{profile.bio.short}</p>
        </div>
      </Container>
    </main>
  );
}
