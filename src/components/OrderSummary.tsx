import { useState } from "react";
import { Wallet, Tag, ChevronUp, ChevronDown, Circle, CheckCircle2, Upload } from "lucide-react";

const COUPONS = [
  {
    code: "WELCOME20",
    description: "20% off on your first month",
  },
  {
    code: "ANNUAL50",
    description: "50% off on annual plans",
  },
];

export default function OrderSummary() {
  const [couponOpen, setCouponOpen] = useState(true);
  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME20");
  const [couponInput, setCouponInput] = useState("");
  const [walletApplied, setWalletApplied] = useState(false);

  const subtotal = 14999.0;
  const taxRate = 0.18;
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  const total = subtotal + tax;

  return (
    <div className="flex flex-col gap-4">
        <div className="bg-white rounded-[16px] shadow-sm border border-[#E5E7EB] p-8">
        <h2 className="text-[24px] leading-[32px] font-bold text-[#111827] mb-6">
  Order Summary
</h2>

        <div className="border border-[#CFE0FF] rounded-[8px] px-6 py-5 mb-4 bg-white">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-2px">
                <span className="text-[30px] leading-[36px] font-bold text-[#111827]">
  ₹4,999
</span>
                <span className="text-[16px] leading-[24px] font-medium text-[#6B7280]">
  /month
</span>
              </div>
              <p
  className="
    mt-[6px]
    text-[14px]
    leading-[20px]
    font-medium
    text-[#6B7280]
    max-w-[313px]
  "
>
  Includes 5,000 credits/mo.
</p>
            </div>
            <div className="flex flex-col items-start pt-1 sm:min-w-[113px]">
              <span className="text-[12px] leading-[16px] tracking-[1.2px] font-bold uppercase text-[#1977F2]">
                SELECTED PLAN
              </span>
              <p className="text-[20px] leading-[28px] font-bold text-[#111827] mt-0.5">
  Startup
</p>
            </div>
          </div>
        </div>

        <button
  className="
    w-full
    h-[44px]
    rounded-[999px]
    border
    border-[#AFCBFF]
    bg-[#F5F9FF]
    flex
    items-center
    justify-center
    gap-[10px]
    text-[#2563EB]
    text-[16px]
    font-semibold
    hover:bg-[#4378FF14]
    transition-colors
  "
>
          <div className="relative w-4 h-4">
  {/* Circle */}
  <div
    className="
      absolute
      inset-0
      rounded-full
      border-[2px]
      border-[#1977F2]
    "
  />

  {/* Arrow */}
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="
      absolute
      left-1/2
      top-1/2
      w-[15px]
      h-[15px]
      -translate-x-1/2
      -translate-y-1/2
    "
  >
    <path
      d="M12 17V7"
      stroke="#1977F2"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <path
      d="M7.5 11.5L12 7L16.5 11.5"
      stroke="#1977F2"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>
          Upgrade to Growth Plan
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div
  className="
    flex
    items-center
    justify-between
    border
    border-[#E5E7EB]
    rounded-[4px]
    px-6
    py-4
    bg-white
  "
>
          <div className="flex items-center gap-3">
            <div
  className="
    w-10
    h-10
    rounded-[8px]
    bg-[#F5F8FF]
    flex
    items-center
    justify-center
    shrink-0
  "
>
              <Wallet
  className="w-[18px] h-[18px] text-[#2563EB]"
  strokeWidth={1.8}
/>
            </div>
            <div>
              <p
  className="
    text-[16px]
    leading-[24px]
    font-bold
    text-[#111827]
  "
>
  Wallet Balance
</p>
              <p
  className="
    text-[14px]
    leading-[20px]
    font-medium
    text-[#9CA3AF]
  "
>₹500.00 available</p>
            </div>
          </div>
          <button
  onClick={() => setWalletApplied(!walletApplied)}
  className="
  h-[34px]
  px-[12px]
  py-[3px]
  rounded-[4px]
  border
  border-[#3171FF33]
  bg-white
  text-[#2563EB]
  text-[16px]
  leading-[24px]
  font-semibold
  hover:bg-[#F9FBFF]
  transition-colors
"
>
  {walletApplied ? "Remove" : "Apply"}
</button>
        </div>

        <div
  className="
    border
    border-[#E5E7EB]
    rounded-[8px]
    bg-white
    overflow-hidden
    mt-4
  "
>
          <button
            onClick={() => setCouponOpen(!couponOpen)}
            className="
  h-[53px]
  px-4
  w-full
  flex
  items-center
  justify-between
  border-b
  border-[#E5E7EB]
"
          >
            <div className="flex items-center gap-3">
              <div
  className="
    w-10
    h-10
    rounded-[8px]
    bg-[#F3F4F6]
    flex
    items-center
    justify-center
  "
>
                <Tag className="w-[18px] h-[18px] text-[#6B7280]" />
              </div>
              <span className="text-[16px] leading-[24px] font-semibold text-[#111827]">Apply Coupon</span>
            </div>
            {couponOpen ? (
              <ChevronUp className="w-5 h-5 text-[#9CA3AF]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#9CA3AF]" />
            )}
          </button>

          {couponOpen && (
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="
  flex-1
  h-[48px]
  px-4
  rounded-[6px]
  border
  border-[#D1D5DB]
  text-[16px]
  text-[#6B7280]
  outline-none
  placeholder:text-[#9CA3AF]
"
                />
                <button className="
  h-[42px]
  px-5
  rounded-[6px]
  border
  border-[#C7D7FE]
  bg-white
  text-[#2563EB]
  text-[16px]
  leading-[24px]
  font-semibold
">
                  Apply
                </button>
              </div>

              {COUPONS.map((coupon) => {
                const isSelected = selectedCoupon === coupon.code;
                return (
                  <button
                    key={coupon.code}
                    onClick={() => setSelectedCoupon(coupon.code)}
                    className={`w-full h-[54px] flex items-center justify-between px-4 rounded-[6px] border transition-all ${
                      isSelected
  ? "bg-white border-[#2563EB] text-[#111827]"
  : "bg-white border-[#E5E7EB] text-[#111827]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[14px] leading-[20px] font-bold text-[#111827]`}>
                        {coupon.code}
                      </span>
                      <span className={`text-[12px] leading-[16px] text-[#6B7280]`}>
                        {coupon.description}
                      </span>
                    </div>
                    {isSelected ? (
  <div className="w-[20px] h-[20px] rounded-full border-2 border-[#2563EB] flex items-center justify-center">
    <div className="w-[20px] h-[20px] rounded-full bg-[#2563EB] flex items-center justify-center">
      <div className="w-[10px] h-[10px] rounded-full bg-white shrink-0" />
    </div>
  </div>
) : (
  <div className="w-[20px] h-[20px] rounded-full border-2 border-[#C7CDD9]" />
)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        
        <div className="bg-white px-1 py-5">
        <div className="space-y-5 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] leading-[20px] font-medium text-[#6B7280]">
  Subtotal
</span>
            <span className="text-[14px] leading-[20px] font-semibold text-[#111827]">
              ₹{subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] leading-[20px] font-medium text-[#6B7280]">
  Tax (18% GST)
</span>
            <span className="text-[14px] leading-[20px] font-semibold text-[#111827]">
              ₹{tax.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
        </div>

        <div className="flex justify-between items-center pt-[-1] mb-5">
          <span className="text-[18px] leading-[28px] font-semibold text-[#111827]">
            Total due today
          </span>
          <span className="text-[28px] sm:text-[30px] lg:text-[32px] leading-[35px] font-bold text-[#2563EB]">
            {total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </span>
        </div>

        <button className="w-full h-[46px] sm:h-[50px] text-[14px] leading-[20px] font-semibold text-white bg-[#2563EB] hover:bg-blue-700 rounded-[8px] transition-colors">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}