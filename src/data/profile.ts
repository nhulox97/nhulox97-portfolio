import type { ProfileDataArgs } from "@AppTypes/data";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "lucide-preact";
import meImg from "@Assets/me1.jpg";
import bioMeImg from "@Assets/me.jpg";

export const profileData: ProfileDataArgs = {
  avatar: {
    landing: meImg,
    bio: bioMeImg,
  },
  experiences: [],
  info: {
    name: "Sergio Bernal",
    email: "sergio-bernal@live.com",
    title: "Backend engineer",
    bio: "I’m a software engineer located in El Salvador, driven by a passion for software architecture and design patterns. With a focus on crafting robust systems, I thrive on architecting solutions that combine scalability with efficiency. I'm currently working as Typescript and AWS developer. I'm dedicated to optimizing performance while maintaining code quality and am always eager to collaborate on impactful projects. Let's connect and explore the possibilities of creating innovative solutions together!",
    yearsOfExperience: "3+ years",
    education: "B.Sc Systems Engineering",
  },
  social: {
    github: "https://github.com/nhulox97",
    linkedin: "https://www.linkedin.com/in/sergio-abc/",
  },
  pageTitle: "nhulox97 - Sergio Bernal",
} as const;

export const socialIcons = {
  github: GithubIcon,
  gitlab: GitlabIcon,
  linkedin: LinkedinIcon,
} as const;
