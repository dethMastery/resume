import UserData from "../../modules/userData";
import ExpCard from "../ExpCard";

export default function WorkExperience() {
  const works = UserData.workExp.reverse();

  return (
    <div id="workExp" className="w-full min-h-screen">
      <div className="w-full h-[10vh] flex flex-row items-center justify-start text-left underline">
        <h3 className="text-2xl px-8">Work Experience</h3>
      </div>
      <div className="w-full md:min-h-[90vh] h-auto">
        <div className="flex flex-row justify-center text-center gap-4">
          {works.map((data) => {
            return <ExpCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
