import { t } from "mobx-state-tree";

export const AreaModel = t.model("area", {
    id: t.optional(t.string, ""),
    number: t.optional(t.number, 0),
    str_number: t.optional(t.string, ""),
    str_number_full: t.optional(t.string, ""),
    house: t.model("house", {
      address: t.optional(t.string, ""),
      id: t.optional(t.string, ""),
      fias_addrobjs: t.optional(t.array(t.string), []),
    }),
  });


   