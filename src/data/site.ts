import { frontmatter } from '../content/bio.md';

// All editable site copy lives in bio.md; this module only provides types.
export const site = frontmatter.site as {
  name: string;
  description: string;
  projectsHeading: string;
  experienceHeading: string;
  advisorLabel: string;
  skipLink: string;
  portraitAlt: string;
  portraitImage: string;
  writing: {
    title: string;
    description: string;
    subtitle: string;
    backLabel: string;
  };
};
