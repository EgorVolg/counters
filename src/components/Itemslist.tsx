import {Item} from "./Item.tsx";
import {useState} from "react";

export type TItem = {
    _type: [];
    installation_date: string;
    is_automatic: any;
    initialValues: string;
    address: string;
    description: string;
}
export const Itemslist = ({state}: any) => {
    const [items, setItems] = useState(state)
    console.log(items)
    const mapConst = () => {
        return setItems(
            items.map((obj: TItem) => (
                <Item
                    _type={obj._type}
                    installation_date={obj.installation_date}
                    is_automatic={obj.is_automatic}
                    initialValues={obj.initialValues}
                    address={"address"}
                    description={obj.description}
                />))
        )

    }
    return (
        <div>
            {mapConst()}
         </div>
    )
}