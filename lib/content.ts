import profileData from "@/content/profile.json";
import experienceData from "@/content/experience.json";
import projectsData from "@/content/projects.json";

import type { Profile, ExperienceEntry, Project } from "@/types/content";

export const profile: Profile = profileData;
export const experience: ExperienceEntry[] = experienceData;
export const projects: Project[] = projectsData;
