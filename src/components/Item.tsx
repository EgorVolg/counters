import { TItem } from "./types.ts";
import React from "react";

export const Item: React.FC<{ el: TItem }> = ({ el }) => {
  const getType = () => {
    if (el._type[0] === "HotWaterAreaMeter") {
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
    if (el._type[0] === "ColdWaterAreaMeter") {
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

  return (
    <div className="grid grid-cols-[0.6fr_0.8fr_0.8fr_0.8fr_0.8fr_1.8fr_1.8fr] gap-[0px 0px] grid-flow-row">
      <div>{getType()}</div>
      <div>{el.installation_date}</div>
      <div>{el.is_automatic}</div>
      {/* <div>{el.id}</div> */}
      <div>{el.initial_values}</div>
      {/* <div>{el.area.id}</div> */}
      <div>{el.description}</div>
      <div>
        <div>{el.number}</div>
        <div>{el.str_number}</div>
        <div>{el.str_number_full}</div>
      </div>
    </div>
  );
};
