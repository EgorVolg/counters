import { render, screen } from "@testing-library/react";
import { GetType } from "../../TableComponents/GetType";

describe("GetType", () => {
  render(<GetType type="HotWaterAreaMeter" />);
  const linkElement = screen.getByText(/ГВС/i);
  expect(linkElement).toBeInTheDocument();
});
