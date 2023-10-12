export default function Footer() {
  return (
    <div className="w-[90%] mx-auto py-6 text-center text-lg flex md:flex-row flex-col">
      <div className="w-full md:text-left md:justify-start text-center justify-center">
        made w/ 🤍 by{" "}
        <a
          href="https://suphakit.net"
          target="_blank"
          className="hover:opacity-60 hover:underline"
        >
          Suphakit P.
        </a>
      </div>
      <div className="w-full md:text-right md:justify-end text-center justify-center">
        &copy; 2023{" "}
        <a
          href="https://suphakit.net"
          target="_blank"
          className="hover:opacity-60 hover:underline"
        >
          Suphakit P.
        </a>{" "}
        All Right Reserved.
      </div>
    </div>
  );
}
