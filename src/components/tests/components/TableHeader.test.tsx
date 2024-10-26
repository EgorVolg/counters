import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TableHeader } from "../../TableComponents/TableHeader";

describe("TableHeader", () => {
  it("renders the correct number of table headers", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
      </table>
    );
    const tableHeaders = screen.getAllByRole("columnheader");
    expect(tableHeaders).toHaveLength(7);
  });

  it("renders the table headers with the correct titles", () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByText("№")).toBeInTheDocument();
    expect(screen.getByText("Тип")).toBeInTheDocument();
    expect(screen.getByText("Дата установки")).toBeInTheDocument();
    expect(screen.getByText("Автоматический")).toBeInTheDocument();
    expect(screen.getByText("Текущие показания")).toBeInTheDocument();
    expect(screen.getByText("Адрес")).toBeInTheDocument();
    expect(screen.getByText("Примечание")).toBeInTheDocument();
  });
});
