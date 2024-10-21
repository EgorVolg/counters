import { observer } from "mobx-react-lite";
import { Pagination } from "./Pagination";
import { TRootStore } from "../../state/RootStore";


export const TableFooter = observer(({store}: {store: TRootStore}) => (
  <div className="flex justify-end items-center p-2">
    <Pagination store={store}/>
  </div>
));
