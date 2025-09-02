import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, ChevronRight, MapPin, Home, Users } from 'lucide-react';
import { Property, mockProperties, createSlug } from '../types/property';

interface SimilarPropertiesProps {
  currentProperty: Property;
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ currentProperty }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter out current property and get similar ones
  const similarProperties = mockProperties.filter(p => p.id !== currentProperty.id);
  
  // For mobile: 1 per slide, tablet: 2 per slide, desktop: 3 per slide
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(similarProperties.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('ru-KZ').format(price) + ` ${currency}`;
  };

  if (similarProperties.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-light">
      <div className="container-fluid header-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">Похожие объекты</h2>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={totalSlides <= 1}
              className="w-10 h-10 rounded-full bg-white border border-border-color-light flex items-center justify-center hover:bg-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Предыдущие объекты"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              disabled={totalSlides <= 1}
              className="w-10 h-10 rounded-full bg-white border border-border-color-light flex items-center justify-center hover:bg-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Следующие объекты"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Properties Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similarProperties
                    .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((property) => (
                      <Link
                        key={property.id}
                        href={`/landing/${createSlug(property.complexName)}`}
                        className="block"
                      >
                        <div className="property-card group">
                          {/* Image */}
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={property.images[0]}
                              alt={property.complexName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Price Badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                              <span className="text-sm font-semibold text-primary">
                                от {formatPrice(property.price, property.currency)}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="card-body">
                            <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent-color transition-colors">
                              {property.complexName}
                            </h3>
                            
                            <div className="flex items-center gap-1 text-secondary text-sm mb-3">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{property.address}</span>
                            </div>

                            {/* Property Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                  <Home className="w-4 h-4 text-accent-color" />
                                </div>
                                <div className="text-xs text-secondary">Площадь</div>
                                <div className="text-sm font-medium text-primary">
                                  от {property.area} м²
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                  <Users className="w-4 h-4 text-accent-color" />
                                </div>
                                <div className="text-xs text-secondary">Комнаты</div>
                                <div className="text-sm font-medium text-primary">
                                  {property.rooms}
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <div className="flex items-center justify-center mb-1">
                                  <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                                  </svg>
                                </div>
                                <div className="text-xs text-secondary">Этажность</div>
                                <div className="text-sm font-medium text-primary">
                                  {property.totalFloors}
                                </div>
                              </div>
                            </div>

                            {/* Developer */}
                            <div className="text-xs text-secondary mb-4">
                              Застройщик: {property.developer}
                            </div>

                            {/* CTA */}
                            <div className="flex gap-2">
                              <button className="flex-1 card-button text-sm py-2">
                                Подробнее
                              </button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={totalSlides <= 1}
            className="w-10 h-10 rounded-full bg-white border border-border-color-light flex items-center justify-center hover:bg-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Предыдущие объекты"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-accent-color' 
                    : 'bg-border-color-light'
                }`}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={totalSlides <= 1}
            className="w-10 h-10 rounded-full bg-white border border-border-color-light flex items-center justify-center hover:bg-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Следующие объекты"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link href="/" className="custom-btn">
            Посмотреть все объекты
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
