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
          className="p-2 border-secondary text-secondary border rounded-full"
        />
      </Link>
      <Link href="#">
        <RiGithubFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full"
        />
      </Link>
      <Link href="#">
        <RiTwitterFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full"
        />
      </Link>
      <Link href="#">
        <RiFacebookCircleFill
          size={50}
          className="p-2 border-secondary text-secondary border rounded-full"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
