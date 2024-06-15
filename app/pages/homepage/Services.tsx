import Image from "next/image";
import Title from "../../../components/common/Title";
import Paragraph from "./Paragraph";
import Button from "../../../components/common/Button";

const Services = () => {
  return (
    <section className="bg-black-10">
      <div className="max-container padding-container flex flex-col py-4">
        <div className="my-20">
          <Title color="white" title="Services" variant="bold-48 md:bold-104" />
        </div>
        <div>
          <div className="md:grid grid-cols-3 flex flex-col flex-col">
            <div className="flex max-md:order-2">
              <span className="text-white text-opacity-30 regular-32 pr-2">
                01.
              </span>{" "}
              <Title
                color="white"
                variant="regular-32"
                title="Design Thinking"
              />
            </div>
            <div className="max-md:order-3">
              <Paragraph
                text="Ticketto employs design thinking methodologies to solve complex problems and drive innovation. This involves empathizing with users, defining problem statements, ideating creative solutions, prototyping concepts, and testing ideas through iterative feedback loops. "
                color="text-gray-40"
                size="regular-14"
                align="start"
                padding="pb-6"
              />
              <Button
                type="button"
                title="Learn more"
                icon={true}
                variant="btn_dark_white_border"
              />
            </div>
            <div className="max-md:order-1">
              <Image
                src="/services-phone.png"
                alt="services"
                width={260}
                height={317}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="border bg-white opacity-10 my-10" />

          <div className="md:grid grid-cols-3 flex flex-col">
            <div className="flex max-md:order-2">
              <span className="text-white text-opacity-30 regular-32 pr-2">
                02.
              </span>
              <Title
                color="white"
                variant="regular-32"
                title="Problem Solving"
              />
            </div>
            <div className="max-md:order-3">
              <Paragraph
                text="At Ticketto, we thrive on tackling challenges head-on and finding innovative solutions. Our problem-solving approach combines analytical rigor with creative thinking, enabling us to address a wide range of business problems effectively."
                color="text-gray-40"
                size="regular-14"
                align="start"
                padding="pb-6"
              />
              <Button
                type="button"
                title="Learn more"
                icon={true}
                variant="btn_dark_white_border"
              />
            </div>
            <div className="max-md:order-1">
              <Image
                src="/services-phone.png"
                alt="services"
                width={260}
                height={317}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="border bg-white opacity-10 my-10" />

          <div className="md:grid grid-cols-3 flex flex-col">
            <div className="flex max-md:order-2">
              <span className="text-white text-opacity-30 regular-32 pr-2">
                03.
              </span>
              <Title
                color="white"
                variant="regular-32"
                title="Brand Development"
              />
            </div>
            <div className="max-md:order-3">
              <Paragraph
                text="Our brand development services encompass everything from crafting compelling brand strategies to designing memorable visual identities."
                color="text-gray-40"
                size="regular-14"
                align="start"
                padding="pb-6"
              />
              <Button
                type="button"
                title="Learn more"
                icon={true}
                variant="btn_dark_white_border"
              />
            </div>
            <div className="max-md:order-1">
              <Image
                src="/services-phone.png"
                alt="services"
                width={260}
                height={317}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
