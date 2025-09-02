export default function Infrastructure() {
  return (
    <section className="w-full bg-white rounded-t-[28px] pt-8 pb-16">
      <div className="container-fluid header-container">
        {/* Header Section */}
        <div className="pb-12">
          <div className="space-y-0">
            <h2 className="text-[34px] font-medium text-[#8B8DA5] leading-[42px] mb-0">
              Инфраструктура
            </h2>
            
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-[33px] font-medium text-[#202028] leading-[42px] mb-0">
                  Все просто
                </h3>
              </div>
              
              {/* Right Content */}
              <div className="flex-1 max-w-none lg:max-w-[520px]">
                <div className="space-y-12">
                  <p className="text-[15px] text-[#363744] leading-[22px] font-normal">
                    Жить здесь просто и удобно: 7 детских садов, 4 школы, поликлиника, станция скорой
                    помощи, физкультурно-оздоровительный комплекс, кафе, супермаркеты, аптеки
                    и салоны красоты — все это рядом с домом. Для масштабного шопинга или вечера
                    в кинотеатре — торгово-развлекательные центры «Курс» и «Галерея 9-18», до которых
                    можно доехать за несколько минут.
                  </p>
                  
                  <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Large Image - Schools and Kindergartens */}
          <div className="md:col-span-2 lg:col-span-2 relative group cursor-pointer">
            <div className="bg-[#F4F6FB] rounded-[28px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d08929dee86051d851cc64607a49ac57d90d3bb3?width=1312"
                  alt="7 детских садов и 4 школы"
                  className="w-full h-[300px] md:h-[451px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-[16px] md:text-[18px] font-medium leading-[23px] transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    7 детских садов и 4 школы
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Small Image 1 - Retail */}
          <div className="relative group cursor-pointer">
            <div className="bg-[#F4F6FB] rounded-[28px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/83c974dadd9b91ea26ded726f3af4e69bcde083a?width=648"
                  alt="Ретейл на первых этажах корпусов"
                  className="w-full h-[300px] md:h-[451px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-[16px] md:text-[18px] font-medium leading-[23px] transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    Ретейл на первых<br />этажах корпусов
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Small Image 2 - Parking */}
          <div className="relative group cursor-pointer md:col-start-2 lg:col-start-3 lg:row-start-1">
            <div className="bg-[#F4F6FB] rounded-[28px] overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0760603c1e3e311582100d18d81696759a08256d?width=648"
                  alt="Многоуровневый паркинг с ритейлом на первом этаже"
                  className="w-full h-[300px] md:h-[451px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-white text-[16px] md:text-[18px] font-medium leading-[23px] transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    Многоуровневый паркинг<br />с ритейлом на первом этаже
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
