import { observer } from "mobx-react-lite";
import { Pagination } from "./Pagination";
import { TRootStore } from "../../state/RootStore";


export const TableFooter = observer(({store}: {store: TRootStore}) => (
  <div className="paginationContainer">
    <Pagination store={store}/>
  </div>
));
