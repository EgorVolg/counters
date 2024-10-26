import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { GetType } from "../../TableComponents/GetType";

describe("GetType", () => {
  it("correctly render hot water type ", () => {
    render(<GetType type="HotWaterAreaMeter" />);
    const linkElement = screen.getByText(/ГВС/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("correctly render cold water type", () => {
    render(<GetType type="ColdWaterAreaMeter" />);
    const linkElement = screen.getByText(/ХВС/i);
    expect(linkElement).toBeInTheDocument();  
  })
});
