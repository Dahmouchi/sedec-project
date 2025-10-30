// data/chalets.ts

import {
  Sun,
  Hammer,
  ToolCase,
  Apple,
  Brush,
  Heater,
  ThermometerSun,
  Grid,
  Droplet,
  Layers,
  Mountain,
  Palette,
  Ruler,
  Flame,
  Globe,
} from "lucide-react";

export const chalets = [
  {
    id: 1,
    title: "Villa SCANDINAVIAN",
    img: "scondinave.jpg",
    price: "1.3M MAD",
    visit: true,
    bg3d: "video-bg",
    maquette: "/images/maquette.png",
    status: "Under Construction",
    type: "Villa",
    hero: "banner-area-five1 banner-bg-four1",
    pdf: "/Villa-Scandinavian-Brochure.pdf",
    subtitle:
      "Redéfinir l'art de vivre nordique entre authenticité et modernité",
    location:
      "Un refuge chaleureux, inspiré par la simplicité et l’élégance nordiques",
    description:
      "Nichée au cœur d’un paysage naturel apaisant, la métamorphose de cette villa incarne une vision contemporaine du refuge scandinave. Chaque espace a été pensé comme une invitation à la quiétude, où la lumière naturelle sculpte les volumes et met en valeur la beauté des matériaux bruts. Le bois clair, le terrazzo et les fibres naturelles s’unissent pour créer une atmosphère chaleureuse, minimaliste et intemporelle. Plus qu’un simple lieu de vie, cette villa devient une expérience sensorielle, un équilibre parfait entre confort moderne, authenticité et connexion à la nature environnante.",
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
    maquette: "/images/maquette.png",
    title: "Villa Toubkal",
    price: "1.2M MAD",
    pdf: "/Villa-Toubkal-Brochure.pdf",
    bg3d: "video-bg1",
    hero: "banner-area-fivetoubkal banner-bg-fourtoubkal",
    img: "villa2.jpg",
    status: "Under Construction",
    visit: false,
    type: "Villa",
    subtitle: "Un refuge montagnard alliant confort moderne et charme naturel",
    location:
      "Une échappée en montagne qui mêle confort contemporain et charme naturel.",
    description:
      "Villa Toubkal s’inspire d’un art de vivre en symbiose avec la nature, où la richesse des matières brutes et la sobriété des formes se conjuguent pour créer un intérieur chaleureux, intemporel et profondément ancré dans son environnement.",
    features: [
  {
    icon: Mountain,
    title: "Matériaux bruts",
    detail:
      "Le bois massif et la pierre naturelle dominent, utilisés pour les sols, les revêtements et le mobilier. Ces matières intemporelles confèrent caractère, authenticité et durabilité à chaque espace.",
  },
  {
    icon: Palette,
    title: "Palette organique",
    detail:
      "Des tons terre — sable, ocre, brun et gris pierre — ponctués de touches vert olive et terracotta évoquent la nature environnante et insufflent une harmonie apaisante.",
  },
  {
    icon: Ruler,
    title: "Lignes sobres et artisanales",
    detail:
      "Le mobilier se distingue par des formes simples et fonctionnelles, sublimées par des finitions artisanales qui célèbrent le savoir-faire et la beauté du geste manuel.",
  },
  {
    icon: Flame,
    title: "Confort & chaleur",
    detail:
      "Textiles en lin, coton brut, laine et jute s’associent à des luminaires en verre soufflé pour créer une atmosphère douce, réconfortante et enveloppante.",
  },
],

    gallery: {
      chambres: [
        "/images/chalets/toubkal/c5.jpg",
        "/images/chalets/toubkal/c6.jpg",
        "/images/chalets/toubkal/c8.jpg",
        "/images/chalets/toubkal/c9.jpg",
        "/images/chalets/toubkal/c10.jpg",
        "/images/chalets/toubkal/c7.jpg",
      ],
      salon: [
        "/images/chalets/toubkal/s1.jpg", 
        "/images/chalets/toubkal/s2.jpg", "/images/chalets/toubkal/s3.jpg", "/images/chalets/toubkal/s4.jpg"],
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
    id: 3,
    title: "Villa M&M (modern & minimal)",
    img: "10.jpg",
    status: "Complete",
    visit: false,
    bg3d: "video-bg2",
    maquette: "/images/maquette.png",
    pdf: "/Villa-M&M-Brochure.pdf",
    hero: "banner-area-fiveM banner-bg-fourM",
    type: "Villa",
    price: "1.4M MAD",
   subtitle:
  "Un havre de style alliant minimalisme pur et élégance sophistiquée.",
location:
  "Un espace raffiné où moins, c’est plus — conçu pour offrir sérénité et style.",
description:
  "Cette villa moderne et minimaliste met l’accent sur des lignes épurées, une lumière naturelle abondante et une palette neutre pour créer un environnement élégant et apaisant. Son design épuré favorise un mode de vie réfléchi et confortable.",
features: [
      {
        icon: Layers,
        title: "Matériaux purs",
        detail:
          "Béton ciré, verre, acier noir mat et bois clair lisse composent une palette sobre, raffinée et intemporelle. Ces matières nobles créent un équilibre entre robustesse et élégance contemporaine.",
      },
      {
        icon: Droplet,
        title: "Palette monochrome",
        detail:
          "Dominée par le blanc, le gris et le noir, la palette est réchauffée par des touches de bois naturel. Ce contraste subtil instaure une atmosphère apaisante et chic.",
      },
      {
        icon: Grid,
        title: "Lignes épurées",
        detail:
          "Mobilier intégré, formes géométriques simples et absence d’ornementation confèrent à l’espace une fluidité visuelle et une fonctionnalité sans superflu.",
      },
      {
        icon: ThermometerSun,
        title: "Confort & modernité",
        detail:
          "Larges baies vitrées ouvertes sur le paysage, éclairage indirect minimaliste et organisation claire offrent un confort visuel optimisé. Les textures naturelles – lin, coton brut, laine et jute – apportent une touche douce et accueillante.",
      },
    ],

    gallery: {
      chambres: [
        "/images/chalets/mm/c7.jpg",
        "/images/chalets/mm/c8.jpg",
      ],
      salon: [
        "/images/chalets/mm/s1.jpg", 
        "/images/chalets/mm/s2.jpg",
        "/images/chalets/mm/s3.jpg",
        "/images/chalets/mm/s4.jpg",
        "/images/chalets/mm/s5.jpg",
        "/images/chalets/mm/s6.jpg"
         
      ],
      exterieure: [
        "/images/chalets/mm/e9.jpg",
        "/images/chalets/mm/e10.jpg",
        "/images/chalets/mm/e11.jpg",
        "/images/chalets/mm/e12.jpg",
        "/images/chalets/mm/e13.jpg",
        "/images/chalets/mm/e14.jpg",
        "/images/chalets/mm/e14.jpg",
      ],
    },
  },
  {
    id: 4,
    title: "Villa Moroccan Touch",
    visit: false,
    img: "3.jpg",
    status: "Complete",
    bg3d: "video-bg3",
    maquette: "/images/maquette.png",
    pdf: "/Villa-MOROCCAN-TOUCH-Brochure.pdf",
    type: "Villa",
    subtitle: "Un espace luxueux empreint de l’essence du design marocain",
    hero: "banner-area-fivemorocco banner-bg-fourmorocco",
    price: "1.5M MAD",
    location:
      "Un lieu où le raffinement rencontre la riche tradition marocaine par des détails artisanaux et des couleurs chaleureuses.",
    description:
      "Cette villa incarne le luxe et l’authenticité marocaine à travers l’usage de motifs géométriques, de mosaïques colorées, et d’un mobilier artisanal. Chaque pièce transporte ses visiteurs dans une ambiance orientale élégante et accueillante.",
   features: [
  {
    icon: Layers,
    title: "Matériaux identitaires",
    detail:
      "Bois massif naturel, pierre locale, zellige artisanal, enduits à la chaux ou tadelakt, ferronnerie et laiton brossé composent une matière riche et authentique, reflet du savoir-faire marocain.",
  },
  {
    icon: Palette,
    title: "Palette chaleureuse",
    detail:
      "Des teintes terreuses — sable, ocre, terracotta, blanc cassé — s’harmonisent avec des accents emblématiques du Maroc tels que le bleu cobalt et le vert émeraude, créant une ambiance vibrante et chaleureuse.",
  },

  {
    icon: Flame,
    title: "Confort & chaleur",
    detail:
      "Tapis berbères, poufs en cuir, textiles en laine et lin évoquent une atmosphère douce et accueillante. Chaque détail souligne une connexion intime à la culture marocaine et à l’artisanat local.",
  },
  {
    icon: Globe,
    title: "Connexion à la culture locale",
    detail:
      "Éléments marocains subtilement intégrés, inspirés des traditions locales, ancrent le projet dans son territoire tout en préservant une esthétique contemporaine.",
  },
],

    gallery: {
      chambres: [
        "/images/chalets/marroc/c6.jpg",
        "/images/chalets/marroc/c7.jpg",
        "/images/chalets/marroc/c8.jpg",
        "/images/chalets/marroc/c9.jpg",
      ],
      salon: [
        "/images/chalets/marroc/s1.jpg",
        "/images/chalets/marroc/s2.jpg",
        "/images/chalets/marroc/s3.jpg",
        "/images/chalets/marroc/s4.jpg",
        "/images/chalets/marroc/s5.jpg",
      ],
      exterieure: [
        "/images/chalets/mm/e9.jpg",
        "/images/chalets/mm/e10.jpg",
        "/images/chalets/mm/e11.jpg",
        "/images/chalets/mm/e12.jpg",
        "/images/chalets/mm/e13.jpg",
        
      ],
    },
  },
];
