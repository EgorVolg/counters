import { flow, Instance, t } from "mobx-state-tree";
import axios from "axios";
import { AreaModel } from "./models/Areas.model";
import { MeterModel } from "./models/Meters.model";

const API_URL = "https://showroom.eis24.me/api/v4/test/";

export type TRootStore = Instance<typeof RootStore>;
export const RootStore = t
  .model("RootStore", {
    meters: t.array(MeterModel),
    areas: t.array(AreaModel),
  })
  .actions((store) => ({
    getAreas: flow(function* () {
      const resAreas = yield axios.get(`${API_URL}areas/`);
      const dataAreas = resAreas.data.results;
      store.areas.push(...dataAreas);
    }),
    getMeters: flow(function* (pageNumber) {
      const resMeters = yield axios.get(
        `${API_URL}meters/?limit=20&offset=${(pageNumber - 1) * 20}`
      );
      const dataMeters = resMeters.data.results;
      store.meters.push(...dataMeters);
    }),
  }));

export const rootStore = RootStore.create({
  meters: [],
  areas: [],
});
