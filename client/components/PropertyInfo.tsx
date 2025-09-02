import React from 'react';
import { MapPin, Calendar, Building, Users, Home } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyInfoProps {
  property: Property;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ property }) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('ru-KZ').format(price) + ` ${currency}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-fluid header-container">
        <div className="row gap-8">
          {/* Main Info */}
          <div className="col-lg-8 col-12">
            <div className="property-info">
              {/* Title and Developer */}
              <div className="mb-6">
                <h1 className="property-title">{property.title}</h1>
                <p className="text-secondary text-lg mb-4">
                  Застройщик: <span className="font-medium text-primary">{property.developer}</span>
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="w-5 h-5" />
                  <span>{property.address}</span>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="info-card p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Home className="w-6 h-6 text-accent-color" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    от {property.area} м²
                  </div>
                  <div className="text-sm text-secondary">Площадь</div>
                </div>

                <div className="info-card p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-accent-color" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {property.rooms}
                  </div>
                  <div className="text-sm text-secondary">Комнаты</div>
                </div>

                <div className="info-card p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 text-accent-color" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {property.floor}-{property.totalFloors}
                  </div>
                  <div className="text-sm text-secondary">Этажи</div>
                </div>

                <div className="info-card p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-accent-color" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {new Date(property.completionDate).getFullYear()}
                  </div>
                  <div className="text-sm text-secondary">Сдача</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="card-title">Описание</h2>
                <p className="text-secondary leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="card-title">Удобства</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 p-3 bg-light rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                      <span className="text-secondary">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Completion Date */}
              <div className="info-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Срок сдачи
                    </h3>
                    <p className="text-secondary">
                      {formatDate(property.completionDate)}
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-accent-color" />
                </div>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="col-lg-4 col-12">
            <div className="feature-card sticky top-4">
              <div className="card-body">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    от {formatPrice(property.price, property.currency)}
                  </div>
                  <div className="text-secondary">
                    за квартиру от {property.area} м²
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border-color-light">
                    <span className="text-secondary">Площадь от:</span>
                    <span className="font-medium text-primary">{property.area} м²</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-color-light">
                    <span className="text-secondary">Комнат:</span>
                    <span className="font-medium text-primary">{property.rooms}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-color-light">
                    <span className="text-secondary">Этаж:</span>
                    <span className="font-medium text-primary">от {property.floor}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-secondary">Этажность:</span>
                    <span className="font-medium text-primary">{property.totalFloors}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="custom-btn w-full">
                    Узнать цену
                  </button>
                  <button className="card-button w-full">
                    Записаться на показ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
