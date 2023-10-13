import UserData from "../../modules/userData";
import SkillBox from "../SkillBox";

export default function Skills() {
  return (
    <div id="skill" className="w-full min-h-screen">
      <div className="w-full h-[10vh] flex flex-row items-center justify-start text-left underline">
        <h3 className="text-2xl px-8">Skills</h3>
      </div>
      <div className="w-full md:min-h-[90vh] h-auto">
        <div className="w-[80%] h-full mx-auto flex flex-row flex-wrap gap-4 justify-center text-center">
          {UserData.skills.map((data) => {
            return <SkillBox data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
