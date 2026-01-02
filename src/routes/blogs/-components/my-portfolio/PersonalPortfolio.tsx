import { BuildMyWebsite } from "./BuildMyWebsite";
import { GetMyDomain } from "./GetMyDomain";
import { TabbedGrid } from "../../../../components/UI/TabbedGrid";
import Example from "./Example";

const PersonalPortfolio = () => {
  // 1. Define your steps in an array
  const mySteps = [
    {
      id: "domain",
      title: "Get Your Domain",
      content: <GetMyDomain />,
    },
    {
      id: "build",
      title: "Build Your Website",
      content: <BuildMyWebsite />,
    },
    {
      id: "example",
      title: "Build and Deploy Example",
      content: <Example />,
    },
  ];

  return <TabbedGrid tabs={mySteps} />;
};

export default PersonalPortfolio;
