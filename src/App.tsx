import { useEffect } from "react";
import { ItemsList } from "./components/Itemslist.tsx";
import { updateAreas } from "./state/slices/areasSlices.ts";
import { useAction } from "./components/hooks/useAction.ts";

export const App = () => {
  const { dispatch } = useAction();

  useEffect(() => {
    dispatch(updateAreas(data));
  }, [dispatch]);
  return (
    <div className="block bg-[#F8F9FA]">
      <header>
        <strong>Список счётчиков</strong>
      </header>
      <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
        <ItemsList />
      </main>
    </div>
  );
};
