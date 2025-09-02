import { useState } from "react";
import { Plus, Minus, MapPin } from "lucide-react";

export default function SalesOffice() {
  const [activeTab, setActiveTab] = useState("contacts");

  return (
    <section className="bg-white px-5 py-24">
      <div className="container-fluid header-container">
        <div className="max-w-[1320px] mx-auto">
          {/* Section Title */}
          <div className="mb-10">
            <h2 className="text-[#282D3C] text-[30px] font-medium leading-[36px] tracking-[-0.48px]">
              Офис продаж
            </h2>
          </div>

          {/* Map Container */}
          <div className="relative h-[632px] rounded-[32px] overflow-hidden">
            {/* Map Background */}
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/84f590c413c90e9244de1e5039b1572a12dfe23f?width=2640')"
              }}
            >
              {/* Map Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[72px] h-[72px] border-4 border-white rounded-full overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9e0e082b70d58e831c67436f680f625e3fa791f3?width=128"
                    alt="Офис продаж на карте"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-8 right-8 flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Увеличить карту"
                >
                  <Plus className="w-4 h-4 text-black" />
                </button>
                <div className="w-full h-px bg-[#ECF0F8]"></div>
                <button
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Уменьшить карту"
                >
                  <Minus className="w-4 h-4 text-black" />
                </button>
              </div>

              {/* Map Navigation Controls */}
              <div className="absolute bottom-6 right-[200px] flex items-center gap-2">
                <div className="bg-white rounded-sm shadow-lg px-2 py-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF4433]" />
                  <span className="text-[12px] text-black font-arial">Как добраться</span>
                </div>
                
                <div className="bg-white rounded-sm shadow-lg px-2 py-1 flex items-center gap-2">
                  <div className="w-[18px] h-[18px]">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.34131 1.30859C4.41305 1.30859 3.52281 1.67734 2.86643 2.33372C2.21006 2.9901 1.84131 3.88034 1.84131 4.80859V9.30859H17.8413V4.80859C17.8413 3.88034 17.4726 2.9901 16.8162 2.33372C16.1598 1.67734 15.2696 1.30859 14.3413 1.30859H5.34131Z" fill="#FFCC00"/>
                      <path d="M1.84131 9.30859V13.8086C1.84131 14.7369 2.21006 15.6271 2.86643 16.2835C3.52281 16.9398 4.41305 17.3086 5.34131 17.3086H9.84131V9.30859H1.84131Z" fill="#E6E6E6"/>
                      <path d="M9.84131 9.30859V17.3086H14.3413C15.2696 17.3086 16.1598 16.9398 16.8162 16.2835C17.4726 15.6271 17.8413 14.7369 17.8413 13.8086V9.30859H9.84131Z" fill="black"/>
                    </svg>
                  </div>
                  <span className="text-[12px] text-black font-arial">Доехать на такси</span>
                </div>
                
                <div className="bg-white/70 rounded-sm px-1 py-0.5">
                  <span className="text-[12px] text-black underline font-verdana">Создать свою карту</span>
                </div>
              </div>

              {/* Copyright Info */}
              <div className="absolute bottom-1 left-1 bg-white/75 rounded-sm px-1">
                <span className="text-[11px] text-black font-verdana">© Яндекс </span>
                <span className="text-[11px] text-black underline font-verdana">Условия использования</span>
              </div>
            </div>

            {/* Contact Card */}
            <div className="absolute top-8 left-8 w-[384px] max-h-[536px] bg-white rounded-[24px] shadow-lg p-8">
              {/* Tab Navigation */}
              <div className="flex mb-5 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab("contacts")}
                  className={`flex-1 px-5 py-5 text-[15px] font-medium leading-4 tracking-[-0.16px] transition-colors ${
                    activeTab === "contacts"
                      ? "bg-[#2B2E83] text-white"
                      : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                  }`}
                >
                  Контакты
                </button>
                <button
                  onClick={() => setActiveTab("directions")}
                  className={`flex-1 px-5 py-5 text-[15px] font-medium leading-4 tracking-[-0.16px] transition-colors ${
                    activeTab === "directions"
                      ? "bg-[#2B2E83] text-white"
                      : "bg-[#F4F6FB] text-[#282D3C] hover:bg-[#E8E9EC]"
                  }`}
                >
                  Как добраться
                </button>
              </div>

              {/* Contact Information */}
              <div className="space-y-5 mb-5">
                {/* Logo */}
                <div className="h-40 bg-[#2B2E83] rounded-2xl flex items-center justify-center">
                  <svg width="321" height="161" viewBox="0 0 321 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1084 0.308594H303.294V160.309H18.1084V0.308594Z" fill="#2B2E83"/>
                    <path d="M135.394 72.4809H140.64L144.869 84.2194L149.065 72.4809H154.126V88.132H150.763V76.1676L146.38 88.1305H142.924L138.541 76.2327V88.132H135.394V72.4809ZM176.1 72.4809H187.674V88.132H184.091V75.7794H179.372C179.341 77.9779 179.28 80.9216 179.219 82.5705C179.095 86.6772 177.947 88.132 174.589 88.132H172.984V84.8342H173.879C175.391 84.8342 175.885 84.1224 175.978 81.8913C176.071 79.4987 176.1 74.7453 176.1 72.4809ZM205.98 72.4809H219.59V75.7794H214.56V88.1357H211.011V75.7794H205.98V72.4809ZM126.13 72.1602H124.849C121.769 72.1602 119.437 74.1216 118.903 77.0409L122.172 77.5905C122.619 76.2002 123.647 75.2513 124.946 75.1883C125.193 75.1707 125.44 75.1707 125.686 75.1883C127.62 75.2609 128.492 76.2327 128.492 78.6298C124.83 78.6298 122.326 78.4483 120.485 79.7202C118.982 80.7594 118.337 81.9113 118.337 83.732C118.337 86.3683 120.294 88.4565 123.453 88.4565H123.888C126.119 88.4565 127.92 87.5468 128.653 86.4483V88.1342H131.949V78.7002C131.952 75.0616 130.092 72.1602 126.13 72.1602ZM124.117 85.4024C122.717 85.3602 121.905 84.5098 121.905 83.4357C121.905 82.5453 122.288 82.1031 122.794 81.8002C123.325 81.4757 124.014 81.3639 125.086 81.3239C126.115 81.2853 126.952 81.2379 128.554 81.2379C128.554 83.9031 126.95 85.2513 124.958 85.3942C124.678 85.4129 124.398 85.4156 124.117 85.4024ZM205.15 81.3653V79.9002C205.15 74.8513 202.123 72.2379 198.214 72.2379H197.449C193.241 72.2379 190.557 75.2439 190.419 79.4868C190.4 80.063 190.4 80.6396 190.419 81.2157C190.517 85.4372 193.342 88.2787 197.114 88.3816C197.808 88.4024 197.717 88.4009 198.369 88.3816C201.654 88.2861 204.141 86.2979 204.874 83.7024L201.697 83.1194C200.92 84.7476 199.439 85.3713 198.253 85.4335C197.985 85.4517 197.717 85.4517 197.449 85.4335C195.593 85.3535 193.93 83.8283 193.93 81.6142V81.372L205.15 81.3653ZM197.387 75.1876C197.682 75.168 197.977 75.168 198.272 75.1876C199.831 75.2705 201.474 76.3328 201.632 78.4424H193.948C194.126 76.5587 195.571 75.2913 197.387 75.1876ZM172.007 78.9261C171.927 75.1394 169.013 72.2379 165.16 72.2379H163.763C159.909 72.2379 156.995 75.1453 156.914 78.9468C156.895 79.8556 156.895 80.7647 156.914 81.6735C156.995 85.4816 159.909 88.3816 163.763 88.3816H165.16C169.013 88.3816 171.927 85.4816 172.007 81.6735C172.028 80.7578 172.028 79.8418 172.007 78.9261ZM168.488 81.4794C168.446 83.6913 166.911 85.192 164.845 85.3024C164.589 85.3246 164.333 85.3246 164.077 85.3024C161.991 85.192 160.476 83.6913 160.434 81.4794C160.414 80.6926 160.414 79.9055 160.434 79.1187C160.476 76.9298 161.991 75.4276 164.077 75.3187C164.333 75.2965 164.59 75.2965 164.845 75.3187C166.911 75.4276 168.446 76.9298 168.488 79.1402C168.509 79.9198 168.509 80.6998 168.488 81.4794ZM112.79 82.6113C112.374 84.0646 111.26 85.0579 109.765 85.2757C109.364 85.3336 108.958 85.3336 108.557 85.2757C106.696 85.0031 105.386 83.5402 105.347 81.4846C105.327 80.6976 105.327 79.9101 105.347 79.1231C105.386 77.0483 106.762 75.532 108.658 75.3202C108.966 75.2858 109.276 75.2835 109.583 75.3135C111.175 75.4942 112.374 76.4972 112.807 78.0209L116.276 77.3187C115.529 74.3505 112.959 72.2379 109.672 72.2379H108.677C104.823 72.2379 101.908 75.1394 101.824 78.9468C101.809 79.8556 101.809 80.7647 101.824 81.6735C101.904 85.4816 104.82 88.3816 108.673 88.3816H109.669C113.021 88.3816 115.613 86.189 116.299 83.115L112.79 82.6113Z" fill="white"/>
                  </svg>
                </div>

                {/* Phone Number */}
                <div>
                  <h3 className="text-[#282D3C] text-[20px] font-medium leading-6 tracking-[-0.3px]">
                    +7 495 126-16-38
                  </h3>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[#8C94A8] text-[11px] leading-3">
                    Городское поселение Горки Ленинские, Ленинский<br />
                    городской округ, Московская область
                  </p>
                </div>

                {/* Working Hours */}
                <div>
                  <p className="text-[#282D3C] text-[11px] font-bold leading-3">
                    Ежедневно c 09:00 до 21:00
                  </p>
                </div>
              </div>

              {/* Book Meeting Button */}
              <button className="w-full bg-[#2B2E83] text-white py-5 px-6 rounded-[28px] text-[15px] font-medium leading-4 tracking-[-0.16px] hover:bg-[#1f2268] transition-colors">
                Записаться на встречу
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
