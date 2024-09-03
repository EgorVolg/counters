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
    <div className=" bg-neutral-50">
      <header className="text-2xl pt-4 pl-4">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full p-4">
        <ItemsList />
      </main>
    </div>
  );
};
