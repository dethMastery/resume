import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full mx-auto justify-center text-center">
      <nav className="text-xl bg-ctp-base border-2 rounded-b border-solid border-ctp-sapphire border-t-[transparent] absolute left-[50%] translate-x-[-50%]">
        <Link
          activeClass="opacity-60"
          smooth
          spy
          to="about"
          className="p-4 hover:opacity-60 hover:cursor-pointer inline-block"
        >
          About
        </Link>
        <Link
          activeClass="opacity-60"
          smooth
          spy
          to="skills"
          className="p-4 hover:opacity-60 hover:cursor-pointer inline-block"
        >
          Skills
        </Link>
        <Link
          activeClass="opacity-60"
          smooth
          spy
          to="certificates"
          className="p-4 hover:opacity-60 hover:cursor-pointer inline-block"
        >
          Certificates
        </Link>
        <Link
          activeClass="opacity-60"
          smooth
          spy
          to="workExp"
          className="p-4 hover:opacity-60 hover:cursor-pointer inline-block"
        >
          Work Experience
        </Link>
      </nav>
    </div>
  );
}
