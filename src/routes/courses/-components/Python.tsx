import BeautifulTitle from "../../../components/UI/Title";
import img from "./python.webp";

const Python = () => {
  return (
    <div>
      <BeautifulTitle
        label="Snake it till you make it"
        title="They can"
        highlightedWord="Bite"
        subtitle="Learn to dance with python from baba ranchod rathore...."
      />
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={img}
          alt="Python Programming"
          className="w-full h-75 md:h-100 object-contain p-4"
        />
      </div>

      <div className="prose prose-invert">
        <p></p>
      </div>
    </div>
  );
};

export default Python;
