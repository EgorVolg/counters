import { useEffect } from "react";
import { useAction } from "./components/hooks/useAction.ts";
import { useGetAreasQuery, useGetMetersQuery } from "./api/makeRequest.ts";
import { ItemsList } from "./components/ItemsList.tsx";

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
