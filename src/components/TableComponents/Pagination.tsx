import React, { useCallback, useEffect, useState } from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const calculateVisiblePages = useCallback(
    (currentPage: number, totalPages: number) => {
      const maxVisiblePages = 15;
      const pages: number[] = [];

      if (totalPages <= maxVisiblePages) {
        pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
      } else {
        if (currentPage <= 6) {
          pages.push(...Array.from({ length: 8 }, (_, i) => i + 1));
          pages.push(-1, totalPages - 2, totalPages - 1, totalPages);
        } else if (currentPage > totalPages - 6) {
          pages.push(
            1,
            2,
            3,
            -1,
            ...Array.from({ length: 8 }, (_, i) => totalPages - 8 + i + 1)
          );
        } else if (currentPage > 6 && currentPage < totalPages - 6) {
          pages.push(
            1,
            2,
            3,
            -1,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            -1,
            totalPages - 2,
            totalPages - 1,
            totalPages
          );
        }
      }

      return pages;
    },
    []
  );

  const handlePageChange = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages]
  );

  useEffect(() => {
    setVisiblePages(calculateVisiblePages(currentPage, totalPages));
  }, [calculateVisiblePages, currentPage, totalPages]);

  return (
    <div className="flex justify-center">
      {visiblePages.map((page, index) => (
        <button
          className="paginationButton"
          key={index}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page || page === -1}
          style={{
            backgroundColor: currentPage === page ? "#CED5DE" : "white",
          }}
        >
          {page === -1 ? "..." : page}
        </button>
      ))}
    </div>
  );
};
