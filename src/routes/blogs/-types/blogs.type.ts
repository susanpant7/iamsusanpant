import { BuildAndDeployReactApp } from "../-components/build-deploy-react/BuildAndDeployReactApp";
import AwaitInCSharp from "../-components/AwaitInCSharp";
import MachineLearning from "../-components/MachineLearning";
import PersonalPortfolio from "../-components/my-portfolio/PersonalPortfolio";
import Python from "../-components/Python";
import { LOGOS } from "../../../lib/Logos";
import Architecture3M from "../-components/monolith-modular-microservice/Architecture3M.tsx";
import CleanCodeArch from "../-components/clean-code-arch/CleanCodeArch.tsx";
import FluentApiDataAccessExample from "../-components/fluent-api-data-access/FluentApiDataAccessExample.tsx";

export const BLOGS = [
  {
    id: "1",
    label: "Build a Portfolio That Stands Out",
    title: "Create Your Own Website",
    subtitle:
      "Design and build a modern personal portfolio that showcases your skills, projects, and professional identity.",
    logo: LOGOS.profile,
    component: PersonalPortfolio,
  },
  {
    id: "2",
    label: "Build Powerful User Interfaces",
    title: "Build and Deploy React",
    subtitle:
      "Create a simple React application. Then deploy it using vercel for free hosting with continuous deployment.",
    logo: LOGOS.react,
    component: BuildAndDeployReactApp,
  },
  {
    id: "3",
    label: "Why your thread goes on a coffee break ☕",
    title: "Async / Await in .NET",
    subtitle:
      "In almost every .NET (C#) application, async and await are used sometimes knowingly, sometimes because copy–paste is a lifestyle.",
    logo: LOGOS.csharp,
    component: AwaitInCSharp,
  },
  {
    id: "4",
    label: "Explore App Architecture",
    title: "Architecture: Monolith → Modular → Microservices",
    subtitle:
      "Learn how apps evolve as traffic grows: start with a monolith, organize into a modular monolith, and finally scale with microservices. Covers scaling, deployments, team growth, and trade-offs.",
    logo: LOGOS.architectureChoice,
    component: Architecture3M,
  },
  {
    id: "clean-code-architecture",
    label: "Clean Code Architecture",
    title: "Clean Architecture in .NET",
    subtitle:
      "Understanding Layers, Responsibilities, and the Flow of Dependencies",
    logo: LOGOS.cleanCodeArch,
    component: CleanCodeArch,
  },
  {
    id: "fluent-api-data-access",
    label: "Fluent API Data Access",
    title: "Clean Data Access Layer with Fluent API",
    subtitle:
      "What I Learned from Keeping Entities Clean and Centralizing Schema Configuration",
    logo: LOGOS.fluentApi,
    component: FluentApiDataAccessExample,
  },
  {
    id: "5",
    label: "Start Your Python Journey",
    title: "Learn Python",
    subtitle:
      "Get started with Python programming, covering essentials for scripting, automation, and backend development.",
    logo: LOGOS.python,
    component: Python,
  },
  {
    id: "6",
    label: "Understand Intelligent Systems",
    title: "Machine Learning",
    subtitle:
      "Explore the fundamentals of machine learning, from data preprocessing to training and evaluating intelligent models.",
    logo: LOGOS.machinelearning,
    component: MachineLearning,
  },
];
