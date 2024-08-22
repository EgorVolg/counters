const navItemsList = [
  { title: "№" },
  { title: "Тип" },
  { title: "Дата установки" },
  { title: "Автоматический" },
  { title: "Текущие показания" },
  { title: "Адрес" },
  { title: "Примечание" },
];

export const NavItemsListMap = () => {
  return navItemsList.map((str: { title: string }, index: number) => (
    <div className="p-1 bg-[#F0F3F7] text-neutral-500" key={index}>
      {str.title}
    </div>
  ));
};