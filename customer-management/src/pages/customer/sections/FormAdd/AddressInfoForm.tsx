import CustomSelect from "@/components/CustomSelect";
import { TimePickerWithRange } from "@/components/DatePickerRange";
import MultiSelectCard from "@/components/MultiSelectCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomerReqDto from "@/types/customer/customer";
import {
  cityOptions,
  districtOptions,
  wardOptions,
} from "@/types/customer/seed";
import { FormikErrors, FormikTouched } from "formik";

interface AddressInfoFormProps {
  values: CustomerReqDto;
  errors: FormikErrors<CustomerReqDto>;
  touched: FormikTouched<CustomerReqDto>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  setFieldValue: (
    field: string,
    value: string | number[],
    shouldValidate?: boolean
  ) => void;
}

const AddressInfoForm: React.FC<AddressInfoFormProps> = ({
  values,
  handleChange,
  setFieldValue,
}) => {
  const handleTimeRangeChange = (timeRange: { from: string; to: string }) => {
    setFieldValue("follow_up_date", timeRange.from);
    setFieldValue("follow_down_date", timeRange.to);
  };

  const handleProductSelectionChange = (selected: number[]) => {
    setFieldValue("service", selected);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      <div>
        <h5 className="text-lg font-bold">Thông tin chi tiết</h5>
        <div className="flex flex-col gap-1 ">
          <MultiSelectCard
            selectedItems={values.service || []}
            onSelectionChange={handleProductSelectionChange}
          />
          <label className="text-sm text-gray-400">Ghi chú</label>
          <Textarea
            placeholder="Cần tư vấn chi tiết về xoa bóp cổ vai gáy"
            name="notes"
            value={values.notes}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">Địa chỉ liên hệ</label>
        <div className="flex flex-col gap-2">
          <CustomSelect
            options={cityOptions}
            onChange={(value) => setFieldValue("city", value)}
          />
          <CustomSelect
            options={districtOptions}
            onChange={(value) => setFieldValue("district", value)}
          />
          <CustomSelect
            options={wardOptions}
            onChange={(value) => setFieldValue("ward", value)}
          />

          <Input
            placeholder="Địa chỉ chi tiết"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">
          Chọn khung giờ <span className="text-red-600">*</span>
        </label>
        <TimePickerWithRange onTimeChange={handleTimeRangeChange} />
      </div>
    </div>
  );
};

export default AddressInfoForm;
