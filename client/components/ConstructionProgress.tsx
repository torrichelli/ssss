import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

interface ProgressItem {
  id: string;
  title: string;
  year: string;
  image: string;
  type: "video" | "photos";
  count?: number;
}

export default function ConstructionProgress() {
  const [selectedMonth, setSelectedMonth] = useState("Все");
  const [selectedBuilding, setSelectedBuilding] = useState("Все");
  const [activeTab, setActiveTab] = useState("photos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [buildingDropdownOpen, setBuildingDropdownOpen] = useState(false);

  const progressItems: ProgressItem[] = [
    {
      id: "1",
      title: "Август",
      year: "2025 г.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d7aadb21d5144f50f9843d945d86b736bfcd2d76?width=608",
      type: "video"
    },
    {
      id: "2", 
      title: "22 августа",
      year: "2025 г.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0310ef6c252251e498a69b5e12f9af90075b6468?width=608",
      type: "photos",
      count: 56
    },
    {
      id: "3",
      title: "23 июля", 
      year: "2025 г.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1387e7b97d39bc6668b96fa8bac4d7eddf5ea353?width=608",
      type: "photos",
      count: 58
    },
    {
      id: "4",
      title: "Июль",
      year: "2025 г.", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/04d2f733c9822c11e3d0888cedbd3ecc7a92af6f?width=608",
      type: "video"
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, progressItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="px-5 pt-24">
      <div className="container-fluid header-container">
        <div className="max-w-[1360px] mx-auto space-y-8">
          {/* Section Title */}
          <div className="flex items-end justify-between">
            <h2 className="text-[#282D3C] text-[29px] font-medium leading-[36px] tracking-[-0.48px]">
              Ход строительства
            </h2>
          </div>

          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Month Filter */}
              <div className="w-[400px]">
                <label className="block text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-4">
                  Выберите месяц и год
                </label>
                <div className="relative">
                  <button
                    onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#F4F6FB] rounded-lg text-[#282D3C] text-[15px] font-medium h-14"
                  >
                    {selectedMonth}
                    <ChevronDown className="w-4 h-4 ml-4" />
                  </button>
                </div>
              </div>

              {/* Building Filter */}
              <div className="w-[220px]">
                <label className="block text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-4">
                  Выберите корпус
                </label>
                <div className="relative">
                  <button
                    onClick={() => setBuildingDropdownOpen(!buildingDropdownOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#F4F6FB] rounded-lg text-[#282D3C] text-[15px] font-medium h-14"
                  >
                    {selectedBuilding}
                    <ChevronDown className="w-4 h-4 ml-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Toggle */}
            <div className="flex bg-[#F4F6FB] rounded-lg overflow-hidden min-w-[304px] h-14">
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex-1 px-4 py-5 text-[15px] font-medium leading-4 tracking-[-0.16px] transition-colors ${
                  activeTab === "photos"
                    ? "bg-[#2B2E83] text-white"
                    : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                }`}
              >
                Фото и видео
              </button>
              <button
                onClick={() => setActiveTab("cameras")}
                className={`flex-1 px-4 py-5 text-[15px] font-medium leading-4 tracking-[-0.16px] transition-colors ${
                  activeTab === "cameras"
                    ? "bg-[#2B2E83] text-white"
                    : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                }`}
              >
                Веб-камеры
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className="relative pb-6">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${currentIndex * (304 + 32)}px)` // 304px card width + 32px gap
                }}
              >
                {progressItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-[304px] h-[432px] bg-[#F4F6FB] rounded-[24px] relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={`${item.title} ${item.year}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#282D3C] via-[rgba(40,45,60,0.77)] to-transparent opacity-60" />

                    {/* Type Badge */}
                    <div className="absolute top-5 left-5 bg-white rounded-[24px] px-3 py-[6px]">
                      <span className="text-black text-[11px] font-medium leading-3 tracking-[-0.06px]">
                        {item.type === "video" ? "Видео" : `${item.count} фото`}
                      </span>
                    </div>

                    {/* Date Info */}
                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="text-[22px] font-medium leading-6 tracking-[-0.36px] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[12px] font-medium leading-3 tracking-[-0.06px]">
                        {item.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-5 pointer-events-none">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-14 h-14 rounded-[28px] backdrop-blur-[4px] flex items-center justify-center transition-colors pointer-events-auto ${
                  currentIndex === 0 
                    ? "bg-[rgba(40,45,60,0.2)] opacity-50 cursor-not-allowed" 
                    : "bg-[rgba(40,45,60,0.4)] hover:bg-[rgba(40,45,60,0.6)]"
                }`}
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`w-14 h-14 rounded-[28px] backdrop-blur-[4px] flex items-center justify-center transition-colors pointer-events-auto ${
                  currentIndex >= maxIndex 
                    ? "bg-[rgba(40,45,60,0.2)] opacity-50 cursor-not-allowed" 
                    : "bg-[rgba(40,45,60,0.4)] hover:bg-[rgba(40,45,60,0.6)]"
                }`}
                aria-label="Следующий слайд"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
