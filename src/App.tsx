import { useEffect } from "react";
import { ItemsList } from "./components/Itemslist.tsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import areasSlices  from "./state/slices/areasSlices.ts";
import { TArea } from "./components/types.ts";

export const App = () => {
  const areas = useSelector((state: TArea[]) => state );
  const dispatch = useDispatch();

  useEffect(() => {
    async function areasFetchData() {
      const fetchRes = await axios.get("http://localhost:3000/areas");
      
      dispatch(areasSlices.updateAreas({areas: fetchRes.data }));
    }
    areasFetchData();
  }, []);

  return (
    <div className="block bg-[#F8F9FA]">
      <header>
        <strong>Список счётчиков</strong>
      </header>
      <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
        <ItemsList areas={areas} />
      </main>
    </div>
  );
};
