import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const Example = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: "/blogs/2" });
  };

  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div
        onClick={handleClick}
        className="cursor-pointer max-w-lg w-full p-8 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-400 shadow-xl hover:scale-105 transition-transform duration-300 border border-white/10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          View the Example
        </h2>
        <p className="text-slate-200 mb-6 text-lg">
          To view an example to create a React app, then deploy it using Vercel
          and Mercantile domain hosting, click here.
        </p>
        <div className="flex items-center gap-2 text-white font-semibold group">
          <span className="group-hover:underline">Go to Example</span>
          <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default Example;
