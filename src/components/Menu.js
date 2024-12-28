import React, { useState } from 'react';
import './Menu.css';
import juiceImage from '../images/sweetbere.jpg';

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'hot', name: 'مشروبات ساخنة' },
  { id: 'cold', name: 'مشروبات باردة' },
  { id: 'juices', name: 'عصائر طبيعية' },
  { id: 'cocktails', name: 'كوكتيلات' },
  { id: 'froopy', name: 'فروبي' },
  { id: 'milkshakes', name: 'ميلك شيك' },
  { id: 'smoothies', name: 'سموثي' },
  { id: 'mojito', name: 'موهيتو' },
  { id: 'yogurt-parfait', name: 'ياغورت بارفي' },
  { id: 'ice-cream', name: 'ايس كريم' },
  { id: 'crepes', name: 'كريب' },
  { id: 'croissant', name: 'كروسون' },
  { id: 'mini-cupcake', name: 'ميني بن كيك' },
  { id: 'waffle', name: 'وافل' },
  { id: 'cakes', name: 'كيكات' },
  { id: 'breakfast', name: 'فطور صباحي' },
  { id: 'pizza', name: 'بيتزا' },
  { id: 'pastries', name: 'معجنات' },
  { id: 'dried-snacks', name: 'نواشف' },
];
const requireContext = require.context('../images', true, /\.(jpg|png|jpeg|gif)$/);
const items = [
  { id: 1, category: 'hot', name: 'قهوة لاتيه', price: 15, description: 'قهوة لاتيه مع رغوة الحليب.', image: 'https://source.unsplash.com/300x200/?latte' },
  { id: 2, category: 'cold', name: 'عصير مانجو وبرتقال', price: 10, description: 'عصير مانجو وبرتقال.', image: requireContext('./orange-mango.jpg')},
  { id: 3, category: 'juices', name: 'عصير فراوله', price: 12, description: 'عصير طازج من الفراوله.', image: requireContext('./sweetbere.jpg')  },
  { id: 3, category: 'juices', name: 'عصير كوكتيل', price: 12, description: 'عصير طازج من الفراوله.', image: requireContext('./cocktel.jpg')  },
  { id: 4, category: 'cocktails', name: 'موخيتو', price: 18, description: 'كوكتيل منعش بنكهة النعناع.', image: 'https://source.unsplash.com/300x200/?mojito' },
  { id: 5, category: 'froopy', name: 'فروبي شوكولا', price: 16, description: 'فروبي منعش بنكهة الشوكولا.', image: 'https://source.unsplash.com/300x200/?froopy' },
  { id: 6, category: 'milkshakes', name: 'ميلك شيك فانيليا', price: 14, description: 'ميلك شيك فانيليا لذيذ.', image: 'https://source.unsplash.com/300x200/?milkshake' },
  { id: 7, category: 'smoothies', name: 'سموثي مانجو', price: 17, description: 'سموثي منعش بنكهات المانجو.', image: 'https://source.unsplash.com/300x200/?smoothie' },
  { id: 8, category: 'ice-cream', name: 'أيس كريم شوكولا', price: 20, description: 'أيس كريم لذيذ بنكهة الشوكولا.', image: 'https://source.unsplash.com/300x200/?ice-cream' },
  { id: 9, category: 'crepes', name: 'كريب بالفراولة', price: 22, description: 'كريب محشو بالفراولة.', image: 'https://source.unsplash.com/300x200/?crepes' },
  { id: 10, category: 'croissant', name: 'كرواسون باللوز', price: 12, description: 'كرواسون محشو باللوز.', image: 'https://source.unsplash.com/300x200/?croissant' },
  { id: 11, category: 'mini-cupcake', name: 'ميني بن كيك', price: 18, description: 'ميني بن كيك طازج ولذيذ.', image: 'https://source.unsplash.com/300x200/?cupcake' },
  { id: 12, category: 'waffle', name: 'وافل بنكهة الفراولة', price: 25, description: 'وافل طازج بنكهة الفراولة.', image: 'https://source.unsplash.com/300x200/?waffle' },
  { id: 13, category: 'cakes', name: 'كيكة الشوكولا', price: 30, description: 'كيكة شوكولا لذيذة.', image: 'https://source.unsplash.com/300x200/?chocolate-cake' },
  { id: 14, category: 'breakfast', name: 'فطور صحي', price: 35, description: 'فطور غني بالبروتين.', image: 'https://source.unsplash.com/300x200/?healthy-breakfast' },
  { id: 15, category: 'pizza', name: 'بيتزا مارغريتا', price: 40, description: 'بيتزا طازجة وشهية.', image: 'https://source.unsplash.com/300x200/?pizza' },
  { id: 16, category: 'pastries', name: 'معجنات فرنسية', price: 20, description: 'معجنات طازجة ومقرمشة.', image: 'https://source.unsplash.com/300x200/?pastries' },
  { id: 17, category: 'dried-snacks', name: 'نواشف صحية', price: 15, description: 'نواشف صحية ولذيذة.', image: 'https://source.unsplash.com/300x200/?dried-snacks' },
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="menu-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">قائمتنا</h2>

        {/* شريط التصنيفات */}
        <div className="menu-categories-container" style={{ position: 'relative', overflowX: 'auto', whiteSpace: 'nowrap', scrollSnapType: 'x mandatory' }}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`menu-category ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <img src='' />
              {category.name}
            </button>
          ))}
        </div>

        {/* المنتجات */}
        <div className="row mt-4">
          {filteredItems.map(item => (
            <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
              <div className="item-card card shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="text-primary fw-bold"> {item.price} دينار</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
