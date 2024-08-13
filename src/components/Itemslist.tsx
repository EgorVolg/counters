import React from "react";
import metersArr from "../meters.json"
import {TArea} from "../App.tsx";

export type TMeter = {
    id: string,
    _type: string[],
    area: {
        id: string,
    };
    is_automatic: null,
    communication: string,
    description: string,
    serial_number: string,
    installation_date: string,
    brand_name: null,
    model_name: null,
    initial_values: number[],
}

export const ItemsList = (areas: TArea[]) => {
    const [meters, setMeters] = React.useState<TMeter[]>([])

    React.useEffect(() => {
        async function metersFetchData() {
            setMeters(metersArr);
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

    const createMeter: TMeter[] = meters.map((obj: TMeter) => {
        const areaMap = areas.find((el: TArea) => el.id === obj.area.id);

        if (areaMap) {
            return {...obj, ...areaMap}; // Объединяем объекты
        }
        return obj; // Если совпадений нет, возвращаем оригинальный объект
    })
    console.log(createMeter)

    return (
        <div>
            <header className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
                {navItemsListMap()}
            </header>
            <main>

            </main>
        </div>
    )
}