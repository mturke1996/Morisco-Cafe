
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Globe, Facebook, Instagram, Twitter } from "lucide-react";

export const ContactInfo = () => {
  const workingHours = [
    { day: "السبت - الخميس", hours: "11:00 ص - 11:00 م" },
    { day: "الجمعة", hours: "2:00 ظ - 11:00 م" }
  ];

  return (
    <footer className="bg-muted/30 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-right">
                <Phone className="h-5 w-5" />
                معلومات التواصل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-right">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">شارع التراث، حي الأندلس، الرياض 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+966 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">www.andalus-restaurant.com</span>
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-right">
                <Clock className="h-5 w-5" />
                أوقات العمل
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-right">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Badge variant="outline" className="text-xs">
                    {schedule.hours}
                  </Badge>
                  <span className="text-sm font-medium">{schedule.day}</span>
                </div>
              ))}
              <Badge className="w-full justify-center bg-green-100 text-green-800">
                مفتوح الآن
              </Badge>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardHeader>
              <CardTitle className="text-right">تابعنا على</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center gap-3">
                <Button size="icon" variant="outline" className="h-10 w-10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-10 w-10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-10 w-10">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  احصل على أحدث العروض والأطباق الجديدة
                </p>
                <Button variant="default" className="w-full">
                  اشترك في النشرة الإخبارية
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 مطعم الأندلس التراثي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
