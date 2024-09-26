import { LinksProps } from "@/types/links-props";

export const AquariumLinks: LinksProps[] = [
  {
    title: "Aquarium",
    url: "/aquariums/aquarium/les-aquariums",
  },
  {
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
            url: "/aquariums/cuve/dimensions-cuve"
          },
          {
            title: "Maintenance",
            url: "/aquariums/cuve/entretien-cuve"
          },
          {
            title: "Réparation",
            url: "/aquariums/cuve/reparation-cuve"
          },
          {
            title: "Réalisation",
            url: "/aquariums/cuve/realisation-cuve"
          },
          {
            title: "Q/R",
            url: "/aquariums/cuve/qr-cuve"
          }
        ],
      },
      {
        firstTitle: "Eclairage",
        links: [
          {
            title: "Lumière",
            url: "/aquariums/eclairage/lumiere"
          }
        ]
      }
    ],
  },
];
