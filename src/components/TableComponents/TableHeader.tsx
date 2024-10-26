const navItemsList = [
  { title: "№" },
  { title: "Тип" },
  { title: "Дата установки" },
  { title: "Автоматический" },
  { title: "Текущие показания" },
  { title: "Адрес" },
  { title: "Примечание" },
];

export const TableHeader = () => {
  return navItemsList.map(({ title }) => (
    <th key={title} className="tableHeaderTd font-roboto">
      {title}
    </th>
  ));
};
