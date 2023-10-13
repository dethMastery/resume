import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="hidden md:block md:fixed bottom-0 left-0 bg-ctp-base z-40 rounded-tr border-solid border-[2px] border-t-ctp-sapphire border-r-ctp-sapphire border-b-[transparent] border-l-[transparent]">
      <ul className="text-xl">
        <li className="p-4 hover:opacity-60 hover:cursor-pointer">
          <Link activeClass="opacity-60" smooth spy to="about">
            About
          </Link>
        </li>
        <li className="p-4 hover:opacity-60 hover:cursor-pointer">
          <Link activeClass="opacity-60" smooth spy to="skills">
            Skills
          </Link>
        </li>
        <li className="p-4 hover:opacity-60 hover:cursor-pointer">
          <Link activeClass="opacity-60" smooth spy to="certificates">
            Certificates
          </Link>
        </li>
        <li className="p-4 hover:opacity-60 hover:cursor-pointer">
          <Link activeClass="opacity-60" smooth spy to="workExp">
            Work Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}
