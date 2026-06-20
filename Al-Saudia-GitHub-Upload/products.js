const products = [
  {
    id: "flagship-phone",
    name: "Premium Flagship Smartphone",
    category: "Mobiles",
    tag: "Smartphones & Mobile Tech",
    image: "images/flagship-smartphone.jpg",
    position: "center",
    description: "Flagship camera hardware, sharp display quality, and a premium hand feel for daily performance.",
    featured: true
  },
  {
    id: "foldable-display",
    name: "Apple Device Ecosystem",
    category: "Mobiles",
    tag: "Smartphones & Mobile Tech",
    image: "images/tech-ecosystem.jpg",
    position: "58% center",
    description: "A clean mobile setup featuring phones, smart wearables, tablets, and everyday tech essentials.",
    featured: false
  },
  {
    id: "store-phone-cases",
    name: "Premium Phone Cases",
    category: "Mobiles",
    tag: "Protection & Styling",
    image: "images/store-phone-cases.png",
    position: "center 48%",
    description: "Colorful protective back covers and camera-guard cases for daily phone protection.",
    featured: true
  },
  {
    id: "mechanical-chrono",
    name: "Mechanical Precision Chronograph",
    category: "Watches",
    tag: "Luxury & Smart Timepieces",
    image: "images/mechanical-chronograph.png",
    position: "64% center",
    description: "Intricate skeleton-inspired detailing with a luxury chronograph presentation.",
    featured: true
  },
  {
    id: "smart-sports-watch",
    name: "Advanced Smart Sports Watch",
    category: "Watches",
    tag: "Luxury & Smart Timepieces",
    image: "images/watch-display.jpg",
    position: "center",
    description: "A clean daily smartwatch option with fitness tracking and sharp modern styling.",
    featured: false
  },
  {
    id: "emerald-diver",
    name: "Emerald Diver Automatic",
    category: "Watches",
    tag: "Luxury & Smart Timepieces",
    image: "images/luxury-watches.jpg",
    position: "center",
    description: "A bold display-ready watch selection for customers who prefer standout wristwear.",
    featured: false
  },
  {
    id: "steel-watch-collection",
    name: "Steel Chronograph Collection",
    category: "Watches",
    tag: "Men's Watches",
    image: "images/steel-watch-collection.webp",
    position: "center 48%",
    description: "A polished lineup of metal bracelet watches with black, silver, and chronograph faces.",
    featured: true
  },
  {
    id: "mens-luxury-watches",
    name: "Iconic Men's Luxury Watches",
    category: "Watches",
    tag: "Men's Watches",
    image: "images/mens-luxury-watches.jpg",
    position: "center 50%",
    description: "Premium dress-watch styling with refined steel, gold, and deep dial finishes.",
    featured: false
  },
  {
    id: "black-red-skeleton-watch",
    name: "Black Red Skeleton Watch",
    category: "Watches",
    tag: "Statement Watches",
    image: "images/black-red-skeleton-watch.jpg",
    position: "center",
    description: "A dramatic black watch with red accents and a bold skeleton-inspired dial.",
    featured: false
  },
  {
    id: "black-chronograph-watch",
    name: "Black Chronograph Watch",
    category: "Watches",
    tag: "Statement Watches",
    image: "images/black-chronograph-watch.jpg",
    position: "center",
    description: "Classic black chronograph styling with a polished bracelet and sporty dial details.",
    featured: false
  },
  {
    id: "blue-gold-watch",
    name: "Blue & Gold Elegance Watch",
    category: "Watches",
    tag: "Dress Watches",
    image: "images/blue-gold-watch.jpg",
    position: "center",
    description: "A refined blue dial with gold-tone accents for a premium dress-watch feel.",
    featured: false
  },
  {
    id: "ladies-rectangle-watch",
    name: "Rectangle Ladies Watch Set",
    category: "Watches",
    tag: "Ladies Watches",
    image: "images/ladies-rectangle-watch.jpg",
    position: "center",
    description: "A black and gold watch set paired with bracelet styling for gifting and daily wear.",
    featured: false
  },
  {
    id: "classy-ladies-watch",
    name: "Classy Black Ladies Watches",
    category: "Watches",
    tag: "Ladies Watches",
    image: "images/classy-black-ladies-watch.jpg",
    position: "center 45%",
    description: "Glossy black straps with jewel-like gold detailing and clean dress styling.",
    featured: false
  },
  {
    id: "watch-roll-collection",
    name: "Collector Watch Roll",
    category: "Watches",
    tag: "Watch Collection",
    image: "images/watch-roll-collection.jpg",
    position: "center 48%",
    description: "A collection-style watch display for customers comparing multiple premium looks.",
    featured: false
  },
  {
    id: "store-classic-watches",
    name: "Classic Store Watch Range",
    category: "Watches",
    tag: "In-Store Watches",
    image: "images/store-classic-watches.png",
    position: "center 48%",
    description: "Classic boxed watches from the store display with multiple dial colors available.",
    featured: false
  },
  {
    id: "store-boxed-watches",
    name: "Boxed Vitz Watch Selection",
    category: "Watches",
    tag: "In-Store Watches",
    image: "images/store-boxed-watches.png",
    position: "center 52%",
    description: "Ready-to-sell boxed watch options arranged for quick customer selection.",
    featured: false
  },
  {
    id: "store-brown-watch",
    name: "Brown Strap Minimal Watch",
    category: "Watches",
    tag: "Casual Watches",
    image: "images/store-brown-watch.png",
    position: "center",
    description: "A simple leather-strap watch with a clean black dial for everyday wear.",
    featured: false
  },
  {
    id: "airpods-pro-earbuds",
    name: "AirPods Style Wireless Earbuds",
    category: "Accessories",
    tag: "Audio Accessories",
    image: "images/airpods-pro-earbuds.jpg",
    position: "center 54%",
    description: "Compact white earbuds for calls, music, and daily wireless listening.",
    featured: true
  },
  {
    id: "a7-pro-earbuds",
    name: "A7 Pro Wireless Earbuds",
    category: "Accessories",
    tag: "Audio Accessories",
    image: "images/a7-pro-earbuds.jpg",
    position: "center",
    description: "Black wireless earbuds with a compact charging case and low-profile styling.",
    featured: false
  },
  {
    id: "jbl-headphones",
    name: "Wireless Over-Ear Headphones",
    category: "Accessories",
    tag: "Audio Accessories",
    image: "images/jbl-headphones.jpg",
    position: "center",
    description: "Comfort-focused wireless headphones for music, video, and long listening sessions.",
    featured: false
  },
  {
    id: "partybox-speaker",
    name: "Partybox Bluetooth Speaker",
    category: "Accessories",
    tag: "Speakers",
    image: "images/partybox-speaker.jpg",
    position: "center 48%",
    description: "Large party speaker styling with bright lighting and bold portable sound appeal.",
    featured: false
  },
  {
    id: "mini-bluetooth-speaker",
    name: "Dragon Mini Bluetooth Speaker",
    category: "Accessories",
    tag: "Speakers",
    image: "images/mini-bluetooth-speaker.jpg",
    position: "center",
    description: "Small glossy speaker for portable sound and desk-friendly use.",
    featured: false
  },
  {
    id: "jbl-flip-speaker",
    name: "Portable Cylinder Speaker",
    category: "Accessories",
    tag: "Speakers",
    image: "images/jbl-flip-speaker.webp",
    position: "center 47%",
    description: "Rugged cylinder-style speaker designed for compact portable listening.",
    featured: false
  },
  {
    id: "power-bank-20000",
    name: "Digital Display Power Bank",
    category: "Accessories",
    tag: "Power & Charging",
    image: "images/power-bank-20000.jpg",
    position: "center",
    description: "High-capacity portable power bank with a clear digital battery display.",
    featured: true
  },
  {
    id: "portable-charger-cables",
    name: "Portable Charger With Built-In Cable",
    category: "Accessories",
    tag: "Power & Charging",
    image: "images/portable-charger-cables.jpg",
    position: "center",
    description: "Slim portable charger with built-in cable convenience for travel and daily carry.",
    featured: false
  },
  {
    id: "store-power-bank",
    name: "In-Store Power Bank Range",
    category: "Accessories",
    tag: "Power & Charging",
    image: "images/store-power-bank.png",
    position: "center 50%",
    description: "Power bank stock shown inside the store with fast-charging options available.",
    featured: false
  },
  {
    id: "dual-port-charger",
    name: "Dual Port Fast Charger Kit",
    category: "Accessories",
    tag: "Cables & Chargers",
    image: "images/dual-port-charger.jpg",
    position: "center",
    description: "Dual-port adapter and charging cable kit for fast everyday device charging.",
    featured: false
  },
  {
    id: "multi-charging-cable",
    name: "3-in-1 Multi Charging Cable",
    category: "Accessories",
    tag: "Cables & Chargers",
    image: "images/multi-charging-cable.jpg",
    position: "center 45%",
    description: "Multi-connector charging cable for phones, watches, and everyday tech setups.",
    featured: false
  },
  {
    id: "ugreen-micro-usb-cable",
    name: "Braided Micro USB Cable",
    category: "Accessories",
    tag: "Cables & Chargers",
    image: "images/ugreen-micro-usb-cable.jpg",
    position: "center 48%",
    description: "Braided cable design with strong connector protection for daily charging.",
    featured: false
  },
  {
    id: "store-wireless-headphone",
    name: "P47 Wireless Headphone",
    category: "Accessories",
    tag: "In-Store Audio",
    image: "images/store-wireless-headphone.png",
    position: "center 50%",
    description: "Wireless headphone stock shown in-store for music, calls, and casual listening.",
    featured: false
  },
  {
    id: "audio-gear",
    name: "High-Fidelity Audio & Gear",
    category: "Accessories",
    tag: "Mobile Accessories",
    image: "images/tech-accessories.jpg",
    position: "center 34%",
    description: "Wireless audio, compact chargers, power banks, and everyday mobile essentials.",
    featured: false
  }
];
