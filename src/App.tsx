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
        <div style={{height: "100vh", padding: "16px"}}>
            <header>
                <h1>Список счётчиков</h1>
            </header>
            <main style={{borderRadius: "12px", border: "1px solid #F8F9FA", height: "100%"}}>
                <Itemslist state={state}/>
            </main>

        </div>
    )
}

