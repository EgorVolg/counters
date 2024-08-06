import React from "react";
import axios from "axios";
import {ItemsList} from "./components/Itemslist.tsx";
import {store} from "./state/store/store.ts";

export const App = () => {
    // const [areas, setAreas] = React.useState([])
    
    React.useEffect(() => {
        async function fetchData() {
            const areasResponse = await axios.get(
                "http://showroom.eis24.me/api/v4/test/areas/"
            )
            store.dispatch(areasResponse.data.results);
        }

        fetchData();
    }, []);
    return (
        <div className="block bg-[#F8F9FA]">
            <header>
                <strong>Список счётчиков</strong>
            </header>
            <main className="m-3 rounded-[12px] border-[1px] border-solid border-[#E0E5EB]">
                <ItemsList areas={store.getState().areasReducer}/>
            </main>

        </div>
    )
}

