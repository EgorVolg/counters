import React, { useEffect, useState } from "react";
import { TArea, TMeter } from "./types.ts";
import { Item } from "./Item.tsx";
import axios from "axios";
import { useSelector } from "react-redux";

type TProps = {
  areas: TArea[];
};
export const ItemsList: React.FC<TProps> = () => {
  const [meters, setMeters] = useState<TMeter[]>([]);

  const areas = useSelector((state: TArea[]) => state);

  console.log(areas, "areas");

  useEffect(() => {
    async function metersFetchData() {
      const itemsRes = await axios.get("http://localhost:3000/meters");
      setMeters(itemsRes.data);
    }
    metersFetchData();
  }, []);

  const navItemsList = [
    { title: "№" },
    { title: "Тип" },
    { title: "Дата установки" },
    { title: "Автоматический" },
    { title: "Текущие показания" },
    { title: "Адрес" },
    { title: "Примечание" },
  ];

  const navItemsListMap = () => {
    return navItemsList.map((str: { title: string }, index: number) => (
      <div className="p-1 bg-[#F0F3F7] text-neutral-500" key={index}>
        {str.title}
      </div>
    ));
  };

  const createMeter = meters.map((obj: TMeter, index: number) => {
    const areaMap = areas.find((el: TArea) => el.id === obj.area.id);

    if (areaMap) {
      const newObj = { ...obj, ...areaMap };
      return <Item el={newObj} key={index} />;
    }

    return obj;
  });

  return (
    <div>
      <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
        {navItemsListMap()}
      </header>
      <main>{createMeter}</main>
    </div>
  );
};
