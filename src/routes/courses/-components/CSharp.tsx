import BeautifulTitle from "../../../components/UI/Title";
import img from "./csharp.webp";

const CSharp = () => {
  return (
    <div className="space-y-6">
      <BeautifulTitle
        label="Don't Learn To Code"
        title="Be a"
        highlightedWord="Guitarist"
        subtitle="Its easier to learn C# of guitar than C# language..."
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

export default CSharp;
