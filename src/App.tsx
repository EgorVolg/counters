import { ItemsList } from "./components/TableComponents/Itemslist";

export const App = () => {
  return (
    <div className=" bg-neutral-50">
      <header className="text-2xl pt-4 pl-4">
        <strong>Список счётчиков</strong>
      </header>
      <main className="w-full h-full p-4">
        <ItemsList />
      </main>
    </div>
  );
};
