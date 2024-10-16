import { useEffect } from "react";
import axios from "axios";
import { useStore } from "./state/RootStore";

export const App = () => {
  const rootStore = useStore();

  useEffect(() => {
    async function fetchData() {
      const resMeters = await axios.get(
        "https://showroom.eis24.me/api/v4/test/meters/"
      );
      const resAreas = await axios.get(
        "https://showroom.eis24.me/api/v4/test/areas/"
      );
      const dataMeters = resMeters.data;
      const dataAreas = resAreas.data;

      rootStore.getData(dataAreas.results, dataMeters.results);
    }

    fetchData();
  }, [rootStore]);

  return (
    <div className=" bg-neutral-50">
      <header className="text-2xl pt-4 pl-4">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full p-4">{/* <ItemsList /> */}</main>
    </div>
  );
};
