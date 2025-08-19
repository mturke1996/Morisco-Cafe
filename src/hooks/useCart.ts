
import { useState, useCallback } from 'react';
import { MenuItem } from '@/data/menuData';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size?: 'L' | 'M';
  quantity: number;
  category: string;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((item: MenuItem, category: string, size?: 'L' | 'M') => {
    const price = item.prices ? item.prices[size || 'M'] : item.price || 0;
    const id = `${item.name}-${size || 'default'}-${category}`;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === id);
      
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, {
          id,
          name: item.name,
          price,
          size,
          quantity: 1,
          category
        }];
      }
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };
};
