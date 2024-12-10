import TableHeaderComponent from "@/components/TableHeader";
import TableRowComponent from "@/components/TableRow";
import { Button } from "@/components/ui/button";
import { Table, TableBody } from "@/components/ui/table";
import CustomTableProps from "@/types/customer/table";
import { PlusCircle } from "lucide-react";
import React from "react";

type InfoCare = {
  index: number;
  date: string;
  result: string;
  status: string;
};

const infos = [
  {
    index: 1,
    date: "09/12/2024",
    result: "Khach hang hen goi lai sau",
    status: "Goi lai lan sau",
  },
  {
    index: 2,
    date: "10/12/2024",
    result: "Khach hang yeu cau trai nghiem",
    status: "Yeu cau trai nghiem",
  },
  {
    index: 2,
    date: "10/12/2024",
    result: "Khach hang yeu cau trai nghiem",
    status: "Yeu cau trai nghiem",
  },
  {
    index: 2,
    date: "10/12/2024",
    result: "Khach hang yeu cau trai nghiem",
    status: "Yeu cau trai nghiem",
  },
  {
    index: 2,
    date: "10/12/2024",
    result: "Khach hang yeu cau trai nghiem",
    status: "Yeu cau trai nghiem",
  },
  {
    index: 2,
    date: "10/12/2024",
    result: "Khach hang yeu cau trai nghiem",
    status: "Yeu cau trai nghiem",
  },
];

const CustomTable = <T,>({ headers, data, columns }: CustomTableProps<T>) => (
  <div className="border border-gray-300 rounded-t-xl overflow-hidden">
    <div className="max-h-80 max-w-full overflow-x-auto overflow-y-auto">
      <Table className="w-full">
        <TableHeaderComponent headers={headers} />
        <TableBody>
          {data.map((row, index) => (
            <TableRowComponent key={index} data={row} columns={columns} />
          ))}
        </TableBody>
      </Table>
    </div>
    <div className="w-full">
      <Button
        variant="outline"
        className="text-yellow-600 border-2 rounded-none border-dashed p-[25px] w-full sticky bottom-0"
      >
        <PlusCircle /> Thêm
      </Button>
    </div>
  </div>
);

const TableForm: React.FC = () => {
  const headers = [
    { label: "Lần", className: "w-[50px] text-center" },
    { label: "Ngày", className: "text-center" },
    { label: "Kết quả chăm sóc", className: "text-center" },
    { label: "Cập nhật trạng thái", className: "text-center" },
  ];

  const columns: { key: keyof InfoCare; className?: string }[] = [
    { key: "index", className: "text-center" },
    { key: "date", className: "text-center" },
    { key: "result", className: "text-center" },
    { key: "status", className: "text-center" },
  ];

  return (
    <section className="mt-10">
      <CustomTable<InfoCare> headers={headers} data={infos} columns={columns} />
    </section>
  );
};

export default TableForm;
