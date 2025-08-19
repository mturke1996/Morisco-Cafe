import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Coffee, Utensils, IceCream, Pizza, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { menuData } from "@/data/menuData";
import { useCart } from "@/hooks/useCart";
import { Cart } from "@/components/Cart";
import { MenuSection } from "@/components/MenuSection";

const categoryIcons: { [key: string]: any } = {
  hotDrinks: Coffee,
  coldDrinks: IceCream,
  cocktails: Utensils,
  naturalJuices: Coffee,
  smoothies: IceCream,
  shakes: IceCream,
  waffles: Utensils,
  pancakes: Utensils,
  iceCream: IceCream,
  breakfast: Utensils,
  shakshuka: Utensils,
  toast: Utensils,
  sandwiches: Utensils,
  pizza: Pizza,
  pastries: Utensils
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("hotDrinks");
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const categories = Object.keys(menuData);
  const selectedCategoryData = menuData[selectedCategory];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo and Name */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/85a48401-a358-4ece-8756-1945e5155b01.png" 
                alt="شعار موريسكو كافيه"
                className="w-8 h-8 object-contain"
              />
              <div className="text-right">
                <h1 className="text-lg font-bold text-gray-900 font-almarai">
                  موريسكو كافيه
                </h1>
                <p className="text-xs text-green font-tajawal">
                  القهوة المميزة
                </p>
              </div>
            </div>

            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              variant="outline"
              size="sm"
              className="relative gap-2 font-tajawal border-green text-green hover:bg-green hover:text-white"
            >
              <ShoppingCart className="w-4 h-4" />
              السلة
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/b05c1486-56a0-4f7a-9c93-66d7ff902959.png')`
          }}
        />
        
        {/* Content Below Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto font-tajawal font-medium">
              نقدم لكم أفضل أنواع القهوة والمشروبات الساخنة والباردة والوجبات اللذيذة
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <a
                href="https://www.facebook.com/share/Fkw9yMa5FUf4otaE/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.instagram.com/moriscocafe.ly?igsh=MWZvNWdjZGFibHZrag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <a
                href="https://www.tiktok.com/@mori_sco?_t=8scQmMUVU62&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>

            <Button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green hover:bg-green/90 text-white px-6 py-2 rounded-lg font-tajawal font-medium shadow-lg"
            >
              تصفح القائمة
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="bg-white border-b sticky top-14 z-40" id="menu">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {categories.map((categoryKey) => {
              const category = menuData[categoryKey];
              const IconComponent = categoryIcons[categoryKey] || Coffee;
              const isSelected = selectedCategory === categoryKey;
              
              return (
                <Button
                  key={categoryKey}
                  variant={isSelected ? "default" : "ghost"}
                  size="sm"
                  className={`whitespace-nowrap gap-2 font-tajawal text-xs ${
                    isSelected 
                      ? "bg-green text-white hover:bg-green/90" 
                      : "text-gray-600 hover:text-green hover:bg-green/10"
                  }`}
                  onClick={() => setSelectedCategory(categoryKey)}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.title}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          {selectedCategoryData && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MenuSection
                title={selectedCategoryData.title}
                items={selectedCategoryData.items}
                categoryKey={selectedCategory}
                onAddToCart={addToCart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        totalPrice={getTotalPrice()}
      />

      {/* Professional Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-green mb-3 font-almarai text-lg">عنواننا</h5>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-green mt-0.5 flex-shrink-0" />
                    <p className="font-tajawal">تاجوراء طريق الشط جزيرة دوران الأندلسي، طرابلس، ليبيا</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold text-green mb-3 font-almarai text-lg">الهاتف</h5>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-green" />
                    <p className="font-tajawal">0912502622</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold text-green mb-3 font-almarai text-lg">البريد الإلكتروني</h5>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-green" />
                    <p className="font-tajawal">Mohturke96@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col justify-between">
                <div className="text-center">
                  <p className="text-gray-600 font-tajawal text-lg mb-4">تابعنا على وسائل التواصل:</p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://www.facebook.com/share/Fkw9yMa5FUf4otaE/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    
                    <a
                      href="https://www.instagram.com/moriscocafe.ly?igsh=MWZvNWdjZGFibHZrag=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    
                    <a
                      href="https://www.tiktok.com/@mori_sco?_t=8scQmMUVU62&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <img 
                      src="/lovable-uploads/85a48401-a358-4ece-8756-1945e5155b01.png" 
                      alt="شعار موريسكو كافيه"
                      className="w-6 h-6 object-contain"
                    />
                    <h3 className="text-lg font-bold text-gray-900 font-almarai">
                      موريسكو كافيه
                    </h3>
                  </div>
                  <p className="text-gray-600 font-tajawal text-sm">
                    © 2025 موريسكو كافيه - جميع الحقوق محفوظة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
