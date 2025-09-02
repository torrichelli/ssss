import { useState } from "react";

interface FilterButton {
  id: string;
  label: string;
  active?: boolean;
}

export default function Filters() {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 4, max: 15 });
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [resultCount] = useState(937);

  const roomOptions: FilterButton[] = [
    { id: "studio", label: "Студия" },
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" }
  ];

  const yearOptions: FilterButton[] = [
    { id: "2025", label: "2025" },
    { id: "2026", label: "2026" },
    { id: "2027", label: "2027+" }
  ];

  const toggleRoom = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const selectYear = (yearId: string) => {
    setSelectedYear(prev => prev === yearId ? "" : yearId);
  };

  return (
    <section className="w-full py-9">
      <div className="container-fluid header-container">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          {/* Room Filter */}
          <div className="w-full lg:w-[340px]">
            <div className="space-y-4">
              <label className="text-xs text-[#8C94A8] font-normal">
                Укажите количество комнат
              </label>
              <div className="flex gap-2">
                {roomOptions.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => toggleRoom(room.id)}
                    className={`px-7 py-5 rounded-lg text-sm font-medium transition-colors ${
                      selectedRooms.includes(room.id)
                        ? "bg-[#2B2E83] text-white"
                        : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="w-full lg:w-[340px]">
            <div className="space-y-4">
              <label className="text-xs text-[#8C94A8] font-normal">
                Задайте стоимость, млн ₽
              </label>
              <div className="bg-[#F4F6FB] rounded-lg px-5 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <svg width="16" height="20" viewBox="0 0 17 21" fill="none" className="w-4 h-5">
                      <path d="M5.09133 16.4487C3.96071 16.4487 3.0467 16.0948 2.34931 15.3868C1.65192 14.6788 1.30322 13.6961 1.30322 12.4387C1.30322 11.1813 1.64928 10.2039 2.34138 9.50652C3.03349 8.80913 3.95014 8.46043 5.09133 8.46043C6.24308 8.46043 7.15972 8.80913 7.84127 9.50652C8.52281 10.2039 8.86358 11.1813 8.86358 12.4387C8.86358 13.6856 8.52281 14.6656 7.84127 15.3789C7.15972 16.0921 6.24308 16.4487 5.09133 16.4487ZM5.09133 14.9113C5.72532 14.9113 6.21138 14.6973 6.54951 14.2694C6.88764 13.8414 7.0567 13.2312 7.0567 12.4387C7.0567 11.6462 6.88764 11.0413 6.54951 10.6239C6.21138 10.2065 5.72532 9.99786 5.09133 9.99786C4.47847 9.99786 3.99505 10.2065 3.64107 10.6239C3.28709 11.0413 3.1101 11.6462 3.1101 12.4387C3.1101 13.2312 3.28973 13.8414 3.64899 14.2694C4.00826 14.6973 4.48903 14.9113 5.09133 14.9113Z" fill="#8C94A8"/>
                      <path d="M9.41846 10.2354V8.61873H16.4082V10.2354H13.8247V16.29H12.002V10.2354H9.41846Z" fill="#8C94A8"/>
                    </svg>
                    <span className="text-base font-medium text-[#282D3C]">{priceRange.min}</span>
                  </div>
                  <span className="text-sm text-[#BCC3D2] font-medium">—</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#8C94A8]">до</span>
                    <span className="text-base font-medium text-[#282D3C]">{priceRange.max}</span>
                  </div>
                </div>
                
                {/* Range Slider */}
                <div className="relative mt-6 mb-2">
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={priceRange.min}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value < priceRange.max) {
                          setPriceRange(prev => ({ ...prev, min: value }));
                        }
                      }}
                      className="flex-1"
                    />
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={priceRange.max}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value > priceRange.min) {
                          setPriceRange(prev => ({ ...prev, max: value }));
                        }
                      }}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Move-in Date Filter */}
          <div className="w-full lg:w-[340px]">
            <div className="space-y-4">
              <label className="text-xs text-[#8C94A8] font-normal">
                Укажите дату заселения
              </label>
              <div className="flex gap-2">
                {yearOptions.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => selectYear(year.id)}
                    className={`px-8 py-5 rounded-lg text-sm font-medium transition-colors ${
                      selectedYear === year.id
                        ? "bg-[#2B2E83] text-white"
                        : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                    }`}
                  >
                    {year.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-[228px] lg:ml-auto">
            <button className="w-full lg:w-56 h-14 bg-[#2B2E83] hover:bg-[#232662] text-white font-medium text-sm rounded-[28px] transition-colors">
              Показать {resultCount} квартир
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
