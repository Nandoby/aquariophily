import { AlertCircle } from "lucide-react";

const QRCuvePage = () => {
  return (
    <section>
      <h1 className="h1">Questions - Réponses sur la cuve d'un aquarium</h1>

      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          De quelle place doit-on disposer pour installer un aquarium ?
        </div>
        <div className="collapse-content">
          <p>
            Tout d'abord, le support choisi, qu'il s'agisse d'un meuble ou d'une
            étagère, doit être capable de supporter le poids de l'aquarium
            entièrement équipé. La surface du support doit être légèrement plus
            grande que celle de la cuve, avec environ 2 à 5 cm d'espace tout
            autour pour placer des plaques d'isolation thermique en polystyrène
            expansé contre les côtés et la face arrière de l'aquarium. Prévoyez
            également un espace d'au moins 20 à 25 cm sur l'un des côtés pour
            l'installation de divers accessoires, tels que le filtre.
          </p>
          <p>
            L'espace disponible en hauteur doit permettre plusieurs choses :
            installer une plaque de polystyrène expansé d'au moins 1 cm
            d'épaisseur sous la cuve, pour compenser les irrégularités du
            support et isoler thermiquement le fond de l'aquarium, poser la cuve
            elle-même, et disposer d'un espace libre de 25 à 30 cm au-dessus de
            la cuve pour pouvoir ouvrir la galerie lors de l'entretien.
          </p>
          <p>
            Prévoir aussi un endroit pour ranger les boîtes de nourriture des
            poissons et autres accessoires.
          </p>
          <p>
            Si nécessaire, anticipez un habillage pour dissimuler les
            équipements et améliorer l'esthétique. La plaque de polystyrène
            placée contre la face arrière permet de masquer le mur derrière
            l'aquarium. Elle peut être peinte, par exemple en bleu, pour
            embellir le décor.
          </p>
          <div role="alert" className="alert alert-info">
            <AlertCircle />
            <div>
              Il est également possible d'installer tous les équipements, y
              compris le filtre, dans un meuble sous l'aquarium. Cependant, le
              rendement du filtre sera considérablement diminué, car la pompe
              devra remonter l'eau filtrée jusqu'à la surface de l'aquarium,
              soit une hauteur d'environ un mètre.
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Quel est le poids d'un aquarium complètement équipé ?
        </div>
        <div className="collapse-content">
          <p>Un aquarium complètement équipé est très lourd.</p>
          <p>
            Un aquarium de 200 litres pèse environ 300 kg, tandis qu'un aquarium
            de 300 litres avoisine les 450 kg.
          </p>
          <p>
            Cela nécessite un support spécifique, car aucun meuble traditionnel
            ne peut supporter un tel poids.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Quelle forme pour un bac ?
        </div>
        <div className="collapse-content">
          <p>
            Opter pour une forme parallélépipédique rectangulaire classique est
            la meilleure solution, car toutes les faces de la cuve sont
            parfaitement planes.
          </p>
          <p>
            Les aquariums avec une vitre avant bombée ou galbée sont
            déconseillés. Non seulement ils sont plus coûteux, mais ils
            présentent également l'inconvénient de déformer partiellement la
            visibilité du décor et des poissons, ce qui n'est pas très
            esthétique. De plus, l'entretien d'une vitre bombée est plus
            compliqué.
          </p>

          <div role="alert" className="alert alert-info">
            <AlertCircle />
            <div>
              Les boules en verre sont à éviter, car leur taille réduite ne
              permet pas d'assurer le bien-être de certaines espèces et elles
              déforment la vision des occupants de manière peu flatteuse.
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Faut-il opter pour une cuve nue ou un aquarium tout équipé ?
        </div>
        <div className="collapse-content">
          <p>
            Pour un débutant ou un aquariophile peu bricoleur, il est préférable
            d'acheter un aquarium tout équipé, comprenant la cuve, la galerie,
            l'éclairage, le chauffage, et la filtration. L'aération est
            généralement en option.
          </p>
          <p>
            En revanche, un aquariophile expérimenté ou un bon bricoleur
            trouvera avantage à acquérir une cuve nue et à choisir lui-même les
            différents équipements. Cela permet de sélectionner le meilleur
            matériel parmi différentes marques, tout en réduisant les coûts
            grâce au bricolage personnel.
          </p>

          <div role="alert" className="alert alert-info">
            <AlertCircle />
            <div>
              Il est également possible de faire fabriquer une cuve sur mesure,
              adaptée aux dimensions de l'emplacement prévu.
            </div>
          </div>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 my-3">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Est-il possible d'acheter un aquarium d'occasion ?
        </div>
        <div className="collapse-content">
          <p>
            À moins de bien connaître le propriétaire et l'historique de
            l'aquarium, il est fortement déconseillé d'acheter une cuve
            d'occasion. En effet, elle peut avoir subi des fuites mal réparées,
            être infestée par des parasites, ou avoir été abandonnée pendant
            longtemps dans de mauvaises conditions, rendant les joints
            vulnérables. Cela peut entraîner des fuites, voire même la rupture
            de la cuve.
          </p>
          <div role="alert" className="alert alert-info">
            <AlertCircle />
            <div>
              <p>
                De plus, si les vitres sont entartrées, il est préférable
                d'abandonner l'achat, car il est presque impossible de les
                nettoyer correctement sans endommager les vitres ou les joints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCuvePage;
