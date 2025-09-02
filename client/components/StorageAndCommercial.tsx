export default function StorageAndCommercial() {
  return (
    <section className="px-5">
      <div className="container-fluid header-container">
        <div className="max-w-[1360px] mx-auto space-y-16">
          {/* Storage Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[656px]">
            {/* Left Content */}
            <div className="flex-1 bg-white rounded-t-[28px] lg:rounded-r-none lg:rounded-l-[28px] p-8 lg:p-16 min-h-[656px] flex flex-col justify-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-[#8B8DA5] text-[33px] font-medium leading-[42px] tracking-[-0.9px]">
                    Кладовые
                  </p>
                  
                  <div className="space-y-4">
                    <h2 className="text-[#202028] text-[33px] font-medium leading-[42px] tracking-[-0.9px]">
                      И где хранить вещи
                    </h2>
                    
                    <p className="text-[#202028] text-[15px] leading-[18px] tracking-[-0.4px]">
                      от 265 653 ₽
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <p className="text-[#363744] text-[15px] leading-6 tracking-[-0.24px]">
                    На технических этажах располагаются индивидуальные кладовые, где можно хранить
                    любые габаритные и сезонные вещи: от чемоданов и пуховиков до велосипедов и
                    сноубордов. Такое решение позволит сохранить свободное пространство и порядок в
                    квартире.
                  </p>
                  
                  <button className="bg-[#2B2E83] text-white px-[21px] py-[17px] rounded-[48px] text-[13px] font-medium leading-[14px] tracking-[-0.21px] hover:bg-[#1f2268] transition-colors">
                    Выбрать кладовую
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 min-h-[656px] rounded-[28px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c5d4a770c76f7f3a839eddfda15811f47175e8f2?width=1312"
                alt="Кладовая с полками для хранения вещей"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Commercial Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 min-h-[656px]">
            {/* Right Content */}
            <div className="flex-1 bg-white rounded-t-[28px] lg:rounded-l-none lg:rounded-r-[28px] p-8 lg:p-16 min-h-[656px] flex flex-col justify-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-[#8B8DA5] text-[34px] font-medium leading-[42px] tracking-[-0.9px]">
                    Коммерческие помещения
                  </p>
                  
                  <div className="space-y-4">
                    <h2 className="text-[#202028] text-[33px] font-medium leading-[42px] tracking-[-0.9px]">
                      Место для вашего бизнеса
                    </h2>
                    
                    <p className="text-[#202028] text-[15px] leading-[18px] tracking-[-0.4px]">
                      от 19.3 млн ₽, ипотека от 308 431 ₽/мес.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-[22px]">
                    <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px]">
                      В квартале «Нового Видного» вы сможете купить коммерческую недвижимость для
                      аренды или продажи. Все помещения находятся прямо в домах проекта. Здесь
                      можно реализовать любой бизнес-проект: от ресторана и магазина до спа-салона и
                      фитнес-зала.
                    </p>
                    
                    <p className="text-[#363744] text-[14px] leading-[22px] tracking-[-0.24px]">
                      По мере того, как будет развиваться квартал, будет увеличиваться число его
                      жителей. А значит у вас будет больше клиентов, которые хотят решать
                      повседневные дела рядом с домом.
                    </p>
                  </div>
                  
                  <button className="bg-[#2B2E83] text-white px-[21px] py-[17px] rounded-[48px] text-[13px] font-medium leading-[14px] tracking-[-0.21px] hover:bg-[#1f2268] transition-colors">
                    Выбрать помещение
                  </button>
                </div>
              </div>
            </div>

            {/* Left Image */}
            <div className="flex-1 min-h-[656px] rounded-[28px] overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c4fafaa8d14f3bb48c6f90162f796376d8a8beb8?width=1312"
                alt="Коммерческие помещения в жилом комплексе"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
