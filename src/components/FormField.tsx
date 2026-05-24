import React from "react";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optional?: boolean;
}

export default function FormField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  optional = false,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
        <label className="mb-[8px] block text-[14px] leading-[20px] font-medium text-[#111827]">
        {label}
        {optional && (
          <span className="text-[#9CA3AF] font-normal ml-1">(Optional)</span>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
  h-[44px]
  w-full
  rounded-[4px]
  border
  border-[#E5E7EB]
  bg-white
  px-[16px]
  text-[14px]
  text-[#111827]
  placeholder:text-[#9CA3AF]
  outline-none
  focus:border-[#3B82F6]
"
        />
    </div>
  );
}