import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface CustomSelectProps {
  options: { label: string; value: string }[];
  label?: React.ReactNode;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    options[0]?.value || ""
  );

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  React.useEffect(() => {
    if (selectedValue) {
      onChange(selectedValue);
    }
  }, [selectedValue, onChange]);

  return (
    <div className="grid grid-cols-1">
      {label && <label className="mb-1 text-sm text-gray-400">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="justify-between overflow-hidden px-4"
          >
            {options.find((option) => option.value === selectedValue)?.label}
            <ChevronDown size={18} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2 w-fit">
          <ul className="space-y-1">
            {options.map((option) => (
              <li
                key={option.value}
                className={`p-2 cursor-pointer hover:bg-gray-100 rounded flex items-center ${
                  selectedValue === option.value ? "bg-gray-100" : ""
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {selectedValue === option.value && (
                  <Check size={16} className="mr-2 text-blue-500" />
                )}
                {option.label}
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CustomSelect;
