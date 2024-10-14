import { TArea, TItem, TMeter } from "../types.ts";
import { TableHeader } from "./TableHeader.tsx";

import {
  useGetAreasQuery,
  useGetMetersQuery,
  useRemoveItemMutation,
} from "../../api/makeRequest.ts";
import { TableFooter } from "./TableFooter.tsx";
import { useState } from "react";
import { Item } from "./Item.tsx";

export const ItemsList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data: areas } = useGetAreasQuery({});
  const { data: meters } = useGetMetersQuery(pageNumber);

  const [removeItem] = useRemoveItemMutation();
  const { data: dataMeters, refetch: refetchMeters } =
    useGetMetersQuery(pageNumber);

  const onRemoveMeter = (id: string): void => {
    removeItem(id);
    refetchMeters(dataMeters as TMeter[]);
  };

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  const createMeter = meters?.results.map(
    (meter: TMeter, index: number) => {
      const area = ((areas as TArea[]) || []).find(
        (area: TArea) => area.id === meter.area.id
      );
      if (area) {
        const newObj = { meter, area } as TItem;
        return <Item key={index} el={newObj} onRemoveMeter={onRemoveMeter} />;
      }
    }
  );

  return (
    <main>
      <div className="overflow-y-auto max-h-[calc(100vh-120px)]  border border-solid border-gray-300 rounded-t-lg">
        <table className="w-full">
          <thead className="">
            <tr>
              <TableHeader />
            </tr>
          </thead>
          <tbody className="">{createMeter}</tbody>
        </table>
      </div>
      <div className="border border-solid border-gray-200 min-h-8 rounded-b-lg">
        <TableFooter handlePageChange={handlePageChange} count={meters?.count} pageNumber={pageNumber}/>
      </div>
    </main>
  );
};
