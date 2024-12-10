import CustomSelect from "@/components/CustomSelect";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import TableForm from "./TableForm";

interface AddCustomerDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddCustomerDialog: React.FC<AddCustomerDialogProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogDescription />
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-yellow-700">
            Tạo khách hàng
          </DialogTitle>
        </DialogHeader>
        <div className="container space-y-5">
          {/* Basic Info */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">
                Họ tên khách hàng <span className="text-red-600">*</span>
              </label>
              <Input type="text" />
            </div>
            <div className="flex justify-center items-center pt-5 gap-3">
              <label className="text-sm text-gray-400">Giới tính</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Nam
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Nữ
                </label>
                <label className="flex items-center">
                  <input type="radio" name="gender" className="mr-2" /> Khác
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Ngày sinh</label>
              <Input type="date" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 grid grid-cols-2 gap-3">
              <CustomSelect
                options={[
                  { label: "Website", value: "website" },
                  { label: "Facebook", value: "facebook" },
                ]}
                label={
                  <>
                    Nguồn khách hàng <span className="text-red-600">*</span>
                  </>
                }
                onChange={() => {}}
              />

              <CustomSelect
                options={[
                  { label: "Yêu cầu trải nghiệm", value: "experience" },
                  { label: "Liên hệ", value: "contact" },
                ]}
                label={
                  <>
                    Trạng thái <span className="text-red-600">*</span>
                  </>
                }
                onChange={() => {}}
              />
            </div>
          </div>

          <p className="border border-b-2"></p>

          {/* Contact Info */}
          <h5 className="text-lg font-semibold">Thông tin liên hệ</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">
                Số điện thoại <span className="text-red-600">*</span>
              </label>
              <Input placeholder="0366858512" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Email</label>
              <Input placeholder="example@gmail.com" />
            </div>
            <div className="grid grid-cols-5 gap-3 justify-center items-center">
              <div className="col-span-2">
                <CustomSelect
                  options={[
                    { label: "Facebook", value: "facebook" },
                    { label: "Zalo", value: "zalo" },
                  ]}
                  label="Mạng xã hội"
                  onChange={() => {}}
                />
              </div>
              <div className="col-span-3">
                <label className="invisible">Url</label>
                <Input type="text" />
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="grid grid-cols-3 gap-5">
            <div className="">
              <h5 className="text-lg font-bold">Thông tin chi tiết</h5>
              <div className="flex flex-col gap-1 text-gray-400">
                <label className="text-sm font-medium">Ghi chú</label>
                <Textarea placeholder="Cần tư vấn chi tiết về xoa bóp cổ vai gáy" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Địa chỉ liên hệ</label>
              <div className="flex flex-col gap-2">
                <Input placeholder="Hà Nội" />
                <Input placeholder="Đống Đa" />
                <Input placeholder="Láng Thượng" />
                <Input placeholder="số 32 Chùa Láng" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">
                Chọn khung giờ <span className="text-red-600">*</span>
              </label>
              <Input type="date" />
            </div>
          </div>
        </div>

        {/* Care Info Table */}
        <div className="mt-6">
          <h3 className="text-lg font-medium">Thông tin chăm sóc khách hàng</h3>
          <TableForm />
        </div>

        <DialogFooter className="mt-6 flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button>Xác nhận</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCustomerDialog;
