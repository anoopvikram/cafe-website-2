const navLinks = [
  { id: "menu", title: "Menu" },
  { id: "about", title: "About Us" },
  { id: "gallery", title: "Gallery" },
  { id: "contact", title: "Contact" },
];

const foodLists = [
  { name: "Classic Club Sandwich", category: "Snacks", detail: "With fries", price: "$8" },
  { name: "Margherita Pizza", category: "Main Course", detail: "12 inch", price: "$12" },
  { name: "Pasta Alfredo", category: "Main Course", detail: "Creamy sauce", price: "$10" },
  { name: "Veggie Wrap", category: "Snacks", detail: "With salad", price: "$7" },
];

const beverageLists = [
  { name: "Cappuccino", category: "Hot Beverage", detail: "200 ml", price: "$4" },
  { name: "Iced Americano", category: "Cold Beverage", detail: "350 ml", price: "$5" },
  { name: "Classic Lemonade", category: "Cold Beverage", detail: "400 ml", price: "$3" },
  { name: "Hot Chocolate", category: "Hot Beverage", detail: "250 ml", price: "$4" },
];

const profileLists = [
  { imgPath: "/images/staff1.png" },
  { imgPath: "/images/staff2.png" },
  { imgPath: "/images/staff3.png" },
  { imgPath: "/images/staff4.png" },
];

const featureLists = [
  "Freshly brewed coffee",
  "Handcrafted sandwiches",
  "Cozy & relaxing ambience",
  "Locally sourced ingredients",
];

const goodLists = [
  "Hygienic kitchen practices",
  "Freshly baked pastries",
  "Barista-specialty coffees",
  "Comfort food with a twist",
];

const storeInfo = {
  heading: "Visit Our Cafe",
  address: "789, Main Street, Springfield, IL 62704",
  contact: {
    phone: "(555) 123-4567",
    email: "hello@cafehaven.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "8:00am – 10:00pm" },
  { day: "Fri", time: "8:00am – 11:00pm" },
  { day: "Sat", time: "9:00am – 11:00pm" },
  { day: "Sun", time: "9:00am – 9:00pm" },
];

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const sliderLists = [
  {
    id: 1,
    name: "Caffe Latte",
    image: "/images/latte.png",
    title: "Smooth & Creamy",
    description: "Our signature latte, crafted with rich espresso and velvety steamed milk. A classic comfort cup for any time of day.",
  },
  {
    id: 2,
    name: "Grilled Panini",
    image: "/images/panini.png",
    title: "Hot, Crispy, Delicious",
    description: "Freshly grilled panini loaded with veggies, cheese, and signature sauces. Perfectly crisp and satisfying.",
  },
  {
    id: 3,
    name: "Berry Smoothie",
    image: "/images/smoothie.png",
    title: "Refreshing & Healthy",
    description: "A blend of fresh berries, yogurt, and honey. Packed with flavor and nutrients to energize your day.",
  },
  {
    id: 4,
    name: "Chocolate Muffin",
    image: "/images/muffin.png",
    title: "Soft & Decadent",
    description: "Baked daily, our chocolate muffins are rich, fluffy, and loaded with chunks of premium dark chocolate.",
  },
];

export {
  navLinks,
  foodLists,
  beverageLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
};
