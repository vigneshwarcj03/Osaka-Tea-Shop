export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | [number, number];
  note?: string;
  category: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "momos", name: "Momos" },
  { id: "Crunchy Chicken Treats", name: "Crunchy Chicken Treats" },
  { id: "noodles", name: "Noodles" },
  { id: "burger", name: "Burger & Sandwich" },
  { id: "nuggets", name: "Nuggets" },
  { id: "bread-omelette", name: "Bread Omelette" },
  { id: "french-fries", name: "French Fries" },
  { id: "hot-drinks", name: "Hot Drinks" },
  { id: "kulukki", name: "Osaka Special Kulukki" },
  { id: "juice", name: "Fresh Juice" },
  { id: "milkshake", name: "Milkshakes" },
  { id: "icecream", name: "Ice Cream & Lassi" },
  { id: "thickshake", name: "Osaka Thick Shake" },
];

export const menuItems: MenuItem[] = [
  // MOMOS
  { id: "m1", name: "Chicken Momos", description: "", price: 80, category: "momos" },
  { id: "m2", name: "Corn Momos", description: "", price: 60, category: "momos" },
  { id: "m3", name: "Veg Momos", description: "", price: 50, category: "momos" },
  { id: "m4", name: "Paneer Momos", description: "", price: 70, category: "momos" },

  // Crunchy Chicken Treats
  { id: "s1", name: "Chicken Finger (5 pcs)", description: "", price: 120, category: "Crunchy Chicken Treats" },
  { id: "s2", name: "Onion Crisps (5 pcs)", description: "", price: 120, category: "Crunchy Chicken Treats" },
  { id: "s3", name: "Chicken Cheese Ball (6 pcs)", description: "", price: 100, category: "Crunchy Chicken Treats" },
  { id: "s4", name: "Chicken Lollipop (4 pcs)", description: "", price: 120, category: "Crunchy Chicken Treats" },
  { id: "s5", name: "Chicken Samosa (2 pcs)", description: "", price: 30, category: "Crunchy Chicken Treats" },

  // NOODLES
  { id: "n1", name: "Plain Noodles", description: "", price: 40, category: "noodles" },
  { id: "n2", name: "Veg Noodles", description: "", price: 45, category: "noodles" },
  { id: "n3", name: "Egg Noodles", description: "", price: 50, category: "noodles" },
  { id: "n4", name: "Chicken Noodles", description: "", price: 55, category: "noodles" },

  // BURGER & SANDWICH
  { id: "b1", name: "Chicken Sandwich", description: "", price: 65, category: "burger" },
  { id: "b2", name: "Veg Sandwich", description: "", price: 50, category: "burger" },
  { id: "b3", name: "Egg Sandwich", description: "", price: 60, category: "burger" },
  { id: "b4", name: "Paneer Sandwich", description: "", price: 65, category: "burger" },
  { id: "b5", name: "Corn Sandwich", description: "", price: 60, category: "burger" },
  { id: "b6", name: "Masala Sandwich", description: "", price: 55, category: "burger" },
  { id: "b7", name: "Chicken Burger", description: "", price: 90, category: "burger" },
  { id: "b8", name: "Veg Burger", description: "", price: 80, category: "burger" },
  { id: "b9", name: "Extra Cheese", description: "", price: 15, category: "burger" },

  // NUGGETS
  { id: "ng1", name: "Chicken Nuggets", description: "", price: 80, category: "nuggets" },
  { id: "ng2", name: "Chicken Popcorn", description: "", price: 70, category: "nuggets" },
  { id: "ng3", name: "Crab Lollipop", description: "", price: 70, category: "nuggets" },
  { id: "ng4", name: "Smile Nuggets", description: "", price: 70, category: "nuggets" },
  { id: "ng5", name: "Prawns", description: "", price: 80, category: "nuggets" },

  // Bread Omelette
  { id: "bo1", name: "Bread Omelette - Normal", description: "", price: 45, category: "bread-omelette" },
  { id: "bo2", name: "Bread Omelette - Chicken", description: "", price: 60, category: "bread-omelette" },
  { id: "bo3", name: "Bread Omelette - Peri Peri", description: "", price: 50, category: "bread-omelette" },
  { id: "bo4", name: "Extra Cheese (Add-on)", description: "For Bread Omelette", price: 15, category: "bread-omelette" },

  // French Fries
  { id: "ff1", name: "French Fries - Normal", description: "", price: 70, category: "french-fries" },
  { id: "ff2", name: "French Fries - Peri Peri", description: "", price: 80, category: "french-fries" },
  { id: "ff3", name: "French Fries - Masala", description: "", price: 80, category: "french-fries" },


  // HOT DRINKS
  { id: "h1", name: "Tea", description: "", price: 15, category: "hot-drinks" },
  { id: "h2", name: "Ginger Tea", description: "", price: 20, category: "hot-drinks" },
  { id: "h3", name: "Coffee", description: "", price: 20, category: "hot-drinks" },
  { id: "h4", name: "Black Coffee", description: "", price: 15, category: "hot-drinks" },
  { id: "h5", name: "Lemon Tea", description: "", price: 18, category: "hot-drinks" },

  // KULUKKI
  { id: "k1", name: "Lime Kulukki", description: "", price: 50, category: "kulukki" },
  { id: "k2", name: "Watermelon Kulukki", description: "", price: 60, category: "kulukki" },
  { id: "k3", name: "Mixed Fruit Kulukki", description: "", price: 70, category: "kulukki" },

  // JUICE
  { id: "j1", name: "Sweet Lime Juice", description: "", price: 60, category: "juice" },
  { id: "j2", name: "Watermelon Juice", description: "", price: 40, category: "juice" },
  { id: "j3", name: "Apple Juice", description: "", price: 50, category: "juice" },

  // MILKSHAKES
  { id: "ms1", name: "Mango Milkshake", description: "", price: 60, category: "milkshake" },
  { id: "ms2", name: "Strawberry Milkshake", description: "", price: 60, category: "milkshake" },
  { id: "ms3", name: "Avocado Milkshake", description: "", price: 70, category: "milkshake" },

  // ICE CREAM & LASSI
  { id: "ic1", name: "Vanilla Ice Cream", description: "", price: 80, category: "icecream" },
  { id: "ic2", name: "Chocolate Ice Cream", description: "", price: 80, category: "icecream" },
  { id: "ls1", name: "Normal Lassi", description: "", price: 40, category: "icecream" },
  { id: "ls2", name: "Mango Lassi", description: "", price: 50, category: "icecream" },

  // THICK SHAKE
  { id: "ts1", name: "Oreo Thick Shake", description: "", price: [60, 80], note: "Regular / With Ice Cream", category: "thickshake" },
  { id: "ts2", name: "Kitkat Thick Shake", description: "", price: [60, 80], note: "Regular / With Ice Cream", category: "thickshake" },
  { id: "ts3", name: "Nutella Thick Shake", description: "", price: [60, 80], note: "Regular / With Ice Cream", category: "thickshake" },
  { id: "ts4", name: "Protein Shake", description: "", price: 80, category: "thickshake" },
];