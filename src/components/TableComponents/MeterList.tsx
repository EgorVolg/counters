import {
  useGetAreasQuery,
  useGetMetersQuery,
  useRemoveItemMutation,
} from "../../api/makeRequest";
import { TArea, TMeter } from "../types";
import { Meter } from "./Meter";

export const MetersListMap = ({ pageNumber }: { pageNumber: number }) => {
  const { data: meters } = useGetMetersQuery(pageNumber);
  const { data: areas } = useGetAreasQuery({});

  const [removeItem] = useRemoveItemMutation();
  const { refetch: refetchMeters } = useGetMetersQuery(pageNumber);
  const handleRemoveMeter = (meterId: string): void => {
    removeItem(meterId);
    refetchMeters();
  };

  return meters?.results.map((meter: TMeter, index: number) => {
    const area = areas?.find((area: TArea) => area.id === meter.area.id);
    if (area) {
      return (
        <Meter
          key={meter.id}
          meterNumber={index + 1}
          area={area}
          meter={meter}
          onRemoveMeter={handleRemoveMeter}
        />
      );
    }
  });
};
