import { TableCell, TableRow } from "./ui/table";

type TableRowProps<T> = {
  data?: T;
  columns: {
    key?: keyof T;
    className?: string;
    render?: (value: T[keyof T], data: T) => React.ReactNode;
    isActionColumn?: boolean;
    action?: (data: T) => void;
  }[];
};

const TableRowComponent = <T,>({ data, columns }: TableRowProps<T>) => (
  <TableRow>
    {columns.map((column, index) => (
      <TableCell key={index} className={`${column.className || ""} py-4`}>
        {column.isActionColumn ? (
          <>
            <button onClick={() => column.action?.(data!)}>Edit</button>
            <button onClick={() => column.action?.(data!)}>Delete</button>
          </>
        ) : column.render ? (
          data ? column.render(data[column.key!], data) : null
        ) : (
          String(data![column.key!])
        )}
      </TableCell>
    ))}
  </TableRow>
);

export default TableRowComponent;
