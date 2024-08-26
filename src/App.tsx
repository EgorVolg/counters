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
    <>
      <header>
        <strong>Список счётчиков</strong>
      </header>
      <main>
        <ItemsList />
      </main>
    </>
  );
};
