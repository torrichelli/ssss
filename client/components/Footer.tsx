export default function Footer() {
  return (
    <footer className="bg-[#F6F6F8] px-4 lg:px-60">
      <div className="w-full max-w-[1440px] min-w-[320px] mx-auto">
        {/* Subscription Section */}
        <div className="pt-5 pb-12">
          <div className="bg-white rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-black text-sm font-medium">
              Подписка на акции и спецпредложения
            </div>
            <button className="bg-[#E0ECFF] text-[#2B2E83] px-5 py-2.5 rounded-lg text-sm font-normal hover:bg-[#d0dcef] transition-colors">
              Подписаться
            </button>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 pb-12">
          {/* Проекты */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Проекты</h3>
            <div className="flex flex-col gap-3">
              {['Все города', 'Астана', 'Алматы', 'Шымкент', 'Актау', 'Атырау'].map((item) => (
                <a key={item} href="#" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Недвижимость */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Недвижимость</h3>
            <div className="flex flex-col gap-3">
              {['Квартиры', 'Паркинг', 'Кладовые', 'Коттеджи', 'Офисы', 'Участки'].map((item) => (
                <a key={item} href="#" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Способы покупки */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Способы покупки</h3>
            <div className="flex flex-col gap-3">
              {['Цифровой офис продаж', 'Trade-in', 'Оплаты'].map((item) => (
                <a key={item} href="#" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Покупателям */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Покупателям</h3>
            <div className="flex flex-col gap-3">
              {['Почему мы?', 'Акции', 'Скидки при 100% оплате', 'Онлайн–покупка'].map((item) => (
                <a key={item} href="#" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Гид */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Гид</h3>
            <div className="flex flex-col gap-3">
              {[
                'Ответы на вопросы',
                'Что делать после покупки',
                'Страхование',
                'Все о гарантии моего дома',
                'Калькулятор выгод',
                'Меры безопасности при покупке'
              ].map((item) => (
                <a key={item} href="#" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col">
            <h3 className="text-[#1D1D1F] text-sm font-medium mb-5">Контакты</h3>
            <div className="flex flex-col gap-3">
              <span className="text-[#697180] text-sm">Отдел продаж г. Астана</span>
              <a href="tel:+77789793030" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                +7 778 979 30 30
              </a>
              <span className="text-[#697180] text-sm">Отдел продаж г. Алматы</span>
              <a href="tel:+77005793030" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                +7 700 579 30 30
              </a>
              <span className="text-[#697180] text-sm">Sensata Service</span>
              <a href="tel:+78000700909" className="text-[#697180] text-sm hover:text-[#1D1D1F] transition-colors">
                +7 800 070 09 09
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-3 pb-8">
          {[
            { name: 'Youtube', href: '#' },
            { name: 'Facebook', href: '#' },
            { name: 'Instagram', href: '#' },
            { name: 'TikTok', href: '#' },
            { name: 'WhatsApp', href: '#' },
            { name: 'Telegram', href: '#' }
          ].map((social, index) => (
            <div key={social.name} className="flex items-center gap-3">
              <a 
                href={social.href}
                className="text-[#1D1D1F] text-sm font-medium hover:text-[#2B2E83] transition-colors"
              >
                {social.name}
              </a>
              {index < 5 && (
                <div className="w-0.5 h-0.5 bg-[#B9BCC3] rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Legal Information */}
        <div className="border-t border-[#D9DCE3] pt-8 pb-8">
          <div className="max-w-[912px] mx-auto">
            <div className="space-y-3 text-[#A1A6AF] text-xs leading-normal">
              <p>
                Все права на публикуемые на сайте материалы принадлежат компании Sensata Group ©2025
              </p>
              <p>
                Договоры о долевом участии в жилищном строительстве будут заключаться только после заключения договора о предоставлении гарантии с Единым оператором или выдачи разрешения на привлечение денег дольщиков местным исполнительным органом Компании, в соответствии со ст. 395 ГК РК, не является публичной офертой.
              </p>
              <p>
                Создание сайтов CreativeStudio
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
