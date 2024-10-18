import { flow, Instance, t } from "mobx-state-tree";
import axios from "axios";
import { AreaModel } from "./models/Areas.model";
import { MeterModel } from "./models/Meters.model";

export type TRootStore = Instance<typeof RootStore>;
const API_URL = "https://showroom.eis24.me/api/v4/test/";

export const RootStore = t
  .model("RootStore", {
    meters: t.array(MeterModel),
    areas: t.array(AreaModel),
  })
  .actions((store) => ({
    getData: flow(function* () {
      const resMeters = yield axios.get(`${API_URL}meters/`);
      const resAreas = yield axios.get(`${API_URL}areas/`);

      const dataMeters = resMeters.data.results;
      const dataAreas = resAreas.data.results;

      store.meters.push(dataMeters);
      store.areas.push(dataAreas);
    }),
  }));

let rootStore: TRootStore;
export function useStore() {
  if (!rootStore) {
    rootStore = RootStore.create({
      meters: [],
      areas: [],
    });
  }
  return rootStore;
}
