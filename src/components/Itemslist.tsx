import {Item} from "./Item.tsx";

export type TItem = {
    _type: [];
    installation_date: string;
    is_automatic: any;
    initialValues: string;
    address: string;
    description: sting;
}
export const Itemslist = ({state}: []) => {
    const navItemslist = [
        {title: "№"},
        {title: "Тип"},
        {title: "Дата установки"},
        {title: "Автоматический"},
        {title: "Текущие показания"},
        {title: "Адрес"},
        {title: "Примечание"}
    ]
    const mapConst = () => {
        return (
            state.map((obj: TItem, index: number) => (
                <Item
                    key={index}
                    _type={obj._type}
                    installation_date={obj.installation_date}
                    is_automatic={obj.is_automatic}
                    initialValues={obj.initialValues}
                    address={"address"}
                    description={obj.description}
                />))
        )
    }

    const mapConst2 = () => {
        return (
            navItemslist.map((str: { title: string }, index: number) => (
                <div
                    className="p-1"
                    key={index}
                >
                    {str.title}
                </div>
            ))
        )
    }
    return (
        <div>
            <header className="grid grid-cols-[0.6fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
                {mapConst2()}
            </header>
            {mapConst()}
        </div>
    )
}