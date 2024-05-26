import Image from "next/image";
import Button from "./Button";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Work = () => {
  return (
    <section className="bg-white mb-24">
      <div className="max-container padding-container">
        <div className="flexBetween pt-32">
          <Title title="Work" variant="bold-104" color="black-10" />
          <Button
            title="See all Projects"
            variant="btn_dark"
            icon={true}
            type="button"
          />
        </div>

        <div className="grid grid-cols-2 py-10 w-full gap-5">
          <div className="gap-5">
            <Image
              src="/work-phone.png"
              alt="Phone"
              width={627}
              height={679}
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col gap-y-6">
              <Title title="Optinet" variant="regular-40" color="black-10" />
              <Paragraph
                text="Refreshed the brand identity to align with the company's innovative ethos, resulting in increased brand recognition and market share."
                color="text-gray-40"
                size="regular-14"
                align="start"
              />
            </div>
          </div>
          <div className="gap-5">
            <Image
              src="/stream.png"
              alt="Stream"
              width={627}
              height={679}
              className="rounded-lg mb-6"
            />

            <div className="flex flex-col gap-y-6">
              <Title title="DEF Retail" variant="regular-40" color="black-10" />
              <Paragraph
                text="Conducted design thinking workshops to foster innovation and problem-solving, leading to the development of creative solutions to healthcare challenges."
                color="text-gray-40"
                size="regular-14"
                align="start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
