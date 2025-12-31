import CreateMyPortfolio from "../-components/CreateMyPortfolio";
import CSharp from "../-components/CSharp";
import EasyReactApp from "../-components/EasyReactApp";
import MachineLearning from "../-components/MachineLearning";
import Python from "../-components/Python";
import { LOGOS } from "../../../lib/Logos";

export const COURSES = [
  { id: '1', title: 'Learn C#', logo:LOGOS.csharp, component: CSharp },
  { id: '2', title: 'Create My Portfolio', logo:LOGOS.profile, component: CreateMyPortfolio },
  { id: '3', title: 'Learn React', logo:LOGOS.react, component: EasyReactApp },
  { id: '4', title: 'Learn Python', logo:LOGOS.python, component: Python },
  { id: '5', title: 'Machine Learning', logo:LOGOS.machinelearning, component: MachineLearning },
];