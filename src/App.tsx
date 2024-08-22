import { useEffect } from "react";
import { ItemsList } from "./components/Itemslist.tsx";
import axios from "axios";
import { useAction } from "./components/hooks/useAction.ts";

export const App = () => {
  const { updateAreas } = useAction();

  useEffect(() => {
    async function areasFetchData() {
      const fetchRes = await axios.get("http://localhost:3000/areas");
      updateAreas({ areas: fetchRes.data });
    }
    areasFetchData();
  }, [ updateAreas ]);

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
