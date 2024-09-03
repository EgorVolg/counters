import { TArea, TItem, TMeter } from "./types.ts";
import { NavItemsListMap } from "./NavItemsTopBar.tsx";
import { useAreas } from "./hooks/useAreas.ts";
import { Item } from "./Item.tsx";
import { useMeters } from "./hooks/useMeters.ts";
import { useRemoveItemMutation } from "../api/makeRequest.ts";

export const ItemsList = () => {
  const { meters } = useMeters();
  const { areas } = useAreas();

  const [removeItem] = useRemoveItemMutation();
  const onRemoveMeter = (id: string) => {
    removeItem(id);
  };

  const createMeter = meters
    .map((obj: TMeter, index: number) => {
      const areaMap = areas.find((el: TArea) => el.id === obj.area.id);
      const newObj = { ...obj, ...areaMap } as TItem;
      if (newObj) {
        return <Item key={index} el={newObj} onRemoveMeter={onRemoveMeter} />;
      }
      return null;
    })
    .filter(Boolean);

  return (
    <main className="w-full h-screen">
      <table className="table-auto w-full border border-solid border-[#E0E5EB]">
        <thead className="bg-[#E0E5EB] border border-solid border-[#E0E5EB]">
          {NavItemsListMap()}
        </thead>
        <tbody className="">{createMeter}</tbody>
        <tfoot className="">foooooter</tfoot>
      </table>
    </main>
  );
};
