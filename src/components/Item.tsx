import {TItem} from "./Itemslist.tsx";

export const Item = ({
                         _type,
                         installation_date,
                         is_automatic,
                         initialValues,
                         address,
                         description,
                     }: TItem) => {

    return (
        <div className='flex'>
            <div>{_type}</div>
            <div>{installation_date}</div>
            <div>{is_automatic}</div>
            <div>{initialValues}</div>
            <div>{address}</div>
            <div>{description}</div>
        </div>
    )
}