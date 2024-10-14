export const TableFooter = ({
  handlePageChange,
  count,
}: {
  handlePageChange: (pageNumber: number) => void;
  count: number;
}) => (
  <div className="flex justify-end items-center p-2">
    {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
      <button
        key={pageNumber}
        className="paginationButton"
        onClick={() => handlePageChange(pageNumber)}
        onClickCapture={() => console.log(Math.ceil(count / 20))}
        
      >
        {pageNumber}
      </button>
    ))}
  </div>
);
