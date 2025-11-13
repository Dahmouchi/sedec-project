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
    img: "scondinave.webp",
    price: "1.0 MMAD",
    visit: true,
    bg3d: "video-bg",
    maquette: "/optimized/maquette.webp",
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
        "/optimized/chalets/scandinave/1.webp",
        "/optimized/chalets/scandinave/2.webp",
        "/optimized/chalets/scandinave/3.webp",
        "/optimized/chalets/scandinave/4.webp",
        "/optimized/chalets/scandinave/5.webp",
        "/optimized/chalets/scandinave/6.webp",
        "/optimized/chalets/scandinave/7.webp",
      ],
      salon: [
        "/optimized/chalets/scandinave/s1.webp",
        "/optimized/chalets/scandinave/s2.webp",
        "/optimized/chalets/scandinave/s3.webp",
        "/optimized/chalets/scandinave/s4.webp",
        "/optimized/chalets/scandinave/s5.webp",
        "/optimized/chalets/scandinave/s6.webp",
      ],
      exterieure: [
        "/optimized/chalets/scandinave/e1.webp",
        "/optimized/chalets/scandinave/e2.webp",
        "/optimized/chalets/scandinave/e3.webp",
        "/optimized/chalets/scandinave/e4.webp",
        "/optimized/chalets/scandinave/e5.webp",
      ],
      reel: [
        "/optimized/chalets/scandinave/reel/atelier1.webp",
        "/optimized/chalets/scandinave/reel/atelier2.webp",
        "/optimized/chalets/scandinave/reel/atelier3.webp",
        "/optimized/chalets/scandinave/reel/atelier4.webp",
        "/optimized/chalets/scandinave/reel/atelier5.webp",
        "/optimized/chalets/scandinave/reel/atelier6.webp",
        "/optimized/chalets/scandinave/reel/atelier7.webp",
        "/optimized/chalets/scandinave/reel/atelier8.webp",
        "/optimized/chalets/scandinave/reel/atelier9.webp",
        "/optimized/chalets/scandinave/reel/atelier10.webp",
        "/optimized/chalets/scandinave/reel/atelier11.webp",
        "/optimized/chalets/scandinave/reel/atelier12.webp",
        "/optimized/chalets/scandinave/reel/atelier13.webp",
        "/optimized/chalets/scandinave/reel/atelier14.webp",
        "/optimized/chalets/scandinave/reel/atelier15.webp",
        "/optimized/chalets/scandinave/reel/atelier16.webp",
        "/optimized/chalets/scandinave/reel/atelier17.webp",
        "/optimized/chalets/scandinave/reel/atelier18.webp",
        "/optimized/chalets/scandinave/reel/atelier19.webp",
        "/optimized/chalets/scandinave/reel/atelier20.webp",
        "/optimized/chalets/scandinave/reel/atelier21.webp",
        "/optimized/chalets/scandinave/reel/atelier22.webp",
        "/optimized/chalets/scandinave/reel/atelier23.webp",
        "/optimized/chalets/scandinave/reel/atelier24.webp",
        "/optimized/chalets/scandinave/reel/atelier25.webp",
        "/optimized/chalets/scandinave/reel/atelier26.webp",
      ],
    },
  },
  {
    id: 2,
    maquette: "/optimized/maquette.webp",
    title: "Villa Toubkal",
    price: "1.0 MMAD",
    pdf: "/Villa-Toubkal-Brochure.pdf",
    bg3d: "video-bg1",
    hero: "banner-area-fivetoubkal banner-bg-fourtoubkal",
    img: "villa2.webp",
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
        "/optimized/chalets/toubkal/c5.webp",
        "/optimized/chalets/toubkal/c6.webp",
        "/optimized/chalets/toubkal/c8.webp",
        "/optimized/chalets/toubkal/c9.webp",
        "/optimized/chalets/toubkal/c10.webp",
        "/optimized/chalets/toubkal/c7.webp",
      ],
      salon: [
        "/optimized/chalets/toubkal/s1.webp",
        "/optimized/chalets/toubkal/s2.webp",
        "/optimized/chalets/toubkal/s3.webp",
        "/optimized/chalets/toubkal/s4.webp",
      ],
      exterieure: [
        "/optimized/chalets/scandinave/e1.webp",
        "/optimized/chalets/scandinave/e2.webp",
        "/optimized/chalets/scandinave/e3.webp",
        "/optimized/chalets/scandinave/e4.webp",
        "/optimized/chalets/scandinave/e5.webp",
      ],
    },
  },
  {
    id: 3,
    title: "Villa M&M",
    img: "10.webp",
    status: "Complete",
    visit: false,
    bg3d: "video-bg2",
    maquette: "/optimized/maquette.webp",
    pdf: "/Villa-M&M-Brochure.pdf",
    hero: "banner-area-fiveM banner-bg-fourM",
    type: "Villa",
    price: "0.8 MMAD",
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
      chambres: ["/optimized/chalets/mm/c7.webp", "/optimized/chalets/mm/c8.webp"],
      salon: [
        "/optimized/chalets/mm/s1.webp",
        "/optimized/chalets/mm/s2.webp",
        "/optimized/chalets/mm/s3.webp",
        "/optimized/chalets/mm/s4.webp",
        "/optimized/chalets/mm/s5.webp",
        "/optimized/chalets/mm/s6.webp",
      ],
      exterieure: [
        "/optimized/chalets/mm/e9.webp",
        "/optimized/chalets/mm/e10.webp",
        "/optimized/chalets/mm/e11.webp",
        "/optimized/chalets/mm/e12.webp",
        "/optimized/chalets/mm/e13.webp",
        "/optimized/chalets/mm/e14.webp",
        "/optimized/chalets/mm/e14.webp",
      ],
    },
  },
  {
    id: 4,
    title: "Villa Moroccan Touch",
    visit: false,
    img: "3.webp",
    status: "Complete",
    bg3d: "video-bg3",
    maquette: "/optimized/maquette.webp",
    pdf: "/Villa-MOROCCAN-TOUCH-Brochure.pdf",
    type: "Villa",
    subtitle: "Un espace luxueux empreint de l’essence du design marocain",
    hero: "banner-area-fivemorocco banner-bg-fourmorocco",
    price: "0.8 MMAD",
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
        "/optimized/chalets/marroc/c6.webp",
        "/optimized/chalets/marroc/c7.webp",
        "/optimized/chalets/marroc/c8.webp",
        "/optimized/chalets/marroc/c9.webp",
      ],
      salon: [
        "/optimized/chalets/marroc/s1.webp",
        "/optimized/chalets/marroc/s2.webp",
        "/optimized/chalets/marroc/s3.webp",
        "/optimized/chalets/marroc/s4.webp",
        "/optimized/chalets/marroc/s5.webp",
      ],
      exterieure: [
        "/optimized/chalets/mm/e9.webp",
        "/optimized/chalets/mm/e10.webp",
        "/optimized/chalets/mm/e11.webp",
        "/optimized/chalets/mm/e12.webp",
        "/optimized/chalets/mm/e13.webp",
      ],
    },
  },
];
