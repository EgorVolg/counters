import { Instance } from "mobx-state-tree";
import { AreaModel } from "../../state/models/Areas.model";
import { MeterModel } from "../../state/models/Meters.model";
import { Meter } from "./Meter";
import { observer } from "mobx-react-lite";
import { TRootStore } from "../../state/RootStore";

export type TMeter = Instance<typeof MeterModel>;
export type TArea = Instance<typeof AreaModel>;

export const MetersListMap = observer(({ store }: { store: TRootStore }) => {
  const { meters, areas, deleteMeter, getMeters, currentPage } = store;

  const onRemoveMeter = async (id: string) => {
    await deleteMeter(id);
    await getMeters(currentPage);
  };

  return meters.map((meter: TMeter, index: number) => {
    const area = areas.find((area: TArea) => area.id === meter.area.id);
    if (area) {
      return (
        <Meter
          key={meter.id}
          meterNumber={index + 1}
          area={area}
          meter={meter}
          onRemoveMeter={onRemoveMeter}
        />
      );
    }
  });
});
