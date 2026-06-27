export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: number;
}

export type ActivePage = 'home' | 'products' | 'about' | 'blog' | 'contact';
