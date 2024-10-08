import React from "react";

export const TableFooter = () => (
  <div className="flex justify-end items-center p-2">
    {[1, 2, 3, "...", 4, 5, 6].map((pageNumber) => (
      <button key={pageNumber} className="paginationButton">{pageNumber}</button>
    ))}
  </div>
);
