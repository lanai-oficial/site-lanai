import firstLanai from "../../docs/IMG_7920_Original.jpeg";
import founderCelina from "../../docs/IMG_1556.jpeg";

export const lanaiImages = {
  facade: "/images/lanai/50dc553e-35bc-452b-bbb9-1946f71b8118_Original.jpeg",
  facadeWide: "/images/lanai/Facetune_03-01-2024-13-11-53_Original.jpeg",
  facadeNight: "/images/lanai/1470043d-5ccd-4441-87da-d2c9a25605ff.JPG",
  reception: "/images/lanai/Imagem 013_Original.jpeg",
  salon: "/images/lanai/IMG_8109.jpeg",
  spa: "/images/lanai/IMG_7184_jpg_Original.jpeg",
  treatmentRoom: "/images/lanai/IMG_0803_Original.jpeg",
  receptionWide: "/images/lanai/IMG_0824_Original.jpeg",
  exterior: "/images/lanai/IMG_2994.jpeg",
  firstLanai,
  founderCelina,
} as const;

export const universeImages = {
  "salao-de-beleza": lanaiImages.salon,
  estetica: lanaiImages.reception,
  spa: lanaiImages.spa,
} as const;

export const homeImages = {
  hero: lanaiImages.facadeWide,
  services: lanaiImages.receptionWide,
  universes: {
    "salao-de-beleza": lanaiImages.salon,
    estetica: lanaiImages.facade,
    spa: lanaiImages.spa,
  },
} as const;
