import { ExperienceEntry } from "@/types/content";

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function ExperienceCard({ entry }: ExperienceCardProps) {
  const startFormatted = formatDate(entry.startDate);
  const endFormatted = entry.endDate ? formatDate(entry.endDate) : "Present";

  return (
    <article className="relative pl-8 pb-12 border-l-2 border-border last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface border-2 border-primary" />

      {/* Header */}
      <div className="mb-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-xl font-semibold text-text-primary">{entry.role}</h3>
          {entry.isCurrent && (
            <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
              Current
            </span>
          )}
        </div>
        <p className="text-lg text-secondary font-medium">{entry.company}</p>
        <p className="text-sm text-text-muted">
          {entry.location} &middot; {startFormatted} – {endFormatted}
        </p>
      </div>

      {/* Description */}
      <p className="text-text-primary mb-4 leading-relaxed">{entry.description}</p>

      {/* Highlights */}
      {entry.highlights.length > 0 && (
        <ul className="space-y-2 mb-4">
          {entry.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1.5 text-xs">&#9679;</span>
              <span className="text-text-muted">{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {entry.technologies && entry.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {entry.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-surface text-text-muted rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
