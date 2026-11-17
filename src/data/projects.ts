export interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    categoryLabel: "01 — Web App",
    description: "A full-stack e-commerce platform with real-time inventory management and seamless checkout experience.",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "AI Dashboard",
    category: "Machine Learning",
    categoryLabel: "02 — AI / ML",
    description: "Interactive analytics dashboard powered by machine learning models for predictive insights.",
    image: "/projects/project-2.jpg",
    tags: ["Python", "React", "TensorFlow"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Development",
    categoryLabel: "03 — Mobile",
    description: "A secure and intuitive mobile banking application with biometric authentication.",
    image: "/projects/project-3.jpg",
    tags: ["React Native", "Node.js", "Firebase"],
    link: "#",
  },
  {
    id: 4,
    title: "Design System",
    category: "UI/UX Design",
    categoryLabel: "04 — Design",
    description: "A comprehensive design system with reusable components and detailed documentation.",
    image: "/projects/project-4.jpg",
    tags: ["Figma", "Storybook", "CSS"],
    link: "#",
  },
  {
    id: 5,
    title: "Cloud Infrastructure",
    category: "DevOps",
    categoryLabel: "05 — DevOps",
    description: "Automated cloud infrastructure with CI/CD pipelines and monitoring dashboards.",
    image: "/projects/project-5.jpg",
    tags: ["AWS", "Docker", "Terraform"],
    link: "#",
  },
  {
    id: 6,
    title: "Social Media Platform",
    category: "Full Stack",
    categoryLabel: "06 — Full Stack",
    description: "A real-time social media platform with live streaming and content creation tools.",
    image: "/projects/project-6.jpg",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    link: "#",
  },
];

export default projects;
