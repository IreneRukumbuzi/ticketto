import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-whitish-10">
      <div className="max-container padding-container">
        <div className="">
          <h1 className="bold-48 md:bold-112">Your Ticket to</h1>

          <div className="flex">
            <Image src="less.svg" alt="menu" width={59} height={100} />
            <h1 className="bold-48 md:bold-112">Design Thinking</h1>
          </div>
        </div>

        <div className="pt-16 w-full">
          <Image
            src="/phones-bg.png"
            alt="phones_bg"
            width={1440}
            height={432}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
