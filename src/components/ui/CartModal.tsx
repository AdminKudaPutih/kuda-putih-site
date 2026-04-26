"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { getRoomAvailability } from '@/lib/data';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  const handleUpdateQuantity = async (roomId: string, startDate: string, endDate: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(roomId, startDate, endDate);
      return;
    }
    
    const available = await getRoomAvailability(roomId, startDate, endDate);
    updateQuantity(roomId, startDate, endDate, newQuantity, available);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-creamSoft dark:bg-brand-dark z-110 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-darkSoft/10 dark:border-brand-creamSoft/10 flex items-center justify-between bg-brand-cream dark:bg-brand-darkSoft/20 shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-brand-accent w-6 h-6" />
                <h2 className="text-2xl font-heading font-bold text-brand-primary dark:text-brand-primarySoft">Your Cart</h2>
                {totalItems > 0 && (
                  <span className="bg-brand-accent text-brand-creamSoft text-xs font-bold px-2 py-1 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-darkSoft/10 dark:hover:bg-brand-creamSoft/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-brand-darkSoft dark:text-brand-creamSoft" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 min-h-0 overflow-y-auto p-6 z-130 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-primary/10 dark:bg-brand-primarySoft/10 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-brand-primarySoft opacity-50" />
                  </div>
                  <p className="text-brand-darkSoft dark:text-brand-cream text-lg font-medium">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="text-brand-accent font-bold hover:underline"
                  >
                    Start exploring rooms
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={`${item.room.id}-${item.startDate}-${item.endDate}`}
                    className="flex gap-4 bg-white dark:bg-neutral-800 p-4 rounded-2xl border border-brand-darkSoft/10 dark:border-brand-creamSoft/10 shadow-sm group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="text-brand-primary dark:text-brand-primarySoft font-bold text-lg capitalize truncate">
                          {item.room.type} Room
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.room.id, item.startDate, item.endDate)}
                          className="text-brand-darkSoft/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-xs text-brand-darkSoft dark:text-brand-cream/70 mb-2 font-medium">
                        {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-brand-creamSoft dark:bg-brand-dark/50 rounded-lg p-1 border border-brand-darkSoft/10 dark:border-brand-creamSoft/10">
                          <button
                            onClick={() => handleUpdateQuantity(item.room.id, item.startDate, item.endDate, item.quantity - 1)}
                            className="p-1 hover:bg-brand-darkSoft/10 dark:hover:bg-brand-creamSoft/10 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3 text-brand-darkSoft dark:text-brand-creamSoft" />
                          </button>
                          <span className="text-sm font-bold text-brand-primary dark:text-brand-primarySoft w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.room.id, item.startDate, item.endDate, item.quantity + 1)}
                            className="p-1 hover:bg-brand-darkSoft/10 dark:hover:bg-brand-creamSoft/10 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 text-brand-darkSoft dark:text-brand-creamSoft" />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] text-brand-darkSoft dark:text-brand-cream/50 uppercase font-bold tracking-wider">Total</span>
                          <span className="font-bold text-brand-accent">
                            Rp {(item.room.current_price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-brand-cream dark:bg-brand-darkSoft/20 border-t border-brand-darkSoft/10 dark:border-brand-creamSoft/10 space-y-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center">
                  <span className="text-brand-darkSoft dark:text-brand-cream font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-brand-primary dark:text-brand-primarySoft">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={clearCart}
                    className="py-3 px-4 rounded-xl border-2 border-brand-darkSoft/20 dark:border-brand-creamSoft/10 text-brand-darkSoft dark:text-brand-creamSoft font-bold hover:bg-brand-darkSoft/5 transition-all text-sm"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => alert("Proceeding to checkout...")}
                    className="py-3 px-4 rounded-xl bg-brand-accent hover:bg-brand-accentSoft text-brand-creamSoft font-bold shadow-lg shadow-brand-accent/20 transition-all text-sm"
                  >
                    Checkout Now
                  </button>
                </div>
                <p className="text-[10px] text-center text-brand-darkSoft/60 dark:text-brand-cream/40 font-medium">
                  Taxes and final availability will be verified during checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
