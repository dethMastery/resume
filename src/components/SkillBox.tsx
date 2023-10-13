interface ImportData {
  name: string;
  link: string;
  img: string;
}

interface SkillData {
  data: ImportData;
}

export default function SkillBox(data: SkillData) {
  return (
    <a
      href={data.data.link}
      target="_blank"
      className="block hover:opacity-60 hover:scale-85"
    >
      <img
        src={data.data.img}
        alt={data.data.name}
        className="w-[100px] h-[100px]"
      />
    </a>
  );
}
