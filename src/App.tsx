import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductView from './components/ProductView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import SitemapView from './components/SitemapView';
import { CartItem, Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

function AppContent({
  cart,
  isCartOpen,
  setIsCartOpen,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
}: {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size: number) => void;
  removeFromCart: (product: Product, size: number) => void;
  updateQuantity: (product: Product, size: number, qty: number) => void;
  clearCart: () => void;
}) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-orange-500 selection:text-white antialiased">
      
      {/* Top Navbar Header */}
      <Header
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Page Container stage with route-like frame animations */}
      <main className="flex-grow pt-2 select-text">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/products"
                element={
                  <ProductView
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                    clearCart={clearCart}
                    isCartOpen={isCartOpen}
                    setIsCartOpen={setIsCartOpen}
                  />
                }
              />
              <Route path="/about" element={<AboutView />} />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/sitemap" element={<SitemapView />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate footer details & social media handles */}
      <Footer />
      
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Sync cart with localStorage for a durable user experience if they reload
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sprintx_cart');
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage', e);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem('sprintx_cart', JSON.stringify(newCart));
    } catch (e) {
      console.warn('Could not store cart state', e);
    }
  };

  const addToCart = (product: Product, size: number) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      saveCart(updated);
    } else {
      saveCart([...cart, { product, size, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product, size: number) => {
    const filtered = cart.filter(
      (item) => !(item.product.id === product.id && item.size === size)
    );
    saveCart(filtered);
  };

  const updateQuantity = (product: Product, size: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(product, size);
      return;
    }
    const updated = cart.map((item) =>
      item.product.id === product.id && item.size === size
        ? { ...item, quantity: qty }
        : item
    );
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <Router>
      <AppContent
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
      />
    </Router>
  );
}
