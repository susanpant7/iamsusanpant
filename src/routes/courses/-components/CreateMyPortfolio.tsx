import BeautifulTitle from "../../../components/UI/Title";
import img from "./portfolio.webp";

const CreateMyPortfolio = () => {
  return (
    <div className="space-y-6">
      <BeautifulTitle
        label="Why not to create your page?"
        title="Create My"
        highlightedWord="Portfolio"
        subtitle="You don't need to create. You just eat and sleep"
      />
      <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={img}
          alt="c# Programming"
          className="w-full h-75 md:h-100 object-contain p-4"
        />
      </div>

      <div className="prose prose-invert">
        <p></p>
      </div>
    </div>
  );
};

export default CreateMyPortfolio;
