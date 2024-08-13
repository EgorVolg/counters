import React from "react";
import {ItemsList} from "./components/Itemslist.tsx";
import areasArr from "./areas.json"
import {TArea} from "./components/types.ts";

export const App = () => {
    const [areas, setAreas] = React.useState<TArea[]>([])

    React.useEffect(() => {
        async function areasFetchData() {
            setAreas(areasArr);
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

