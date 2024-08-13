import React from "react";
import metersArr from "../meters.json"
import {TArea, TMeter} from "./types.ts";
import {Item} from "./Item.tsx";

type TProps = {
    areas: TArea[]
}
export const ItemsList: React.FC<TProps> = ({areas}) => {
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

    const createMeter = meters.map((obj: TMeter) => {
            const areaMap = areas.find((el: TArea) => el.id === obj.area.id);

            if (areaMap) {
                const newObj = {...obj, ...areaMap}
                return (
                    <Item id={newObj.id} _type={newObj._type} area={newObj.area} is_automatic={newObj.is_automatic}
                          communication={newObj.communication} description={newObj.description}
                          serial_number={newObj.serial_number}
                          installation_date={newObj.installation_date} brand_name={newObj.brand_name}
                          model_name={newObj.brand_name} initial_values={newObj.initial_values} number={newObj.number}
                          str_number={newObj.str_number}
                          str_number_full={newObj.str_number_full} house={newObj.house}/>
                )
            }

            return obj;
        }
    )

    return (
        <div>
            <header
                className="grid grid-cols-[0.5fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
                {navItemsListMap()}
            </header>
            <main>
                {createMeter}
            </main>
        </div>
    )
}