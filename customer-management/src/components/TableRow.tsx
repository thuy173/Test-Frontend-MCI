import { TableCell, TableRow } from "./ui/table";

type TableRowProps<T> = {
  data: T;
  columns: {
    key: keyof T;
    className?: string;
    render?: (value: T[keyof T]) => React.ReactNode;
  }[];
};

const TableRowComponent = <T,>({ data, columns }: TableRowProps<T>) => (
  <TableRow>
    {columns.map((column, index) => (
      <TableCell key={index} className={`${column.className || ""} py-4`}>
        {column.render
          ? column.render(data[column.key])
          : String(data[column.key])}
      </TableCell>
    ))}
  </TableRow>
);

export default TableRowComponent;
