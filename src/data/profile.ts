import type { ProfileDataArgs, SocialType } from "@AppTypes/data";
import {
  GitBranchIcon,
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
} from "lucide-preact";
import meImg from "@Assets/me1.jpg";

export const profileData: ProfileDataArgs = {
  avatar: {
    landing: meImg,
  },
  experiences: [],
  info: {
    name: "Sergio Bernal",
    email: "sergio-bernal@live.com",
    title: "Backend engineer",
    bio: "",
    yearsOfExperience: "2+ years",
    education: "B.Sc Systems Engineering",
  },
  social: {
    github: "https://github.com/nhulox97",
    linkedin: "https://www.linkedin.com/in/sergio-abc/",
  },
  pageTitle: "nhulox97 - Sergio Bernal",
};

export const socialIcons = {
  github: GithubIcon,
  gitlab: GitlabIcon,
  linkedin: LinkedinIcon,
} as const;
