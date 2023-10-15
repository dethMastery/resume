import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full mx-auto justify-center text-center">
      <nav className="text-xl bg-ctp-base border-2 rounded-b border-solid border-ctp-sapphire border-t-[transparent] md:absolute md:left-[50%] md:translate-x-[-50%] md:w-auto w-[80%] mx-auto">
        <Link
          activeClass="opacity-60 !inline-block"
          smooth
          spy
          to="about"
          className="p-4 hover:opacity-60 hover:cursor-pointer md:inline-block hidden"
        >
          About
        </Link>
        <Link
          activeClass="opacity-60 !inline-block"
          smooth
          spy
          to="skills"
          className="p-4 hover:opacity-60 hover:cursor-pointer md:inline-block hidden"
        >
          Skills
        </Link>
        <Link
          activeClass="opacity-60 !inline-block"
          smooth
          spy
          to="certificates"
          className="p-4 hover:opacity-60 hover:cursor-pointer md:inline-block hidden"
        >
          Certificates
        </Link>
        <Link
          activeClass="opacity-60 !inline-block"
          smooth
          spy
          to="workExp"
          className="p-4 hover:opacity-60 hover:cursor-pointer md:inline-block hidden"
        >
          Work Experience
        </Link>
      </nav>
    </div>
  );
}
