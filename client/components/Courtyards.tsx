export default function Courtyards() {
  return (
    <section className="w-full bg-white rounded-t-[28px] pt-8 pb-16">
      <div className="container-fluid header-container">
        {/* Header Section */}
        <div className="pb-12">
          <div className="space-y-0">
            <h2 className="text-[33px] font-medium text-[#8B8DA5] leading-[42px] mb-0">
              Дворы и озеленение
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-[34px] font-medium text-[#202028] leading-[42px] mb-0">
                  В одном ритме
                </h3>
              </div>
              
              {/* Right Content */}
              <div className="flex-1 max-w-none lg:max-w-[520px]">
                <div className="space-y-5">
                  <div className="space-y-5">
                    <p className="text-[15px] text-[#363744] leading-[22px] font-normal">
                      Почувствуйте ритм во дворах квартала «Новое Видное». В плейхабах бегают дети
                      и играют в догонялки. На футбольном поле, расположенном поодаль от домов, идет
                      напряженный матч, а на баскетбольной площадке в сетку забрасывают мяч под музыку
                      из колонки. Кто-то катается на велосипедах по выделенным дорожкам
                      на благоустроенной набережной или на скейте по городской плазе.
                    </p>
                    
                    <p className="text-[15px] text-[#363744] leading-[22px] font-normal">
                      На оборудованном воркаут-пространстве соседи тренируются под открытым небом,
                      собака ловит мяч в догхабе. В зоне для пикников намечается праздник,а пожилая пара
                      читает друг другу книгу на скамейке в покет-парке.
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

        {/* Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Pocket Parks Image */}
          <div className="relative group cursor-pointer">
            <div className="bg-[#F4F6FB] rounded-[28px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/93db7e7b0ec3f69786ce44669934fc78d3d98370?width=1312"
                  alt="Покет-парки"
                  className="w-full h-[300px] md:h-[451px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-[16px] md:text-[19px] font-medium leading-[23px] transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    Покет-парки
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Playgrounds Image */}
          <div className="relative group cursor-pointer">
            <div className="bg-[#F4F6FB] rounded-[28px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/853c94f036d7d13ef4473b33e025526ca3b1bf46?width=1312"
                  alt="Плейхабы для детей всех возрастов"
                  className="w-full h-[300px] md:h-[451px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-[16px] md:text-[18px] font-medium leading-[23px] transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    Плейхабы для детей всех возрастов
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
