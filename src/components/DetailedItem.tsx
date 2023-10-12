interface data {
  floor: string;
  value: string;
}

interface items {
  data: data;
  type: string;
}

export default function DetailedItem(item: items) {
  let itemComponent;
  let floorData;

  if (item.type === "detailed") {
    if (item.data.floor === "Birth Date") {
      const date = new Date();
      const bDate = new Date(Number(item.data.value));
      const age = date.getFullYear() - bDate.getFullYear();
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      floorData = `${
        month[bDate.getMonth()]
      } ${bDate.getDate()}, ${bDate.getFullYear()} (${age} years old)`;
    } else if (item.data.floor === "Interview Availability") {
      if (Boolean(item.data.floor) === true) {
        floorData = "Yes";
      } else {
        floorData = "No";
      }
    } else {
      floorData = item.data.value;
    }

    itemComponent = (
      <div className="w-[14rem] flex flex-col gap-1">
        <h4 className="font-medium h-full text-xl">{floorData}</h4>
        <p>{item.data.floor}</p>
      </div>
    );
  } else if (item.type === "contact") {
    const link = item.data.value.split("|")[0];
    const value = item.data.value.split("|")[1];

    itemComponent = (
      <div className="w-[14rem] flex flex-col gap-1">
        <h4 className="font-medium">{item.data.floor}</h4>
        <a
          className="h-full text-xl hover:opacity-60 hover:underline"
          href={link}
          target="_blank"
        >
          {value}
        </a>
      </div>
    );
  } else {
    itemComponent = <div>no type</div>;
  }

  return itemComponent;
}
