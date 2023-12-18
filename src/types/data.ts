import type { ImageMetadata } from "astro";

export type ProfileAvatarArgs = {
  /**
   * Avatar to be used in the landing page
   */
  landing: ImageMetadata;
  /**
   * Avatar to be used in the profile section
   */
  bio?: ImageMetadata;
};

export type ProfilePersonalInfoArgs = {
  /**
   * Full name
   */
  name: string;
  email: string;
  /**
   * Job position or title
   */
  title: string;
  bio: string;
  /**
   * Years of experience in your field (eg: 2 years, 1+ years)
   */
  yearsOfExperience: string;
  /**
   * Hardly recommended to only put degrees names, not institutions
   */
  education: string | string[];
};

export type SocialType = "github" | "gitlab" | "linkedin";

export type ProfileSocialArgs = {
  /**
   * The value should be the url to the social profile
   */
  [k in SocialType]?: string;
};

export type ProfileExperienceArgs = {
  /**
   * Company name
   */
  company: string;
  /**
   * Job position or title
   */
  title: string;
  /**
   * Start date
   */
  startDate: string;
  /**
   * End date (if not provided, it will be taken as Current)
   */
  endDate?: string;
  /**
   * Job description
   */
  description: string[];
};

export type ToolArgs = {
  name: string;
  level: string;
  icon: string;
};

export type ProfileToolArgs = {
  //INFO: Add new types as needed
  type: "frontend" | "backend" | "database" | "development" | "cloud" | "other";
  tools: ToolArgs[];
};

export type ProfileDataArgs = {
  avatar: ProfileAvatarArgs;
  experiences: ProfileExperienceArgs[];
  pageTitle: string;
  info: ProfilePersonalInfoArgs;
  social: ProfileSocialArgs;
  tools?: ProfileToolArgs;
};
