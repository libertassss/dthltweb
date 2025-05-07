export interface Product {
  id: string;
  name: string;
  model: string;
  category: string;
  description: string;
  price?: number;
  image?: string;
  images?: string[];
  specifications: {
    resistance: string;
    tolerance: string;
    power: string;
    temperature: string;
    dimensions: string;
  };
  details?: string[];
  pdf?: string;
}

export interface OrderForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  productId: string;
  quantity: number;
  message?: string;
} 