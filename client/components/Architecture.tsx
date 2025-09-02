import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Architecture() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/03413148bdbf5e18724cf2575de607d9e6893ed1?width=2637",
      alt: "Архитектурный вид жилого комплекса"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7dcb5d2d941abacc04a0af8a2345d5d7df5428ca?width=2327",
      alt: "Вид на дворы жилого комплекса"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/4b7aa05afc0c5cfbc3d5787b954295bec5f8d26e?width=2291",
      alt: "Общий вид застройки"
    }
  ];

  const cards = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/6e164c1e957a42a8f611f8e7ccd889c8156132ac?width=1312",
      alt: "Кирпичные фасады",
      title: "Кирпичные фасады в оттенках речных камней"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/349f499407208bdb9c8aa332bc7d3db5bd53c42b?width=1312",
      alt: "Монолитные дома",
      title: "Монолитные дома переменной высотности: 12, 16 и 17 этажей"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white rounded-t-[28px] px-5 pt-8 pb-16">
      <div className="container-fluid header-container">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#8B8DA5] text-[34px] font-medium leading-[42px] tracking-[-0.9px] mb-0">
            Архитектура
          </p>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-[#202028] text-[33px] font-medium leading-[42px] tracking-[-0.9px] mb-0">
                Когда вдохновение — озеро
              </h2>
            </div>
            
            <div className="flex-1 max-w-none lg:max-w-lg">
              <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px] mb-12">
                Название дизайн-кода «Лесные озера» говорит само за себя. Фаса��ы облицованы
                декоративным кирпичом в оттенках речных камней: белом, сером, бежевом,
                терракотовом. Такое сочетание цветов напоминает песчаные узоры на берегу водоема.
                Дома переменной высотности по 12, 16 и 17 этажей выглядят выразительно — проект
                отличается от типовой монотонной застройки.
              </p>
              
              <button className="bg-[#2B2E83] text-white px-[21px] py-[16px] rounded-[48px] text-[13px] font-medium leading-[14px] tracking-[-0.21px] hover:bg-[#1f2268] transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-12">
          <div className="relative max-w-[1320px] mx-auto">
            <div className="relative h-[400px] md:h-[500px] lg:h-[680px] rounded-[28px] overflow-hidden">
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-gradient-to-t from-[rgba(37,37,56,0.6)] to-transparent rounded-b-[28px]" />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="w-4 h-4 text-white/24" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Следующий слайд"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
              
              {/* Fullscreen Button */}
              <button
                className="absolute right-5 md:right-10 top-5 w-10 h-10 bg-[rgba(32,32,40,0.48)] backdrop-blur-[5px] rounded-full flex items-center justify-center hover:bg-[rgba(32,32,40,0.6)] transition-colors"
                aria-label="Полноэкранный режим"
              >
                <Maximize2 className="w-4 h-4 text-white" />
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-[3px] rounded-full transition-all ${
                    index === currentSlide 
                      ? "w-7 bg-white" 
                      : "w-7 bg-white/24"
                  }`}
                  aria-label={`Слайд ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-[1320px] mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F4F6FB] rounded-[28px] overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-[280px] md:h-[350px] lg:h-[451px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(37,37,56,0.8)] via-[rgba(37,37,56,0.4)] to-transparent" />
                
                {/* Card Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-[18px] font-medium leading-[23px] max-w-md">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
