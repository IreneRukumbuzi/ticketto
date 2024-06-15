import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-black-10">
      <div className="max-container padding-container">
        <div className="flex justify-between items-baseline">
          <div>
            <p className="md:regular-218 text-white">Let&lsquo;s work</p>
          </div>
          <div className="">
            <Button type="button" title="Start a Project" variant="btn_white" />
          </div>
        </div>

        <div className="border bg-white opacity-10 my-10" />

        <div className="flex flex-wrap justify-between md:flex-nowrap">
          <div className=" my-4">
            <Button
              type="button"
              title="Join our Newsletter"
              variant="btn_green"
            />
          </div>

          <div className=" flex flex-wrap md:flex-nowrap justify-between w-1/2">
            <div className="">
              <FooterColumn title={FOOTER_LINKS.title}>
                <ul className="regular-16 flex flex-col gap-4 text-white">
                  {FOOTER_LINKS.links.map((link) => (
                    <li key={link.label}>
                      <Link href="/">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
            <div className="">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-16 flex flex-col gap-4 text-white">
                  {SOCIALS.links.map((link) => (
                    <li key={link.label}>
                      <Link href="/">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
            <div className="">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-16 flex flex-col gap-4 text-white">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <li key={link.label}>
                      <Link href="/">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-white opacity-10 mb-7 mt-10" />

        <div className="flexBetween">
          <div>
            <p className="text-white">Ticketto 2024. All Rights Reserved</p>
          </div>
          <div>
            <p className="text-white">Privacy & Terms</p>
          </div>
        </div>

        <div className="">
          <p className=" text-white text-opacity-10 md:regular-286 w-full">TICKETTO</p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-16 whitespace-nowrap text-gray-10">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
