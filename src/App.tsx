import { useEffect } from "react";
import { useAction } from "./components/hooks/useAction.ts";
import { useGetAreasQuery, useGetMetersQuery } from "./api/makeRequest.ts";
import { ItemsList } from "./components/Itemslist.tsx";

export const App = () => {
  const { updateAreas, updateMeters } = useAction();
  const { data: dataAreas } = useGetAreasQuery({});
  const { data: dataMeters } = useGetMetersQuery({});

  useEffect(() => {
    function areasFetchData() {
      return updateAreas({ areas: dataAreas });
    }
    function metersFetchData() {
      return updateMeters({ meters: dataMeters });
    }

    metersFetchData();
    areasFetchData();
  }, [updateAreas, updateMeters, dataAreas, dataMeters]);

  return (
    <div className="p-4 bg-neutral-50">
      <header className="text-2xl">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full">
        <ItemsList />
      </main>
    </div>
  );
};
