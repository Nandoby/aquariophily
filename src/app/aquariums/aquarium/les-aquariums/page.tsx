import { Fish } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { links } from "./links"

const LesAquariumsPage = () => {

  return (
    <section className="container w-[1000px] mx-auto">
      <h2 className="text-lg font-bold my-3">Les types d'aquariums</h2>
      <p className="mb-3">
        Un aquarium est un bac ou cuve, un espace clos contenant de l'eau et des
        terres immergées, où prospèrent des téléostéens nos ex-poissons, des
        mollusques, escargots, crustacés, coraux, plantes, algues et
        microorganismes ces derniers étant invisibles à l'oeil nu.
      </p>
      <p className="mb-3">
        L'aquarium à la maison ou dans un lieu public à titre décoratif est le
        plus courant, il en existe différents types qui se différencient par
        leur composition ou esthétique, la nature du milieu aquatique et leur
        destination. Les pages suivantes de ce volume sont consacrées à la
        création et à l'installation d'un aquarium.
      </p>
      <h2 className="text-lg font-bold my-3">L'esthétique</h2>
      <p className="mb-3">
        L'aspect esthétique de la composition d'un aquarium a pris depuis
        quelques années de l'importance et est devenu un art{" "}
        <span className="text-red-600 font-semibold">l'aquascaping</span>, c'est
        la pratique de l'aquascape, c'est-à-dire la façon d'arranger les
        plantes, rochers, racines ... à l'intérieur d'un aquarium pour provoquer
        une certaine émotion chez l'aquariophile ou le spectateur lorsqu'il
        admire ce paysage aquatique.
      </p>
      <p className="flex gap-2 mb-3">
        <Fish />
        Nous sommes en présence de plusieurs modèles d'aquascape :
      </p>
      <div className="relative w-full h-[360px]">
        <Image src="/assets/aquariumamano.jpg" fill alt="aquarium amano" />
      </div>
      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquascaping japonais de Takashi Amano
        </span>{" "}
        est un nouveau concept né dans les années 1990, dont le but artistique
        est de créer un paysage aquatique, digne d'une photographie. Ce paysage
        représente un décor naturel de végétation et une présence d'animaux mis
        en valeur et magnifiquement organisés comme des tableaux vivants.
        Takashi Amano est un aquariophile, photographe, paysagiste et designer
        japonais.
      </p>
      <div className="relative w-full h-[360px] mt-6">
        <Image
          src="/assets/aquariumneerlandais.jpg"
          fill
          alt="aquarium neerlandais"
        />
      </div>
      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquascaping néerlandais
        </span>{" "}
        n'est pas un nouveau modèle, c'est l'aquascaping historique. Les
        Néerlandais avaient depuis les années 1930 et surtout depuis les années
        1960, la spécialité de concevoir des aquariums très bien plantés, avec
        une concentration de plantes évoquant un lit végétal très bien
        entretenu, la priorité est donnée à la culture des plantes aquatiques.
      </p>
      <div className="relative w-full h-[360px] mt-6">
        <Image
          src="/assets/aquariumsauvage.jpg"
          fill
          alt="aquarium neerlandais"
        />
      </div>
      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquascaping sauvage ou jungle sauvage
        </span>{" "}
        est une organisation libre des éléments d'un aquarium pour obtenir un
        sentiment d'harmonie sauvage des textures et des couleurs.
      </p>
      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquascaping biotope
        </span>{" "}
        est la copie la plus exacte possible d'un environnement naturel.
      </p>
      <h2 className="text-lg font-bold my-6">Le milieu aquatique</h2>
      <p className="flex gap-2 mb-3">
        <Fish />
        Le milieu aquatique est essentiellement caractérisé par la nature de
        l'eau, salée, non salée mais plus ou moins douce et sa température.
      </p>

      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquarium d'eau douce
        </span>{" "}
        est un aquarium rempli d'eau non salée, sa concentration saline est
        inférieur à 1g/L. L'eau d'un aquarium d'eau douce peut être soit douce
        de 3 à 6 °GH, moyennement douce de 6 à 9 °GH ou dure avec un GH
        supérieur à 9 °GH. Les eaux d'une dureté inférieure à 3 °GH ou
        supérieure à 16 °GH sont déconseillées. Environ 90 % des aquariums sont
        des aquariums d'eau douce. Ce type
      </p>
      <div className="my-3">
        Ce type d'aquarium dépend aussi de la température de l'eau qui
        conditionne le choix des espèces hébergées :
        <ul className="list-disc list-inside marker:text-red-600 mt-3">
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium d'eau froide
            </span>{" "}
            dont la température de l'eau varie entre 5 et 15 °C
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium d'eau tempérée
            </span>{" "}
            dont la température de l'eau se situe entre 18 et 22 °C
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium tropical
            </span>{" "}
            dont la température est comprise entre 22 et 30 °C, c'est le type
            d'aquarium le plus répandu.
          </li>
        </ul>
      </div>
      <p className="my-3">
        <span className="text-red-600 font-semibold">
          L'aquarium d'eau saumâtre
        </span>{" "}
        est un aquarium dont l'eau a une concentration saline très variable
        entre 1 et 30 g/L. Cette concentration correspond à l'eau que l'on
        trouve à l'embouchure de certaines rivières, dans les deltas, les
        lagunes ou les estuaires.
      </p>
      <p className="my-3">
        <span className="text-red-600 font-semibold">L'aquarium marin</span> est
        un aquarium d'eau de mer dont la concentration saline est comprise entre
        30 et 40 g/L, il est essentiellement peuplé d'animaux aquatiques.
      </p>
      <p className="my-3 flex gap-2">
        <Fish />
        Nous ne nous intéresserons dans ce document qu'aux aquariums et même si
        de temps en temps il en est fait référence, nous ne traiterons pas des
        terrariums et aquaterrariums :
      </p>
      <div className="my-3">
        <ul className="list-disc list-inside marker:text-red-600 *:mb-3">
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium communautaire ou d'ensemble
            </span>{" "}
            est le plus répandu des aquariums, c'est généralement un bac conçu
            pour être un décor naturel vivant, il est peuplé de plusieurs
            espèces d'animaux et de plantes qui ne se côtoient pas normalement
            dans la nature.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium spécifique
            </span>{" "}
            renferme des individus appartenant à la même espèce, il reproduit en
            principe les caractéristiques du biotope de l'espèce concernée.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium régional
            </span>{" "}
            abrite des espèces d'animaux et de plantes en provenance d'un même
            biotope, c'est-à-dire d'une région, comme l'Amazonie, les grands
            Lacs africains, la Malaisie ou l'Asie en général.
            <br />
            L'aquarium d'eau saumâtre est aussi un aquarium de type régional.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium récifal
            </span>{" "}
            est un aquarium marin peuplé de récifs de corail, d'invertébrés et
            de quelques téléostéens.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium « fish only »
            </span>{" "}
            est un aquarium ne comportant que des animaux aquatiques,
            pratiquement sans plantes.
          </li>
          <li>
            <span className="text-red-600 font-semibold">Le nano-aquarium</span>{" "}
            d'une contenance de 10 à 50 litres d'eau est un univers aquatique
            miniature très tendance aujourd'hui.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium de reproduction
            </span>{" "}
            permet d'isoler les reproducteurs des prédateurs et de contrôler les
            caractéristiques de l'eau pour répondre aux besoins d'une
            reproduction plus ou moins difficile d'espèces.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium d'élevage
            </span>{" "}
            permet d'élever des alevins, de les nourrir spécifiquement et de les
            protéger des prédateurs.
          </li>
          <li>
            <span className="text-red-600 font-semibold">
              L'aquarium de quarantaine ou aquarium hôpital
            </span>{" "}
            permet préventivement ou en cas de maladie d'isoler un ou plusieurs
            individus pour les soigner ou éviter la contagion. Il permet aussi
            de s'assurer que les nouveaux pensionnaires sont en bonne santé
            avant d'être introduit dans un bac d'ensemble.
          </li>
        </ul>
      </div>
      <h3 className="text-xl font-bold my-6">
        Création installation d'un aquarium, son équipement et ses accessoires
      </h3>
      <div className="alert">
        <div>
          <p>
            Les pages suivantes de ce volume sont consacrées à la création et à
            l'installation d'un aquarium, y sont traités les différents sujets
            suivants :
          </p>
          <ul className="mt-3">
            {links.map((link, id) => {
              return (
                <li key={id}>
                  <Link
                    className="text-blue-600 hover:text-blue-300 font-semibold"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                  {link.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LesAquariumsPage;
