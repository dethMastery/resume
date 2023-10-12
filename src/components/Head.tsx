import "./Head.css";
import UserData from "../modules/userData";

export default function Head() {
  return (
    <div
      className="w-full h-screen !bg-cover !bg-no-repeat !bg-center"
      style={{ background: "url(/Head_BG.webp)" }}
    >
      <div className="w-full h-full bg-ctp-base bg-opacity-60 backdrop-blur-sm">
        <div className="w-full h-full flex flex-row justify-center items-center text-center text-whitesmoke aniBG">
          <div className="text-center">
            <h4 className="text-xl pb-2 opacity-80">{UserData.Head.desp}</h4>
            <h1 className="text-5xl pt-2">{UserData.Head.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
