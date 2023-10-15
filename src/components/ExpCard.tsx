interface data {
  duration: string;
  name: string;
  position: string;
  img: string;
}

interface expData {
  data: data;
}

export default function ExpCard(data: expData) {
  return (
    <div className="min-w-[20rem] flex flex-row bg-ctp-text text-ctp-base rounded hover:scale-110">
      <div
        className="min-w-[8rem] min-h-[8rem] !bg-cover !bg-no-repeat !bg-center rounded-l"
        style={{ background: `url(${data.data.img})` }}
      ></div>
      <div className="w-[12rem] p-4">
        <h2 className="text-xl font-bold py-1">{data.data.name}</h2>
        <p className="text-ctp-overlay py-1">{data.data.position}</p>
        <p className="text-sm text-ctp-overlay1 py-2">{data.data.duration}</p>
      </div>
    </div>
  );
}
