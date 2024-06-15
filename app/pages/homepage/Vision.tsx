import Paragraph from "./Paragraph";

const Vision = () => {
  return (
    <div className="bg-black-10 md:h-screen flex items-center justify-center py-8">
      <div className="max-container padding-container text-center">
        <Paragraph
          text="Ticketto aims at fueling success through design thinking, brand development, and innovation for impactful growth and authentic connections."
          color="text-green-50"
          size="bold-32 md:bold-64"
          align="center"
        />
      </div>
    </div>
  );
};

export default Vision;
