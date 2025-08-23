import { FaYoutube, FaFacebook, FaEnvelope, FaCode } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux Toolkit",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/abhiram-sankarasetty",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/abhiramsankarasetty",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:sankarasettyabhiram@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },

] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Doubtroom - Full Stack Doubt-Solving Platform",
    description:
      "Built a scalable Q&A platform handling 2,000+ concurrent users with real-time posting and resolution of academic doubts. Implemented JWT authentication, MongoDB indexing for 70% performance improvement, debouncing mechanisms reducing API calls by 80%, and Redux state management. Features role-based access control, input validation, and rate-limiting. Attracted 150+ active users in 10 days and presented to 20+ AICTE faculty.",
    image: "/projects/doubtroom.png",
    link: "https://doubtroom.com",
    technologies: ["React.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux", "JWT"],
    status: "Live",
  },
  {
    title: "Voxa AI - Smart Chatbot Interface",
    description:
      "Developed an AI-powered chat application using Gemini API with 80% session memory accuracy. Features multi-threaded chats with intuitive slide UI, secure authentication, and real-time chat interface using Redux Toolkit improving render efficiency by 40% under load. Enables users to manage parallel conversations seamlessly.",
    image: "/projects/voxa.png",
    link: "https://voxa-mrhat.netlify.app/",
    technologies: ["React.js", "Gemini API", "Redux Toolkit", "Firebase"],
    status: "Live",
  },
  {
    title: "Blogify",
    description:
      "Blogify App is a modern, full-stack web application designed for seamless content creation and engagement. Built with React.js on the frontend, it leverages powerful tools such as React Router, Axios, React Context API, Styled-Components, and React Icons to deliver a responsive and visually appealing user experience.",
    image: "/projects/blogify.png",
    link: "https://blogify-mrhat.netlify.app/",
    technologies: ["React.js", "Tailwind CSS", "appwrite"],
    status: "Live",
  },
  {
    title: "AQI Sensing",
    description:
      "The frontend of the AQI Sensing Project is developed using React and Leaflet.js for a dynamic and interactive user interface. It features a live map that visualizes real-time AQI data, with color-coded zones indicating air quality levels: red for danger, orange for moderate, and green for safe. The dashboard displays nearby AQI readings categorized into Danger, Safe, and Moderate zones. It also integrates a weather widget, showing temperature, humidity, and wind speed alongside AQI data for enhanced user insight.",
    image: "/projects/aqi.png",
    link: "https://aqisensing.netlify.app/",
    technologies: ["React.js", "Leaflet Js", "CSS", "Charts.Js"],
    status: "Live",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Professional",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/abhiram-sankarasetty",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/abhiramsankarasetty",
      },
      {
        name: "LeetCode",
        icon: FaCode,
        link: "https://leetcode.com/u/abhiramsankarasetty05/",
      },
    ],
  },
  {
    title: "Projects",
    data: [
      {
        name: "Doubtroom",
        icon: null,
        link: "https://doubtroom.vercel.app",
      },
      {
        name: "Voxa AI",
        icon: null,
        link: "https://voxa-ai.vercel.app",
      },
      {
        name: "Portfolio",
        icon: null,
        link: "https://abhiram-portfolio.vercel.app",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Email",
        icon: null,
        link: "mailto:sankarasettyabhiram@gmail.com",
      },
      {
        name: "Phone",
        icon: null,
        link: "tel:+917842537716",
      },
      {
        name: "Resume",
        icon: null,
        link: "/resume/resume.pdf",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "LeetCode",
    description: "Secured Top 1.75% (Rank 565/32,157) in a Biweekly Contest. Solved 450+ problems.",
    link: "https://leetcode.com/u/abhiramsankarasetty05/",
  },
  {
    title: "Hacktoberfest 2024",
    description: "Contributed to 5+ open-source repos. Improved fetch logic and UI.",
    link: "https://www.holopin.io/@mrhat05#badges",
  },
] as const;

export const EDUCATION = [
  {
    institution: "National Institute of Technology, Agartala",
    degree: "B. Tech in Electrical Engineering",
    location: "Agartala, Tripura",
    dates: "2023 – 2027",
  },
  {
    institution: "Tirumula Junior College",
    degree: "Board of Intermediate Education Andhra Pradesh (MPC)",
    location: "Rajahmundry, Andhra Pradesh",
    dates: "2021 – 2023",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "Core Member - Web Development Team",
    organization: "Developer and Coders Club (DCC), NIT Agartala",
    dates: "2023 – Present",
    responsibilities: [
      "Conducted React.js and Git workshops for 100+ students.",
      "Mentored 10+ juniors on projects and open-source contributions.",
    ],
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/abhiramsankarasetty/space-portfolio",
};
