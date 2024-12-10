type CustomTableProps<T> = {
  headers: { label: string; className?: string }[];
  data: T[];
  columns: { key: keyof T; className?: string }[];
};
export default CustomTableProps;