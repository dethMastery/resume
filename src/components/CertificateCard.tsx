interface ImportData {
  id: number;
  slug: string;
  name: string;
  link: string | undefined;
  img: string;
  desp: string;
}

interface CertsData {
  data: ImportData;
}

export default function CertCard(data: CertsData) {
  let linkMSG;

  if (data.data.link !== undefined) {
    linkMSG = (
      <a href={data.data.link} target="_blank" className="hover:opacity-60">
        {data.data.name}
      </a>
    );
  } else {
    linkMSG = <span>{data.data.name}</span>;
  }

  return (
    <div
      className="w-[18rem] flex flex-col gap-4 rounded bg-ctp-text text-ctp-base"
      id={data.data.slug}
    >
      <div
        className="w-full h-[12rem] !bg-center !bg-cover !bg-no-repeat rounded-t"
        style={{ background: `url(${data.data.img})` }}
      ></div>
      <div className="w-full h-[100%] pb-4">
        <h2 className="font-bold text-xl w-auto pb-2 px-2">{linkMSG}</h2>
        <p className="px-2 w-auto">{data.data.desp}</p>
      </div>
    </div>
  );
}
