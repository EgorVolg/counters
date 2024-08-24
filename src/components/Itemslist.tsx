import { TArea, TItem, TMeter } from "./types.ts";
import { NavItemsListMap } from "./NavItemsTopBar.tsx";
import { useAreas } from "./hooks/useAreas.ts";
import { Item } from "./Item.tsx";
import { useMeters } from "./hooks/useMeters.ts";

export const ItemsList = () => {
  const { meters } = useMeters();
  const { areas } = useAreas();

  const createMeter = meters
    .map((obj: TMeter, index: number) => {
      const areaMap = areas.find((el: TArea) => el.id === obj.area.id);
      const newObj = { ...obj, ...areaMap } as TItem;
      if (newObj) {
        return <Item key={index} el={newObj} />;
      }

      return null;
    })
    .filter(Boolean);

  return (
    <div className="w-full h-full">
      <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
        <NavItemsListMap />
      </header>
      <main>{createMeter}</main>
    </div>
  );
};
