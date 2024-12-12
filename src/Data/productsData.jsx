import {
  ps5Gamepad,
 
} from "src/Assets/Products/ProductImgs";
import { setAfterDiscountKey, setFormattedPrice } from "src/Functions/helper";
import { v4 as uuid } from "uuid";
import { bataringan, besi, canal, galvalum, gentengsoka } from "../Assets/Products/ProductImgs";

export const productsData = [
  {
    shortName: "Genteng Metal Pasir",
    name: "Genteng Metal Pasir",
    category: "genteng",
    price: 31000,
    discount: 40,
    description: `
    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
    for easy bubble free install & mess free removal Pressure sensitive.`,
    addedDate: "2024/2/2",
    img: ps5Gamepad,
    otherImages: [
      ps5Gamepad,
    ],
    colors: [
      {
        name: "ice red",
        color: "#B40404",
      },
    ],
    rate: 5,
    votes: 88,
    quantity: 1,
    sold: 105,
    id: uuid(),
  },

  {
    shortName: "Genteng Soka",
    name: "Genteng Soka",
    category: "genteng",
    price: 2200,
    discount: 35,
    description: `
    Elevate your gaming experience with the AK-900 Wired Keyboard. Designed for
    precision and durability, this keyboard boasts high responsiveness and tactile
    feedback. Its sleek design and customizable RGB lighting make it a stylish
    addition to any gaming setup. Whether you're gaming competitively or typing
    up reports, the AK-900 ensures peak performance with every keystroke.`,
    addedDate: "2024/2/7",
    img: gentengsoka,
    otherImages: [
      gentengsoka,
    ],
    colors: [
      {
        name: "merah",
        color: "#B40404",
      },
    ],
    rate: 4,
    votes: 75,
    quantity: 1,
    sold: 210,
    id: uuid(),
  },

  {
    shortName: "Bata Ringan",
    name: "Bata Ringan",
    category: "bata",
    price: 540000,
    discount: 30,
    description: `
    Immerse yourself in the world of gaming with the IPS LCD Gaming Monitor. Featuring
    stunning visuals and ultra-smooth gameplay, this monitor delivers an unparalleled
    gaming experience. With its high refresh rate and low input lag, you'll never miss
    a frame. Whether you're battling foes or exploring vast worlds, the IPS LCD Gaming
    Monitor brings every detail to life with vibrant colors and crisp clarity.`,
    addedDate: "2024/3/15",
    img: bataringan,
    otherImages: [
      bataringan,
    ],
    colors: [
      {
        name: "putih",
        color: "#ffffff",
      },
    ],
    rate: 5,
    quantity: 1,
    votes: 99,
    sold: 463,
    id: uuid(),
  },

  {
    shortName: "Besi",
    name: "Besi",
    category: "besi",
    price: 58000,
    discount: 25,
    description: `
    Experience comfort like never before with the S-Series Comfort Chair. Crafted with plush
    padding and ergonomic design, this chair provides exceptional support during long gaming
    sessions or work hours. Its sleek and modern aesthetic adds a touch of sophistication to any
    space. Say goodbye to discomfort and hello to relaxation with the S-Series Comfort Chair.`,
    addedDate: "2024/1/1",
    img: besi,
    otherImages: [
      besi,
    ],
    colors: [
      {
        name: "putih",
        color: "#ffffff",
      },
    ],
    rate: 4.5,
    votes: 99,
    quantity: 1,
    sold: 211,
    id: uuid(),
  },

  {
    shortName: "Canal",
    name: "Canal",
    category: "canal",
    price: 89.99,
    discount: 40,
    description: `
    Stay warm and stylish with The North Coat. Made from premium materials and expert craftsmanship,
    this coat is designed to withstand the elements while keeping you cozy. Its timeless design
    and versatile color make it a wardrobe essential for any season. Whether you're braving the
    outdoors or running errands in the city, The North Coat is sure to turn heads wherever you go.`,
    addedDate: "2024/3/7",
    img: canal,
    otherImages: [canal, ],
    colors: [
      {
        name: "putih",
        color: "#ffffff",
      },
    ],
    rate: 5,
    votes: 65,
    quantity: 1,
    sold: 1405,
    id: uuid(),
  },

  {
    shortName: "Galvalum",
    name: "Galvalum",
    category: "galvalum",
    price: 2980,
    discount: 10,
    description: `
    Make a statement with the Gucci Duffle Bag. Crafted from luxurious materials and adorned with iconic
    branding, this bag exudes sophistication and style. With its spacious interior and multiple
    compartments, it's perfect for storing all your essentials in organized fashion. Whether you're
    traveling in first-class or hitting the gym, the Gucci Duffle Bag is the epitome of luxury and functionality.`,
    addedDate: "2022/9/15",
    img: galvalum,
    otherImages: [galvalum, ],
    colors: [
      {
        name: "Putih",
        color: "#ffffff",
      },
    ],
    rate: 3.5,
    votes: 159,
    quantity: 1,
    sold: 1533,
    id: uuid(),
  },
];

productsData.forEach((product) => {
  setAfterDiscountKey(product);
  setFormattedPrice(product);
});
