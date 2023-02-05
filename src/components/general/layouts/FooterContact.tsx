import { FC } from "react";
import SocialIcons from "./SocialIcons";
import { RiPhoneFill } from "react-icons/ri";
import { IoIosChatboxes } from "react-icons/io";

const FooterContact: FC = () => {
  return (
    <div className="container text-gray-600">
      <div className="py-2 flex flex-col text-center gap-5 sm:gap-0">
        <p className="text-5xl font-sans text-secondary">
          <span className="text-black font-bold font-serif">Let’s </span>
          Connect. 💬
        </p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default FooterContact;
