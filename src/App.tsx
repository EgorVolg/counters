import { useEffect } from "react";
import { useAction } from "./components/hooks/useAction";
import { useGetAreasQuery, useGetMetersQuery } from "./api/makeRequest";
import { Table } from "./components/TableComponents/Table";
 

export const App = () => {
  const { updateAreas, updateMeters } = useAction();
  const { data: dataAreas } = useGetAreasQuery({});
  const { data: dataMeters } = useGetMetersQuery(0);

  useEffect(() => {
    const areasFetchData = () => updateAreas({ areas: dataAreas });
    const metersFetchData = () => updateMeters({ meters: dataMeters });

    metersFetchData();
    areasFetchData();
  }, [updateAreas, updateMeters, dataAreas, dataMeters]);

  return (
    <div className=" bg-neutral-50">
      <header className="text-2xl pt-4 pl-4">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full p-4">
        <Table />
      </main>
    </div>
  );
};
