
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, X } from "lucide-react";
import { CartItem } from "@/hooks/useCart";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  totalPrice: number;
}

export const Cart = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  totalPrice
}: CartProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-96 p-0">
        <div className="bg-gray-900 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-bold font-almarai">سلة التسوق</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-gray-300 font-tajawal mt-2">
            {cartItems.length} عنصر في السلة
          </p>
        </div>
        
        <div className="flex flex-col h-full p-6">
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-lg font-bold text-gray-900 mb-2 font-almarai">
                    السلة فارغة
                  </p>
                  <p className="text-gray-600 font-tajawal">
                    ابدأ في إضافة منتجاتك المفضلة
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-4">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-gray-900 flex-1 font-almarai">
                            {item.name}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {item.size && (
                          <Badge variant="secondary" className="mb-3 font-tajawal">
                            الحجم: {item.size}
                          </Badge>
                        )}
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-bold text-gray-900 min-w-[2rem] text-center font-almarai">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="text-left">
                            <div className="font-bold text-gray-900 font-almarai">
                              {item.price * item.quantity} د.ل
                            </div>
                            <div className="text-sm text-gray-600 font-tajawal">
                              {item.price} د.ل × {item.quantity}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <div className="border-t pt-6 space-y-4 mt-6">
                  <div className="bg-gray-900 text-white p-4 rounded-lg">
                    <div className="flex justify-between items-center text-lg font-bold font-almarai">
                      <span>الإجمالي:</span>
                      <span>{totalPrice} د.ل</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={onClearCart}
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 font-tajawal"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    إفراغ السلة
                  </Button>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </SheetContent>
    </Sheet>
  );
};
