import { Heart, User, Phone, MessageCircle, Send, ChevronDown, Home, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="main-header w-full bg-white">
      {/* Top Bar - Hidden on mobile */}
      <div className="border-b border-[#E0ECFF] hidden lg:block">
        <div className="container-fluid header-container">
          <div className="flex items-center justify-between py-2">
            {/* Left Navigation */}
            <nav className="flex items-center gap-2">
              {[
                "О компании",
                "Новости",
                "Карьера",
                "Агентствам недвижимости",
                "Коммерция"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-1.5 text-xs text-[#697180] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-1">
                <a href="#" className="p-1.5 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="p-1.5 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="p-1.5 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>

              {/* Call Button & Language */}
              <div className="flex items-center gap-6">
                <button className="px-3 py-1.5 text-sm text-[#1D1D1F] border border-[#D9DCE3] rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  Заказать звонок
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#1D1D1F] border border-[#D9DCE3] rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  RU
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-fluid header-container">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-28 h-7 bg-[#2B2E83] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">SENSATA</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2B2E83] text-white text-sm font-medium rounded-lg">
              <Home className="w-4 h-4" />
              Недвижимость
            </div>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
              Ипотека
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
              Жилые комплексы
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
              Вторичное жилье
            </a>
            <a href="#" className="px-3 py-1.5 text-sm font-medium text-[#1D1D1F] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
              Sensata Service
            </a>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex flex-col items-center gap-1 p-2 text-[#8A909B] hover:text-[#2B2E83] transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-xs font-medium">Избранное</span>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-[#8A909B] hover:text-[#2B2E83] transition-colors">
              <User className="w-5 h-5" />
              <span className="text-xs font-medium">Войти</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1D1D1F] hover:text-[#2B2E83] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E0ECFF]">
          <div className="container-fluid header-container py-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#2B2E83] text-white text-sm font-medium rounded-lg">
                <Home className="w-4 h-4" />
                Недвижимость
              </div>
              {[
                "Ипотека",
                "Жилые комплексы",
                "Вторичное жилье",
                "Sensata Service"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-[#1D1D1F] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-[#E0ECFF] space-y-2">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-[#8A909B] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
                <Heart className="w-5 h-5" />
                Избранное
              </button>
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-[#8A909B] hover:text-[#2B2E83] hover:bg-[#F8F9FA] rounded-lg transition-colors">
                <User className="w-5 h-5" />
                Войти
              </button>
              <button className="w-full px-3 py-2 text-sm text-[#1D1D1F] border border-[#D9DCE3] rounded-lg hover:bg-[#F8F9FA] transition-colors">
                Заказать звонок
              </button>
            </div>

            {/* Mobile Social & Language */}
            <div className="mt-4 pt-4 border-t border-[#E0ECFF] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a href="#" className="p-2 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-[#2B2E83] hover:bg-[#F8F9FA] rounded transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#1D1D1F] border border-[#D9DCE3] rounded-lg hover:bg-[#F8F9FA] transition-colors">
                RU
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
