import HotWaterIcon from "../Icons/hotwater_icon.svg";
import ColdWaterIcon from "../Icons/coldwater_icon.svg";
import { Instance } from "mobx-state-tree";
import { MeterModel } from "../../state/models/Meters.model";
export const GetType = ({ meter }: { meter: Instance<typeof MeterModel> }) => {
  const type = meter._type[0];
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
