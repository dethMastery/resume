import UserData from "../../modules/userData";
import DetailedItem from "../DetailedItem";

export default function Me() {
  return (
    <div id="about" className="w-full md:h-screen h-auto">
      <div className="w-full h-[10vh] flex flex-row items-center justify-start text-left underline">
        <h3 className="text-2xl px-8">Who Am I?</h3>
      </div>
      <div className="w-full h-auto md:h-[90vh] flex flex-col md:flex-row gap-y-[2rem] md:gap-0">
        <div className="w-full flex flex-row justify-center items-center text-center">
          <img
            src="/Me_Profile.webp"
            alt="profile"
            className="rounded-[50%] p-4 border-solid border-[5px] border-ctp-sapphire md:w-[500px] w-[250px]"
          />
        </div>
        <div className="w-full">
          <div className="px-12">
            <div className="font-medium">
              <h3 className="text-3xl py-1">{UserData.Me.name}</h3>
              <h5 className="text-2xl pt-1">{UserData.Me.subText[0]}</h5>
              <h5 className="text-xl">{UserData.Me.subText[1]}</h5>
            </div>
            <p className="py-4">{UserData.Me.desp}</p>
            <div className="py-4 flex flex-row flex-wrap justify-between gap-y-6">
              {UserData.Me.details.map((data) => {
                return <DetailedItem data={data} type="detailed" />;
              })}
            </div>
            <h3 className="text-2xl font-bold pt-4 pb-2 underline">Contacts</h3>
            <div className="pt-4 pb-2 flex flex-row flex-wrap justify-between gap-y-6">
              {UserData.Me.contacts.map((data) => {
                return <DetailedItem data={data} type="contact" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
