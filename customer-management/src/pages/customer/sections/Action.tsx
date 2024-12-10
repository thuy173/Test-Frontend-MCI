import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import { useState } from "react";
import AddCustomerDialog from "./FormAdd/DialogAdd";

const ActionHeader = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const handleOpenDialogAdd = () => {
    setIsOpenAdd(true);
  };
  return (
    <section>
      <div className="mt-8">
        <div className="grid grid-cols-2 justify-between">
          <div className="flex gap-2 items-center w-1/2">
            <Input
              type="text"
              placeholder="Tên, SĐT, Email"
              className="shadow-none"
            />
            <div className="border rounded-full p-1">
              <Filter className="text-xs" />
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <Button onClick={handleOpenDialogAdd}>Thêm khách hàng</Button>
          </div>
        </div>
      </div>
      {isOpenAdd && (
        <AddCustomerDialog
          isOpen={isOpenAdd}
          onClose={() => setIsOpenAdd(false)}
        />
      )}
    </section>
  );
};

export default ActionHeader;
