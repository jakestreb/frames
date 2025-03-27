export type ProductSize = {
  width: number;
  height: number;
  display: string;
};

export type ProductFinish = {
  id: string;
  name: string;
  price: number;
};

export type ProductOrientation = "landscape" | "portrait";

export interface ProductData {
  sizes: ProductSize[];
  finishes: ProductFinish[];
  orientations: ProductOrientation[];
}

export const PRODUCT_DATA: ProductData = {
  sizes: [
    { width: 8, height: 10, display: "8x10" },
    { width: 11, height: 14, display: "11x14" },
    { width: 12, height: 16, display: "12x16" },
    { width: 16, height: 20, display: "16x20" },
    { width: 18, height: 24, display: "18x24" },
    { width: 24, height: 36, display: "24x36" },
  ],
  finishes: [
    { id: "oil", name: "Oil", price: 0 },
    { id: "natural", name: "Natural", price: 0 }
  ],
  orientations: ["landscape", "portrait"],
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