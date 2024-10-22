import React from "react";
import moment from "moment";
import { Instance } from "mobx-state-tree";
import { MeterModel } from "../../state/models/Meters.model";
import { AreaModel } from "../../state/models/Areas.model";
import RemoveIconDefault from "../Icons/remove_icon.default.svg";
import { GetType } from "./GetType";

export const Meter: React.FC<{
  meter: Instance<typeof MeterModel>;
  area: Instance<typeof AreaModel>;
  onRemoveMeter: (id: string) => void;
  meterNumber: number;
}> = ({ meter, area, onRemoveMeter, meterNumber }) => {
  const isAutomatic =
    meter.is_automatic === null
      ? "Не определён"
      : meter.is_automatic
      ? "Автоматический"
      : "Ручной";

  const formattedDate = moment(meter.installation_date).format("DD.MM.YYYY");

  return (
    <tr className="meterString group/item">
      <td className="tableItemTd">{meterNumber}</td>
      <td className="tableItemTd">
        <GetType meter={meter} />
      </td>
      <td className="tableItemTd">{formattedDate} </td>
      <td className="tableItemTd">{isAutomatic} </td>
      <td className="tableItemTd">{meter.description} </td>
      <td className="tableItemTd w-1/4">{area.house.address}</td>
      <td className="p-4  text-gray-900 w-1/4 ">
        <div className="text-gray-700 ">
          к. {area.number}, {area.str_number_full}
        </div>
        <button
          className="deleteButton group-hover/item:visible"
          onClick={() => onRemoveMeter(meter.id)}
        >
          <img src={RemoveIconDefault} alt="delete" width={32} height={32} />
        </button>
      </td>
    </tr>
  );
};
