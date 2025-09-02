import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, ChevronDown } from "lucide-react";

interface InteriorImage {
  id: string;
  src: string;
  alt: string;
  hotspots: Hotspot[];
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  type: "plus" | "info";
}

export default function Interior() {
  const [selectedBuilding, setSelectedBuilding] = useState("Корпус 13.1");
  const [selectedFinishing, setSelectedFinishing] = useState("Предчистовая отделка");
  const [selectedRoom, setSelectedRoom] = useState("Гостиная");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buildingDropdownOpen, setBuildingDropdownOpen] = useState(false);
  const [finishingDropdownOpen, setFinishingDropdownOpen] = useState(false);

  const roomTypes = [
    { id: "living", label: "Гостиная" },
    { id: "kitchen", label: "Кухня" },
    { id: "bathroom", label: "Ванная" }
  ];

  const interiorImages: InteriorImage[] = [
    {
      id: "1",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/530f58bab44312c08ccb1fa2b287f49f91a340d9?width=2637",
      alt: "Интерьер гостиной",
      hotspots: [
        { id: "1", x: 976, y: 190, type: "plus" },
        { id: "2", x: 672, y: 75, type: "plus" },
        { id: "3", x: 725, y: 564, type: "plus" },
        { id: "4", x: 514, y: 292, type: "plus" },
        { id: "5", x: 356, y: 299, type: "plus" },
        { id: "6", x: 343, y: 82, type: "plus" }
      ]
    },
    {
      id: "2", 
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b06040cb0304653cb7a5644535c5ed3c0795009a?width=2327",
      alt: "Интерьер кухни",
      hotspots: [
        { id: "1", x: 442, y: 270, type: "plus" },
        { id: "2", x: 628, y: 90, type: "plus" },
        { id: "3", x: 431, y: 510, type: "plus" },
        { id: "4", x: 884, y: 216, type: "plus" },
        { id: "5", x: 686, y: 312, type: "plus" }
      ]
    },
    {
      id: "3",
      src: "https://api.builder.io/api/v1/image/assets/TEMP/1fcf5e6494cacb771d753cc682a739be1b9d0dc9?width=2327", 
      alt: "Интерьер ванной",
      hotspots: [
        { id: "1", x: 535, y: 222, type: "plus" },
        { id: "2", x: 535, y: 78, type: "plus" },
        { id: "3", x: 605, y: 522, type: "plus" },
        { id: "4", x: 198, y: 174, type: "plus" },
        { id: "5", x: 768, y: 456, type: "plus" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  const currentImage = interiorImages[currentSlide];

  return (
    <section className="bg-white rounded-t-[28px] px-5 pt-8 pb-8">
      <div className="container-fluid header-container">
        <div className="max-w-[1360px] mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 mb-12">
            <div className="flex-1">
              <h2 className="text-[#202028] text-[33px] font-medium leading-[42px] tracking-[-0.9px] mb-0">
                Отделка
              </h2>
            </div>
            
            <div className="flex-1 max-w-none lg:max-w-lg">
              <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px]">
                Какая она — новая квартира? У вас есть широкий выбор — купить квартиру без отделки и
                сделать весь ремонт, с предчистовой отделкой и воплотить интерьерные идеи, с готовой
                или улучшенной отделкой и сразу переехать. Нажмите кнопку «Узнать больше» и
                посмотрите, какие работы мы выполнили в вашей будущей квартире.
              </p>
            </div>
          </div>

          {/* Controls Section */}
          <div className="mb-12">
            {/* Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8 max-w-[636px]">
              {/* Building Dropdown */}
              <div className="relative w-[215px]">
                <button
                  onClick={() => setBuildingDropdownOpen(!buildingDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-4 bg-[#F6F6F9] rounded-lg text-[#202028] text-[14px] font-medium"
                >
                  {selectedBuilding}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Finishing Dropdown */}
              <div className="relative w-[235px]">
                <button
                  onClick={() => setFinishingDropdownOpen(!finishingDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-4 bg-[#F6F6F9] rounded-lg text-[#202028] text-[14px] font-medium"
                >
                  {selectedFinishing}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Room Type Tabs */}
            <div className="flex justify-end mb-8">
              <div className="flex bg-[#ECF0F8] rounded-[48px] p-[2px] gap-[2px]">
                {roomTypes.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room.label)}
                    className={`px-5 py-[14px] rounded-[44px] text-[13px] font-medium leading-[14px] transition-colors ${
                      selectedRoom === room.label
                        ? "bg-white text-[#202028]"
                        : "text-[#202028] hover:bg-white/50"
                    }`}
                  >
                    {room.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Image Viewer */}
          <div className="relative">
            <div className="relative h-[680px] rounded-[28px] overflow-hidden">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />

              {/* Hotspots */}
              {currentImage.hotspots.map((hotspot) => (
                <button
                  key={hotspot.id}
                  className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  style={{
                    left: `${(hotspot.x / 1320) * 100}%`,
                    top: `${(hotspot.y / 680) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="w-2 h-2 bg-[#2B2E83] rounded-full relative">
                    <div className="absolute w-[10px] h-[2px] bg-[#2B2E83] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-[2px] h-[10px] bg-[#2B2E83] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </button>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Следующий слайд"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
              
              {/* Fullscreen Button */}
              <button
                className="absolute right-10 top-5 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Полноэкранный режим"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-gradient-to-t from-[rgba(37,37,56,0.6)] to-transparent rounded-b-[28px]" />
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {interiorImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-[3px] rounded-full transition-all ${
                    index === currentSlide 
                      ? "w-[17px] bg-white" 
                      : "w-[17px] bg-white/24"
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
