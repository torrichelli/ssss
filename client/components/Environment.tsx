import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Environment() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/5b316d8de74190818402f6c7b4700baa7ca54883?width=2637",
    "https://api.builder.io/api/v1/image/assets/TEMP/375f045116c56a4e6105a51109812c81e11c2a93?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/500656369a7f7d685a050c1bee01644ffcf55e5b?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/41834dc5535870ba5add1d3f76a24a8958d26583?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/69858940dc06f20aa4c778169f83963c09b4cdb0?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/4c0fc69eebb15bf162656508e58ed523711b7dea?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/333b512ab8afec5c4e9af43eb40ae21ccabcb3ec?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/63c286ba64d90ac47b332cf48356e6a63f656c3d?width=2327",
    "https://api.builder.io/api/v1/image/assets/TEMP/e5e3b2ed831329aa0d2c59143d9c1e93c77cba07?width=2327"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <section className="w-full bg-white rounded-t-[28px] pt-24 pb-16">
      <div className="container-fluid header-container">
        {/* Header Section */}
        <div className="pb-12">
          <div className="space-y-0">
            <h2 className="text-[33px] font-medium text-[#8B8DA5] leading-[42px] mb-0">
              Окружение
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-[33px] font-medium text-[#202028] leading-[42px] mb-0">
                  Когда есть варианты
                </h3>
              </div>
              
              {/* Right Content */}
              <div className="flex-1 space-y-5">
                <div className="space-y-5">
                  <p className="text-[15px] text-[#363744] leading-[22px] font-normal">
                    Отправляйтесь в музей-заповедник «Горки Ленинские», чтобы покататься на лошадях по
                    парку и полюбоваться старинной усадьбой. Погрузитесь в историю и традиции сельской
                    жизни в Музее крестьянского быта. А если захочется безмятежного отдыха на природе —
                    устройте пикник у Пуговичинского пруда или на реке Купелинке.
                  </p>
                  
                  <p className="text-[15px] text-[#363744] leading-[22px] font-normal">
                    Займитесь верховой ездой с опытным инструктором в конных клубах «Задор», «Юланта»
                    и «Казачий Дозор». Даже если вы пока не готовы к катанию на лошади, общение
                    с животными в любом случае поднимет настроение.
                  </p>
                </div>
                
                <div className="pt-12">
                  <button className="px-5 py-4 bg-[#2B2E83] hover:bg-[#232662] text-white text-[13px] font-medium rounded-full transition-colors">
                    Узнать больше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full max-w-[1360px] mx-auto relative">
        <div className="relative h-[400px] lg:h-[680px] w-full overflow-hidden">
          {/* Main Image */}
          <div
            className="relative w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentSlide]}
              alt={`Environment image ${currentSlide + 1}`}
              className="w-full h-full object-cover rounded-[28px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent rounded-b-[28px]"></div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/48 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Previous image"
          >
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="w-4 h-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.23468 8.11201L10.5097 2.83701L11.4717 3.79851L7.16418 8.10601L11.4687 12.3545L10.5132 13.3225L5.23468 8.11201Z" fill="white"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-10 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/48 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Next image"
          >
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="w-4 h-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1677 7.96392L6.89266 13.2389L5.93066 12.2774L10.2382 7.96992L5.93366 3.72142L6.88916 2.75342L12.1677 7.96392Z" fill="white"/>
            </svg>
          </button>

          {/* Fullscreen Button */}
          <button
            className="absolute right-2 lg:right-10 top-2 lg:top-5 w-10 h-10 bg-black/48 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Fullscreen"
          >
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" className="w-4 h-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.2242 3.46301H10.1613V1.96301H14.7852V6.58701H13.2852V4.52301L9.89125 7.91651L8.83125 6.85601L12.2242 3.46301ZM4.15625 11.531L7.54975 8.13751L8.61075 9.19801L5.21675 12.5915H7.28025V14.0915H2.65625V9.46801H4.15625V11.531Z" fill="white"/>
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-0.5 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/24"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
