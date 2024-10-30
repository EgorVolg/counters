import { TableHeader } from "./TableHeader";
import { useGetMetersQuery } from "../../api/makeRequest";
import { TableFooter } from "./TableFooter";
import { MetersListMap } from "./MeterList";
import { useSelector } from "react-redux";

export const Table = () => {
  const pageNumber = useSelector((state: number) => state.currentPage);
  console.log(pageNumber);

  const { data: meters } = useGetMetersQuery(pageNumber);
  const count = meters?.count || 0;

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
        <TableFooter count={count} pageNumber={pageNumber} />
      </div>
    </main>
  );
};
