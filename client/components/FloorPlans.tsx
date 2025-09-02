import React from 'react';
import { Property } from '../types/property';

interface FloorPlansProps {
  property: Property;
  selectedFloorPlan: number;
  setSelectedFloorPlan: (index: number) => void;
}

const FloorPlans: React.FC<FloorPlansProps> = ({ 
  property, 
  selectedFloorPlan, 
  setSelectedFloorPlan 
}) => {
  if (!property.floorPlans || property.floorPlans.length === 0) {
    return null;
  }

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('ru-KZ').format(price) + ` ${currency}`;
  };

  const currentPlan = property.floorPlans[selectedFloorPlan];

  return (
    <section className="section-padding bg-light">
      <div className="container-fluid header-container">
        <h2 className="section-title text-center">Планировки квартир</h2>
        
        <div className="row gap-8">
          {/* Floor Plan Navigation */}
          <div className="col-lg-3 col-12">
            <div className="space-y-4">
              <h3 className="card-title">Выберите планировку</h3>
              
              <div className="space-y-3">
                {property.floorPlans.map((plan, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFloorPlan(index)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      index === selectedFloorPlan
                        ? 'bg-accent-color text-white shadow-medium'
                        : 'bg-white hover:bg-light border border-border-color-light'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">
                        {plan.rooms}-комнатная
                      </span>
                      <span className="text-sm opacity-80">
                        {plan.area} м²
                      </span>
                    </div>
                    <div className="text-sm opacity-80">
                      от {formatPrice(plan.price, property.currency)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Floor Plan Display */}
          <div className="col-lg-6 col-12">
            <div className="feature-card">
              <div className="card-body">
                <div className="aspect-video bg-light rounded-lg overflow-hidden mb-4">
                  <img
                    src={currentPlan.image}
                    alt={`Планировка ${currentPlan.rooms}-комнатной квартиры`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {currentPlan.rooms}-комнатная квартира
                  </h3>
                  <p className="text-secondary mb-4">
                    Площадь: {currentPlan.area} м²
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div className="col-lg-3 col-12">
            <div className="feature-card sticky top-4">
              <div className="card-body">
                <h3 className="card-title text-center mb-6">
                  Характеристики
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Комнат:</span>
                    <span className="font-semibold text-primary">
                      {currentPlan.rooms}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Площадь:</span>
                    <span className="font-semibold text-primary">
                      {currentPlan.area} м²
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">Цена от:</span>
                    <span className="font-semibold text-primary">
                      {formatPrice(currentPlan.price, property.currency)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">За м²:</span>
                    <span className="font-semibold text-primary">
                      {formatPrice(Math.round(currentPlan.price / currentPlan.area), property.currency)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="custom-btn w-full">
                    Узнать цену
                  </button>
                  <button className="card-button w-full">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Plans Overview */}
        <div className="mt-12">
          <h3 className="card-title text-center mb-8">Все планировки</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.floorPlans.map((plan, index) => (
              <div 
                key={index}
                className="feature-card cursor-pointer hover:shadow-hover transition-all"
                onClick={() => setSelectedFloorPlan(index)}
              >
                <div className="aspect-video bg-light overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`Планировка ${plan.rooms}-комнатной квартиры`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-primary">
                      {plan.rooms}-комнатная
                    </h4>
                    <span className="text-sm text-secondary">
                      {plan.area} м²
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      от {formatPrice(plan.price, property.currency)}
                    </span>
                    <button 
                      className="text-accent-color hover:text-primary transition-colors text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFloorPlan(index);
                      }}
                    >
                      Подробнее →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
