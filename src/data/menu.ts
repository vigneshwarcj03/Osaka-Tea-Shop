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
  { id: "fresh-juice", name: "Fresh Juice" },
  { id: "ice-cream-scoop", name: "Ice Cream Scoop" },
  { id: "bun", name: "Bun" },
  { id: "special-tea", name: "Special Tea" },
  { id: "hot", name: "Hot" },
  { id: "milkshakes", name: "Milkshakes" },
  { id: "lassi", name: "Lassi" },
  { id: "lemon-juice", name: "Lemon Juice" },
  { id: "flavored-milk", name: "Flavored Milk" },
  { id: "soda", name: "Soda" },
  { id: "mojito", name: "Mojito" },
  { id: "osaka-thick-shake", name: "Osaka Thick Shake" },
  { id: "nuggets", name: "Nuggets" },
  { id: "avil-milk", name: "Avil Milk" },
  { id: "falooda", name: "Falooda" },
  { id: "osaka-special-kulki", name: "Osaka Special Kulki" },
  { id: "momos", name: "Momos" },
  { id: "noodles", name: "Noodles" },
  { id: "bread-omelette", name: "Bread Omelette" },
  { id: "snacks", name: "Snacks" },
  { id: "burger-sandwich", name: "Burger & Sandwich" },
  { id: "french-fries", name: "French Fries" },
];

export const menuItems: MenuItem[] = [
  // FRESH JUICE
  { id: "j1", name: "Sweet Lime Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j2", name: "Watermelon Juice", description: "", price: 40, category: "fresh-juice" },
  { id: "j3", name: "Grape Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j4", name: "Orange Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j5", name: "Amla Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j6", name: "Carrot Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j7", name: "Beetroot Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j8", name: "Papaya Juice", description: "", price: 40, category: "fresh-juice" },
  { id: "j9", name: "Muskmelon Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j10", name: "Pomegranate Juice", description: "", price: 60, category: "fresh-juice" },
  { id: "j11", name: "Pineapple Juice", description: "", price: 50, category: "fresh-juice" },
  { id: "j12", name: "ABC Juice", description: "", price: 70, category: "fresh-juice" },
  
  // ICE CREAM SCOOP
  { id: "ic1", name: "Vanilla Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic2", name: "Butterscotch Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic3", name: "Chocolate Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic4", name: "Strawberry Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic5", name: "Pista Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic6", name: "Black Currant Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  { id: "ic7", name: "Kulfi Ice Cream", description: "", price: 80, category: "ice-cream-scoop" },
  
  // BUN
{ id: "bun1", name: "Peanut Butter Bun", description: "", price: 50, category: "bun" },
{ id: "bun2", name: "Maska Bun", description: "", price: 60, category: "bun" },
{ id: "bun3", name: "Maska Banana Bun", description: "", price: 70, category: "bun" },
{ id: "bun4", name: "Maska Nutella Bun", description: "", price: 80, category: "bun" },

// SPECIAL TEA
{ id: "tea1", name: "Boost Tea", description: "", price: 30, category: "special-tea" },
{ id: "tea2", name: "Horlicks Tea", description: "", price: 30, category: "special-tea" },
{ id: "tea3", name: "Milo Tea", description: "", price: 35, category: "special-tea" },
{ id: "tea4", name: "Saffron Tea", description: "", price: 40, category: "special-tea" },
{ id: "tea5", name: "Masala Tea", description: "", price: 40, category: "special-tea" },
{ id: "tea6", name: "Elachi Tea", description: "", price: 30, category: "special-tea" },

// MILKSHAKES
{ id: "ms1", name: "Apple Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms2", name: "Mango Milkshake", description: "", price: 70, category: "milkshakes" },
{ id: "ms3", name: "Strawberry Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms4", name: "Fig Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms5", name: "Kiwi Milkshake", description: "", price: 65, category: "milkshakes" },
{ id: "ms6", name: "Avocado Milkshake", description: "", price: 80, category: "milkshakes" },
{ id: "ms7", name: "Custard Apple Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms8", name: "Chiku Milkshake", description: "", price: 50, category: "milkshakes" },
{ id: "ms9", name: "Red Banana Milkshake", description: "", price: 50, category: "milkshakes" },
{ id: "ms10", name: "Spanish Goya Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms11", name: "Sharjah Milkshake", description: "", price: 60, category: "milkshakes" },
{ id: "ms12", name: "Jackfruit Milkshake", description: "", price: 70, category: "milkshakes" },
{ id: "ms13", name: "Dry Fig Milkshake", description: "", price: 70, category: "milkshakes" },
{ id: "ms14", name: "Dry Fruits Milkshake", description: "", price: 80, category: "milkshakes" },
{ id: "ms15", name: "Dates Milkshake", description: "", price: 70, category: "milkshakes" },
{ id: "ms16", name: "Dragon Fruit Milkshake", description: "", price: 70, category: "milkshakes" },
{ id: "ms17", name: "Pineapple Shake", description: "", price: 50, category: "milkshakes" },
{ id: "ms18", name: "Watermelon Shake", description: "", price: 50, category: "milkshakes" },

// LASSI
{ id: "lassi1", name: "Normal Lassi", description: "", price: 40, category: "lassi" },
{ id: "lassi2", name: "Mango Lassi", description: "", price: 50, category: "lassi" },
{ id: "lassi3", name: "Chikku Lassi", description: "", price: 50, category: "lassi" },
{ id: "lassi4", name: "Banana Lassi", description: "", price: 50, category: "lassi" },
{ id: "lassi5", name: "Pineapple Lassi", description: "", price: 50, category: "lassi" },

// LEMON JUICE
{ id: "lemon1", name: "Fresh Lime", description: "", price: 20, category: "lemon-juice" },
{ id: "lemon2", name: "Pineapple Lime", description: "", price: 30, category: "lemon-juice" },
{ id: "lemon3", name: "Grape Lime", description: "", price: 30, category: "lemon-juice" },
{ id: "lemon4", name: "Orange Lime", description: "", price: 35, category: "lemon-juice" },
{ id: "lemon5", name: "Mint Lime", description: "", price: 30, category: "lemon-juice" },
{ id: "lemon6", name: "Mango Lime", description: "", price: 40, category: "lemon-juice" },
{ id: "lemon7", name: "Brazil Lime", description: "", price: 40, category: "lemon-juice" },

// FLAVORED MILK
{ id: "milk1", name: "Rose Milk", description: "", price: 40, category: "flavored-milk" },
{ id: "milk2", name: "Almond Milk", description: "", price: 40, category: "flavored-milk" },
{ id: "milk3", name: "Pistachio Milk", description: "", price: 40, category: "flavored-milk" },
{ id: "milk4", name: "Cold Boost", description: "", price: 50, category: "flavored-milk" },
{ id: "milk5", name: "Cold Horlicks", description: "", price: 50, category: "flavored-milk" },
{ id: "milk6", name: "Cold Coffee", description: "", price: 50, category: "flavored-milk" },
{ id: "milk7", name: "Cold Bournvita", description: "", price: 60, category: "flavored-milk" },
{ id: "milk8", name: "Cold Milo", description: "", price: 60, category: "flavored-milk" },

// SODA
{ id: "soda1", name: "Lime Soda", description: "", price: 30, category: "soda" },
{ id: "soda2", name: "Jaljeera Soda", description: "", price: 35, category: "soda" },
{ id: "soda3", name: "Chilli Lime Soda", description: "", price: 35, category: "soda" },
{ id: "soda4", name: "Sherbet Soda", description: "", price: 40, category: "soda" },
{ id: "soda5", name: "Masala Soda", description: "", price: 35, category: "soda" },

// MOJITO
{ id: "mojito1", name: "Virgin Mojito", description: "", price: 70, category: "mojito" },
{ id: "mojito2", name: "Mint Mojito", description: "", price: 70, category: "mojito" },
{ id: "mojito3", name: "Blueberry Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito4", name: "Strawberry Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito5", name: "Green Apple Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito6", name: "Passion Fruit Mojito", description: "", price: 70, category: "mojito" },
{ id: "mojito7", name: "Pineapple Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito8", name: "Cranberry Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito9", name: "Bluesky Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito10", name: "Watermelon Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito11", name: "Bubblegum Mojito", description: "", price: 70, category: "mojito" },
{ id: "mojito12", name: "Orange Mojito", description: "", price: 60, category: "mojito" },
{ id: "mojito13", name: "Grape Mojito", description: "", price: 60, category: "mojito" },

// OSAKA THICK SHAKE
{ id: "shake1", name: "Tender Coconut Shake", description: "", price: 70, category: "osaka-thick-shake" },
{ id: "shake2", name: "Tender Cashew Shake", description: "", price: 80, category: "osaka-thick-shake" },
{ id: "shake3", name: "Peanut Butter Banana Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake4", name: "Oreo Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake5", name: "Dates Tender Shake", description: "", price: 80, category: "osaka-thick-shake" },
{ id: "shake6", name: "Saudi Shake", description: "", price: 70, category: "osaka-thick-shake" },
{ id: "shake7", name: "Nutella Shake", description: "", price: 70, category: "osaka-thick-shake" },
{ id: "shake8", name: "Nutella Cashew Shake", description: "", price: 80, category: "osaka-thick-shake" },
{ id: "shake9", name: "Oreo Coffee Shake", description: "", price: 75, category: "osaka-thick-shake" },
{ id: "shake10", name: "Dairy Milk Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake11", name: "Fig and Honey Shake", description: "", price: 75, category: "osaka-thick-shake" },
{ id: "shake12", name: "Kitkat Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake13", name: "Snickers Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake14", name: "Vanilla Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake15", name: "Chocolate Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake16", name: "Butterscotch Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake17", name: "Black Currant Shake", description: "", price: 65, category: "osaka-thick-shake" },
{ id: "shake18", name: "Kulfi Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake19", name: "Spanish Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake20", name: "Strawberry Shake", description: "", price: 60, category: "osaka-thick-shake" },
{ id: "shake21", name: "Banana Smoothie", description: "", price: 70, category: "osaka-thick-shake" },
{ id: "shake22", name: "Protein Shake", description: "", price: 80, category: "osaka-thick-shake" },

// NUGGETS
{ id: "nugget1", name: "Chicken Nuggets", description: "", price: 80, category: "nuggets" },
{ id: "nugget2", name: "Chicken Popcorn", description: "", price: 70, category: "nuggets" },
{ id: "nugget3", name: "Crab Lollipop", description: "", price: 70, category: "nuggets" },
{ id: "nugget4", name: "Smile Nuggets", description: "", price: 70, category: "nuggets" },
{ id: "nugget5", name: "Prawns", description: "", price: 80, category: "nuggets" },

// AVIL MILK
{ id: "avil1", name: "Normal Avil Milk", description: "", price: 60, category: "avil-milk" },
{ id: "avil2", name: "SP Avil Milk", description: "", price: 80, category: "avil-milk" },

// FALOODA
{ id: "falooda1", name: "Mini Falooda", description: "", price: 80, category: "falooda" },
{ id: "falooda2", name: "Fruit Salad", description: "", price: 80, category: "falooda" },
{ id: "falooda3", name: "Falooda Normal", description: "", price: 100, category: "falooda" },
{ id: "falooda4", name: "Royal Falooda", description: "", price: 120, category: "falooda" },
{ id: "falooda5", name: "SP Falooda", description: "", price: 150, category: "falooda" },

// HOT
{ id: "hot1", name: "Tea", description: "", price: 18, category: "hot" },
{ id: "hot2", name: "Ginger Tea", description: "", price: 25, category: "hot" },
{ id: "hot3", name: "Coffee", description: "", price: 25, category: "hot" },
{ id: "hot4", name: "Black Coffee", description: "", price: 15, category: "hot" },
{ id: "hot5", name: "Lemon Tea", description: "", price: 20, category: "hot" },
{ id: "hot6", name: "Chukku Coffee", description: "", price: 25, category: "hot" },
{ id: "hot7", name: "Badam Milk", description: "", price: 25, category: "hot" },
{ id: "hot8", name: "Ragi Malt", description: "", price: 25, category: "hot" },
{ id: "hot9", name: "Black Tea", description: "", price: 15, category: "hot" },
{ id: "hot10", name: "Black Honey Tea", description: "", price: 20, category: "hot" },
{ id: "hot11", name: "Lemon With Honey", description: "", price: 25, category: "hot" },
{ id: "hot12", name: "Black Ginger Tea", description: "", price: 20, category: "hot" },
{ id: "hot13", name: "Black Ginger Tea with honey", description: "", price: 25, category: "hot" },

// OSAKA SPECIAL KULKI
{ id: "kulki1", name: "Lime Kulukki", description: "", price: 50, category: "osaka-special-kulki" },
{ id: "kulki2", name: "Sarbath Kulukki", description: "", price: 55, category: "osaka-special-kulki" },
{ id: "kulki3", name: "Green Mango Kulukki", description: "", price: 65, category: "osaka-special-kulki" },
{ id: "kulki4", name: "Watermelon Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki5", name: "Pineapple Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki6", name: "Grape Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki7", name: "Carrot Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki8", name: "Orange Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki9", name: "Mixed Fruit Kulukki", description: "", price: 70, category: "osaka-special-kulki" },
{ id: "kulki10", name: "Boost Kulukki", description: "", price: 45, category: "osaka-special-kulki" },
{ id: "kulki11", name: "Horlicks Kulukki", description: "", price: 45, category: "osaka-special-kulki" },
{ id: "kulki12", name: "Sweet Lime Kulukki", description: "", price: 60, category: "osaka-special-kulki" },
{ id: "kulki13", name: "Passion Fruit Kulukki", description: "", price: 65, category: "osaka-special-kulki" },
{ id: "kulki14", name: "Buttermilk Kulukki", description: "", price: 45, category: "osaka-special-kulki" },
{ id: "kulki15", name: "Milk Sarbath", description: "", price: 50, category: "osaka-special-kulki" },

// MOMOS
{ id: "momos1", name: "Chicken Momos", description: "", price: 80, category: "momos" },
{ id: "momos2", name: "Corn Momos", description: "", price: 60, category: "momos" },
{ id: "momos3", name: "Veg Momos", description: "", price: 50, category: "momos" },
{ id: "momos4", name: "Paneer Momos", description: "", price: 70, category: "momos" },

// NOODLES
{ id: "noodles1", name: "Plain Noodles", description: "", price: 45, category: "noodles" },
{ id: "noodles2", name: "Veg Noodles", description: "", price: 50, category: "noodles" },
{ id: "noodles3", name: "Egg Noodles", description: "", price: 55, category: "noodles" },
{ id: "noodles4", name: "Chicken Noodles", description: "", price: 60, category: "noodles" },

// BREAD Omelette
{ id: "bread1", name: "Normal Bread Omelette", description: "", price: 50, category: "bread-omelette" },
{ id: "bread2", name: "Chicken Bread Omelette", description: "", price: 65, category: "bread-omelette" },
{ id: "bread3", name: "Peri Peri Bread Omelette", description: "", price: 55, category: "bread-omelette" },
{ id: "bread4", name: "Extra Cheese", description: "", price: 15, category: "bread-omelette" },

// SNACKS
{ id: "snacks1", name: "Chicken Fingers (5pcs)", description: "", price: 120, category: "snacks" },
{ id: "snacks2", name: "Onion Crispies (5pcs)", description: "", price: 120, category: "snacks" },
{ id: "snacks3", name: "Chicken Cheese Balls (6pcs)", description: "", price: 100, category: "snacks" },
{ id: "snacks4", name: "Chicken Lollipops (4pcs)", description: "", price: 120, category: "snacks" },
{ id: "snacks5", name: "Chicken Samosa (2pcs)", description: "", price: 30, category: "snacks" },

// BURGER & SANDWICH
{ id: "burger1", name: "Chicken Sandwich", description: "", price: 70, category: "burger-sandwich" },
{ id: "burger2", name: "Veg Sandwich", description: "", price: 55, category: "burger-sandwich" },
{ id: "burger3", name: "Egg Sandwich", description: "", price: 65, category: "burger-sandwich" },
{ id: "burger4", name: "Paneer Sandwich", description: "", price: 70, category: "burger-sandwich" },
{ id: "burger5", name: "Corn Sandwich", description: "", price: 65, category: "burger-sandwich" },
{ id: "burger6", name: "Masala Sandwich", description: "", price: 60, category: "burger-sandwich" },
{ id: "burger7", name: "Chicken Burger", description: "", price: 95, category: "burger-sandwich" },
{ id: "burger8", name: "Veg Burger", description: "", price: 85, category: "burger-sandwich" },
{ id: "burger9", name: "Extra Cheese", description: "", price: 15, category: "burger-sandwich" },

// FRENCH FRIES
{ id: "fries1", name: "Normal French Fries", description: "", price: 70, category: "french-fries" },
{ id: "fries2", name: "Peri Peri French Fries", description: "", price: 80, category: "french-fries" },
{ id: "fries3", name: "Masala French Fries", description: "", price: 80, category: "french-fries" },

];