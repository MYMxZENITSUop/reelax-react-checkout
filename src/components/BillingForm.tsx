import { useState } from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";

const indianStates = [
  { value: "AP", label: "Andhra Pradesh" },
  { value: "AR", label: "Arunachal Pradesh" },
  { value: "AS", label: "Assam" },
  { value: "BR", label: "Bihar" },
  { value: "CG", label: "Chhattisgarh" },
  { value: "GA", label: "Goa" },
  { value: "GJ", label: "Gujarat" },
  { value: "HR", label: "Haryana" },
  { value: "HP", label: "Himachal Pradesh" },
  { value: "JH", label: "Jharkhand" },
  { value: "KA", label: "Karnataka" },
  { value: "KL", label: "Kerala" },
  { value: "MP", label: "Madhya Pradesh" },
  { value: "MH", label: "Maharashtra" },
  { value: "MN", label: "Manipur" },
  { value: "ML", label: "Meghalaya" },
  { value: "MZ", label: "Mizoram" },
  { value: "NL", label: "Nagaland" },
  { value: "OD", label: "Odisha" },
  { value: "PB", label: "Punjab" },
  { value: "RJ", label: "Rajasthan" },
  { value: "SK", label: "Sikkim" },
  { value: "TN", label: "Tamil Nadu" },
  { value: "TS", label: "Telangana" },
  { value: "TR", label: "Tripura" },
  { value: "UP", label: "Uttar Pradesh" },
  { value: "UK", label: "Uttarakhand" },
  { value: "WB", label: "West Bengal" },
  { value: "DL", label: "Delhi" },
];

const citiesByState: Record<string, { value: string; label: string }[]> = {
  MH: [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nagpur", label: "Nagpur" },
  ],
  KA: [
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Mysuru", label: "Mysuru" },
  ],
  DL: [{ value: "New Delhi", label: "New Delhi" }],
  UP: [
    { value: "Lucknow", label: "Lucknow" },
    { value: "Agra", label: "Agra" },
    { value: "Kanpur", label: "Kanpur" },
  ],
  GJ: [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
  ],
};

interface BillingFormProps {
  onCancel: () => void;
  onSave: () => void;
}

export default function BillingForm({ onCancel, onSave }: BillingFormProps) {
  const [form, setForm] = useState({
    companyName: "abhigyan",
    email: "abhigyan.pandey@getreelax.com",
    gstNumber: "",
    panNumber: "",
    premise: "",
    street: "",
    state: "",
    city: "",
    country: "India",
    pinCode: "",
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const cities = form.state ? (citiesByState[form.state] ?? []) : [];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Review your details
      </h1>

      <div className="mb-[30px] flex flex-col gap-6">
        <h2 className="text-[20px] leading-[28px] font-bold text-[#505050]">
            Billing Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6 max-w-[960px]">
          <FormField
            label="Company Name"
            placeholder="abhigyan"
            value={form.companyName}
            onChange={update("companyName")}
          />
          <FormField
            label="Email"
            type="email"
            placeholder="abhigyan.pandey@getreelax.com"
            value={form.email}
            onChange={update("email")}
          />

          <FormField
            label="GST Number"
            placeholder="GST Number"
            value={form.gstNumber}
            onChange={update("gstNumber")}
            optional
          />
          <FormField
            label="PAN Number"
            placeholder="PAN Number"
            value={form.panNumber}
            onChange={update("panNumber")}
            optional
          />

          <FormField
            label="Premise/House no."
            placeholder="Premise/House no."
            value={form.premise}
            onChange={update("premise")}
          />
          <FormField
            label="Street"
            placeholder="Street"
            value={form.street}
            onChange={update("street")}
          />

          <SelectField
            label="State"
            placeholder="Select state"
            value={form.state}
            onChange={update("state")}
            options={indianStates}
          />
          <SelectField
            label="City"
            placeholder="Select city"
            value={form.city}
            onChange={update("city")}
            options={cities}
          />

          <FormField
            label="Country"
            placeholder="India"
            value={form.country}
            onChange={update("country")}
          />
          <FormField
            label="Pin Code"
            placeholder="Pincode"
            value={form.pinCode}
            onChange={update("pinCode")}
          />
        </div>
      </div>

      <div className="flex justify-end items-center gap-4 border-t border-[#E5E7EB] pt-4 mt-6">
        <button
          onClick={onCancel}
          className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Save Details
        </button>
      </div>
    </div>
  );
}