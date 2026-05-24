import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";

export default function CheckoutReview() {
  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
  <Navbar />
      <div className="w-full max-w-[1440px] mx-auto pt-5 pb-5 px-4 sm:px-6 lg:px-[28px]"> 
        <button className="flex items-center gap-1.5 text-[14px] font-medium text-[#6B7280] mb-3">
          <ArrowLeft className="w-4 h-4" />
          Back to plans
        </button>

        <div className="flex flex-col xl:flex-row gap-6">
  {/* LEFT SECTION */}
  <div className="w-full xl:flex-1">
    <BillingForm onCancel={handleCancel} onSave={handleSave} />
  </div>

  {/* RIGHT SECTION */}
  <div className="w-full xl:w-[450px] xl:sticky xl:top-6 h-fit shrink-0">
    <OrderSummary />
  </div>
</div>
      </div>
    </div>
  );
}