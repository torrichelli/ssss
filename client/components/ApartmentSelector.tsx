import { useState } from "react";
import { Maximize2 } from "lucide-react";

interface Apartment {
  id: string;
  area: string;
  image: string;
  isSelected?: boolean;
}

interface ApartmentDetails {
  id: string;
  project: string;
  area: string;
  floor: string;
  building: string;
  cost: string;
  mortgage: string;
  image: string;
  code: string;
}

export default function ApartmentSelector() {
  const [selectedRoomType, setSelectedRoomType] = useState("2");

  const roomTypes = [
    { id: "studio", label: "Студия" },
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" }
  ];

  const apartments: Apartment[] = [
    {
      id: "1",
      area: "51,1 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/676169e71606a4ff2fd4e9d5ef521299b095fcec?width=176",
      isSelected: true
    },
    {
      id: "2", 
      area: "59,4 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/93a7306ca1d638559f4c3530153b6a4488d493f5?width=176"
    },
    {
      id: "3",
      area: "55,5 м²", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2d8159e241e880c3ab550b6459292658c1886977?width=176"
    },
    {
      id: "4",
      area: "51,1 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0f41731ab9dad5f3a7637dd591c4b50f0ea22985?width=176"
    },
    {
      id: "5",
      area: "51,9 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8c1dad5ac4f20a17e0e82631d1ccacc2eeaa11da?width=176"
    },
    {
      id: "6", 
      area: "53,9 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c9a91ca8246f14a80c15f3606a262538f2888d98?width=176"
    },
    {
      id: "7",
      area: "57,1 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8b14b62e7f2bccaab23045e40376d37a24e6a7c7?width=176"
    },
    {
      id: "8",
      area: "51,9 м²", 
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9d2b6dfc7489be101e4f6b8fbc658ce8473a522e?width=176"
    },
    {
      id: "9",
      area: "60,5 м²",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1642530532ea2ab5a95c4fb30cf044e503da0d47?width=176"
    }
  ];

  const selectedApartment: ApartmentDetails = {
    id: "1",
    project: "Новое Видное",
    area: "51,1 м²",
    floor: "11–12",
    building: "17", 
    cost: "от 7 826 568 ₽",
    mortgage: "от 100 443 ₽/мес.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/c0873c80e0b20659116be73ab4d89d5e4a61522b?width=760",
    code: "2-51-Л-П(5.5)"
  };

  return (
    <section className="bg-[#F4F6FB] rounded-[32px] px-5 py-24">
      <div className="container-fluid header-container">
        <div className="max-w-[1360px] mx-auto">
          {/* Section Title */}
          <h2 className="text-[#282D3C] text-[30px] font-medium leading-[36px] tracking-[-0.48px] mb-10">
            Выберите квартиру
          </h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Apartment Selection */}
            <div className="bg-white rounded-[32px] p-8 h-fit">
              {/* Room Type Filters */}
              <div className="flex items-center gap-2 mb-7">
                {roomTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedRoomType(type.id)}
                    className={`h-14 px-6 rounded-[28px] text-[15px] font-medium leading-4 tracking-[-0.16px] transition-colors ${
                      selectedRoomType === type.id
                        ? "bg-[#2B2E83] text-white"
                        : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                    } ${type.id === "studio" ? "min-w-[101px]" : "min-w-[56px]"}`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Apartment Count */}
              <p className="text-[#282D3C] text-[15px] font-medium leading-4 tracking-[-0.16px] mb-5">
                47 квартир
              </p>

              {/* Apartment Grid */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-2 max-w-[360px] max-h-[344px] overflow-hidden">
                  {apartments.map((apartment) => (
                    <button
                      key={apartment.id}
                      className={`p-4 rounded-2xl transition-all flex flex-col items-center ${
                        apartment.isSelected
                          ? "bg-[#F4F6FB] border border-[#2B2E83]"
                          : "bg-[#F4F6FB] border border-transparent hover:border-[#E8E9EC]"
                      }`}
                    >
                      <div className="w-[88px] h-[88px] flex items-center justify-center mb-3">
                        <img
                          src={apartment.image}
                          alt={`Планировка ${apartment.area}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span 
                        className={`text-[12px] font-medium leading-3 tracking-[-0.06px] ${
                          apartment.isSelected ? "text-[#282D3C]" : "text-[#8C94A8]"
                        }`}
                      >
                        {apartment.area}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Scrollbar Indicator */}
                <div className="absolute right-0 top-0 w-1 h-[187px] bg-[#ECF0F8] rounded-[4px]"></div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className="w-2 h-2 bg-[#2B2E83] rounded-full"
                  ></div>
                ))}
              </div>

              {/* Show Button */}
              <button className="w-full bg-[#2B2E83] text-white rounded-[24px] py-4 px-6 text-[13px] font-medium leading-[14px] tracking-[-0.14px] mt-6 hover:bg-[#1f2268] transition-colors">
                Показать 2 квартиры этого типа
              </button>
            </div>

            {/* Right Panel - Apartment Details */}
            <div className="bg-white rounded-[32px] p-8 h-fit">
              {/* Header Info */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#8C94A8] text-[16px] leading-[18px]">1/47</span>
                <span className="text-[#8C94A8] text-[16px] leading-[18px]">{selectedApartment.code}</span>
              </div>

              {/* Apartment Image */}
              <div className="relative mb-6">
                <div className="w-full max-w-[384px] h-[380px] flex items-center justify-center mx-auto">
                  <img
                    src={selectedApartment.image}
                    alt="План квартиры"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Expand Button */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#F4F6FB] rounded-[28px] flex items-center justify-center hover:bg-[#E8E9EC] transition-colors">
                  <Maximize2 className="w-5 h-5 text-[#2B2E83]" />
                </button>
              </div>

              {/* Apartment Details Grid */}
              <div className="bg-[#F4F6FB] rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm">
                  {/* Project */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">Проект</p>
                    <p className="text-[#282D3C] text-[13px] font-medium leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.project}
                    </p>
                  </div>

                  {/* Area */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">Площадь</p>
                    <p className="text-[#282D3C] text-[14px] leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.area}
                    </p>
                  </div>

                  {/* Floor */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">Этаж</p>
                    <p className="text-[#282D3C] text-[14px] leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.floor}
                    </p>
                  </div>

                  {/* Building */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">Корпус</p>
                    <p className="text-[#282D3C] text-[14px] leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.building}
                    </p>
                  </div>

                  {/* Cost */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">Стоимость</p>
                    <p className="text-[#282D3C] text-[13px] leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.cost}
                    </p>
                  </div>

                  {/* Mortgage */}
                  <div>
                    <p className="text-[#8C94A8] text-[11px] leading-3 tracking-[-0.06px] mb-2">В ипотеку</p>
                    <p className="text-[#282D3C] text-[14px] font-medium leading-[14px] tracking-[-0.14px]">
                      {selectedApartment.mortgage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
