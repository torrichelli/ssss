import { Car, User } from "lucide-react";

interface Project {
  id: string;
  title: string;
  price: string;
  image: string;
  location: {
    station: string;
    time: string;
    icon: "metro" | "train";
  };
  tags: string[];
}

export default function NearbyProjects() {
  const projects: Project[] = [
    {
      id: "1",
      title: "Горки Парк",
      price: "от 4,1 млн ₽",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4cc9c67a086d2d44398bedf09c0099aa667c1a04?width=816",
      location: {
        station: "Домодедовская",
        time: "18 мин.",
        icon: "metro"
      },
      tags: [
        "Скидка 10% при 100-й оплате",
        "Выгода до 3,1 млн ₽",
        "Готовые дома", 
        "Семейная ипотека без наценки"
      ]
    },
    {
      id: "2",
      title: "Прибрежный Парк", 
      price: "от 4,3 млн ₽",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0864af7188f301bd368eec2c47a61d43fe414c1a?width=816",
      location: {
        station: "Ж/д ст. Ленинская",
        time: "15 мин.",
        icon: "train"
      },
      tags: [
        "Скидка 10% при 100-й оплате",
        "Выгода до 1,6 млн ₽", 
        "Готовые дома",
        "Семейная ипотека без наценки"
      ]
    }
  ];

  const MetroIcon = () => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.18334 2.34961C5.61483 2.35019 5.06407 2.54767 4.62471 2.90845C4.18534 3.26924 3.8845 3.77107 3.77334 4.32861L3.77234 4.33111L3.62934 5.07361L3.37434 6.32761C2.88647 6.43806 2.4505 6.71076 2.13771 7.10111C1.82492 7.49147 1.6538 7.97639 1.65234 8.47661V12.4846H4.02034V14.0896H5.52034V12.4846H11.8703V14.0896H13.3703V12.4846H15.7513V8.47661C15.75 7.9766 15.5791 7.49184 15.2666 7.10151C14.9541 6.71118 14.5184 6.43836 14.0308 6.32761L13.6308 4.32861V4.32761C13.5195 3.77025 13.2186 3.26866 12.7792 2.90807C12.3399 2.54748 11.7892 2.35014 11.2208 2.34961H6.18334ZM12.4903 6.27461H4.91634L5.10034 5.36811L5.10184 5.36111L5.24534 4.61711C5.28963 4.40075 5.40715 4.20627 5.57811 4.06647C5.74907 3.92666 5.963 3.85007 6.18384 3.84961H11.2208C11.6768 3.84961 12.0723 4.17461 12.1598 4.61811V4.62061L12.4903 6.27461ZM3.15234 8.47661C3.15234 8.09311 3.47084 7.77461 3.85484 7.77461H13.5493C13.9328 7.77461 14.2513 8.09311 14.2513 8.47661V10.9846H3.15234V8.47661ZM5.63434 9.37961C5.63434 9.85061 5.25484 10.2431 4.77084 10.2431C4.65741 10.2432 4.54507 10.221 4.44024 10.1776C4.33542 10.1343 4.24017 10.0707 4.15996 9.99049C4.07975 9.91028 4.01615 9.81504 3.97281 9.71021C3.92946 9.60539 3.90721 9.49304 3.90734 9.37961C3.90734 8.90861 4.28684 8.51611 4.77084 8.51611C5.24184 8.51611 5.63434 8.90861 5.63434 9.37961ZM13.4843 9.37961C13.4843 9.85061 13.1043 10.2431 12.6203 10.2431C12.5069 10.2432 12.3946 10.221 12.2897 10.1776C12.1849 10.1343 12.0897 10.0707 12.0095 9.99049C11.9293 9.91028 11.8657 9.81504 11.8223 9.71021C11.779 9.60539 11.7567 9.49304 11.7568 9.37961C11.7568 8.90861 12.1368 8.51611 12.6203 8.51611C13.0913 8.51611 13.4843 8.90861 13.4843 9.37961Z" fill="#8C94A8"/>
    </svg>
  );

  const TrainIcon = () => (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.22857 6.3471L8.09357 5.0436C8.3052 4.89609 8.55873 4.82069 8.81657 4.8286C9.13117 4.83503 9.43636 4.93705 9.69157 5.1211C9.94457 5.3036 10.1321 5.5576 10.2286 5.8476C10.3366 6.17427 10.4354 6.39493 10.5251 6.5096C10.7989 6.85977 11.1501 7.14179 11.5511 7.3336C11.9551 7.5276 12.4001 7.6286 12.8516 7.6286V8.7486C12.2524 8.74931 11.6599 8.62179 11.1141 8.3746C10.5744 8.13071 10.0948 7.77144 9.70907 7.3221L9.30357 9.5366L10.5026 10.5051L11.7956 13.9256L10.7021 14.3086L9.51507 11.1706L7.54307 9.5776C7.38242 9.45342 7.25837 9.28808 7.18407 9.0991C7.11113 8.91211 7.09174 8.7085 7.12807 8.5111L7.42407 6.8961L7.03057 7.1711L5.79307 8.8111L4.85107 8.1526L6.21907 6.3401L6.22857 6.3471ZM9.65107 4.5486C9.34482 4.54966 9.05006 4.43211 8.82857 4.2206C8.72132 4.11836 8.63583 3.9955 8.57723 3.85941C8.51864 3.72331 8.48814 3.57678 8.48757 3.4286C8.48814 3.28043 8.51864 3.13389 8.57723 2.99779C8.63583 2.8617 8.72132 2.73884 8.82857 2.6366C9.05006 2.42509 9.34482 2.30754 9.65107 2.3086C9.96007 2.3086 10.2561 2.4266 10.4741 2.6366C10.6921 2.8466 10.8151 3.1316 10.8151 3.4286C10.8151 3.7256 10.6921 4.0106 10.4741 4.2206C10.2525 4.43223 9.9575 4.54979 9.65107 4.5486ZM7.92207 11.9286L6.05207 14.0736L5.16107 13.3536L6.89257 11.3686L7.32657 10.1476L8.36857 10.9876L7.92207 11.9286Z" fill="#8C94A8"/>
    </svg>
  );

  return (
    <section className="bg-[#F4F6FB] px-5 py-8">
      <div className="container-fluid header-container">
        <div className="max-w-[1320px] mx-auto">
          {/* Section Title */}
          <div className="mb-10">
            <h2 className="text-[#282D3C] text-[30px] font-medium leading-[36px] tracking-[-0.48px]">
              Ближайшие проекты
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
            {projects.map((project) => (
              <div key={project.id} className="flex-1 max-w-[408px]">
                {/* Project Card */}
                <div className="bg-white rounded-t-[24px] h-[540px] flex flex-col">
                  {/* Tags Overlay */}
                  <div className="relative p-5 min-h-[90px]">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-[6px] bg-white rounded-xl text-[#282D3C] text-[11px] font-medium leading-3 tracking-[-0.06px] shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[24px]"
                    />
                    
                    {/* Slide Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                      <div className="w-[30px] h-[2px] bg-white rounded-[2px]"></div>
                      <div className="w-[30px] h-[2px] bg-white/48 rounded-[2px]"></div>
                      <div className="w-[30px] h-[2px] bg-white/48 rounded-[2px]"></div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="bg-white px-0 py-6">
                  {/* Title and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#282D3C] text-[22px] font-medium leading-8 tracking-[-0.36px]">
                      {project.title}
                    </h3>
                    <span className="text-[#282D3C] text-[15px] font-medium leading-[18px] tracking-[-0.16px]">
                      {project.price}
                    </span>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#282D3C] text-[13px] leading-[14px] tracking-[-0.14px]">
                      {project.location.station}
                    </span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      {project.location.icon === "metro" ? <MetroIcon /> : <TrainIcon />}
                    </div>
                    <span className="text-[#282D3C] text-[13px] leading-[14px] tracking-[-0.14px]">
                      {project.location.time}
                    </span>
                  </div>

                  {/* Additional Content Area */}
                  <div className="border-t border-b border-[#ECF0F8] py-14 mb-4">
                    {/* This area appears to be for additional project details */}
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex items-center justify-between">
                          <div className="w-[136px] h-4 bg-gray-100 rounded animate-pulse"></div>
                          <div className="w-[68px] h-[14px] bg-gray-100 rounded animate-pulse"></div>
                          <div className="w-[136px] h-4 bg-gray-100 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="flex justify-end">
                    <div className="w-[60px] h-4 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
