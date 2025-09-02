export interface Property {
  id: string;
  complexName: string;        // Название ЖК
  title: string;              // Полное название
  price: number;              // Цена от
  currency: 'KZT' | 'USD';
  area: number;               // Площадь от
  rooms: number;              // Количество комнат
  floor: number;              // Этаж от
  totalFloors: number;        // Этажность
  address: string;            // Адр��с
  developer: string;          // Застройщик
  completionDate: string;     // Срок сдачи
  images: string[];           // Галерея изображений
  description: string;        // Описание
  amenities: string[];        // Удобства
  specifications: {
    [key: string]: string;    // Характеристики
  };
  floorPlans?: {
    rooms: number;
    area: number;
    image: string;
    price: number;
  }[];
  location?: {
    lat: number;
    lng: number;
  };
  slug?: string;
}

export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[а-я]/g, (match) => {
      const map: {[key: string]: string} = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
        'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
        'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
      };
      return map[match] || match;
    })
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Mock data for development
export const mockProperties: Property[] = [
  {
    id: '1',
    complexName: 'Астана Резиденс',
    title: 'Премиум ЖК Астана Резиденс',
    price: 25000000,
    currency: 'KZT',
    area: 65,
    rooms: 2,
    floor: 5,
    totalFloors: 25,
    address: 'г. Астана, ул. Кунаева, 12',
    developer: 'Sensata Group',
    completionDate: '2025-12-01',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    description: 'Премиум жилой комплекс в центре Астаны с современной архитектурой и развитой инфраструктурой.',
    amenities: ['Парковка', 'Детская площадка', 'Спортзал', 'Консьерж', 'Видеонаблюдение'],
    specifications: {
      'Класс жилья': 'Премиум',
      'Тип дома': 'Монолитный',
      'Высота потолков': '3.2 м',
      'Парковка': 'Подземная',
      'Лифты': 'Mitsubishi',
      'Инфраструктура': 'Развитая'
    },
    floorPlans: [
      {
        rooms: 1,
        area: 45,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 18000000
      },
      {
        rooms: 2,
        area: 65,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 25000000
      },
      {
        rooms: 3,
        area: 95,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 35000000
      }
    ],
    location: {
      lat: 51.1694,
      lng: 71.4491
    }
  },
  {
    id: '2',
    complexName: 'Алматы Парк',
    title: 'ЖК Алматы Парк',
    price: 22000000,
    currency: 'KZT',
    area: 70,
    rooms: 3,
    floor: 3,
    totalFloors: 18,
    address: 'г. Алматы, пр. Абая, 45',
    developer: 'Sensata Group',
    completionDate: '2026-06-01',
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    ],
    description: 'Современный жилой комплекс с видом на горы и парковую зону.',
    amenities: ['Парковка', 'Парк', 'Спортзал', 'Школа', 'Детский сад'],
    specifications: {
      'Класс жилья': 'Комфорт',
      'Тип дома': 'Кирпично-монолитный',
      'Высота потолков': '3.0 м',
      'Парковка': 'Наземная',
      'Лифты': 'KONE',
      'Инфраструктура': 'Развитая'
    },
    floorPlans: [
      {
        rooms: 2,
        area: 60,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 20000000
      },
      {
        rooms: 3,
        area: 80,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 28000000
      }
    ],
    location: {
      lat: 43.2220,
      lng: 76.8512
    }
  }
];
