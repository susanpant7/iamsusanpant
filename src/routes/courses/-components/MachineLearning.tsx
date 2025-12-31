import BeautifulTitle from "../../../components/UI/Title";
import img from "./machinelearning.webp";

const MachineLearning = () => {
  return (
    <div>
      <BeautifulTitle
        label="Sew Your Own Future"
        title="Watch"
        highlightedWord="Out"
        subtitle="Be careful while learning machines. They can be dangerous...."
      />
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={img}
          alt="ML Programming"
          className="w-full h-75 md:h-100 object-contain p-4"
        />
      </div>

      <div className="prose prose-invert">
        <p></p>
      </div>
    </div>
  );
};

export default MachineLearning;
