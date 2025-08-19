
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { MenuItem } from "@/data/menuData";

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  categoryKey: string;
  onAddToCart: (item: MenuItem, category: string, size?: 'L' | 'M') => void;
}

export const MenuSection = ({ title, items, categoryKey, onAddToCart }: MenuSectionProps) => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 font-almarai">
          {title}
        </h2>
        <div className="w-16 h-0.5 bg-green rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-2 font-almarai leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-tajawal leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  {item.price ? (
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-gray-900 font-almarai">
                        {item.price} د.ل
                      </div>
                      <Button
                        onClick={() => onAddToCart(item, categoryKey)}
                        size="sm"
                        className="bg-green hover:bg-green/90 text-white gap-2 font-tajawal text-xs"
                      >
                        <Plus className="h-3 w-3" />
                        إضافة
                      </Button>
                    </div>
                  ) : item.prices ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                        <Button
                          size="sm"
                          onClick={() => onAddToCart(item, categoryKey, 'M')}
                          variant="outline"
                          className="gap-2 font-tajawal text-xs border-green text-green hover:bg-green hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                          وسط
                        </Button>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="font-tajawal text-xs">
                            وسط
                          </Badge>
                          <span className="font-bold text-gray-900 font-almarai text-sm">
                            {item.prices.M} د.ل
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-md">
                        <Button
                          size="sm"
                          onClick={() => onAddToCart(item, categoryKey, 'L')}
                          className="bg-gold hover:bg-gold/90 text-white gap-2 font-tajawal text-xs"
                        >
                          <Plus className="h-3 w-3" />
                          كبير
                        </Button>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-gold text-white font-tajawal text-xs">
                            كبير
                          </Badge>
                          <span className="font-bold text-gray-900 font-almarai text-sm">
                            {item.prices.L} د.ل
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
