import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useState } from "react";
import { TRootStore } from "../../state/RootStore";

type PaginationProps = {
  store: TRootStore;
};

export const Pagination: React.FC<PaginationProps> = observer(({ store }) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const { metersCount, currentPage, getMeters, getCurrentPage } = store;
  const totalPages = Math.ceil(metersCount / 20);

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
        } else {
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

  const handlePageChange = (page: number) => {
    getMeters(page);
    getCurrentPage(page);
  };

  useEffect(() => {
    setVisiblePages(calculateVisiblePages(currentPage, totalPages));
  }, [calculateVisiblePages, currentPage, totalPages]);

  return (
    <div className="flex justify-center">
      {visiblePages.map((page, index) => (
        <button
          className="paginationButton bg-[currentPage === page ? #CED5DE : white ] "
          key={index}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page || page === -1}
        >
          {page === -1 ? "..." : page}
        </button>
      ))}
    </div>
  );
});
