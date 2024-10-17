import { flow, Instance, t } from "mobx-state-tree";
import { MetersModel } from "./models/Meters.model";
import { AreasModel } from "./models/Areas.model";
import axios from "axios";

export type TRootStore = Instance<typeof RootStore>;
const API_URL = "https://showroom.eis24.me/api/v4/test/";

export const RootStore = t
  .model("RootStore", {
    meters: t.array(MetersModel),
    areas: t.array(AreasModel),
  })
  .actions((store) => ({
    getData: flow(function* () {
      const resMeters = yield axios.get(`${API_URL}meters/`);
      const resAreas = yield axios.get(`${API_URL}areas/`);

      console.log(resMeters.data.results, resAreas.data.results);
      const dataMeters = resMeters.data.results;
      const dataAreas = resAreas.data.results;

      store.meters.push(...dataMeters.results);
      store.areas.push(...dataAreas.results);
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
