import React from 'react';
import { Property } from '../types/property';

interface PropertySpecsProps {
  property: Property;
}

const PropertySpecs: React.FC<PropertySpecsProps> = ({ property }) => {
  return (
    <section className="section-padding">
      <div className="container-fluid header-container">
        <h2 className="section-title text-center">Характеристики</h2>
        
        <div className="feature-card max-w-4xl mx-auto">
          <div className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(property.specifications).map(([key, value], index) => (
                <div 
                  key={index}
                  className="spec-item flex justify-between items-center py-4 border-b border-border-color-light last:border-b-0"
                >
                  <div className="spec-label text-secondary font-medium">
                    {key}
                  </div>
                  <div className="spec-value text-primary font-semibold text-right">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="info-card p-6 text-center">
            <div className="w-16 h-16 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Класс жилья
            </h3>
            <p className="text-secondary">
              {property.specifications['Класс жилья'] || 'Премиум'}
            </p>
          </div>

          <div className="info-card p-6 text-center">
            <div className="w-16 h-16 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Тип дома
            </h3>
            <p className="text-secondary">
              {property.specifications['Тип дома'] || 'Монолитный'}
            </p>
          </div>

          <div className="info-card p-6 text-center">
            <div className="w-16 h-16 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Высота потолков
            </h3>
            <p className="text-secondary">
              {property.specifications['Высота потолков'] || '3.0 м'}
            </p>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mt-12">
          <h3 className="card-title text-center mb-8">Инфраструктура</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="infrastructure-item text-center p-4">
              <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-medium text-primary mb-1">Парковка</h4>
              <p className="text-xs text-secondary">
                {property.specifications['Парковка'] || 'Подземная'}
              </p>
            </div>

            <div className="infrastructure-item text-center p-4">
              <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium text-primary mb-1">Лифты</h4>
              <p className="text-xs text-secondary">
                {property.specifications['Лифты'] || 'Современные'}
              </p>
            </div>

            <div className="infrastructure-item text-center p-4">
              <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-medium text-primary mb-1">Безопасность</h4>
              <p className="text-xs text-secondary">24/7 охрана</p>
            </div>

            <div className="infrastructure-item text-center p-4">
              <div className="w-12 h-12 bg-accent-color/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h4 className="font-medium text-primary mb-1">Инфраструктура</h4>
              <p className="text-xs text-secondary">
                {property.specifications['Инфраструктура'] || 'Развитая'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySpecs;
