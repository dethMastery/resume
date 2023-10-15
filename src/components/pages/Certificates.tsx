import UserData from "../../modules/userData";
import CertCard from "../CertificateCard";

export default function Certificates() {
  const cert = UserData.certificates.reverse();
  return (
    <div id="certificates" className="w-full min-h-screen">
      <div className="w-full h-[10vh] flex flex-row items-center justify-start text-left underline">
        <h3 className="text-2xl px-8">Certificates</h3>
      </div>
      <div className="w-full md:h-[90vh] h-auto flex flex-row flex-wrap gap-4 items-start justify-center text-center">
        {/* Card */}
        {cert.map((data) => {
          return <CertCard data={data} />;
        })}
      </div>
    </div>
  );
}
