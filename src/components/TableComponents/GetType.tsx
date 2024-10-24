import HotWaterIcon from "../Icons/hotwater_icon.svg";
import ColdWaterIcon from "../Icons/coldwater_icon.svg";
import { TMeter } from "../types";

export const GetType = ({ type }: { type: TMeter["_type"][0] }) => {
  if (type === "HotWaterAreaMeter") {
    return (
      <div className="flex items-center justify-start">
        <img src={HotWaterIcon} alt="hotwatericon" width="16" height="16" />
        ГВС
      </div>
    );
  }

  if (type === "ColdWaterAreaMeter") {
    return (
      <div className="flex items-center justify-start">
        <img src={ColdWaterIcon} alt="coldwatericon" width="16" height="16" />
        ХВС
      </div>
    );
  }
};
