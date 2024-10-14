import React, { useState } from "react";

interface PaginationProps {
  totalPages: number; // общее количество страниц
  onPageChange: (page: number | string) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const buttonsToShow = 3;

  const getButtons = () => {
    const buttons: (number | string)[] = [];

    let startPage = Math.max(2, currentPage - Math.floor(buttonsToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + buttonsToShow - 1);

    if (endPage - startPage < buttonsToShow - 1) {
      startPage = Math.max(2, endPage - buttonsToShow + 2);
    }

    // Первая кнопка
    buttons.push(1);

    // Добавляем кнопки в диапазоне
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    // Если нужно показать промежуток между окончанием диапазона и последней кнопкой
    if (endPage < totalPages - 1) {
      buttons.push("...");
    }

    // Последняя кнопка
    buttons.push(totalPages);

    return buttons;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      setCurrentPage(page);
    }
    onPageChange(page);
  };

  const buttons = getButtons();

  return (
    <div className="pagination">
      {buttons.map((button, index) => (
        <button
        className="paginationButton"
          key={index}
          onClick={() => handlePageChange(button)}
          disabled={button === currentPage}
          style={{
            backgroundColor: button === currentPage ? "#CED5DE" : "white",
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
