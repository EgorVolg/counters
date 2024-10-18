import { TableHeader } from "./TableHeader.tsx";
import { TableFooter } from "./TableFooter.tsx";
import { useState } from "react";
import { Item } from "./Item.tsx";
import { useStore } from "../../state/RootStore.ts";
import { Instance } from "mobx-state-tree";
import { MeterModel } from "../../state/models/Meters.model.ts";
import { AreaModel } from "../../state/models/Areas.model.ts";

export type Meter = Instance<typeof MeterModel>;
export type Area = Instance<typeof AreaModel>;

export const ItemsList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const rootStore = useStore();

  const meters = rootStore.meters;
  const areas = rootStore.areas;

  const onRemoveMeter = () => {
    console.log("remove");
  };

  // const handlePageChange = (pageNumber: number) => {
  //   setPageNumber(pageNumber);
  // };

  const createMeter = meters.map((meter: Meter, index: number) => {
    const area = areas.find((area: Area) => area.id === meter.area.id);
    if (area) {
      const newObj = { meter, area };
      return (
        <Item
          key={index}
          number={index + 1}
          el={newObj}
          onRemoveMeter={onRemoveMeter}
        />
      );
    }
  });

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
        {/* <TableFooter
          handlePageChange={handlePageChange}
          count={meters.count}
          pageNumber={pageNumber}
        /> */}
      </div>
    </main>
  );
};
