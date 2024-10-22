import { Pagination } from "./Pagination";

export const TableFooter = ({
  handlePageChange,
  count,
  pageNumber,
}: {
  handlePageChange: (pageNumber: number) => void;
  count: number;
  pageNumber: number;
}) => (
  <div className="flex justify-end items-center p-2">
    <Pagination
      totalPages={Math.ceil(count / 20)}
      onPageChange={handlePageChange}
      currentPage={pageNumber}
    />
  </div>
);
