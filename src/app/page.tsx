import { ChevronRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container w-[1000px] mx-auto">
      {/* info */}
      <div role="alert" className="alert text-sm my-6">
        <Info className="text-blue-500" />
        <span>
          Dans cette page d'accueil, l'auteur présente son objectif de mettre à
          la disposition des amateurs sa longue expérience d'aquariophilie. Il
          tente de définir l'aquariophilie et l'aquariophilie amateur. Il
          parcourt de façon pratique tous les aspects de ce hobby : la création
          et l'installation d'un aquarium, l'entretien du milieu aquatique, la
          pérennité et la reproduction des plantes et des espèces aquatiques
          tropicales.
        </span>
      </div>

      <aside></aside>
      <div className="p-[1px]">
        <h1 className="text-3xl font-bold text-center">
          Aquariophilie et aquariums
        </h1>
        <div className="relative w-full h-[300px] mt-6">
          <Image
            src="/assets/aquarium4.jpg"
            alt="aquarium"
            className="object-contain"
            fill
          />
        </div>
        <h4 className="text-lg font-semibold text-green-600 my-6">
          L'ouvrage sur l'aquariophilie et les aquariums
        </h4>
        <p className="text-base mb-3">
          Ce site est le fruit d'un aquariophile qui souhaite porter à la
          connaissance du plus grand nombre ses connaissances.
        </p>
        <p className="mb-3">
          <span className="text-red-600 font-semibold">
            <ChevronRight width={15} className="inline" /> Cet &laquo; ouvrage
            &raquo; sur l'aquariophilie et les aquariums
          </span>{" "}
          couvre tous les aspects de cette discipline :
        </p>
        <ul className="list-disc *:mb-3 p-8">
          <li>
            <Link
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
              href="/aquariums/aquarium/les-aquariums"
            >
              La réalisation et l'installation d'un aquarium
            </Link>{" "}
            avec tous ses équipements et constituants, l'éclairage, la
            filtration, le chauffage, l'oxygénation ... et sa maintenance.
          </li>
          <li>
            <Link
              href="/eau/composition-eau/composition-eau"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              La nature du milieu aquatique d'un aquarium
            </Link>
            , l'eau douce et sa chimie avec ses différents composants et
            paramètres, leur contrôle, entretien, correction et optimisation de
            la qualité de l'eau.
          </li>
          <li>
            <Link
              href="flore-aquarium/vegetation-aquatique/vegetation"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              La végétation d'un aquarium
            </Link>
            , son importance, le rôle de la photosynthèse, les différentes
            catégories et les emplois spécifiques des plantes, les critères de
            sélection, les conditions de plantation, d'entretien et de
            multiplication. Les maladies et remèdes.
          </li>
          <li>
            <Link
              href="plantes-aquarium/classification/plante-aquarium"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              Les plantes aquatiques
            </Link>{" "}
            et leur classification en angiospermes, fougères et mousses, des
            plantes très diverses et variées adaptées au milieu aquatique de nos
            aquariums. La liste des plantes et de leur synonymes. La description
            et les conditions spécifiques de culture des plantes aquatiques
            d'eau douce disponibles dans le commerce pour tout amateur.
          </li>
          <li>
            <Link
              href="faune-aquarium/teleostei/faune"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              La faune d'un aquarium
            </Link>
            , la classification des espèces, les poissons ou téléostéens,
            crevettes, escargots, avec des bactéries et microorganismes
            indispensables à l'équilibre du milieu aquatique, mais aussi des
            virus, bactéries et microorganismes pathogènes néfastes à la vie
            aquatique. Les critères de sélection des espèces, leurs conditions
            de transport et d'introduction dans un aquarium, les modes de
            reproduction, la nourriture industrielle ou vivante, le diagnostic
            et le traitement des maladies.
          </li>
          <li>
            <Link
              href="especes-tropicales/classification-teleostei/taxonomie-teleostei"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              Les familles de Teleostei nos ex-poissons d'aquarium
            </Link>
            , Characidae, Cichlidae, Cyprinidae, Nothobranchiidae, Poeciliidae
            ..., leur classification en Ordre, Famille, Genre et espèce et leurs
            conditions d'hébergement. La liste des espèces et de leurs
            synonymes. La description et les caractéristiques des espèces
            aquatiques d'eau douce disponibles dans le commerce.
          </li>
          <li>
            <Link
              href="elevage/reproduction-teleostei/objectif-elevage-teleostei"
              className="text-blue-600 font-semibold hover:text-blue-300 transition-colors"
            >
              La reproduction et l'élevage des Teleostei
            </Link>{" "}
            nos ex-poissons, ses objectifs. Les modes et conditions de
            reproduction et d'élevage. Les espèces faciles à reproduire par tout
            débutant. Les spécificités propres à chaque espèce : bac de
            reproduction, choix des géniteurs, processus de reproduction et
            d'élevage.
          </li>
        </ul>
        
      </div>
    </section>
  );
}
