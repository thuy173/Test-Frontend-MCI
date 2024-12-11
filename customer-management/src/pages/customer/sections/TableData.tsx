import Pagination from "@/components/Pagination";
import TableHeaderComponent from "@/components/TableHeader";
import TableRowComponent from "@/components/TableRow";
import { Table, TableBody } from "@/components/ui/table";
import { customers } from "@/types/customer/seed";
import CustomTableProps from "@/types/customer/table";
import React from "react";

type Customer = {
  index: number;
  customerCode: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  marketer: string;
  source: string;
  note: string;
  createAt: string;
};

const CustomTable = <T,>({ headers, data, columns }: CustomTableProps<T>) => (
  <div className="border border-gray-300 rounded-t-xl overflow-hidden">
    {/* <Table className="w-full">
      <TableHeaderComponent headers={headers} />
    </Table> */}
    <div className="max-h-80 max-w-full overflow-x-auto overflow-y-auto">
      <Table className="w-full">
        <TableHeaderComponent headers={headers} />
        <TableBody>
          {data.length ? (
            data.map((row, index) => (
              <TableRowComponent key={index} data={row} columns={columns} />
            ))
          ) : (
            <TableRowComponent
              key="empty-row"
              columns={columns}
              data={undefined}
            />
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);

const CustomerTable: React.FC = () => {
  const headers = [
    { label: "#", className: "w-[50px] text-center" },
    { label: "Mã KH" },
    { label: "Họ và tên" },
    { label: "SĐT" },
    { label: "Email" },
    { label: "Người tiếp thị" },
    { label: "Nguồn" },
    { label: "Ghi chú" },
    { label: "Ngày tạo" },
  ];

  const columns: { key: keyof Customer; className?: string }[] = [
    { key: "index", className: "text-center" },
    { key: "customerCode" },
    { key: "fullName" },
    { key: "phoneNumber" },
    { key: "email" },
    { key: "marketer" },
    { key: "source" },
    { key: "note" },
    { key: "createAt" },
  ];

  return (
    <section className="mt-10">
      <CustomTable<Customer>
        headers={headers}
        data={customers}
        columns={columns}
      />
      <Pagination />
    </section>
  );
};

export default CustomerTable;
