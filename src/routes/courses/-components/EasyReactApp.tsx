import BeautifulTitle from "../../../components/UI/Title";
import img from "./react.webp";

const EasyReactApp = () => {
  return (
    <div>
      <BeautifulTitle
        label="Don't Over react. Just React"
        title="Be an"
        highlightedWord="Actor"
        subtitle="Learn to react from Doctor Drake Remorey....Next - Smell the fart act... "
      />
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={img}
          alt="react Programming"
          className="w-full h-75 md:h-100 object-contain p-4"
        />
      </div>

      <div className="prose prose-invert">
        <p></p>
      </div>
    </div>
  );
};

export default EasyReactApp;
