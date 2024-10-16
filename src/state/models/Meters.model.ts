import { t } from "mobx-state-tree";

const MeterModel = t.model("meter", {
    id: t.optional(t.string, ""),
    _type: t.optional(t.array(t.string), []),
    area: t.model("area", {
        id: t.optional(t.string, ""),
    }),
    is_automatic: t.optional(t.boolean, false),
    communication: t.optional(t.string, ""),
    description: t.optional(t.string, ""),
    serial_number: t.optional(t.string, ""),
    installation_date: t.optional(t.string, ""),
    brand_name: t.optional(t.string, ""),
    model_name: t.optional(t.string, ""),
    initial_values: t.optional(t.array(t.number), []),
});

export const MetersModel = t
    .model("MetersModel", {
        results: t.array(MeterModel),
    })
    // .actions(self => ({
    //     setMeters(meters: TMeter[]) {
    //         self.results = meters;
    //     },
    // }))