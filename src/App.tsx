import { useEffect } from "react";
import { useAction } from "./components/hooks/useAction.ts";
import { useGetAreasQuery } from "./api/makeRequest.ts";
import { ItemsList } from "./components/ItemsList.tsx";

export const App = () => {
  const { updateAreas } = useAction();
  const { data } = useGetAreasQuery({});

  useEffect(() => {
    function areasFetchData() {
      return updateAreas({ areas: data });
    }
    areasFetchData();
  }, [updateAreas, data]);

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
