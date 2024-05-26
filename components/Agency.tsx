import Image from "next/image";
import Paragraph from "./Paragraph";
import Title from "./Title";
import Button from "./Button";

const Agency = () => {
  return (
    <section className="bg-white">
      <div className="max-container padding-container flex flex-col">
        <div className="pt-20 pb-12 items-center justify-center text-center">
          <Title title="- Our Agency -" variant="bold-104" color="black-10" />
        </div>

        <div className="grid grid-cols-2">
          <div className="rounded-3xl">
            <Image src="/agency-1.png" alt="agency" width={568} height={376} />
          </div>
          <div>
            <Paragraph
              color="text-gray-10"
              text="At Ticketto, we prioritize people, recognizing that exceptional design profoundly impacts the lives of its users. By empowering individuals, we innovate solutions to unique challenges, catalyzing progress and unleashing potential for our clients."
              size="regular-14"
              align="start"
              padding="pb-6"
            />
            <Paragraph
              color="text-gray-10"
              text="Our unwavering independence fuels our creative drive and technological approach, enabling us to maintain quality and consistently deliver exceptional results. "
              size="regular-14"
              align="start"
              padding="pb-6"
            />
            <Button type="button" title="About Us" variant="btn_dark" icon={true} />
            <div className="py-10 flex justify-end items-end">
              <Image src="/agency-2.png" alt="agency" width={412} height={375} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
