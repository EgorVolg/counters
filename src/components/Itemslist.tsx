import { TArea, TItem, TMeter } from "./types.ts";
import { NavItemsListMap, TableHeader } from "./TableHeader.tsx";
import { useAreas } from "./hooks/useAreas.ts";
import { Item } from "./Item.tsx";
import { useMeters } from "./hooks/useMeters.ts";
import {
  useGetMetersQuery,
  useRemoveItemMutation,
} from "../api/makeRequest.ts";
import {TableFooter} from "./TableFooter.tsx";
import { useState } from "react";

export const ItemsList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { meters } = useMeters();
  const { areas } = useAreas();

  const [removeItem] = useRemoveItemMutation();
  const { data: dataMeters, refetch: refetchMeters } = useGetMetersQuery({});
  const onRemoveMeter = (id: string) => {
    removeItem(id);
    refetchMeters(dataMeters);
  };

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  }

 
  

  const createMeter = meters.map((meter: TMeter, index: number) => {
    const area = areas.find((area: TArea) => area.id === meter.area.id);
    if (area) {
      const newObj = { meter, area } as TItem;
      return <Item key={index} el={newObj} onRemoveMeter={onRemoveMeter} />;
    }
  });
 
  return (
    <main>
      <div className="overflow-y-auto max-h-[calc(100vh-120px)]  border border-solid border-gray-300 rounded-t-lg">
        <table className="w-full">
          <thead className="">
            <tr><TableHeader /></tr>
          </thead>
          <tbody className="">{createMeter}</tbody>
        </table>
      </div>
      <div className="border border-solid border-gray-200 min-h-8 rounded-b-lg">
        <TableFooter handlePageChange={handlePageChange}/>
      </div>
    </main>
  );
};