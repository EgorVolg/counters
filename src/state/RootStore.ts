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
    getData: flow(function* (pageNumber: number) {
      const resMeters = yield axios.get(
        `${API_URL}meters/?limit=20&offset=${Math.ceil(pageNumber * 20) - 1}`
      );
      const resAreas = yield axios.get(`${API_URL}areas/?limit=150&offset=0`);

      const dataMeters = resMeters.data.results;
      const dataAreas = resAreas.data.results;

      store.meters.push(...dataMeters);
      store.areas.push(...dataAreas);
    }),
  }));

export const rootStore = RootStore.create({
  meters: [],
  areas: [],
});
