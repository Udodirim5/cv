import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiRedux,
} from "react-icons/si";
const github = "https://github.com/Udodirim5";

export const myInfo = {
  name: "Nnodimele Udodirim",
  image: "images/udodirim.jpg",
  id: 1,
  title: "Frontend Developer",
  description: `Motivated and self-taught frontend developer with hands-on experience building responsive and interactive web applications. Passionate about turning ideas into functional, user-friendly interfaces. Eager to contribute to a professional development team and grow through real-world challenges.`,
  website: "zeirrow.dev",
  contact: {
    email: "udodirimwisdom@gmail.com",
    phone: "2349033951020",
    github: "udodirim5",
    linkedIn: "https://www.linkedin.com/in/nnodimele-udodirim-5a5a5a5a",
    twitter: "https://twitter.com/zeirrow",
  },
};

export const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#264DE4" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F0DB4F" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "React", icon: FaReact, color: "#61DBFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express js", icon: SiExpress, color: "#000000" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
  { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
];

export const projects = [
  {
    id: 1,
    title: "Code To Video ",
    description:
      "Convert code text into MP4 videos with typing animation and syntax highlighting.",
    tech: ["React", "Tailwind", "CodeMirror"],
    github: `${github}/code-to-video`,
    live: "https://code-to-video.vercel.app/",
    screenshot: "/screenshots/code2video.png",
  },
  {
    id: 2,
    title: "Task Flow | Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    github: `${github}/task-flow`,
    live: "https://task-flow-beta-pearl.vercel.app/",
    screenshot: "/screenshots/taskFlow.png",
  },
  {
    id: 3,
    title: "Pizza Delivery App",
    description:
      "Frontend that fetches pizza menu from backend API and sends orders via POST requests.",
    tech: ["React", "API Integration", "Tailwind", "Redux"],
    github: `${github}/pizza-delivery`,
    live: "https://udodirim5.github.io/pizza-delivery/",
    screenshot: "/screenshots/fast-pizza.png",
  },
];

export const experience = [
  {
    year: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    description:
      "Leading React development team, architecting scalable frontend solutions.",
  },
  {
    year: "2019 - 2022",
    title: "Frontend Developer",
    company: "Digital Solutions",
    description: "Built responsive UIs and implemented design systems.",
  },
  {
    year: "2017 - 2019",
    title: "Junior Developer",
    company: "StartUp Ventures",
    description:
      "Assisted in full-stack development and learned modern frameworks.",
  },
];

export const education = [
  {
    degree: "Senior Secondary Certificate (SSC),",
    institution: "Udo Secondary Technical School",
    duration: "2009 - 2015",
  },
];

export const certifications = [
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    platform: "Udemy",
    url: "https://ude.my/UC-ec6ff245-864c-40c6-b7a5-613d52d3bb4b",
    year: "2024",
  },
  {
    name: "Full Stack Web Development with PHP",
    platform: "ApTech",
    url: "",
    year: "2023",
  },
];
