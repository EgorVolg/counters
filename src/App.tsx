import { FC, useEffect } from "react";
import { ItemsList } from "./components/TableComponents/Itemslist";
import { TRootStore } from "./state/RootStore";
import { observer } from "mobx-react-lite";

type TProps = {
  store: TRootStore;
};

export const App: FC<TProps> = observer(({ store }) => {
  useEffect(() => {
    const callFetch = async () => {
      await store.getAreas();
      await store.getMeters(1);
    };
    void callFetch();
  }, [store]);

  return (
    <div className="bg-neutral-50">
      <header className="text-2xl pt-4 pl-4">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full p-4">
        <ItemsList/>
      </main>
    </div>
  );
});
