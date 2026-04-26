"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Room } from '@/lib/data';

export interface CartItem {
  room: Room;
  quantity: number;
  startDate: string;
  endDate: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (room: Room, quantity: number, startDate: string, endDate: string, availableCount: number) => void;
  removeFromCart: (roomId: string, startDate: string, endDate: string) => void;
  updateQuantity: (roomId: string, startDate: string, endDate: string, quantity: number, availableCount: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  globalCheckIn: string;
  setGlobalCheckIn: (date: string) => void;
  globalCheckOut: string;
  setGlobalCheckOut: (date: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [globalCheckIn, setGlobalCheckIn] = useState<string>("");
  const [globalCheckOut, setGlobalCheckOut] = useState<string>("");

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kuda_putih_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('kuda_putih_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (room: Room, quantity: number, startDate: string, endDate: string, availableCount: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.room.id === room.id && item.startDate === startDate && item.endDate === endDate
      );

      if (existingItemIndex > -1) {
        const existingItem = prevCart[existingItemIndex];
        const newQuantity = existingItem.quantity + quantity;
        
        // Validate against available count
        if (newQuantity > availableCount) {
          alert(`Cannot add more than ${availableCount} rooms for these dates.`);
          return prevCart;
        }

        const newCart = [...prevCart];
        newCart[existingItemIndex] = { ...existingItem, quantity: newQuantity };
        return newCart;
      } else {
        if (quantity > availableCount) {
          alert(`Cannot add more than ${availableCount} rooms for these dates.`);
          return prevCart;
        }
        return [...prevCart, { room, quantity, startDate, endDate }];
      }
    });
  };

  const removeFromCart = (roomId: string, startDate: string, endDate: string) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.room.id === roomId && item.startDate === startDate && item.endDate === endDate)
    ));
  };

  const updateQuantity = (roomId: string, startDate: string, endDate: string, quantity: number, availableCount: number) => {
    if (quantity <= 0) {
      removeFromCart(roomId, startDate, endDate);
      return;
    }

    if (quantity > availableCount) {
      alert(`Only ${availableCount} rooms available for these dates.`);
      return;
    }

    setCart(prevCart => prevCart.map(item => 
      (item.room.id === roomId && item.startDate === startDate && item.endDate === endDate)
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = cart.reduce((sum, item) => {
    const nights = Math.max(1, (new Date(item.endDate).getTime() - new Date(item.startDate).getTime()) / (1000 * 60 * 60 * 24));
    // Note: Our pricing is monthly in DB, so we'll treat it as a month for now or calculate per day
    // The requirement said monthly price, let's just use it as is for the demonstration of cart total
    return sum + (item.room.current_price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      totalItems, 
      totalPrice,
      globalCheckIn,
      setGlobalCheckIn,
      globalCheckOut,
      setGlobalCheckOut
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
