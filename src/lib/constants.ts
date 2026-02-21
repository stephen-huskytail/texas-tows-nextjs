// Texas Tows Inc. — Business Constants
// CRITICAL: These values must be used with 100% consistency across the entire site.

export const BUSINESS = {
  name: "Texas Tows Inc.",
  fullName: "Texas Tows Inc. — Dallas Towing Service",
  phone: "(817) 512-1024",
  phoneTel: "+18175121024",
  phoneHref: "tel:+18175121024",
  email: "info@texastows.com",
  address: {
    street: "4245 N Central Expy #490",
    city: "Dallas",
    state: "TX",
    zip: "75205",
    full: "4245 N Central Expy #490, Dallas, TX 75205",
  },
  hours: "24/7 — 365 Days a Year",
  hoursShort: "24/7",
  rating: "4.9",
  reviewCount: "309",
  founded: "2015",
  tdlr: "0654316VSF",
  social: {
    facebook: "https://www.facebook.com/texastowsinc",
    instagram: "https://www.instagram.com/texas_tows/",
    youtube: "https://www.youtube.com/@texastowsinc.2940",
    tiktok: "https://www.tiktok.com/@texastowsinc",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-96.7837!3d32.8337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4245+N+Central+Expy+%23490%2C+Dallas%2C+TX+75205!5e0!3m2!1sen!2sus!4v1",
  googleReviewUrl: "https://g.page/r/CVfoRkTrDgAgEAE/review",
  googleReviewQr:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/CIqhhcbzZnScCnXB.png",
  siteUrl: "https://texastows.com",
};

export const PHOTOS = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/qLSKikeSJgsSPTeo.webp",
  truckService:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/GLeltwhPDUIDZWPq.webp",
  truckNight:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/womtwbmLlOFpJfiJ.webp",
  vehicleTransport:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/spbyBBkZIryuyEtx.webp",
  truckAction:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/CSfQfgdfYgBmdHfF.webp",
  truckFlatbed:
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/qFrOVPMYrQLNRxfm.webp",
  truck3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/dFsRnIAGKoOMiCPq.webp",
  truck4: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/cuSdCqkmXzphFitd.webp",
  truck5: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/NqTwybshstmQrNFi.webp",
  truck6: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/ZUuzUnwjFrIkjQNa.webp",
  truck7: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/izOVYGYHRBCzaoep.webp",
  truck8: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/ZkivBpNVLbKJgjnG.webp",
  team: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/team-photo.webp",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/YsJDNiJcEXOIFtqz.png",
  // Blog featured images
  blog1: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/NqTwybshstmQrNFi.webp",
  blog2: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/qFrOVPMYrQLNRxfm.webp",
  blog3: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/cuSdCqkmXzphFitd.webp",
  blog4: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/ZUuzUnwjFrIkjQNa.webp",
  blog5: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/izOVYGYHRBCzaoep.webp",
  blog6: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663302699278/ZkivBpNVLbKJgjnG.webp",
};

export const SERVICES = [
  {
    id: "towing-service",
    name: "Towing Service",
    slug: "/services/towing-service",
    description: "Fast, reliable towing for all vehicle types — cars, trucks, motorcycles, and more.",
    icon: "Truck",
    image: PHOTOS.truckAction,
  },
  {
    id: "roadside-assistance",
    name: "Roadside Assistance",
    slug: "/services/roadside-assistance",
    description: "Jumpstarts, tire changes, fuel delivery, and lockout service — we come to you.",
    icon: "Wrench",
    image: PHOTOS.truck3,
  },
  {
    id: "vehicle-transport",
    name: "Vehicle Transport",
    slug: "/services/vehicle-transport",
    description: "Safe, enclosed vehicle transport for classic cars, luxury vehicles, and long-distance moves.",
    icon: "Car",
    image: PHOTOS.vehicleTransport,
  },
  {
    id: "junk-car-removal",
    name: "Junk Car Removal",
    slug: "/services/junk-car-removal",
    description: "Free tow-away service for junk, salvage, or non-running vehicles anywhere in Dallas.",
    icon: "Trash2",
    image: PHOTOS.truck4,
  },
  {
    id: "accident-recovery",
    name: "Accident Recovery",
    slug: "/services/accident-recovery",
    description: "Emergency accident scene towing and vehicle recovery — available 24/7.",
    icon: "AlertTriangle",
    image: PHOTOS.truck5,
  },
  {
    id: "winch-outs",
    name: "Winch Outs",
    slug: "/services/winch-outs",
    description: "Professional winch-out and vehicle recovery for stuck, off-road, or ditched vehicles.",
    icon: "Anchor",
    image: PHOTOS.truck6,
  },
  {
    id: "flatbed-towing",
    name: "Flatbed Towing",
    slug: "/services/flatbed-towing",
    description: "Flatbed towing for luxury, low-clearance, and all-wheel-drive vehicles — zero wheel contact.",
    icon: "Layers",
    image: PHOTOS.truckFlatbed,
  },
  {
    id: "stuck-in-garage-towing",
    name: "Stuck in Garage Towing",
    slug: "/services/stuck-in-garage-towing",
    description: "Specialized towing for vehicles stuck in garages, tight spaces, or underground parking.",
    icon: "Home",
    image: PHOTOS.truck7,
  },
  {
    id: "secondary-towing",
    name: "Secondary Towing",
    slug: "/services/secondary-towing",
    description: "Secondary towing when your vehicle needs to be moved a second time after initial tow.",
    icon: "RefreshCw",
    image: PHOTOS.truck8,
  },
  {
    id: "unattended-towing",
    name: "Unattended Towing",
    slug: "/services/unattended-towing",
    description: "Professional unattended vehicle towing for property managers and private lots.",
    icon: "ParkingCircle",
    image: PHOTOS.truckService,
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria G.",
    rating: 5,
    text: "Texas Tows was at my location within 20 minutes. The driver was professional, careful with my car, and the price was exactly what they quoted. I won't call anyone else.",
    date: "2025-12-15",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Got stranded on Central Expressway at midnight. Called Texas Tows and they were there in 25 minutes. Friendly driver, fair price, no surprises. Highly recommend.",
    date: "2025-11-28",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Used them for a junk car removal — they came same day, handled all the paperwork, and were incredibly professional. Made a stressful situation easy.",
    date: "2025-11-10",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Best towing experience I've had in Dallas. Fast response, the driver was knowledgeable, and they treated my BMW like it was their own vehicle. 5 stars all the way.",
    date: "2025-10-22",
  },
  {
    name: "Lisa K.",
    rating: 5,
    text: "I'm a teacher and they gave me the 15% discount without me even having to push for it. That kind of honesty is rare. Will always use Texas Tows.",
    date: "2025-10-05",
  },
  {
    name: "Carlos H.",
    rating: 5,
    text: "Called at 3am with a dead battery. They were there in 30 minutes and had me back on the road fast. Lifesavers. This is the only towing company I trust in Dallas.",
    date: "2025-09-18",
  },
  {
    name: "Amanda P.",
    rating: 5,
    text: "Needed a flatbed for my lowered car and they showed up with exactly the right equipment. No damage, no drama. Transparent pricing and great communication.",
    date: "2025-09-02",
  },
  {
    name: "Robert W.",
    rating: 5,
    text: "Got into an accident on 75 and Texas Tows was on scene before the police even cleared the road. Professional, fast, and compassionate. Exactly what you need in that moment.",
    date: "2025-08-14",
  },
];

// All 18 neighborhood area pages
export const AREA_PAGES = [
  // Primary 6
  { slug: "preston-hollow", name: "Preston Hollow", primary: true },
  { slug: "lake-highlands", name: "Lake Highlands", primary: true },
  { slug: "north-dallas", name: "North Dallas", primary: true },
  { slug: "lower-greenville", name: "Lower Greenville", primary: true },
  { slug: "medical-district", name: "Medical District", primary: true },
  { slug: "smu-university-park", name: "SMU / University Park", primary: true },
  // Additional 12
  { slug: "park-cities", name: "Park Cities", primary: false },
  { slug: "northeast-dallas", name: "Northeast Dallas", primary: false },
  { slug: "old-east-dallas", name: "Old East Dallas", primary: false },
  { slug: "casa-linda", name: "Casa Linda", primary: false },
  { slug: "forest-hills", name: "Forest Hills", primary: false },
  { slug: "white-rock", name: "White Rock", primary: false },
  { slug: "casa-view", name: "Casa View", primary: false },
  { slug: "highland-meadows", name: "Highland Meadows", primary: false },
  { slug: "melshire-estates", name: "Melshire Estates", primary: false },
  { slug: "russwood-acres", name: "Russwood Acres", primary: false },
  { slug: "bluffview", name: "Bluffview", primary: false },
  { slug: "perry-heights", name: "Perry Heights", primary: false },
];

// Blog posts data
export const BLOG_POSTS = [
  {
    slug: "what-to-do-when-your-car-breaks-down-in-dallas",
    title: "What to Do When Your Car Breaks Down in Dallas",
    excerpt:
      "Stranded on I-35 or Central Expressway? Here's the exact step-by-step guide to staying safe and getting help fast.",
    date: "2025-12-01",
    readTime: "6 min read",
    category: "Safety Tips",
    image: PHOTOS.blog1,
  },
  {
    slug: "flatbed-vs-wheel-lift-towing-which-is-right-for-your-vehicle",
    title: "Flatbed vs. Wheel-Lift Towing: Which Is Right for Your Vehicle?",
    excerpt:
      "Not all tow trucks are created equal. Learn which towing method protects your vehicle — and when it matters most.",
    date: "2025-11-15",
    readTime: "5 min read",
    category: "Towing Guide",
    image: PHOTOS.blog2,
  },
  {
    slug: "how-to-choose-a-towing-company-in-dallas",
    title: "How to Choose a Towing Company in Dallas (Without Getting Ripped Off)",
    excerpt:
      "Dallas has hundreds of towing companies. Here's exactly what to look for — and the red flags that should send you running.",
    date: "2025-11-01",
    readTime: "7 min read",
    category: "Consumer Guide",
    image: PHOTOS.blog3,
  },
  {
    slug: "dead-battery-in-dallas-what-to-do",
    title: "Dead Battery in Dallas? Here's Exactly What to Do",
    excerpt:
      "A dead battery is one of the most common roadside emergencies. Here's how to handle it safely — and when to call for help.",
    date: "2025-10-15",
    readTime: "5 min read",
    category: "Roadside Help",
    image: PHOTOS.blog4,
  },
  {
    slug: "your-rights-when-your-car-is-towed-in-texas",
    title: "Your Rights When Your Car Is Towed in Texas",
    excerpt:
      "Texas law gives you powerful rights when your vehicle is towed. Know them before you need them.",
    date: "2025-10-01",
    readTime: "8 min read",
    category: "Know Your Rights",
    image: PHOTOS.blog5,
  },
  {
    slug: "15-percent-discount-military-teachers-first-responders-dallas-towing",
    title: "15% Discount for Military, Teachers & First Responders — Dallas Towing",
    excerpt:
      "Texas Tows Inc. proudly offers a 15% discount to the people who serve our community. Here's how to claim it.",
    date: "2025-09-15",
    readTime: "3 min read",
    category: "Community",
    image: PHOTOS.blog6,
  },
];

export const SERVICE_AREAS = {
  core: [
    "Preston Hollow",
    "Lake Highlands",
    "North Dallas",
    "Lower Greenville",
    "Medical District",
    "SMU / University Park",
  ],
  additional: [
    "Park Cities",
    "Northeast Dallas",
    "Old East Dallas",
    "Casa Linda",
    "Forest Hills",
    "White Rock",
    "Casa View",
    "Highland Meadows",
    "Melshire Estates",
    "Russwood Acres",
    "Bluffview",
    "Perry Heights",
  ],
};
