export default function Lobby() {
  const cards = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7b122cc8275ddcecaebfee0d3452a93425e8f551?width=1312",
      alt: "Вход в корпус",
      title: "Вход в корпус без порогов и ступеней"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b283450aae2d8780d286e58faa1ce913be5754c8?width=1312",
      alt: "Настенные панели",
      title: "Настенные панели"
    }
  ];

  const features = [
    {
      icon: (
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.2012 24.978V12.4322C41.2012 10.2484 39.4308 8.47803 37.247 8.47803H12.1554C9.97152 8.47803 8.20117 10.2484 8.20117 12.4322V33.8454M41.2012 24.978V37.5238C41.2012 39.7077 39.4308 41.478 37.247 41.478H12.1554C9.97152 41.478 8.20117 39.7077 8.20117 37.5238V33.8454M41.2012 24.978L34.5547 17.8957C34.4452 17.779 34.2607 17.7765 34.1481 17.8902L22.1195 30.029M8.20117 33.8454L16.5385 25.179C16.6456 25.0676 16.8224 25.063 16.9352 25.1687L22.1195 30.029M22.1195 30.029L27.7318 35.6413" stroke="#2B2E83" strokeWidth="3.5"/>
        </svg>
      ),
      title: "Панорамные окна",
      description: "Много солнечного света и воздуха"
    },
    {
      icon: (
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M42.7299 7.33838L34.7046 34.4745L31.3483 33.4818L37.4341 12.9036L13.0866 21.4388L24.3667 25.9067L32.2543 41.0259L29.1512 42.6447L21.8663 28.6809L3.07739 21.2387L42.7299 7.33838Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "Навигация",
      description: "Указатели помогут быстро найти квартиру"
    },
    {
      icon: (
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M24.0349 5.91895L29.6392 11.5232C32.4164 14.3005 33.7853 17.9193 33.7853 21.5611V24.3911C35.1373 24.0133 36.5628 23.8112 38.0355 23.8112H43.7857V27.5613C43.7857 36.2615 36.7352 43.3119 28.0351 43.3119H20.0348C11.3346 43.3119 4.28418 36.2615 4.28418 27.5613V23.8112H10.0344C16.1305 23.8112 21.4167 27.2728 24.0349 32.338C25.443 29.6139 27.6228 27.3536 30.2853 25.8462V21.5611C30.2853 18.8025 29.254 16.0878 27.1643 13.9981L24.0349 10.8687L20.9055 13.9981C18.8159 16.0878 17.7846 18.8025 17.7846 21.5611H14.2846C14.2846 17.9193 15.6534 14.3005 18.4307 11.5232L24.0349 5.91895ZM22.2849 39.5618C22.2849 32.7946 16.8015 27.3112 10.0344 27.3112H7.78417V27.5613C7.78417 34.3285 13.2676 39.8119 20.0348 39.8119H22.2849V39.5618ZM25.7849 39.8119V39.5618C25.7849 32.7946 31.2684 27.3112 38.0355 27.3112H40.2857V27.5613C40.2857 34.3285 34.8022 39.8119 28.0351 39.8119H25.7849Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "Лаунж-зона",
      description: "Удобно ждать курьера или такси"
    }
  ];

  return (
    <section className="bg-white rounded-t-[28px] px-5 pt-8 pb-16">
      <div className="container-fluid header-container">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#8B8DA5] text-[34px] font-medium leading-[42px] tracking-[-0.9px] mb-0">
            Лобби
          </p>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <div className="flex-1">
              <h2 className="text-[#202028] text-[33px] font-medium leading-[42px] tracking-[-0.9px] mb-0">
                Замечать детали
              </h2>
            </div>
            
            <div className="flex-1 max-w-none lg:max-w-lg">
              <div className="space-y-[22px] mb-12">
                <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px]">
                  Через панорамные окна в лобби попадает много естественного света и отлично видно
                  весь двор — можете ждать курьера и следить за детьми на площадке. Располагайтесь
                  поудобнее на скамейках с мягкими подушками или на пуфах у журнальных столиков.
                </p>
                
                <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px]">
                  В интерьере лобби продолжится дизайн-код: объемные картины и панно в сине-зеленых
                  тонах, белоснежные светильники-шары, настенные панели под темное дерево и черные
                  лифтовые проемы — настоящее «Лесное озеро». Никаких порогов и ступеней при входе
                  в подъезд — без лишних препятствий возвращайтесь с прогулки с малышом, а коляску
                  оставляйте в специальной комнате в холле. За безопасность не переживайте — в жилом
                  комплексе будет работать круглосуточное видеонаблюдение.
                </p>
                
                <p className="text-[#363744] text-[15px] leading-[22px] tracking-[-0.24px] pt-[1px]">
                  На минус первом этаже предусмотрены кладовые для хранения сезонных и габаритных
                  вещей.
                </p>
              </div>
              
              <button className="bg-[#2B2E83] text-white px-[21px] py-[16px] rounded-[48px] text-[13px] font-medium leading-[14px] tracking-[-0.21px] hover:bg-[#1f2268] transition-colors">
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        {/* Large Images */}
        <div className="mb-12">
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

        {/* Feature Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1320px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-[84px] h-[84px] bg-[#F6F6F9] rounded-[20px] flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12">
                  {feature.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-[#202028] text-[19px] font-medium leading-[23px] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#363744] text-[15px] leading-[19px] font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
