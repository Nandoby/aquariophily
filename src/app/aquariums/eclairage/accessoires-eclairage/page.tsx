import { AlertCircle } from "lucide-react";
import Image from "next/image";

const AccessoiresEclairage = () => {
  return (
    <section>
      <h1 className="h1">Les accessoires du système d'éclairage</h1>
      <h2 className="h2">
        Les éléments nécessaires au fonctionnement de l'éclairage
      </h2>

      <p className="p">
        Certains accessoires sont essentiels pour assurer le bon fonctionnement
        du <strong>système d'éclairage</strong> dans un aquarium :
      </p>
      <ul className="list">
        <li>
          <div>
            <strong>La rampe d'éclairage ou galerie</strong> : C'est la
            structure qui maintien les lampes en place au-dessus de l'aquarium.
            Il existe différents modèles sur le marché, notamment des rampes{" "}
            <strong>articulées</strong> ou{" "}
            <strong>pivotantes vers l'arrière</strong>, des rampes en{" "}
            <strong>matière inoxydable</strong> montées sur pieds ou suspendues,
            ainsi que des rampes équipées d'un système d'éclairage complet.
            Toutefois, il est primordial de bien choisir la qualité des{" "}
            <strong>tubes fluorescents</strong> et de définir la durée de
            l'éclairage pour qu'il s'adapte au type d'aquarium souhaité.
          </div>
          <div className="flex flex-col items-center mt-3">
            <h3 className="text-md font-semibold text-red-600">
              Deux modèles de rampe d'éclairage
            </h3>
            <div className="flex gap-2 mt-3">
              <Image
                src="/assets/rampeeclairage.jpg"
                alt="rampe eclairage"
                width={200}
                height={200}
              />
              <Image
                src="/assets/rampeeclairageb.jpg"
                alt="rampe eclairage"
                width={200}
                height={200}
              />
            </div>
          </div>
        </li>
        <li>
          <strong>Les systèmes d'allumage des tubes fluorescents</strong>{" "}
          varient selon le modèle de tube :
          <ul className="list-square ml-6 *:my-3">
            <li>
              Pour les <strong>tubes T8</strong> de 26 mm de diamètre, deux
              options existent : un <strong>ballast électromagnétique</strong>{" "}
              accompagné d'un <strong>starter</strong>, ou un{" "}
              <strong>ballast électronique</strong>. Cependant, ce dernier, bien
              que plus coûteux, n'a pas rencontré un grand succès sur le marché.
            </li>
            <li>
              Pour les <strong>tubes T5</strong> de 16 mm de diamètre, seul un{" "}
              <strong>ballast électronique spécifique</strong> est compatible.
            </li>
          </ul>
        </li>
        <li>
          <div className="flex gap-2">
            <div>
              <p>
                <strong>Le ballast électromagnétique</strong> est destiné
                exclusivement aux <strong>tubes T8</strong> de 25 mm de
                diamètre. Il fonctionne grâce à une bobine de cuivre qui
                maintien une décharge électrique, générant ainsi une tension
                suffisamment élevée pour allumer le tube tout en régulant le
                courant qui le traverse. Ce type de ballast doit être couplé à
                un <strong>starter</strong> pour fonctionner correctement.
              </p>
              <p>
                Pour garantir un fonctionnement optimal et éviter des problèmes
                tels que les surchauffes, il est impératif que la{" "}
                <strong>puissance du ballast</strong> corresponde exactement à
                celle du tube fluorescent. Il est également possible de
                connecter <strong>deux tubes en série</strong> sur un seul
                ballast, à condition que sa puissance soit équivalente au double
                de celle d'un seul tube.
              </p>
              <p>
                En raison de la quantité d'énergie qu'il dissipe, le ballast
                doit être installé dans un <strong>endroit bien ventilé</strong>{" "}
                pour éviter toute surchauffe ou dommage potentiel.
              </p>
            </div>
            <figure className="flex flex-col items-center gap-2">
              <Image
                src="/assets/ballastmagnetique.jpg"
                alt="Ballast Magnétique"
                width={600}
                height={600}
                className="rounded-md shadow-md"
              />
              <figcaption className="text-sm text-red-600 font-semibold">
                Ballast électromagnétique
              </figcaption>
            </figure>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <div>
              <p>
                <strong>Le starter</strong> est un composant essentiel associé
                au <strong>ballast électromagnétique</strong>, dont le rôle est
                de générer une surtension entre les électrodes pour permettre
                l'allumage du tube fluorescent. Il n'intervient que lors de
                cette phase de démarrage, après quoi il n'est plus sollicité.
              </p>
              <p>
                Il est crucial de s'assurer que le <strong>starter</strong> est
                compatible avec la puissance du tube utilisé. Toutefois, la
                majorité des starters disponibles sur le marché sont adaptés à
                des tubes dont la puissance varie entre{" "}
                <strong>4 W et 60 W</strong> ou <strong>80 W</strong>.
              </p>
            </div>
            <figure className="flex flex-col items-center gap-2">
              <Image
                src="/assets/starter.jpg"
                alt="Starter"
                width={600}
                height={600}
                className="rounded-md shadow-md"
              />
              <figcaption className="text-sm text-red-600 font-semibold">
                Starters tube T8
              </figcaption>
            </figure>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <div>
              <p>
                <strong>Le ballast électronique</strong> est une option moderne
                pour les <strong>tubes T8</strong> et une nécéssité pour les{" "}
                <strong>tubes T5</strong>. Contrairement au ballast
                électromagnétique, il fonctionne à haute fréquence, entre{" "}
                <strong>25 et 60 kHz</strong>, ce qui permet de se passer de
                starter.
              </p>
              <p>Ce système présente plusieurs avantages :</p>
              <ul className="list-square ml-6">
                <li>
                  Un <strong>allumage presque instantané</strong>
                </li>
                <li>
                  L'<strong>élimination du scintillement</strong> du tube
                </li>
                <li>
                  Une <strong>consommation énergétique réduite</strong>
                </li>
                <li>
                  Une <strong>durée de vie prolongée</strong> des tubes
                </li>
              </ul>
              <p>
                Cependant, le ballast électronique a un{" "}
                <strong>coût plus élevé</strong> que son homologue
                électromagnétique.
              </p>
            </div>
            <figure className="flex flex-col items-center gap-2">
              <Image
                src="/assets/ballastelectronique.jpg"
                alt="Ballast électronique"
                width={400}
                height={400}
                className="rounded-md"
              />
              <figcaption className="text-sm text-red-600 font-semibold text-center">
                Ballast électronique
              </figcaption>
            </figure>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <div>
              <p>
                <strong>
                  Les embouts ou douilles de raccordement électrique
                </strong>{" "}
                des tubes doivent être adaptés au <strong>diamètre</strong> des
                tubes (T8 ou T5) et être correctement fixés pour éviter tout
                risque de chute dans l'eau lors du remplacement d'une lampe.
              </p>
              <div role="alert" className="alert alert-warning">
                <AlertCircle />
                <div>
                  Il est fortement recommandé d'utiliser uniquement des{" "}
                  <strong>embouts étanches</strong> pour garantir la sécurité et
                  prévenir tout contact électrique avec l'eau, ce qui pourrait
                  entraîner des accidents.
                </div>
              </div>
            </div>
            <figure className="flex flex-col items-center gap-2">
              <Image
                src="/assets/douillefluo.jpg"
                alt="Douille fluo"
                width={400}
                height={400}
                className="rounded-md shadow-md"
              />
              <figcaption className="text-sm text-red-600 font-semibold text-center">
                Douilles étanches
              </figcaption>
            </figure>
          </div>
        </li>
        <li>
          <div className="flex gap-2">
            <div className="flex-1">
              <p>
                <strong>L'horloge programmable</strong> est un accessoire
                essentiel pour contrôler la durée et les périodes d'éclairage de
                l'aquarium. Elle offre une gestion automatique de l'éclairage,
                garantissant un rythme stable pour les plantes et les poissons.
              </p>
              <p>
                Il existe des modèles avec un seul circuit, contrôlant toutes
                les sources lumineuses connectées. Cependant, certaines horloges
                disposent de <strong>deux circuits indépendants</strong>,
                permettant de programmer des durées d'éclairage différentes pour
                chaque source lumineuse, offrant ainsi plus de flexibilité pour
                répondre aux besoins spécifiques de l'aquarium.
              </p>
            </div>
            <figure className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <Image
                  src="/assets/horloge.jpg"
                  alt="horloge"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <Image
                  src="/assets/horloge2.jpg"
                  alt="horloge"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-red-600 font-semibold text-center">
                Horloges
              </figcaption>
            </figure>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AccessoiresEclairage;
