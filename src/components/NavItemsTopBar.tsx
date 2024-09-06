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
    <td key={index} className="p-4 font-semibold">
      {str.title}
    </td>
  ));
};
