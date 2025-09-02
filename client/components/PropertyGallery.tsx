import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyGalleryProps {
  property: Property;
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ 
  property, 
  activeImageIndex, 
  setActiveImageIndex 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      activeImageIndex === 0 ? property.images.length - 1 : activeImageIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientX;
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStart - touchEnd;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
      
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container-fluid header-container">
          <div className="row gap-4">
            {/* Main Image */}
            <div className="col-lg-8 col-12">
              <div className="property-gallery-main relative rounded-lg overflow-hidden">
                <img
                  src={property.images[activeImageIndex]}
                  alt={`${property.complexName} - фото ${activeImageIndex + 1}`}
                  className="w-full h-96 lg:h-[500px] object-cover"
                  onTouchStart={handleTouchStart}
                  loading="lazy"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-medium"
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-medium"
                  aria-label="Следующее фото"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-medium"
                  aria-label="Открыть в полном размере"
                >
                  <Maximize2 className="w-5 h-5 text-primary" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-lg text-sm font-medium">
                  {activeImageIndex + 1} / {property.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="col-lg-4 col-12">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 max-h-[500px] overflow-y-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden transition-all ${
                      index === activeImageIndex 
                        ? 'ring-2 ring-accent-color' 
                        : 'hover:opacity-80'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.complexName} - превью ${index + 1}`}
                      className="w-full h-24 lg:h-32 object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={property.images[activeImageIndex]}
              alt={`${property.complexName} - фото ${activeImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Закрыть"
            >
              ✕
            </button>
            
            {/* Navigation in Fullscreen */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;
