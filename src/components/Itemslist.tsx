import React, { useEffect } from "react";
import { TMeter } from "./types.ts";
import axios from "axios";
import { useAreas } from "./hooks/useAreas.js";
import { NavItemsListMap } from "./NavItemsTopBar";

export const ItemsList = () => {
  const [meters, setMeters] = React.useState<TMeter[]>([]);

  const { areas } = useAreas();

  useEffect(() => {
    async function metersFetchData() {
      const itemsRes = await axios.get("http://localhost:3000/meters");
      setMeters(itemsRes.data);
    }
    metersFetchData();
  }, []);
  console.log(areas, "areas");
   
  //   const createMeter = meters.map((obj: TMeter, index: number) => {
  //     const areaMap = areas.find((el: TArea) => el.id === obj.area.id);

  //     if (areaMap) {
  //       const newObj = { ...obj, ...areaMap };
  //       return <Item el={newObj} key={index} />;
  //     }

  //     return obj;
  //   });

  return (
    <div>
      <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
        <NavItemsListMap />
      </header>
      {/* <main>{createMeter}</main> */}
    </div>
  );
};
