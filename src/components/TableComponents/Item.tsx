import React from "react";
import { TItem } from "../types";

const delsvg = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="8" fill="#FED7D7" />
    <path d="M19.3333 18V24H18V18H19.3333Z" fill="#9B2C2C" />
    <path d="M22 18V24H20.6666V18H22Z" fill="#9B2C2C" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8528 12.6667H23.1472L23.8138 14.6667H26.6666V16H25.3333L24.6666 27.3334H15.3333L14.6666 16H13.3333V14.6667H16.1861L16.8528 12.6667ZM17.5916 14.6667H22.4084L22.1861 14H17.8138L17.5916 14.6667ZM16 16L16.6666 26H23.3333L24 16H16Z"
      fill="#9B2C2C"
    />
  </svg>
);
export const Item: React.FC<{
  el: TItem;
  onRemoveMeter: (id: string) => void;
  number: number;
}> = ({ el, onRemoveMeter, number }) => {
  const getType = () => {
    const type = el.meter._type[0];
    if (type === "HotWaterAreaMeter") {
      return (
        <div className="flex items-center justify-start">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4219 4.34243C11.4219 4.45269 11.1108 6.69445 10.1775 7.6132C11.4219 2.10526 6.75523 1 6.75523 1C6.75523 1 7.47079 3.75443 6.44412 5.07744C6.3819 3.57068 5.66634 2.65193 5.66634 2.65193C5.13745 5.37144 3.33301 7.72346 3.33301 9.48746C3.33301 12.5378 5.41745 15 7.99967 15C10.5819 15 12.3552 12.7895 12.6663 9.48746C12.6663 7.28245 12.6663 5.78947 11.4219 4.34243Z"
              fill="#E62E05"
            />
            <path
              d="M9.55523 11.4474C9.55523 12.4053 8.87079 13.1579 7.99967 13.1579C7.12856 13.1579 6.44412 12.4053 6.44412 11.4474C6.44412 10.4895 7.99967 7.17108 7.99967 7.17108C7.99967 7.17108 9.55523 10.4895 9.55523 11.4474Z"
              fill="#FEF0ED"
            />
          </svg>
          ГВС
        </div>
      );
    }

    if (type === "ColdWaterAreaMeter") {
      return (
        <div className="flex items-center justify-start">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.89218 1.42C8.89442 1.39678 8.89999 1.36673 8.89999 1.34146C8.89999 1.15298 8.76063 1 8.5889 1C8.51579 1 8.46441 1.03005 8.44452 1.03859C7.3883 1.49137 3.29999 5.95669 3.29999 9.87803C3.29999 12.7067 5.38941 15 7.96665 15C10.8006 15 12.6333 12.38 12.6333 9.87803C12.6333 5.71663 8.16486 4.94834 8.89218 1.42Z"
              fill="#3698FA"
            />
          </svg>
          ХВС
        </div>
      );
    }
  };
  const isAutomatic = () => {
    if (el.meter.is_automatic === null) {
      return "Не определён";
    }

    if (el.meter.is_automatic === true) {
      return "Автоматический";
    } else {
      return "Ручной";
    }
  };
  const formateDate = () => {
    const date = el.meter.installation_date;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${day}.${month}.${year}`;
  };

  return (
    <tr
      className="bg-white transform duration-100 hover:bg-[#E0E5EB] border-b border-[#E0E5EB] border-solid 
    h-[52px] group/item"
    >
      <td className="tableItemTd">{number}</td>
      <td className="tableItemTd">{getType()}</td>
      <td className="tableItemTd">{formateDate()} </td>
      <td className="tableItemTd">{isAutomatic()} </td>
      <td className="tableItemTd">{el.meter.description} </td>
      <td className="tableItemTd w-1/4">{el.area.house.address}</td>
      <td className="p-4  text-gray-900 w-1/4 ">
        <div className="text-gray-700 ">
          к. {el.area.number}, {el.area.str_number_full}
        </div>
        <button
          className="invisible absolute top-0 right-0 bottom-0 align-center px-1.5 group-hover/item:visible"
          onClick={() => onRemoveMeter(el.meter.id)}
        >
          {delsvg}
        </button>
      </td>
    </tr>
  );
};
