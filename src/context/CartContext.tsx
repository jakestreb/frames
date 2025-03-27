"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  size: string;
  finish: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (size: string, finish: string) => void;
  updateQuantity: (size: string, finish: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.size === newItem.size && item.finish === newItem.finish
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.size === newItem.size && item.finish === newItem.finish
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (size: string, finish: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.size === size && item.finish === finish))
    );
  };

  const updateQuantity = (size: string, finish: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.size === size && item.finish === finish
          ? { ...item, quantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
} 