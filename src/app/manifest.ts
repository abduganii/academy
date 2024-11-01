import {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Piyola Market - Tez, Oson, Qulay va Arzon Xaridlar",
    short_name: "Piyola Market",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "uz",
    description: "Piyola Market - So'nggi gadgetlarni qulay narxlarda bo'lib to'lash orqali oling! Tez va oson xarid qilishingiz uchun maxsus takliflar.",
    icons: [
      {
        src: '/',
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: '/',
        sizes: "512x512",
        type: "image/svg+xml",
      },
      {
        src: '/',
        sizes: "384x384",
        type: "image/svg+xml",
      },
    ],
    related_applications: [
      {
        platform: "web",
        url: "https://piyolamarket.uz",
      },
    ],
    prefer_related_applications: false,
    categories: ["shopping", "gadgets", "electronics"],
    orientation: "portrait-primary",
    dir: "ltr",
    shortcuts: [
      {
        name: "Eng Yangi Mahsulotlar",
        url: "/new",
        icons: [{src: '/', sizes: "192x192", type: "image/svg+xml"}],
      },
      {
        name: "Maxsus Takliflar",
        url: "/special-offers",
        icons: [{src: '/', sizes: "192x192", type: "image/svg+xml"}],
      },
    ],
  };
}
