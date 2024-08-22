import { useEffect, useState } from "react";
import { TArea, TItem, TMeter } from "./types.ts";
import axios from "axios";
import { NavItemsListMap } from "./NavItemsTopBar.tsx";
import { useAreas } from "./hooks/useAreas.ts";
import { Item } from "./Item.tsx";

export const ItemsList = () => {
  const [meters, setMeters] = useState<TMeter[]>([]);

  const { areas } = useAreas();

  useEffect(() => {
    async function metersFetchData() {
      const itemsRes = await axios.get("http://localhost:3000/meters");
      setMeters(itemsRes.data);
    }
    metersFetchData();
  }, []);

  const createMeter = meters.map((obj: TMeter, index: number) => {
    const areaMap = areas.find((el: TArea) => el.id === obj.area.id);
    const newObj = { ...obj, ...areaMap } as TItem;
    if (newObj) {
      return <Item key={index} el={newObj} />;
    }

    return obj;
  });

  return (
    <div>
      <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
        <NavItemsListMap />
      </header>
      <main>{createMeter}</main>
    </div>
  );
};
