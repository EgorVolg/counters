import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GetType } from "../../TableComponents/GetType";

describe("GetType", () => {
  it("renders correctly", () => {
    render((<GetType type="HotWaterAreaMeter" />));
    const linkElement = screen.getByText(/ГВС/i);
    expect(linkElement).toBeInTheDocument();
  });
});
