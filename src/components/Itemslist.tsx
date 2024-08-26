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
    <main className="w-full h-full p-2">
      <table className="table-auto w-full h-auto ">
        <thead>{NavItemsListMap()}</thead>
        <tbody className="">{createMeter}</tbody>
        <tfoot>Hello world</tfoot>
      </table>
    </main>
  );
};
