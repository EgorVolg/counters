import React from "react";
import axios from "axios";
import {ItemsList} from "./components/Itemslist.tsx";

export const App = () => {
    const [meters, setMeters] = React.useState([])
    const [areas, setAreas] = React.useState([])


    React.useEffect(() => {
        async function fetchData() {
            const metersResponse = await axios.get(
                "http://showroom.eis24.me/api/v4/test/meters/"
            );

            const areasResponse = await axios.get(
                "http://showroom.eis24.me/api/v4/test/areas/"
            )
            setMeters(metersResponse.data.results);
            setAreas(areasResponse.data.results);
        }


        fetchData();
    }, []);

    return (
        <div className="block  bg-[#F8F9FA]">
            <header>
                <h1>Список счётчиков</h1>
            </header>
            <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
                <ItemsList meters={meters} areas={areas}/>
            </main>

        </div>
    )
}

