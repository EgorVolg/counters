import { flow, Instance, t } from "mobx-state-tree";
import axios from "axios";
import { AreaModel } from "./models/Areas.model";
import { MeterModel } from "./models/Meters.model";

const API_URL = "https://showroom.eis24.me/api/v4/test";

export type TRootStore = Instance<typeof RootStore>;
export const RootStore = t
    .model("RootStore", {
        meters: t.array(MeterModel),
        areas: t.array(AreaModel),
        currentPage: t.optional(t.number, 0),
        metersCount: t.optional(t.number, 0),

    })
    .actions((store) => ({
        getAreas: flow(function* () {
            const resAreas = yield axios.get(`${API_URL}/areas/?limit=158`);
            const dataAreas = resAreas.data;
            store.areas = dataAreas.results;

        }),
        getMeters: flow(function* (currentPage: number) {
            const resMeters = yield axios.get(
                `${API_URL}/meters/?limit=20&offset=${(currentPage - 1) * 20}`
            );
            const dataMeters = resMeters.data;
            store.meters = dataMeters.results;
            store.metersCount = dataMeters.count;
        }),
        deleteMeter: flow(function* (id: string) {
            yield axios.delete(`${API_URL}/meters/${id}`);
        }),
        getCurrentPage: (page: number) => (store.currentPage = page),
    }));

export const rootStore = RootStore.create({
    metersCount: 0,
    meters: [],
    areas: [],
    currentPage: 1,
});
