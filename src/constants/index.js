import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Aspiring web developer with a passion for creating engaging and user-friendly experiences. Possess a strong foundation in diverse programming languages and frameworks, including MERN stack, Next.js, Node and ES6. Ability to collaborate effectively within teams and contribute to project success. Technical expertise with problem-solving skills honed through competitive programming. Eager to learn and grow within a dynamic web development environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a passion where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and photograph my favourite moments.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "Teaching Assistant",
    company: "International Islamic University Chittagong",
    description: `Assist and guide 7th-semester students with their lab assignments. Assess reports, assignments, and projects.`,
    technologies: ["Numerical Methods"],
  },
];

export const PROJECTS = [
  {
    title: "Sepia",
    url: "https://sepia.onrender.com/",
    image: project1,
    description:
      "'Sepia' is a MERN stack application with features like user authentication, post creation and interaction, real-time updates, and full responsiveness. Users can sign up, sign in, create, like, and delete their own posts. The application adapts to different screen sizes and updates in real-time.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Redux",
      "Node.js",
      "Material UI",
    ],
  },
  {
    title: "Task Management App",
    url: "https://afnantask.vercel.app/",
    image: project2,
    description:
      "This is a task management application which allows users to create, view, update, and delete tasks. The application utilizes local storage for data persistence.",
    technologies: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "MobX",
    ],
  },
  {
    title: "Portfolio Website",
    url: "https://salehinafnan.me/",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Random Block Graph Generator",
    url: "https://github.com/salehinafnan/random-block-graph-generator",
    image: project4,
    description:
      "Users can create, delete, resize and move blocks that are randomly generated and are connected to their corresponding parent block.",
    technologies: ["React", "TypeScript", "JavaScript", "CSS"],
  },
];

export const CONTACT = {
  address: "Mohakhali, Dhaka, Bangladesh",
  phoneNo: "+880 1301678987",
  email: "salehinafnan@gmail.com",
};
