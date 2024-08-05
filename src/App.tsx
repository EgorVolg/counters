import React from "react";
import axios from "axios";
import {Itemslist} from "./components/Itemslist.tsx";

export const App = () => {
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const itemsResponce = await axios.get(
                "http://showroom.eis24.me/api/v4/test/meters/"
            );
            setState(itemsResponce.data.results);
        }

        fetchData();
    }, []);

    return (
        <div className="block  bg-[#F8F9FA]">
            <header>
                <h1>Список счётчиков</h1>
            </header>
            <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
                <Itemslist state={state}/>
            </main>

        </div>
    )
}

