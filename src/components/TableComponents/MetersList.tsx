import { observer } from "mobx-react-lite";

import { FC } from "react";
import { TableHeader } from "./TableHeader.tsx";
import { TableFooter } from "./TableFooter.tsx";

import { TRootStore } from "../../state/RootStore.ts";

import { MetersListMap } from "./MetersListMap.tsx";

type Props = {
  store: TRootStore;
};

export const MetersList: FC<Props> = observer(({ store }) => {
  return (
    <main>
      <div className="overflow-y-auto max-h-[calc(100vh-120px)]  border border-solid border-gray-300 rounded-t-lg">
        <table className="w-full">
          <thead className="">
            <tr>
              <TableHeader />
            </tr>
          </thead>
          <tbody className="">
            <MetersListMap store={store} />
          </tbody>
        </table>
      </div>
      <div className="border border-solid border-gray-200 min-h-8 rounded-b-lg">
        <TableFooter store={store} />
      </div>
    </main>
  );
});
