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
 
    <main className="w-full h-full p-4">
      <table className="table-auto w-full h-full border border-solid border-[#E0E5EB] rounded-xl">
        <thead className="text-start bg-#E0E5EB">
          <tr>{NavItemsListMap()}</tr>
        </thead>
        <tbody className="text-center">{createMeter}</tbody>
        <tfoot>tfooter</tfoot>
 
      </table>
    </main>
  );
};
