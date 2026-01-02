import { BuildAndDeployReactApp } from "../-components/build-deploy-react/BuildAndDeployReactApp";
import CSharp from "../-components/CSharp";
import MachineLearning from "../-components/MachineLearning";
import PersonalPortfolio from "../-components/my-portfolio/PersonalPortfolio";
import Python from "../-components/Python";
import { LOGOS } from "../../../lib/Logos";

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
    label: "Master Modern C# Development",
    title: "Learn C#",
    subtitle:
      "Master the fundamentals of C# and .NET, from core syntax to building real-world applications with confidence.",
    logo: LOGOS.csharp,
    component: CSharp,
  },

  {
    id: "4",
    label: "Start Your Python Journey",
    title: "Learn Python",
    subtitle:
      "Get started with Python programming, covering essentials for scripting, automation, and backend development.",
    logo: LOGOS.python,
    component: Python,
  },
  {
    id: "5",
    label: "Understand Intelligent Systems",
    title: "Machine Learning",
    subtitle:
      "Explore the fundamentals of machine learning, from data preprocessing to training and evaluating intelligent models.",
    logo: LOGOS.machinelearning,
    component: MachineLearning,
  },
];
