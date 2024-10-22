import { TableHeader } from "./TableHeader.tsx";
import { useGetMetersQuery } from "../../api/makeRequest.ts";
import { TableFooter } from "./TableFooter.tsx";
import { useState } from "react";
import { MetersListMap } from "./MeterList.tsx";

export const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data: meters } = useGetMetersQuery(pageNumber);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <main>
      <div className="overflow-y-auto max-h-[calc(100vh-120px)]  border border-solid border-gray-300 rounded-t-lg">
        <table className="w-full">
          <thead className="">
            <tr>
              <TableHeader />
            </tr>
          </thead>
          <tbody className="">
            <MetersListMap pageNumber={pageNumber} />
          </tbody>
        </table>
      </div>
      <div className="border border-solid border-gray-200 min-h-8 rounded-b-lg">
        <TableFooter
          handlePageChange={handlePageChange}
          count={meters?.count}
          pageNumber={pageNumber}
        />
      </div>
    </main>
  );
};
