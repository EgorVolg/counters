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
    <td key={title} className="tableHeaderTd font-roboto">
      {title}
    </td>
  ));
};
