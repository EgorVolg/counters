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
    <th key={index}>{str.title}</th>
  ));
};
