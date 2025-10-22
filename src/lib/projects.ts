// data/chalets.ts

import {
  Sun,
  Hammer,
  Ruler,
  BedDouble,
  Bath,
  Car,
} from "lucide-react";

export const chalets = [
  {
    id: 1,
    title: "Chalet SCANDINAVE",
    img: "scondinave.jpg",
    status: "Under Construction",
    type: "Chalet",
    location: "Un refuge chaleureux, inspiré par la simplicité et l’élégance nordiques",
    description:
      "Nichée au cœur d’un paysage naturel apaisant, la métamorphose de ce chalet incarne une vision contemporaine du refuge scandinave. Chaque espace a été pensé comme une invitation à la quiétude, où la lumière naturelle sculpte les volumes et met en valeur la beauté des matériaux bruts. Le bois clair, le terrazzo et les fibres naturelles s’unissent pour créer une atmosphère chaleureuse, minimaliste et intemporelle. Plus qu’un simple lieu de vie, ce chalet devient une expérience sensorielle, un équilibre parfait entre confort moderne, authenticité et connexion à la nature environnante.",
    features: [
      {
        icon: Sun,
        title: "Lumière & Espace",
        detail:
          "La lumière naturelle sculpte les volumes et efface les frontières entre intérieur et paysage. Les larges ouvertures et la douceur des tons créent une atmosphère fluide, spacieuse et apaisante.",
      },
      {
        icon: Hammer,
        title: "Matière & Authenticité",
        detail:
          "Une sélection minutieuse de matériaux nobles et bruts. Le bois clair, le terrazzo et les fibres naturelles s’unissent dans un dialogue harmonieux, offrant un équilibre entre élégance, chaleur et authenticité.",
      },
    ],
     gallery: {
      chambres: [
        "/images/chalets/scandinave/1.jpg",
        "/images/chalets/scandinave/2.jpg",
        "/images/chalets/scandinave/3.jpg",
        "/images/chalets/scandinave/4.jpg",
        "/images/chalets/scandinave/5.jpg",
        "/images/chalets/scandinave/6.jpg",
        "/images/chalets/scandinave/7.jpg",
      ],
      salon: [
        "/images/chalets/scandinave/s1.jpg",
         "/images/chalets/scandinave/s2.jpg",
          "/images/chalets/scandinave/s3.jpg",
           "/images/chalets/scandinave/s4.jpg",
            "/images/chalets/scandinave/s5.jpg",
             "/images/chalets/scandinave/s6.jpg",
      ],
      exterieure: [
        "/images/chalets/scandinave/e1.jpg",
         "/images/chalets/scandinave/e2.jpg",
          "/images/chalets/scandinave/e3.jpg",
           "/images/chalets/scandinave/e4.jpg",
            "/images/chalets/scandinave/e5.jpg",
      ],
    },
  },
  {
    id: 2,
    title: "Chalet Toubkal",
    img: "chalet2.jpg",
    status: "Under Construction",
    type: "Chalet",
    location:
      "A mountain escape blending modern comfort with natural charm.",
  },
  {
    id: 3,
    title: "Chalet M&M (modern & minimal)",
    img: "10.jpg",
    status: "Complete",
    type: "Chalet",
    location:
      "A stylish haven that combines minimalism and elegance.",
  },
  {
    id: 4,
    title: "Chalet Moroccan Touch",
    img: "3.jpg",
    status: "Complete",
    type: "Chalet",
    location:
      "A luxurious space infused with Moroccan-inspired design.",
  },
];
