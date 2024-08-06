import {Item} from "./Item.tsx";
import React from "react";
import axios from "axios";

export type TItem = {
    _type: [];
    installation_date: string;
    is_automatic: null;
    initialValues: string;
    // address: TAreas;
    description: string;
}

export const ItemsList = () => {
    const [meters, setMeters] = React.useState([])

    React.useEffect(() => {
        async function metersFetchData() {
            const metersResponse = await axios.get(
                "http://showroom.eis24.me/api/v4/test/meters"
            )
            setMeters(metersResponse.data.results);
        }

        metersFetchData();
    }, []);

    const navItemsList = [
        {title: "№"},
        {title: "Тип"},
        {title: "Дата установки"},
        {title: "Автоматический"},
        {title: "Текущие показания"},
        {title: "Адрес"},
        {title: "Примечание"}
    ]

    // const metersMapfn = () => {
    //     return (
    //         areas.map((obj: TItem, index: number) => (
    //             <Item
    //                 key={index}
    //                 _type={obj._type}
    //                 installation_date={obj.installation_date}
    //                 is_automatic={obj.is_automatic}
    //                 initialValues={obj.initialValues}
    //                 address={'address'}
    //                 description={obj.description}
    //             />))
    //     )
    // }

    const navItemsListMap = () => {
        return (
            navItemsList.map((str: { title: string }, index: number) => (
                <div
                    className="p-1 bg-[#F0F3F7] text-neutral-500"
                    key={index}
                >
                    {str.title}
                </div>
            ))
        )
    }
    console.log(meters)
    return (

        <div>
            <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
                {navItemsListMap()}
            </header>
            {/*<div>*/}
            {/*    {metersMapfn()}*/}
            {/*</div>*/}
        </div>
    )
}