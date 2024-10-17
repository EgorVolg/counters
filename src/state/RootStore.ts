import { Instance, t } from "mobx-state-tree";
import { MetersModel } from "./models/Meters.model";
import { AreasModel } from "./models/Areas.model";
import { TArea, TMeter } from "../components/types";

export type TRootStore = Instance<typeof RootStore>;
export const RootStore = t.model("RootStore", {
    meters: t.array(MetersModel),
    areas: t.array(AreasModel),
}).actions(store => ({
    getData(areas: TArea[], meters: TMeter[]) {
        store.areas.push({
            results: areas
        }),
            store.meters.push({
                results: meters
            })
    }
}))

let rootStore: TRootStore
export function useStore() {
    if (!rootStore) {
        rootStore = RootStore.create({
            meters: [],
            areas: [],
        })
    }
    return rootStore
}


