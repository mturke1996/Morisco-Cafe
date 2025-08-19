export interface MenuItem {
  name: string;
  price?: number;
  prices?: { L: number; M: number };
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  [key: string]: MenuCategory;
}

export const menuData: MenuData = {
  "hotDrinks": {
    "title": "مشروبات ساخنة",
    "items": [
      {"name": "قهوة عربية", "price": 8},
      {"name": "كابتشينو", "price": 6},
      {"name": "مكياتو", "price": 5},
      {"name": "نسكافيه", "price": 6},
      {"name": "نسكافيه كامل", "price": 8},
      {"name": "نسكافيه فل", "price": 10},
      {"name": "شاي", "price": 4},
      {"name": "شاي باللوز", "price": 8},
      {"name": "شاي مغريبي", "price": 4},
      {"name": "كافي لاتي", "price": 7},
      {"name": "سيبسيال", "price": 6},
      {"name": "براد شاهي باللوز", "price": 15},
      {"name": "هوت شوكلت", "price": 12}
    ]
  },
  "coldDrinks": {
    "title": "مشروبات باردة",
    "items": [
      {"name": "اسيانش لاتيه", "price": 12},
      {"name": "ايس كافيه", "price": 12},
      {"name": "فانيل لاتيه", "price": 12},
      {"name": "كراميل لاتي", "price": 12},
      {"name": "بندق لاتيه", "price": 12},
      {"name": "ايس شوكلت", "price": 12},
      {"name": "فرايتشينو", "price": 13}
    ]
  },
  "cocktails": {
    "title": "كوكتيلات",
    "items": [
      {"name": "كوكتيل فواكه موسمية", "price": 15},
      {"name": "فراولة - موز - جوافة", "price": 15},
      {"name": "فراولة - نعناع", "price": 15},
      {"name": "فراولة - بنجر", "price": 15},
      {"name": "فراولة - أناناس", "price": 15},
      {"name": "فراولة - عنب - رمان", "price": 15},
      {"name": "فراولة - كيوي - تفاح", "price": 15},
      {"name": "فراولة - كيوي - اناناس", "price": 15},
      {"name": "مانجا - موز", "price": 15},
      {"name": "مانجا - موز - خوخ", "price": 15},
      {"name": "مانجا - كيوي", "price": 15},
      {"name": "مانجا - جوافة", "price": 15},
      {"name": "مانجا - برتقال", "price": 15},
      {"name": "ليمون - مانجا", "price": 15},
      {"name": "ليمون - نعناع - زنجبيل", "price": 15},
      {"name": "فواكه قطع", "price": 15}
    ]
  },
  "naturalJuices": {
    "title": "عصائر طبيعية",
    "items": [
      {"name": "مانجو", "prices": {"L": 11, "M": 10}},
      {"name": "فراولة", "prices": {"L": 10, "M": 9}},
      {"name": "كيوي", "prices": {"L": 15, "M": 12}},
      {"name": "برتقال", "prices": {"L": 12, "M": 10}},
      {"name": "جوافة", "prices": {"L": 12, "M": 10}},
      {"name": "موز", "prices": {"L": 11, "M": 9}},
      {"name": "أناناس", "prices": {"L": 12, "M": 10}},
      {"name": "هندي", "prices": {"L": 12, "M": 10}},
      {"name": "ليموناده", "prices": {"L": 11, "M": 9}},
      {"name": "خوخ", "prices": {"L": 10, "M": 8}},
      {"name": "رمان", "prices": {"L": 17, "M": 15}},
      {"name": "عنب", "prices": {"L": 12, "M": 10}},
      {"name": "أفوكادو", "prices": {"L": 15, "M": 12}}
    ]
  },
  "Froppy": {
    "title": "فروبي",
    "items": [
      {"name": "فراولة", "prices": {"L": 12, "M": 10}},
      {"name": "فراولة - موز", "prices": {"L": 12, "M": 10}},
      {"name": "فراولة - مانجا", "prices": {"L": 12, "M": 10}},
      {"name": "مانجا", "prices": {"L": 12, "M": 10}},
      {"name": "موز", "prices": {"L": 12, "M": 10}},
      {"name": "تمر - لوز", "prices": {"L": 14, "M": 12}}
    ]
  },
  "shakes": {
    "title": "ميلك شيك",
    "items": [
      {"name": "نوتيلا", "price": 15},
      {"name": "لوز", "price": 15},
      {"name": "فستق", "price": 17},
      {"name": "لوتس", "price": 15},
      {"name": "أوريو", "price": 15},
      {"name": "بندق", "price": 17},
      {"name": "نوتيلا فستق", "price": 17},
      {"name": "نوتيلا بندق", "price": 17},
      {"name": "بقلاوة", "price": 17}
    ]
  },
  "Smoothie": {
    "title": "سموذي",
    "items": [
      {"name": "فراوله", "price": 17},
      {"name": "مانجو", "price": 17},
      {"name": "توت بري", "price": 17},
      {"name": "فواكه استوائية", "price": 17},
      {"name": "كرز", "price": 17},
      {"name": "اناناس", "price": 17},
      {"name": "فواكع برية", "price": 17}
    ]
  },
  "crepes": {
    "title": "كريب",
    "items": [
      {"name": "نوتيلا", "price": 15},
      {"name": "نوتيلا لوز", "price": 16},
      {"name": "نوتيلا لوتس", "price": 17},
      {"name": "نوتيلا فستق", "price": 18},
      {"name": "نوتيلا بندق", "price": 18},
      {"name": "كريب براونيز", "price": 20},
      {"name": "كريب كنافة", "price": 17},
      {"name": "كريب موريسكو", "price": 20},
      {"name": "كريب حار", "price": 22},
      {"name": "كريب رد فيلفت", "price": 18},
      {"name": "كريب سوشي", "price": 22},
      {"name": "كريب دبي", "price": 20,
        "description": "نوتيلا - فستق - كنافة"
      }
    ]
  },
  "croissants": {
    "title": "كرواسون",
    "items": [
      {"name": "سادة", "price": 7},
      {"name": "نوتيلا", "price": 9},
      {"name": "فستق", "price": 10},
      {"name": "بندق", "price": 10},
      {"name": "كامل", "price": 12},
      {"name": "نوتيلا - فستق", "price": 12},
      {"name": "نوتيلا - بندق", "price": 12},
      {"name": "جبنة", "price": 8},
      {"name": "حار", "price": 12}
    ]
  },
  "miniPancakes": {
    "title": "ميني بان كيك",
    "items": [
      {"name": "نوتيلا", "price": 12},
      {"name": "نوتيلا لوز", "price": 15},
      {"name": "نوتيلا لوتس", "price": 15},
      {"name": "نوتيلا فستق", "price": 15},
      {"name": "نوتيلا بندق", "price": 15}
    ]
  },
  "waffles": {
    "title": "وافل",
    "items": [
      {"name": "نوتيلا", "price": 15},
      {"name": "نوتيلا فستق", "price": 15},
      {"name": "نوتيلا بندق", "price": 15},
      {"name": "تـــــام", "price": 20}
    ]
  },
  "kunafa": {
    "title": "كنافة",
    "items": [
      {"name": "عادية", "price": 16},
      {"name": "عادية و لوز", "price": 17},
      {"name": "عادية و فستق", "price": 18},
      {"name": "عادية و لوتس", "price": 17},
      {"name": "إضافة آيس كريم", "price": 3}
    ]
  },
  "Mohjito": {
    "title": "موهيتو",
    "items": [
      {"name": "كلاسيك", "price": 10},
      {"name": "شوكولاتة", "price": 10},
      {"name": "خوخ", "price": 10},
      {"name": "رمان", "price": 10},
      {"name": "برتقال", "price": 10},
      {"name": "فراولة", "price": 10},
      {"name": "باشن فروت", "price": 10},
      {"name": "توت", "price": 10},
      {"name": "توت بري", "price": 10},
      {"name": "دلاج", "price": 10},
      {"name": "علكة", "price": 10},
      {"name": "ميكس", "price": 10}
    ]
  },
  "iceCream": {
    "title": "آيس كريم",
    "items": [
      {"name": "آيس كريم فانيليا", "price": 7},
      {"name": "آيس كريم مانجو", "price": 7}
    ]
  },
  "breakfast": {
    "title": "إفطار",
    "items": [
      {
        "name": "إفطار موربسكو (شخصين)",
        "price": 68,
        "description": "شكشوكة تركية - فواكه - لوز- نوعان جبنة - فول - عسل بيض مطبوخ - زيتون - هريسة - مربى - حلوى شامية - خبز بربوش سادة - خبز - إثنان شاي"
      },
      {
        "name": "إفطار موربسكو (شخص)",
        "price": 38,
        "description": "شكشوكة تركية - نوعان جبنة - بيض مطبوخ - زيتون - هريسة - مربى - خبز - بربوش سادة - 1 شاي"
      }
    ]
  },
  "shakshuka": {
    "title": "شكشوكة تركية",
    "items": [
      {
        "name": "شكشوكة تركية",
        "price": 18,
        "description": "شكشوكة تركية - هريسة - زيتون - خبز أو توست"
      },
      {
        "name": "اومليت مرتديلا",
        "price": 15,
        "description": "مرتيديلا - جبنه موزريلا - خبزه او توست"
      },
      {
        "name": "اومليت خضار",
        "price": 15,
        "description": "خضار - جبنه موزريلا - خبزه او توست"
      },
      {
        "name": "اومليت كلاسيك",
        "price": 15,
        "description": "جبنه موزريلا - خبزه او توست"
      }
    ]
  },
  "toast": {
    "title": "توست",
    "items": [
      {"name": "جبنة موزاريلا - جبنة شيدر - جبنة بوك - جبنة شرائح - تن", "price": 12},
      {"name": "جبنة موزاريلا - جبنة شيدر - جبنة بوك - جبنة شرائح", "price": 8},
      {"name": "توست تن", "price": 8},
      {"name": "توست VIP", "price": 20}
    ]
  },
  "sandwiches": {
    "title": "سندويشات",
    "items": [
      {"name": "سندويش تن وجبنة", "price": 12},
      {"name": "سندويش جبنة", "price": 10},
      {"name": "سندويش شكشوكة", "price": 14},
      {"name": "سندويش صحي (خبز شوفان + ريكوتا + زيت زيتون)", "price": 15}
    ]
  },
  "pizza": {
    "title": "بيتزا",
    "items": [
      {"name": "بيتزا مارغريتا", "price": 18},
      {"name": "بيتزا تونا", "price": 20},
      {"name": "بيتزا تونا ريو", "price": 27},
      {"name": "بيتزا خضروات", "price": 19},
      {"name": "بيتزا خضروات مشوية", "price": 21},
      {"name": "بيتزا ريجينا", "price": 19},
      {"name": "بيتزا فونجي", "price": 20},
      {"name": "بيتزا تشيكن", "price": 20},
      {"name": "بيتزا كباب", "price": 22}
    ]
  },
  "pastries": {
    "title": "معجنات",
    "items": [
      {"name": "كالزوني", "price": 20},
      {"name": "صفيحة جبنة", "price": 15},
      {"name": "صفيحة لحم وجبنة", "price": 20},
      {"name": "صفيحة لحم", "price": 22}
    ]
  }
};
