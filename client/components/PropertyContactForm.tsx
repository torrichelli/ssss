import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, User } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyContactFormProps {
  property: Property;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  comment: string;
  consent: boolean;
}

const PropertyContactForm: React.FC<PropertyContactFormProps> = ({ property }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения';
    } else if (!/^[\+]?[\s\-\(\)]*([0-9][\s\-\(\)]*){10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Log form data (as per specification)
      console.log('Property Contact Form Data:', {
        property: property.complexName,
        propertyId: property.id,
        ...formData,
        timestamp: new Date().toISOString()
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        comment: '',
        consent: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="section-padding">
        <div className="container-fluid header-container">
          <div className="max-w-2xl mx-auto">
            <div className="feature-card text-center">
              <div className="card-body">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="card-title">Спасибо за заявку!</h2>
                <p className="text-secondary mb-6">
                  Наш менеджер свяжется с вами в ближайшее время для консультации по объекту "{property.complexName}".
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="card-button"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-fluid header-container">
        <div className="row gap-8">
          {/* Form */}
          <div className="col-lg-8 col-12">
            <div className="form-wrapper-gradient">
              <h2 className="section-title">Получить консультацию</h2>
              <p className="text-secondary mb-8">
                Оставьте заявку и наш специалист расскажет подробнее о ЖК "{property.complexName}"
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Имя *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`form-control-modern pl-11 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Телефон *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`form-control-modern pl-11 ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="+7 (xxx) xxx-xx-xx"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`form-control-modern pl-11 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="example@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Comment Field */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Комментарий
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-light" />
                    <textarea
                      value={formData.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      rows={4}
                      className="form-control-modern pl-11 resize-none"
                      placeholder="Расскажите о ваших пожеланиях..."
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange('consent', e.target.checked)}
                      className="mt-1 w-4 h-4 text-accent-color rounded focus:ring-accent-color"
                    />
                    <span className="text-sm text-secondary">
                      Я согласен на{' '}
                      <a href="#" className="text-accent-color hover:underline">
                        обработку персональных данных
                      </a>{' '}
                      и получение информации о новых предложениях *
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="custom-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-12">
            <div className="feature-card sticky top-4">
              <div className="card-body">
                <h3 className="card-title">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent-color" />
                    <div>
                      <div className="font-medium text-primary">+7 (778) 979-30-30</div>
                      <div className="text-sm text-secondary">Отдел продаж</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent-color" />
                    <div>
                      <div className="font-medium text-primary">info@sensata.kz</div>
                      <div className="text-sm text-secondary">Email для вопросов</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-color mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-primary">{property.address}</div>
                      <div className="text-sm text-secondary">Адрес объекта</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border-color-light">
                  <div className="text-sm text-secondary text-center">
                    Время работы: Пн-Пт 9:00-18:00<br />
                    Сб-Вс 10:00-17:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyContactForm;
