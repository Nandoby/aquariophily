import { LinksProps } from "@/types/links-props";

export const AquariumLinks: LinksProps[] = [
  {
    title: "Aquarium",
    url: "/aquariums/aquarium/les-aquariums",
  },
  {
    url: "#",
    subLinks: [
      {
        firstTitle: "Cuve",
        links: [
          {
            title: "Matériaux",
            url: "/aquariums/cuve/la-cuve",
          },
          {
            title: "Dimensions",
            url: "/aquariums/cuve/dimensions-cuve",
          },
          {
            title: "Maintenance",
            url: "/aquariums/cuve/entretien-cuve",
          },
          {
            title: "Réparation",
            url: "/aquariums/cuve/reparation-cuve",
          },
          {
            title: "Réalisation",
            url: "/aquariums/cuve/realisation-cuve",
          },
          {
            title: "Q/R",
            url: "/aquariums/cuve/qr-cuve",
          },
        ],
      },
      {
        firstTitle: "Eclairage",
        links: [
          {
            title: "Lumière",
            url: "/aquariums/eclairage/lumiere",
          },
          {
            title: "Système d'éclairage",
            url: "/aquariums/eclairage/objectif-eclairage",
          },
          {
            subLinks: [
              {
                firstTitle: "Energie lumineuse",
                links: [
                  {
                    title: "Puissance et flux",
                    url: "/aquariums/eclairage/puissance-flux",
                  },
                  {
                    title: "Spectre lumineux",
                    url: "/aquariums/eclairage/spectre-lumineux",
                  },
                  {
                    title: "Durée de vie",
                    url: "/aquariums/eclairage/duree-vie-eclairage",
                  },
                ],
              },
              {
                firstTitle: "Sources",
                links: [
                  {
                    title: "Les différentes sources",
                    url: "/aquariums/eclairage/les-sources-lumineuses",
                  },
                  {
                    title: "Fluorescence",
                    url: "/aquariums/eclairage/tubes-fluo",
                  },
                  {
                    title: "LED",
                    url: "/aquariums/eclairage/led",
                  },
                  {
                    title: "Décharge",
                    url: "/aquariums/eclairage/lampes-decharge",
                  },
                ],
              },
            ],
          },
          {
            title: "Accessoires",
            url: "/aquariums/eclairage/accessoires-eclairage",
          },
          {
            title: "Maintenance",
            url: "/aquariums/eclairage/maintenance-eclairage",
          },
        ],
      },
    ],
  },
];
