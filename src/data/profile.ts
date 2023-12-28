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
  skills: [
    {
      type: "programming languages",
      tools: [
        {
          icon: "devicon-javascript-plain",
          name: "Javascript",
          level: "advanced",
        },
        {
          icon: "devicon-typescript-plain",
          name: "Typescript",
          level: "advanced",
        },
        {
          icon: "devicon-rust-plain",
          name: "Rust",
          level: "intermediate",
        },
        {
          icon: "devicon-python-plain",
          name: "Python",
          level: "intermediate",
        },
      ],
    },
    {
      type: "cloud",
      tools: [
        {
          icon: "devicon-amazonwebservices-original",
          name: "AWS",
          level: "intermediate",
        },
        {
          icon: "devicon-heroku-original",
          name: "Heroku",
          level: "intermediate",
        },
      ],
    },
    {
      type: "backend",
      tools: [
        {
          icon: "devicon-nestjs-plain",
          name: "NestJS",
          level: "advanced",
        },
        {
          icon: "devicon-express-original",
          name: "Express",
          level: "advanced",
        },
        {
          icon: "devicon-nodejs-plain",
          name: "NodeJS",
          level: "advanced",
        },
        {
          icon: "devicon-graphql-plain",
          name: "GraphQL",
          level: "intermediate",
        },
        {
          icon: "devicon-postgresql-plain",
          name: "PostgreSQL",
          level: "advanced",
        },
        {
          icon: "devicon-mongodb-plain",
          name: "MongoDB",
          level: "intermediate",
        },
      ],
    },
    {
      type: "development",
      tools: [
        {
          icon: "devicon-docker-plain",
          name: "Docker",
          level: "intermediate",
        },
        {
          icon: "devicon-git-plain",
          name: "Git",
          level: "advanced",
        },
        {
          icon: "devicon-github-original",
          name: "GitHub",
          level: "intermediate",
        },
        {
          icon: "devicon-gitlab-plain",
          name: "GitLab",
          level: "intermediate",
        },
        {
          icon: "devicon-npm-original-wordmark",
          name: "NPM",
          level: "intermediate",
        },
        {
          icon: "devicon-linux-plain",
          name: "Linux",
          level: "intermediate",
        },
      ],
    },
    {
      type: "frontend",
      tools: [
        {
          icon: "devicon-react-original",
          name: "React",
          level: "intermediate",
        },
        {
          icon: "devicon-nextjs-plain",
          name: "NextJS",
          level: "intermediate",
        },
        // {
        //   icon: "nf-oct-rocket",
        //   name: "Astro",
        //   level: "intermediate",
        // },
        {
          icon: "devicon-html5-plain",
          name: "HTML",
          level: "advanced",
        },
        {
          icon: "devicon-css3-plain",
          name: "CSS",
          level: "intermediate",
        },
      ],
    },
    {
      type: "other",
      tools: [
        {
          icon: "devicon-vscode-plain",
          name: "VSCode",
          level: "intermediate",
        },
        {
          icon: "devicon-vim-plain",
          name: "Vim/Neovim",
          level: "advanced",
        },
        {
          icon: "devicon-jest-plain",
          name: "Jest",
          level: "advanced",
        },
        {
          icon: "devicon-jira-plain",
          name: "Jira",
          level: "intermediate",
        },
        {
          icon: "devicon-confluence-plain",
          name: "Confluence",
          level: "intermediate",
        },
      ],
    },
  ],
};

export const socialIcons = {
  github: GithubIcon,
  gitlab: GitlabIcon,
  linkedin: LinkedinIcon,
} as const;
