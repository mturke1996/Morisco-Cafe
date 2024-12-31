import React, { useState } from "react";
import CategoryCard from './CategoryCard';
import ItemCard from "./ItemCard"; // Import CategoryCard
import './styles.css';

const requireContext = require.context('../images', true, /\.(jpg|png|jpeg|gif)$/);


const categories = [
  { id: 'all', name: 'الكل', image: requireContext('./orange-mango.jpg') },
  { id: 'hot', name: 'مشروبات ساخنة', image: requireContext('./orange-mango.jpg') },
  { id: 'cold', name: 'مشروبات باردة', image: requireContext('./orange-mango.jpg') },
  { id: 'juices', name: 'عصائر طبيعية', image: requireContext('./orange-mango.jpg') },
  { id: 'cocktails', name: 'كوكتيلات', image: requireContext('./orange-mango.jpg') },
  { id: 'froopy', name: 'فروبي', image: requireContext('./orange-mango.jpg') },
  { id: 'milkshakes', name: 'ميلك شيك', image: requireContext('./orange-mango.jpg') },
  { id: 'smoothies', name: 'سموثي', image: requireContext('./orange-mango.jpg') },
  { id: 'mojito', name: 'موهيتو', image: requireContext('./orange-mango.jpg') },
  { id: 'yogurt-parfait', name: 'ياغورت بارفي', image: requireContext('./orange-mango.jpg') },
  { id: 'ice-cream', name: 'ايس كريم', image: requireContext('./orange-mango.jpg') },
  { id: 'crepes', name: 'كريب', image: requireContext('./orange-mango.jpg') },
  { id: 'croissant', name: 'كروسون', image: requireContext('./orange-mango.jpg') },
  { id: 'mini-cupcake', name: 'ميني بن كيك', image: requireContext('./orange-mango.jpg') },
  { id: 'waffle', name: 'وافل', image: requireContext('./orange-mango.jpg') },
  { id: 'cakes', name: 'كيكات', image: requireContext('./orange-mango.jpg') },
  { id: 'breakfast', name: 'فطور صباحي', image: requireContext('./orange-mango.jpg') },
  { id: 'pizza', name: 'بيتزا', image: requireContext('./orange-mango.jpg') },
  { id: 'pastries', name: 'معجنات', image: requireContext('./orange-mango.jpg') },
  { id: 'dried-snacks', name: 'نواشف', image: requireContext('./orange-mango.jpg') },
];

const items = [
  // مشروبات ساخنة
  { id: 1, category: 'hot', name: 'قهوة عربية', price: 8, description: 'قهوة سادة بنكهة عطرية فريدة، مثالية لمحبي القهوة التقليدية.', image: '' },
  { id: 2, category: 'hot', name: 'كابتشينو', price: 5, description: 'قهوة مخفوقة بنكهة الكريما والحليب الرغوي.', image: '' },
  { id: 3, category: 'hot', name: 'مكياتو', price: 5, description: 'قهوة مكثفة مع لمسة من الحليب الرغوي.', image: '' },
  { id: 4, category: 'hot', name: 'نسكافيه', price: 5, description: 'قهوة سريعة التحضير بنكهات فورية.', image: '' },
  { id: 5, category: 'hot', name: 'نسكافيه كامل', price: 7, description: 'قهوة بنكهة قوية وأصيلية.', image: '' },
  { id: 6, category: 'hot', name: 'شاي', price: 4, description: 'شاي كلاسيكي بالنعناع أو بدون نكهة.', image: '' },
  { id: 7, category: 'hot', name: 'شاي باللوز', price: 8, description: 'شاي بنكهة لوز لذيذة.', image: '' },
  { id: 8, category: 'hot', name: 'شاي مغربي', price: 4, description: 'شاي بنكهة الأعشاب والتوابل.', image: '' },
  { id: 9, category: 'hot', name: 'كافي لاتيه', price: 7, description: 'قهوة بنكهة اللاتيه مع الحليب الرغوي.', image: '' },
  { id: 10, category: 'hot', name: 'براد شاي باللوز', price: 6, description: 'براد شاي بارد بنكهة اللوز.', image: '' },
  { id: 11, category: 'hot', name: 'هوت شوكليت', price: 6, description: 'شوكولاتة ساخنة غنية ولذيذة.', image: '' },
  { id: 12, category: 'hot', name: 'سحلب', price: 15, description: 'مشروب حليب ساخن بنكهات دافئة مثل القرفة.', image: '' },

  // مشروبات باردة
  { id: 13, category: 'cold', name: 'اسبنش لاتيه', price: 10, description: 'قهوة مثلجة بنكهة الإسبريسو واللوز.', image: '' },
  { id: 14, category: 'cold', name: 'ايس كافيه', price: 10, description: 'قهوة مثلجة بنكهات منعشة.', image: '' },
  { id: 15, category: 'cold', name: 'فانيلا لاتيه', price: 10, description: 'قهوة مثلجة بنكهة الفانيلا.', image: '' },
  { id: 16, category: 'cold', name: 'كراميل لاتيه', price: 10, description: 'قهوة مثلجة بنكهة الكراميل.', image: '' },
  { id: 17, category: 'cold', name: 'بندق لاتيه', price: 10, description: 'قهوة مثلجة بنكهة البندق.', image: '' },
  { id: 18, category: 'cold', name: 'ايس شوكليت', price: 12, description: 'شوكولاتة مثلجة غنية ومنعشة.', image: '' },
  { id: 19, category: 'cold', name: 'فرابتشينو', price: 13, description: 'مشروب مثلج مزيج من القهوة والآيس كريم.', image: '' },

  // عصائر طبيعية
  { id: 20, category: 'juices', name: 'مانجو', price: 9, description: 'عصير مانجو طازج وغني.', image: requireContext('./orange-mango.jpg') },
  { id: 21, category: 'juices', name: 'فراولة', price: 8, description: 'عصير فراولة منعش ولذيذ.', image: requireContext('./sweetbere.jpg') },
  { id: 22, category: 'juices', name: 'كيوي', price: 12, description: 'عصير كيوي منعش ولذيذ.', image: '' },
  { id: 23, category: 'juices', name: 'برتقال', price: 8, description: 'عصير برتقال طازج.', image: '' },
  { id: 24, category: 'juices', name: 'جوافة', price: 9, description: 'عصير جوافة منعش.', image: '' },
  { id: 25, category: 'juices', name: 'أناناس', price: 10, description: 'عصير أناناس منعش ومنعش.', image: '' },
  { id: 26, category: 'juices', name: 'هندي', price: 9, description: 'عصير هندي بمزيج من التوابل.', image: '' },
  { id: 27, category: 'juices', name: 'ليمونادة', price: 8, description: 'مشروب منعش بنكهة الليمون.', image: '' },
  { id: 28, category: 'juices', name: 'خوخ', price: 9, description: 'عصير خوخ طازج ولذيذ.', image: '' },
  { id: 29, category: 'juices', name: 'رمان', price: 10, description: 'عصير رمان صحي ومفيد.', image: '' },
  { id: 30, category: 'juices', name: 'عنب', price: 9, description: 'عصير عنب منعش ولذيذ.', image: '' },
  { id: 31, category: 'juices', name: 'أفوكادو', price: 12, description: 'عصير منعش غني باللوز والعسل.', image: '' },

  // كوكتيلات
  { id: 32, category: 'cocktails', name: 'كوكتيل فواكه موسمية', price: 15, description: 'مزيج من فواكه موسمية منعشة.', image: '' },
  { id: 33, category: 'cocktails', name: 'فراولة - موز - جوافة', price: 15, description: 'كوكتيل مزيج من الفواكه اللذيذة.', image: '' },
  { id: 34, category: 'cocktails', name: 'فراولة - نعناع', price: 15, description: 'كوكتيل منعش بنكهة النعناع.', image: '' },
  { id: 35, category: 'cocktails', name: 'مانجو - جوافة - برتقال', price: 15, description: 'كوكتيل منعش غني بالنكهات الاستوائية.', image: '' },
  { id: 36, category: 'cocktails', name: 'ليمون - نعناع - زنجبيل', price: 15, description: 'كوكتيل منعش ومثير.', image: '' },

  // فروبي
  { id: 37, category: 'froopy', name: 'فروبي فراولة', price: 9, description: 'مشروب مثلج بنكهة الفراولة.', image: '' },
  { id: 38, category: 'froopy', name: 'فروبي مانجو', price: 9, description: 'مشروب مثلج بنكهات منعشة.', image: '' },
  { id: 39, category: 'froopy', name: 'فروبي كيوي', price: 12, description: 'مشروب منعش بنكهات لذيذة.', image: '' },
  { id: 40, category: 'froopy', name: 'فروبي جوافة', price: 9, description: 'مشروب مثلج بنكهة الجوافة.', image: '' },

  // ميلك شيك
  { id: 41, category: 'milkshakes', name: 'ميلك شيك فراولة', price: 10, description: 'ميلك شيك بنكهة الفراولة الطازجة.', image: '' },
  { id: 42, category: 'milkshakes', name: 'ميلك شيك مانجو', price: 10, description: 'ميلك شيك بنكهة المانجو.', image: '' },
  { id: 43, category: 'milkshakes', name: 'ميلك شيك شوكولاتة', price: 12, description: 'ميلك شيك بنكهة الشوكولاتة اللذيذة.', image: '' },
  { id: 44, category: 'milkshakes', name: 'ميلك شيك كيوي', price: 12, description: 'ميلك شيك بنكهة الكيوي.', image: '' },

  // سموثي
  { id: 45, category: 'smoothies', name: 'سموثي فراولة - موز', price: 10, description: 'سموثي منعش بنكهة الفراولة والموز.', image: '' },
  { id: 46, category: 'smoothies', name: 'سموثي مانجو - جوافة', price: 10, description: 'سموثي منعش بنكهات استوائية.', image: '' },
  { id: 47, category: 'smoothies', name: 'سموثي كيوي - ليمون', price: 12, description: 'سموثي منعش بنكهات الليمون والكيوي.', image: '' },

  // موهيتو
  { id: 48, category: 'mojito', name: 'موهيتو نعناع - ليمون', price: 10, description: 'مشروب منعش بنكهات النعناع الطازج والليمون.', image: '' },

  // ياغورت بارفي
  { id: 49, category: 'yogurt-parfait', name: 'بارفي فراولة - موز', price: 15, description: 'بارفي مزيج من الفواكه والزبادي.', image: '' },

  // ايس كريم
  { id: 50, category: 'ice-cream', name: 'آيس كريم شوكولاتة', price: 7, description: 'آيس كريم بنكهة الشوكولاتة اللذيذة.', image: '' },
  { id: 51, category: 'ice-cream', name: 'آيس كريم فراولة', price: 7, description: 'آيس كريم بنكهة الفراولة.', image: '' },
  { id: 52, category: 'ice-cream', name: 'آيس كريم مانجو', price: 8, description: 'آيس كريم بنكهة المانجو.', image: '' },
  { id: 53, category: 'ice-cream', name: 'آيس كريم جوافة', price: 8, description: 'آيس كريم بنكهة الجوافة.', image: '' },

  // كريب
  { id: 54, category: 'crepes', name: 'كريب شوكولاتة', price: 12, description: 'كريب بنكهة الشوكولاتة اللذيذة.', image: '' },
  { id: 55, category: 'crepes', name: 'كريب مانجو', price: 12, description: 'كريب بنكهة المانجو الطازجة.', image: '' },
  { id: 56, category: 'crepes', name: 'كريب فراولة', price: 12, description: 'كريب بنكهة الفراولة.', image: '' },

  // كروسون
  { id: 57, category: 'croissant', name: 'كروسون شوكولاتة', price: 6, description: 'كروسون محشو بالشوكولاتة.', image: '' },
  { id: 58, category: 'croissant', name: 'كروسون لوز', price: 6, description: 'كروسون محشو باللوز.', image: '' },
  { id: 59, category: 'croissant', name: 'كروسون زبدة', price: 6, description: 'كروسون محشو بالزبدة الطازجة.', image: '' },

  // ميني بن كيك
  { id: 60, category: 'mini-cupcake', name: 'ميني بن كيك شوكولاتة', price: 5, description: 'ميني بن كيك بنكهة الشوكولاتة.', image: '' },
  { id: 61, category: 'mini-cupcake', name: 'ميني بن كيك فراولة', price: 5, description: 'ميني بن كيك بنكهة الفراولة.', image: '' },
  { id: 62, category: 'mini-cupcake', name: 'ميني بن كيك مانجو', price: 5, description: 'ميني بن كيك بنكهة المانجو.', image: '' },

  // وافر
  { id: 63, category: 'waffle', name: 'وافل شوكولاتة', price: 12, description: 'وافل بنكهة الشوكولاتة.', image: '' },
  { id: 64, category: 'waffle', name: 'وافل مانجو', price: 12, description: 'وافل بنكهة المانجو الطازجة.', image: '' },

  // كيكات
  { id: 65, category: 'cakes', name: 'كيكة شوكولاتة', price: 15, description: 'كيكة بنكهة الشوكولاتة الغنية.', image: '' },
  { id: 66, category: 'cakes', name: 'كيكة مانجو', price: 15, description: 'كيكة بنكهة المانجو الطازجة.', image: '' },

  // فطور صباحي
  { id: 67, category: 'breakfast', name: 'ميني إفطار', price: 10, description: 'وجبة فطور صغيرة تحتوي على خبز وزبدة وعسل.', image: '' },
  { id: 68, category: 'breakfast', name: 'بيض عيون مع خبز', price: 12, description: 'بيض عيون مع خبز محمص.', image: '' },

  // بيتزا
  { id: 69, category: 'pizza', name: 'بيتزا مارغريتا', price: 20, description: 'بيتزا ناعمة مع صلصة الطماطم والجبن.', image: '' },
  { id: 70, category: 'pizza', name: 'بيتزا لحم', price: 22, description: 'بيتزا مع لحم مفروم.', image: '' },

  // معجنات
  { id: 71, category: 'pastries', name: 'معجنات لحم', price: 18, description: 'معجنات محشوة بلحم.', image: '' },
  { id: 72, category: 'pastries', name: 'معجنات جبن', price: 16, description: 'معجنات محشوة بالجبن.', image: '' },

  // نواشف
  { id: 73, category: 'dried-snacks', name: 'تمر', price: 5, description: 'تمر طازج ولذيذ.', image: '' },
  { id: 74, category: 'dried-snacks', name: 'لوز', price: 6, description: 'لوز طازج ولذيذ.', image: '' },
];


function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-container">
      {/* قائمة الأصناف بشكل أفقي */}
      <div className="categories-container-horizontal">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => setSelectedCategory(category.id)}
            isActive={selectedCategory === category.id}
          />
        ))}
      </div>

      {/* بطاقات الطعام */}
      <div className="items-container">
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
