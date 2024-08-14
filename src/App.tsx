import React from "react";
import {ItemsList} from "./components/Itemslist.tsx";
import {TArea} from "./components/types.ts";
import axios from "axios";

export const App = () => {
    const [areas, setAreas] = React.useState<TArea[]>([])

    React.useEffect(() => {
        async function areasFetchData() {
            const fetchRes = await axios.get(
                "http://localhost:3000/areas"
            )
            setAreas(fetchRes.data)
        }
        areasFetchData();
    }, []);

    return (
        <div className="block bg-[#F8F9FA]">
            <header>
                <strong>Список счётчиков</strong>
            </header>
            <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
                <ItemsList areas={areas}/>
            </main>
        </div>
    )
}

