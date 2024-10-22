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
      <div className="tableContainer">
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
      <div className="tableFooterContainer">
        <TableFooter store={store} />
      </div>
    </main>
  );
});
