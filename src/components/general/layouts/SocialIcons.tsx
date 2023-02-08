import Link from "next/link";
import { FC } from "react";
import {
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";

const SocialIcons: FC = () => {
  return (
    <div className="flex flex-row space-x-4 text-white justify-start mt-8">
      <Link href="#">
        <RiLinkedinBoxFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
        />
      </Link>
      <Link href="#">
        <RiGithubFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
        />
      </Link>
      <Link href="#">
        <RiTwitterFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
        />
      </Link>
      <Link href="#" rel="noreferer noopener" target="_blank">
        <RiFacebookCircleFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full hover:scale-110 hover:-translate-y-2 transition-all delay-150 duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
