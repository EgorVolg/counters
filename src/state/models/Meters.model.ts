import { t } from "mobx-state-tree";

export const MeterModel = t.model("meter", {
    id: t.optional(t.string, ""),
    _type: t.optional(t.array(t.string), []),
    area: t.model("area", {
        id: t.optional(t.string, ""),
    }),
    is_automatic: t.optional(t.maybeNull(t.boolean), null),
    communication: t.optional(t.maybeNull(t.string), null),
    description: t.optional(t.maybeNull(t.string), null),
    serial_number: t.optional(t.maybeNull(t.string), null),
    installation_date: t.optional(t.maybeNull(t.string), null),
    brand_name: t.optional(t.maybeNull(t.string), null),
    model_name: t.optional(t.maybeNull(t.string), null),
    initial_values: t.optional(t.array(t.number), []),
});


 
