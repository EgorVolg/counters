import React from "react";
import axios from "axios";
import {ItemsList} from "./components/Itemslist.tsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAreas} from "./state/slices/areaSlice.ts";

export const App = () => {
    const areas = useSelector((state) => state.areas.areas )
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchAreas())
    }, [dispatch]);

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

