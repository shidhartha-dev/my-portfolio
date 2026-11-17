export interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Websites & Web Apps",
    description: "Modern, responsive websites and progressive web apps built with cutting-edge technologies.",
    icon: "globe",
  },
  {
    title: "API Development",
    description: "Scalable RESTful and GraphQL APIs with robust authentication and documentation.",
    icon: "server",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design with wireframes, prototypes, and polished visual interfaces.",
    icon: "palette",
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure setup, CI/CD pipelines, and automated deployment workflows.",
    icon: "cloud",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native-like performance and smooth UX.",
    icon: "smartphone",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, technology stack guidance, and performance optimization.",
    icon: "lightbulb",
  },
];

export default services;
