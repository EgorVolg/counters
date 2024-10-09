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
    <td
      key={index}
      className="p-2 min-h-8 font-semibold text-neutral-500
       bg-[#F0F3F7] top-0 sticky z-[1] font-roboto"
    >
      {str.title}
    </td>
  ));
};
