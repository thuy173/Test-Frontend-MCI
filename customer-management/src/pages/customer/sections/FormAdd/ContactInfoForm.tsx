import { Input } from "@/components/ui/input";
import CustomSelect from "@/components/CustomSelect";
import CustomerReqDto from "@/types/customer/customer";
import { FormikErrors, FormikTouched } from "formik";
import { socialMediaOptions } from "@/types/customer/seed";

interface ContactInfoFormProps {
  values: CustomerReqDto;
  errors: FormikErrors<CustomerReqDto>;
  touched: FormikTouched<CustomerReqDto>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  setFieldValue: (
    field: string,
    value: number,
    shouldValidate?: boolean
  ) => void;
}

const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  values,
  errors,
  handleChange,
  setFieldValue,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">
          Số điện thoại <span className="text-red-600">*</span>
        </label>
        <Input
          placeholder="0366858512"
          type="text"
          name="phone_number"
          value={values.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && (
          <div className="text-red-500 text-sm">{errors.phone_number}</div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">Email</label>
        <Input
          placeholder="example@gmail.com"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-5 gap-3 justify-center items-center">
        <div className="col-span-2">
          <CustomSelect
            options={socialMediaOptions}
            label="Mạng xã hội"
            onChange={(value) => setFieldValue("social_media", value)}
          />
        </div>
        <div className="col-span-3">
          <label className="invisible">Url</label>
          <Input
            type="text"
            name="detailed_info"
            value={values.detailed_info}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
