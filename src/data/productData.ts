export interface ProductSize {
  width: number;
  height: number;
  display: string;
}

export interface ProductFinish {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  sizes: ProductSize[];
  finishes: ProductFinish[];
  image: string;
}

export const PRODUCT_DATA: Product = {
  id: "oak-walnut-frame",
  name: "Oak Frame",
  description: "Handcrafted solid oak frame with walnut detail",
  image: "/images/about/frame_fake.png",
  sizes: [
    { width: 4, height: 6, display: "4x6" },
    { width: 8, height: 10, display: "8x10" },
    { width: 12, height: 16, display: "12x16" },
    { width: 16, height: 24, display: "16x24" }
  ],
  finishes: [
    { id: "natural", name: "Natural", price: 0 },
    { id: "oil", name: "Oil", price: 0 }
  ]
};

// Price mapping based on size and finish
export const PRICE_MAP: Record<string, Record<string, number>> = {
  "4x6": {
    "natural": 29,
    "oil": 29
  },
  "8x10": {
    "natural": 39,
    "oil": 39
  },
  "12x16": {
    "natural": 59,
    "oil": 59
  },
  "16x24": {
    "natural": 99,
    "oil": 99
  }
};

// Helper function to get price for a specific size and finish
export const getPrice = (size: string, finish: string): number => {
  return PRICE_MAP[size]?.[finish] || 0;
};

// Helper function to get display size from dimensions
export const getDisplaySize = (width: number, height: number): string => {
  return `${width}x${height}`;
};

// Helper function to format price as currency
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}; 