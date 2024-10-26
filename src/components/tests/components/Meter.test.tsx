import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TArea, TMeter } from "../../types";
import { Meter } from "../../TableComponents/Meter";

describe("Meter component", () => {
  const meter: TMeter = {
    id: "526a0caae0e34c3e6dda9b8d",
    _type: ["ColdWaterAreaMeter", "AreaMeter"],
    area: {
      id: "526237d2e0e34c524382c110",
    },
    is_automatic: false || true || null,
    communication: "5b20f6ba64c0360001ed109c",
    description: "60",
    serial_number: "",
    installation_date: "2010-06-01T00:00:00",
    brand_name: null,
    model_name: null,
    initial_values: [84],
  };
  const area: TArea = {
    id: "526237d1e0e34c524382c094",
    number: 17,
    str_number: "17",
    str_number_full: "кв. 17",
    house: {
      address: "г Санкт-Петербург, ул Чудес, д 256",
      id: "526237d1e0e34c524382c073",
      fias_addrobjs: [
        "c2deb16a-0330-4f05-821f-1d09c93331e6",
        "92d0675e-d7ba-41f1-a602-101ec538d42e",
      ],
    },
  };
  const onRemoveMeter = jest.fn();
  it("renders meter with valid data", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={meter}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("60")).toBeInTheDocument();
    expect(
      screen.getByText("г Санкт-Петербург, ул Чудес, д 256")
    ).toBeInTheDocument();
  });
  it("renders meter with null is_automatic value", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={{ ...meter, is_automatic: null }}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("Не определён")).toBeInTheDocument();
  });
  it("renders meter with true is_automatic value", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={{ ...meter, is_automatic: true }}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("Автоматический")).toBeInTheDocument();
  });
  it("renders meter with false is_automatic value", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={{ ...meter, is_automatic: false }}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("Ручной")).toBeInTheDocument();
  });
  it("clicking delete button calls onRemoveMeter function", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={meter}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);
    expect(onRemoveMeter).toHaveBeenCalledTimes(1);
    expect(onRemoveMeter).toHaveBeenCalledWith(meter.id);
  });
  it("renders meter with valid area data", () => {
    render(
      <table>
        <tbody>
          <Meter
            meter={meter}
            area={area}
            onRemoveMeter={onRemoveMeter}
            meterNumber={1}
          />
        </tbody>
      </table>
    );
    expect(screen.getByText("к. 17, кв. 17")).toBeInTheDocument();
  });
});
