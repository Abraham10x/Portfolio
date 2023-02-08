import { FC } from "react";
import SocialIcons from "./SocialIcons";

const FooterContact: FC = () => {
  return (
    <div className="text-gray-600 basis-1/2 sm:mt-5 lg:mt-0">
      <div className="py-2 flex flex-col text-center gap-0">
        <p className="text-left text-3xl sm:text-4xl lg:text-5xl font-sans text-secondary">
          <span className="text-black font-bold font-serif">Let’s </span>
          Connect. 💬
        </p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default FooterContact;
