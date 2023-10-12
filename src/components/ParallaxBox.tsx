export default function ParallaxBox(props: { height: string }) {
  return (
    <div
      className="w-full flex flex-row items-center"
      style={{ height: props.height }}
    >
      <div
        className="w-[80%] h-[90%] mx-auto !bg-fixed !bg-center !bg-no-repeat"
        style={{ background: "url(/Parallax_BG.webp)" }}
      >
        <div className="w-full h-full bg-pastel-black bg-opacity-70"></div>
      </div>
    </div>
  );
}
