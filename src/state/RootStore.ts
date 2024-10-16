import { Instance, t } from "mobx-state-tree";
import { MetersModel } from "./models/Meters.model";
import { AreasModel } from "./models/Areas.models";

export type TRootStore = Instance<typeof RootStore>;

const RootStore = t.model("RootStore", {
    meters: t.array(MetersModel),
    areas: t.array(AreasModel), 
})

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