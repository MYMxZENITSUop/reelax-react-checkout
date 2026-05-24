import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
}

export default function SelectField({
  label,
  placeholder,
  value,
  onChange,
  options = [],
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full h-10 pl-3 pr-8 text-sm text-gray-500 bg-white border border-gray-200 rounded-md outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 appearance-none transition-colors cursor-pointer"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}