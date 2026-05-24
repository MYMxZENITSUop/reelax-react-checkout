import { Search, Menu, Gem, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f5f5f7] border-b border-[#e5e7eb]">
      <div className="w-full h-[60px] px-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="relative">
          <input
            type="search"
            placeholder="Find influencers to collaborate with"
            className="
              w-[420px]
              h-[38px]
              pl-4
              pr-10
              text-[14px]
              text-gray-600
              bg-white
              border
              border-[#3b82f6]
              rounded-[6px]
              outline-none
              placeholder:text-gray-400
            "
          />

          <Search
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              w-5
              h-5
              text-gray-500
            "
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1.5 h-[30px] px-4 rounded-[4px] bg-[#f5a623] text-white text-[12px] font-medium"
          >
            <Gem className="w-3.5 h-3.5" />
            Upgrade
          </button>

          <button
            className="
              h-[30px]
              px-4
              rounded-[4px]
              bg-[#2563eb]
              text-white
              text-[12px]
              font-medium
            "
          >
            + Create Campaign
          </button>
          
          <div className="flex items-center gap-3 bg-white rounded-full px-3 h-[42px]">
            <div className="w-7 h-7 rounded-full bg-[#4D84FF] flex items-center justify-center">
                <User className="w-4 h-4 text-white fill-white" />
            </div>
            
            <Menu className="w-4 h-4 text-gray-500" />
            </div>
        </div>
      </div>
    </header>
  );
}