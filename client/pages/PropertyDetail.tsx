import React, { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyGallery from '../components/PropertyGallery';
import PropertyInfo from '../components/PropertyInfo';
import PropertySpecs from '../components/PropertySpecs';
import FloorPlans from '../components/FloorPlans';
import PropertyContactForm from '../components/PropertyContactForm';
import SimilarProperties from '../components/SimilarProperties';
import NotFound from './NotFound';
import { mockProperties, createSlug, Property } from '../types/property';

const PropertyDetail: React.FC = () => {
  const [match, params] = useRoute("/landing/:complexName");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);
  
  const complexSlug = params?.complexName;
  
  if (!complexSlug) return <NotFound />;
  
  const property = mockProperties.find(p => 
    createSlug(p.complexName) === complexSlug
  );
  
  if (!property) return <NotFound />;

  // SEO метаданные
  useEffect(() => {
    if (property) {
      document.title = `${property.complexName} - Купить квартиру в ${property.complexName} | Sensata`;
    }
  }, [property]);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-padding-top">
        {/* Breadcrumbs */}
        <section className="container-fluid header-container py-4">
          <nav className="breadcrumbs flex items-center gap-2 text-sm text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-primary">{property.complexName}</span>
          </nav>
        </section>

        {/* Back to catalog */}
        <section className="container-fluid header-container">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-6"
          >
            ← Вернуться к каталогу
          </Link>
        </section>

        <PropertyGallery 
          property={property}
          activeImageIndex={activeImageIndex}
          setActiveImageIndex={setActiveImageIndex}
        />
        
        <PropertyInfo property={property} />
        
        <PropertySpecs property={property} />
        
        <FloorPlans 
          property={property}
          selectedFloorPlan={selectedFloorPlan}
          setSelectedFloorPlan={setSelectedFloorPlan}
        />
        
        <PropertyContactForm property={property} />
        
        <SimilarProperties currentProperty={property} />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
