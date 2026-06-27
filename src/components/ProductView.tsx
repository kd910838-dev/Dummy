import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, CartItem } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import { Star, Eye, Plus, ShoppingCart, X, Check, ArrowRight, BookOpen, AlertCircle, ShoppingBag, BadgePercent } from 'lucide-react';
import SEO from './SEO';

interface ProductViewProps {
  selectedCategory?: string;
  setSelectedCategory?: (category: string) => void;
  cart: CartItem[];
  addToCart: (product: Product, size: number) => void;
  removeFromCart: (product: Product, size: number) => void;
  updateQuantity: (product: Product, size: number, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function ProductView({
  selectedCategory: propCategory,
  setSelectedCategory: propSetCategory,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  isCartOpen,
  setIsCartOpen
}: ProductViewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const setSelectedCategory = (categoryName: string) => {
    const canonical = categoryName === 'All Pairings' || categoryName === 'All' ? 'All' : categoryName;
    if (canonical === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: canonical });
    }
    if (propSetCategory) {
      propSetCategory(canonical);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeSizeMap, setActiveSizeMap] = useState<Record<string, number>>({});
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0); // decimal representation e.g. 0.20
  const [promoError, setPromoError] = useState('');
  const [appliedPromoName, setAppliedPromoName] = useState('');
  
  // Checkout sequence states
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    shippingAddress: '',
    pincode: '',
    paymentMethod: 'cod'
  });
  const [checkoutErrors, setCheckoutErrors] = useState<Record<string, string>>({});
  const [orderCompleteReceipt, setOrderCompleteReceipt] = useState<any | null>(null);

  const filteredProducts = PRODUCTS.filter((p) =>
    selectedCategory === 'All Pairings' || selectedCategory === 'All'
      ? true
      : p.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const selectSize = (productId: string, size: number) => {
    setActiveSizeMap((prev) => ({ ...prev, [productId]: size }));
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'SPRINT20') {
      setPromoDiscount(0.20);
      setAppliedPromoName('SPRINT20 (20% OFF)');
      setPromoError('');
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code. Try "SPRINT20"');
    }
  };

  const handleRemovePromo = () => {
    setPromoDiscount(0);
    setAppliedPromoName('');
  };

  // Cart financial summaries
  const cartSubtotal = cart.reduce((tot, item) => tot + item.product.price * item.quantity, 0);
  const discountVal = Math.round(cartSubtotal * promoDiscount);
  const cartGrandTotal = cartSubtotal - discountVal;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!checkoutData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!checkoutData.shippingAddress.trim()) errors.shippingAddress = 'Shipping address is required';
    if (!checkoutData.pincode.trim()) {
      errors.pincode = 'Postal PIN code is required';
    } else if (!/^\d{6}$/.test(checkoutData.pincode.trim())) {
      errors.pincode = 'Pin code must be exactly 6 digits';
    }

    if (Object.keys(errors).length > 0) {
      setCheckoutErrors(errors);
      return;
    }

    setCheckoutErrors({});
    setIsCartOpen(false);

    // Create realistic invoice receipt receipt
    const finalReceipt = {
      orderId: 'SPX-' + Math.floor(100000 + Math.random() * 900000),
      clientName: checkoutData.fullName,
      shipping: checkoutData.shippingAddress,
      pincode: checkoutData.pincode,
      payment: checkoutData.paymentMethod === 'cod' ? 'Cash On Delivery (COD)' : 'Credit / Debit Card',
      items: [...cart],
      promoApplied: appliedPromoName,
      subtotal: cartSubtotal,
      discount: discountVal,
      grandTotal: cartGrandTotal,
      estArrival: new Date(Date.now() + 4 * 24 * 3600 * 1000).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    setOrderCompleteReceipt(finalReceipt);
    clearCart();
    setCheckingOut(false);
    setCheckoutData({ fullName: '', shippingAddress: '', pincode: '', paymentMethod: 'cod' });
  };

  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO 
        title="SprintX Shoe Catalog – Premium Walking, Sports & Running Shoes" 
        description="Browse high-performance sports footwear and casual sneakers by SprintX. Filter by running, outdoor sports, walking, or street lifestyle shoes. Order now with flat cash-on-delivery in India." 
        keywords="Running Shoes, Casual Sneakers, Sports Shoes"
        canonicalPath="/products"
      />
      
      {/* 20% Promo code top info banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md text-left">
        <div className="flex items-start space-x-4">
          <div className="bg-white/10 p-3 rounded-xl shrink-0">
            <BadgePercent className="h-8 w-8 text-white stroke-[2]" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider font-mono text-orange-200">Limited Period Offer</span>
            <h2 className="font-display font-black text-xl sm:text-2xl leading-tight">
              Get 20% OFF on your first order
            </h2>
            <p className="text-sm text-orange-105 select-all">
              Apply code <b className="font-mono text-white bg-white/20 px-2 py-0.5 rounded-sm">SPRINT20</b> during checkout.
            </p>
          </div>
        </div>
        <div className="shrink-0 bg-white text-orange-600 font-display font-extrabold text-lg px-6 py-2.5 rounded-xl">
          Code: SPRINT20
        </div>
      </div>

      {/* Categories Filter Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-100">
        <div className="text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-500 font-mono">Precision Gear</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Featured Products
          </h1>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === 'All Pairings' ? 'All' : cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                (selectedCategory === 'All' && cat === 'All Pairings') || selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-650 border border-slate-150 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((p) => {
          const selectedSize = activeSizeMap[p.id] || 8; // Default to size 8 visual
          return (
            <div
              key={p.id}
              className="group bg-white rounded-2xl border border-slate-100 shadow-3xs hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Product Badge info */}
              {p.badge && (
                <span className="absolute top-4 left-4 z-10 bg-slate-950 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs">
                  {p.badge}
                </span>
              )}

              {/* Shoe Image Box */}
              <div className="relative aspect-square overflow-hidden bg-slate-50 p-4 flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-56 object-contain group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Actions Hover Overlays */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/20 to-transparent flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="p-2.5 bg-white text-slate-800 hover:text-orange-500 rounded-xl shadow-md font-semibold transition-colors cursor-pointer"
                    title="Quick View Details"
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 font-mono">
                    {p.category}
                  </p>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950 tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
                    {p.name}
                  </h3>
                  
                  {/* Cushion / Upper Specs info mini labels */}
                  <div className="text-[11px] text-slate-700 font-medium line-clamp-1 italic">
                    {p.description}
                  </div>
                </div>

                {/* Sizing Panel selection preview */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] font-bold font-mono tracking-wider text-slate-600">
                    <span>SELECT SIZE (UK)</span>
                    <span className="text-orange-500">Choice: UK {selectedSize}</span>
                  </div>
                  <div className="flex gap-1.5 justify-start">
                    {[7, 8, 9, 10, 11].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => selectSize(p.id, sz)}
                        className={`w-7 h-7 flex items-center justify-center rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'bg-orange-500 text-white ring-2 ring-orange-200'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feet Rating and Pricing Bottom area */}
                <div className="pt-4 border-t border-slate-50 flex items-end justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-600 font-mono">INR PRICE</span>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-display font-black text-lg text-slate-950">
                        ₹{p.price.toLocaleString('en-IN')}
                      </span>
                      {p.originalPrice && (
                        <span className="text-xs text-slate-600 line-through">
                          ₹{p.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(p, selectedSize);
                      // Custom cart visual popup reminder
                      setIsCartOpen(true);
                    }}
                    className="flex items-center space-x-1 px-4 py-2.5 bg-slate-950 hover:bg-orange-500 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* QUICK VIEW DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" onClick={() => setSelectedProduct(null)} />
          
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl my-8">
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 text-slate-500 hover:text-slate-950 bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
                {/* Visual */}
                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-between items-center aspect-square">
                  {selectedProduct.badge && (
                    <span className="self-start bg-slate-950 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
                      {selectedProduct.badge}
                    </span>
                  )}
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-52 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-xs text-slate-600 font-mono">
                    Official SprintX Performance Wear
                  </div>
                </div>

                {/* Information */}
                <div className="flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-orange-500 font-mono uppercase tracking-widest">{selectedProduct.category}</span>
                    <h2 className="font-display font-extrabold text-2xl text-slate-950 tracking-tight leading-none">
                      {selectedProduct.name}
                    </h2>
                    
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-600 font-mono block">Specialized Specs</span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {selectedProduct.features.map((f, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-600 block font-mono">INR PRICE</span>
                      <span className="font-display font-black text-2xl text-slate-950">
                        ₹{selectedProduct.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        const productSize = activeSizeMap[selectedProduct.id] || 8;
                        addToCart(selectedProduct, productSize);
                        setSelectedProduct(null);
                        setIsCartOpen(true);
                      }}
                      className="inline-flex items-center px-4.5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl tracking-wider uppercase cursor-pointer"
                    >
                      <ShoppingCart className="mr-2 h-4.5 w-4.5" />
                      Add to Cart (Size {activeSizeMap[selectedProduct.id] || 8})
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER (RIGHT SIDE SLIDE PANEL) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" onClick={() => setIsCartOpen(false)} />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full">
              
              {/* Drawer Top */}
              <div className="px-6 py-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5.5 w-5.5 text-orange-500" />
                  <h3 className="font-display font-extrabold text-lg text-slate-950">
                    Your SprintX Cart
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full text-slate-450 hover:text-slate-900 bg-white shadow-3xs cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Dynamic Body content */}
              <div className="flex-1 overflow-y-auto px-6 py-4 scrollbar-thin">
                {checkingOut ? (
                  /* Checkout Shipping Form inside Drawer */
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5 text-left pt-2">
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-lg text-slate-950">Shipping Details</h4>
                      <p className="text-xs text-slate-450">We ship express-priority within 24 working hours.</p>
                    </div>

                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-600 uppercase font-mono tracking-wider">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={checkoutData.fullName}
                        onChange={(e) => setCheckoutData({ ...checkoutData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden"
                      />
                      {checkoutErrors.fullName && <p className="text-[10px] font-semibold text-red-500">{checkoutErrors.fullName}</p>}
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-600 uppercase font-mono tracking-wider">Shipping Address</label>
                      <textarea
                        rows={2}
                        placeholder="House No, Apartment, Street name, New Delhi"
                        value={checkoutData.shippingAddress}
                        onChange={(e) => setCheckoutData({ ...checkoutData, shippingAddress: e.target.value })}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden resize-none"
                      />
                      {checkoutErrors.shippingAddress && <p className="text-[10px] font-semibold text-red-500">{checkoutErrors.shippingAddress}</p>}
                    </div>

                    {/* Pincode & Payment */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono tracking-wider">6-Digit PIN Code</label>
                        <input
                          type="text"
                          maxLength={6}
                          placeholder="110001"
                          value={checkoutData.pincode}
                          onChange={(e) => setCheckoutData({ ...checkoutData, pincode: e.target.value })}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden text-center tracking-widest font-mono"
                        />
                        {checkoutErrors.pincode && <p className="text-[10px] font-semibold text-red-500">{checkoutErrors.pincode}</p>}
                      </div>

                      <div className="space-y-1 text-left">
                        <label className="text-[10px] font-bold text-slate-600 uppercase font-mono tracking-wider">Method</label>
                        <select
                          value={checkoutData.paymentMethod}
                          onChange={(e) => setCheckoutData({ ...checkoutData, paymentMethod: e.target.value })}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-hidden bg-white"
                        >
                          <option value="cod">Cash on Delivery (COD)</option>
                          <option value="card">Prepaid Card / UPI</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">Order Grand Total:</span>
                      <span className="font-display font-black text-lg text-slate-900">₹{cartGrandTotal.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setCheckingOut(false)}
                        className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-650 font-bold text-xs uppercase rounded-xl tracking-wider cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase rounded-xl tracking-wider shadow-md shadow-orange-500/10 cursor-pointer"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                ) : cart.length > 0 ? (
                  /* Standard Scrollable Cart item listings */
                  <div className="space-y-5">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4 pb-4 border-b border-slate-50 text-left">
                        <div className="w-16 h-16 bg-slate-50 rounded-xl p-2 shrink-0 flex items-center justify-center">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="max-h-12 object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-grow space-y-1">
                          <h4 className="font-bold text-sm text-slate-900 leading-tight">
                            {item.product.name}
                          </h4>
                          <p className="text-[10px] font-mono font-bold text-orange-500">
                            SIZE: UK {item.size}
                          </p>
                          <div className="flex items-center space-x-3 pt-1">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                              <button
                                onClick={() => updateQuantity(item.product, item.size, item.quantity - 1)}
                                className="px-2 py-0.5 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-150 rounded-l-lg cursor-pointer font-bold"
                              >
                                -
                              </button>
                              <span className="px-2.5 py-0.5 text-xs font-bold font-mono text-slate-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product, item.size, item.quantity + 1)}
                                className="px-2 py-0.5 text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-150 rounded-r-lg cursor-pointer font-bold"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.product, item.size)}
                              className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                            >
                              Remove Item
                            </button>
                          </div>
                        </div>
                        <span className="font-display font-black text-sm text-slate-950 shrink-0">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Empty state drawer */
                  <div className="py-20 text-center space-y-4">
                    <ShoppingBag className="mx-auto h-12 w-12 text-slate-200" />
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-slate-800">Your Cart is Empty</h4>
                      <p className="text-xs text-slate-700 max-w-xs mx-auto">
                        Add some high-performance SprintX runners from the catalogue to begin your limits-shatters.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex px-4 py-2 bg-slate-900 text-white font-semibold text-xs rounded-lg uppercase tracking-wider cursor-pointer"
                    >
                      Browse Catalog
                    </button>
                  </div>
                )}
              </div>

              {/* Drawer Bottom calculation summary, Promo-codes validation if items exist */}
              {cart.length > 0 && !checkingOut && (
                <div className="border-t border-slate-100 px-6 py-6 bg-slate-50 space-y-5 text-left">
                  
                  {/* Promo Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Apply Promo Discount Code
                    </label>
                    {appliedPromoName ? (
                      <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-2 rounded-xl text-xs font-semibold">
                        <div className="flex items-center space-x-2">
                          <Check className="h-4 w-4 bg-emerald-600 text-white rounded-full p-0.5" />
                          <span>Code Applied: <b>{appliedPromoName}</b></span>
                        </div>
                        <button onClick={handleRemovePromo} className="text-red-500 hover:underline font-bold text-[10px] tracking-wide uppercase cursor-pointer">
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Code: SPRINT20"
                          value={promoCode}
                          onChange={(e) => {
                            setPromoCode(e.target.value);
                            setPromoError('');
                          }}
                          className="flex-grow uppercase font-mono tracking-widest text-sm px-4 py-2 border border-slate-200 bg-white rounded-xl focus:border-orange-500 focus:outline-hidden"
                        />
                        <button
                          onClick={handleApplyPromo}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-950 text-white text-xs font-bold rounded-xl tracking-wider uppercase cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                    {promoError && <p className="text-[10px] font-mono font-medium text-red-500">{promoError}</p>}
                  </div>

                  {/* Pricing break downs */}
                  <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                    <div className="flex justify-between">
                      <span>Total Subtotal</span>
                      <span className="font-mono">₹{cartSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {promoDiscount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>SprintX Promocode (20% OFF)</span>
                        <span className="font-mono">-₹{discountVal.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-800">
                      <span>Express Shipping</span>
                      <span className="text-emerald-600 font-medium font-mono">FREE</span>
                    </div>
                    <div className="border-t border-slate-200/60 pt-2 flex justify-between text-base font-bold text-slate-950">
                      <span>Grand Total Price</span>
                      <span className="font-display font-black text-lg text-orange-600">
                        ₹{cartGrandTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCheckingOut(true)}
                    className="w-full inline-flex items-center justify-center py-3 px-4 bg-slate-950 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Proceed to Delivery
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* FINAL INVOICE ORDER RECEIPT SUCCESS MODAL */}
      {orderCompleteReceipt && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" onClick={() => setOrderCompleteReceipt(null)} />
          
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-lg my-8 p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-emerald-100 text-emerald-650 rounded-full">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 font-mono">SprintX Payment Confirmation</span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-950 tracking-tight">
                  Limits Shattering Order Placed!
                </h3>
                <p className="text-xs text-slate-700 font-normal">
                  Invoice <b className="font-mono text-slate-800">{orderCompleteReceipt.orderId}</b> was generated successfully.
                </p>
              </div>

              {/* Receipt Breakdowns */}
              <div className="bg-slate-50 p-5 rounded-2xl space-y-3.5 text-xs text-slate-600 border border-slate-100">
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-bold text-slate-900 uppercase">Customer</span>
                  <span className="font-medium text-slate-800">{orderCompleteReceipt.clientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-bold text-slate-900 uppercase">Shipping To</span>
                  <span className="font-medium text-slate-800 text-right max-w-[200px] leading-tight">
                    {orderCompleteReceipt.shipping} (PIN: {orderCompleteReceipt.pincode})
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="font-bold text-slate-900 uppercase">Terms</span>
                  <span className="font-medium text-slate-800">{orderCompleteReceipt.payment}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="font-bold text-slate-700 block uppercase text-[10px] font-mono tracking-wider">Ordered Pairs</span>
                  {orderCompleteReceipt.items.map((it: any, idx: number) => (
                    <div key={idx} className="flex justify-between text-slate-700">
                      <span>• {it.product.name} (UK {it.size}) <b className="text-slate-600">x{it.quantity}</b></span>
                      <span className="font-mono select-none">₹{(it.product.price * it.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                {orderCompleteReceipt.discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold pt-1">
                    <span>SprintX Promo: 20% OFF</span>
                    <span className="font-mono">-₹{orderCompleteReceipt.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="border-t border-slate-200/80 pt-2.5 flex justify-between text-sm font-extrabold text-slate-950">
                  <span>Grand Total Paid</span>
                  <span className="font-display font-black text-base text-orange-600 font-mono">₹{orderCompleteReceipt.grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Delivery ETA info */}
              <div className="bg-orange-50/70 border border-orange-100 rounded-xl p-4 text-xs text-orange-850 flex items-start space-x-2.5 text-left">
                <AlertCircle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <b className="font-bold uppercase tracking-wider block text-[10px] text-orange-950 font-mono">Express priority delivery eta</b>
                  <span>Guaranteed delivery on or before <strong className="font-extrabold underline">{orderCompleteReceipt.estArrival}</strong>.</span>
                </div>
              </div>

              <button
                onClick={() => setOrderCompleteReceipt(null)}
                className="w-full inline-flex items-center justify-center py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                Continue Championing
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
