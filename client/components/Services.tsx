import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: (
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M48.0449 27.2285C48.0449 38.4381 39.1537 47.3848 28.3574 47.3848C17.5612 47.3848 8.66992 38.4381 8.66992 27.2285C8.66992 16.0189 17.5612 7.07227 28.3574 7.07227C39.1537 7.07227 48.0449 16.0189 48.0449 27.2285ZM52.2637 27.2285C52.2637 40.6905 41.5605 51.6035 28.3574 51.6035C15.1543 51.6035 4.45117 40.6905 4.45117 27.2285C4.45117 13.7666 15.1543 2.85352 28.3574 2.85352C41.5605 2.85352 52.2637 13.7666 52.2637 27.2285ZM56.8687 55.1377L49.3954 47.4783L46.3746 50.426L53.8479 58.0855L56.8687 55.1377ZM26.2124 38.7027V41.0922H21.5493V38.7027H18.4405V38.1416V34.4839V33.9228H21.5493V14.803H31.2974C34.1442 14.803 36.3961 15.6642 38.0646 17.193C39.7447 18.7216 40.979 20.652 40.979 23.1677C40.979 25.7437 40.0075 28.1467 38.4532 29.7401C36.5102 31.7316 33.5957 32.5283 31.2246 32.4493H26.2124V33.9228H30.0984V34.4839V38.1416V38.7027H26.2124ZM25.9331 27.7485H31.2641C32.8392 27.7485 33.9843 27.151 34.9558 26.3543C35.9273 25.3585 36.3159 24.8114 36.3159 23.3669C36.1216 21.9728 35.4505 21.0025 34.5672 20.4591C33.79 19.9812 32.9286 19.6069 31.4585 19.5828H25.9331V27.7485Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "Самолет Бонус\nдо 230 000 рублей\nза каждого друга",
      description: "Расширяем программу\n«Самолет Бонус»"
    },
    {
      icon: (
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M43.4988 25.2263L30.645 40.7862L20.395 32.4768L23.1501 29.0783L30.0328 34.6578L40.1258 22.4399L43.4988 25.2263Z" fill="#2B2E83"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M35.4634 52.4025H41.4158C47.3332 52.4025 52.1301 47.6056 52.1301 41.6883V36.1333H47.8444V41.6883C47.8444 45.2386 44.9662 48.1169 41.4158 48.1169H35.4634V52.4025ZM35.4634 13.8311H47.8444V26.6095H52.1301V9.54541H35.4634V13.8311ZM25.9396 9.54541V13.8311H19.9873C16.4368 13.8311 13.5587 16.7093 13.5587 20.2596V26.6095H9.27295V20.2596C9.27295 14.3424 14.0699 9.54541 19.9873 9.54541H25.9396ZM25.9396 48.1169V52.4025H9.27295V36.1333H13.5587V48.1169H25.9396Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "Сертификат на скидку\n«Метр от Самолет»",
      description: "Скидка вам и друзьям до\n150 000 рублей на любую\nнедвижимость"
    },
    {
      icon: (
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M30.4585 4.85938H56.8431V31.2439L33.2618 54.8252L15.7359 37.2649L7.4419 45.52L4.46582 42.5298L12.7556 34.2789L6.87866 28.3903L9.8647 25.4101L33.2647 48.8562L52.6243 29.4965V9.07812H32.206L15.7466 25.5375L12.7635 22.5544L30.4585 4.85938ZM36.691 15.224C39.3998 12.5152 43.7697 12.5152 46.4785 15.224C49.1873 17.9327 49.1873 22.3027 46.4785 25.0114C43.7831 27.7068 39.3596 27.7366 36.6818 25.0021C33.9822 22.2927 33.9853 17.9296 36.691 15.224ZM43.4953 18.2071C42.4342 17.1459 40.7353 17.1459 39.6742 18.2071C38.6129 19.2683 38.6129 20.9671 39.6742 22.0283L39.6834 22.0376L39.6925 22.0468C40.6936 23.073 42.4239 23.0998 43.4953 22.0283C44.5566 20.9671 44.5566 19.2683 43.4953 18.2071ZM4.46582 54.2076L14.2586 44.4608L17.2346 47.4509L7.4419 57.1977L4.46582 54.2076ZM16.1861 54.2111L22.0249 48.3722L25.008 51.3553L19.1692 57.1942L16.1861 54.2111Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "Целепорт Ультра",
      description: "Быстро накопить на\nпервоначальный взнос с\nдоходностью до 30%"
    },
    {
      icon: (
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M20.4501 27.1074H16.2313V31.3262V37.7078H9.02881V18.6885H52.377V37.7078H45.5221V31.3262V27.1074H41.3034H20.4501ZM4.81006 41.9266H9.02881H17.95C19.3308 41.9266 20.4501 40.8073 20.4501 39.4266V35.5449V31.3262H24.6688H37.0846H41.3034V35.5449V39.4266C41.3034 40.8073 42.4226 41.9266 43.8034 41.9266H52.377H56.5958V37.7078V16.9698C56.5958 15.589 55.4765 14.4697 54.0957 14.4697H7.31006C5.92935 14.4697 4.81006 15.589 4.81006 16.9698V37.7078V41.9266ZM33.3044 34.9739H29.1338V47.4859H33.3044V34.9739ZM27.7453 34.9739H23.5747V44.7054H27.7453V34.9739ZM34.7002 34.9739H38.8708V40.5348H34.7002V34.9739Z" fill="#2B2E83"/>
        </svg>
      ),
      title: "3 вида кондиционеров\nна выбор",
      description: "Создавайте комфортный и\nздоровый домашний\nмикроклимат с помощью наших\nфункциональных\nкондиционеров."
    }
  ];

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const maxIndex = Math.max(0, services.length - itemsPerView.desktop);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container-fluid header-container">
        <div className="max-w-[1320px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <h2 className="text-[#282D3C] text-[30px] font-medium leading-[36px] tracking-[-0.48px]">
              Сервисы для счастливой жизни
            </h2>
            
            {/* Navigation Buttons */}
            <div className="flex items-center gap-[-32px]">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 bg-[#F4F6FB] rounded-[24px] flex items-center justify-center hover:bg-[#E8E9EC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="w-4 h-4 text-[#2B2E83]" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 bg-[#F4F6FB] rounded-[24px] flex items-center justify-center hover:bg-[#E8E9EC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Следующий слайд"
              >
                <ChevronRight className="w-4 h-4 text-[#2B2E83]" />
              </button>
            </div>
          </div>

          {/* Services Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (306 + 32)}px)` // 306px card width + 32px gap
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[306px] h-[320px] bg-[#F4F6FB] rounded-[24px] p-8 flex flex-col"
                >
                  {/* Icon */}
                  <div className="w-[60px] h-[60px] flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-[#282D3C] text-[19px] font-medium leading-[20px] whitespace-pre-line">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#8C94A8] text-[15px] font-normal leading-[20px] whitespace-pre-line">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(services.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 2) === index 
                      ? "w-8 bg-[#2B2E83]" 
                      : "w-2 bg-[#E8E9EC]"
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
