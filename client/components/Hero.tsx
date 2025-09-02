import { Play, Info, MapPin, Car, Zap, Percent, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 8,
    minutes: 51,
    seconds: 36
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-7">
      <div className="container-fluid header-container">
        <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[556px]">
          {/* Main Image Section */}
          <div className="relative flex-1 rounded-[28px] overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/dcf9660891289c94c7e42664c469d3a3dcb4964e?width=2032"
              alt="Новое Видное жилой комплекс"
              className="w-full h-[400px] lg:h-full object-cover"
            />
            
            {/* Top Tags Overlay */}
            <div className="absolute top-5 left-5 right-5">
              <div className="flex flex-wrap gap-1">
                {[
                  "Семейная ипотека без наценки",
                  "Улучшенная отделка", 
                  "Ключи в 2025 году"
                ].map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1.5 bg-black/40 text-white text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Buttons Overlay */}
            <div className="absolute bottom-5 right-5 flex gap-1">
              <button className="flex items-center gap-2 bg-white rounded-full pl-1 pr-3 py-1 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-[#2B2E83] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <span className="text-sm font-medium text-[#202028]">Видео</span>
              </button>
              <button className="flex items-center gap-2 bg-white rounded-full pl-1 pr-3 py-1 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-[#DAECFF] rounded-full flex items-center justify-center">
                  <Info className="w-4 h-4 text-[#2B2E83]" />
                </div>
                <span className="text-sm font-medium text-[#202028]">О проекте</span>
              </button>
            </div>
          </div>

          {/* Right Sidebar Cards */}
          <div className="w-full lg:w-[296px] flex flex-col gap-2">
            {/* Countdown Card */}
            <div className="bg-[#2B2E83] rounded-[28px] p-5 text-white min-h-[160px] flex flex-col justify-between">
              <div className="w-8 h-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-medium mb-2 leading-6">
                  Успейте до повышений цен
                </h3>
                <div className="text-lg font-medium">
                  {String(timeLeft.days).padStart(2, '0')} : {String(timeLeft.hours).padStart(2, '0')} : {String(timeLeft.minutes).padStart(2, '0')} : {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Sale Card */}
            <div className="bg-[#F4F6FB] rounded-[28px] p-5 min-h-[160px] flex flex-col justify-between">
              <div className="w-8 h-8">
                <Percent className="w-8 h-8 text-[#2B2E83]" />
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-medium text-[#202028] leading-6">
                  Пора покупать:<br />распродажа квартир
                </h3>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-[#F4F6FB] rounded-[28px] p-5 min-h-[160px] flex flex-col justify-between">
              <div className="w-8 h-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/46bde8a88a9c2a52582f2a474104b8d11fe3b12a?width=64"
                  alt="Квартиры"
                  className="w-8 h-8"
                />
              </div>
              <div className="mt-auto space-y-3">
                <h3 className="text-lg font-medium text-[#202028] leading-6">
                  Квартиры от 19 000 ₽/мес
                </h3>
                <p className="text-sm text-[#363744]">
                  Рассрочка на 3 года
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-7 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          {/* Title and Location */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-[41px] font-medium leading-tight">
              <span className="text-[#202028]">Новое Видное </span>
              <span className="text-[#8B8DA5]">от 4 млн ₽</span>
            </h1>
            
            <div className="flex items-center gap-8 text-[#363744]">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-white fill-white" />
                <span className="text-[15px]">Ж/д ст. Калинина</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#575972]" />
                <span className="text-[15px]">5 мин.</span>
              </div>
            </div>
          </div>

          {/* Map Button */}
          <button className="flex items-center gap-2 bg-[#F0F1F4] hover:bg-[#E8E9EC] transition-colors rounded-full pl-1 pr-5 py-1 h-12 self-start lg:self-auto">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/18ed5f66d2a30807e243e2d25ed276cbe880d86a?width=88"
                alt="Карта"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-[#202028]">На карте</span>
          </button>
        </div>
      </div>
    </section>
  );
}
