import CustomSelect from "@/components/CustomSelect";
import { DatePickerInput } from "@/components/DateInput";
import { Input } from "@/components/ui/input";
import CustomerReqDto from "@/types/customer/customer";
import { sourceOptions, statusOptions } from "@/types/customer/seed";
import { FormikErrors, FormikTouched } from "formik";

interface BasicInfoFormProps {
  values: CustomerReqDto;
  errors: FormikErrors<CustomerReqDto>;
  touched: FormikTouched<CustomerReqDto>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setFieldValue: (
    field: string,
    value: string | number,
    shouldValidate?: boolean
  ) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">
            Họ tên khách hàng <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            name="full_name"
            value={values.full_name}
            onChange={handleChange}
          />
          {errors.full_name && (
            <div className="text-red-500 text-sm">{errors.full_name}</div>
          )}
        </div>
        <div className="flex justify-center items-center pt-5 gap-3">
          <label className="text-sm text-gray-400">Giới tính</label>
          <div className="flex items-center gap-4">
            {["Nam", "Nữ", "Khác"].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={values.gender === gender}
                  onChange={() => setFieldValue("gender", gender)}
                  className="mr-2"
                />
                {gender}
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-400">Ngày sinh</label>
          <DatePickerInput
            selected={
              values.date_of_birth ? new Date(values.date_of_birth) : undefined
            }
            onChange={(date) =>
              setFieldValue("date_of_birth", date.toISOString())
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 grid grid-cols-2 gap-3">
          <>
            <CustomSelect
              options={sourceOptions}
              label={
                <>
                  Nguồn khách hàng <span className="text-red-600">*</span>
                </>
              }
              onChange={(value) => setFieldValue("source", value)}
            />
          </>
          <>
            <CustomSelect
              options={statusOptions}
              label={
                <>
                  Trạng thái <span className="text-red-600">*</span>
                </>
              }
              onChange={(value) => setFieldValue("status", value)}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default BasicInfoForm;
