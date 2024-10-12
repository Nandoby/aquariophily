import { AlertCircle } from "lucide-react";
import Image from "next/image";

const LedPage = () => {
  return (
    <section>
      <h1 className="h1">LED, une nouvelle génération de sources lumineuses</h1>
      <h2 className="h2"> La technologie LED</h2>
      <p className="p">
        Les <strong>LED</strong> (Light-Emitting Diode) sont des composants
        optoélectroniques capables d'émettre de la lumière lorsqu'un courant
        électrique les traverse. Elles sont généralement fabriquées à partir de
        semi-conducteurs à base de <strong>gallium</strong> (Ga), mais pour
        produire différentes couleurs, plusieurs composés peuvent être utilisés,
        comme l'<strong>arséniure de gallium-aluminium</strong> (AlGaAs) ou le{" "}
        <strong>nitrure de gallium</strong> (GaN). Les{" "}
        <strong>LED blanches</strong>, très courantes aujourd'hui, sont créées
        en ajoutant une couche de <strong>phosphore jaune</strong> sur des LED
        éméttant une lumière bleue, permettant ainsi d'obtenir une lumière
        blanche couvrant un spectre de l'ultraviolet (350 nm) à l'infrarouge (2
        000 nm).
      </p>
      <p className="p">
        À partir de <strong>2010</strong>, les LED blanches sont apparues en
        tant que solution de remplacement aux lampes fluocompactes, en raison de
        leur efficacité et de leur capacité à produire des{" "}
        <strong>températures de couleur</strong> allant de 2 700 K à 10 000 K.
        Pour générer un flux lumineux important, plusieurs LED sont combinées au
        sein d'une même structure, comme un <strong>tube</strong>, un{" "}
        <strong>panneau</strong>, ou une <strong>lampe</strong>. En ajustant les
        LED de différentes couleurs et les couches de phosphore, il est possible
        de créer des <strong>spectres lumineux spécifiques</strong> pour des
        usages variés, mais cela peut entraîner un coût plus élevé que les
        technologies plus traditionnelles.
      </p>

      <div className="flex justify-center gap-3">
        <Image
          src="/assets/ledaquarium.jpg"
          height={200}
          width={200}
          alt="led aquarium"
          className="object-contain"
        />
        <Image
          src="/assets/ledpanneauaquarium.jpg"
          height={150}
          width={150}
          alt="led aquarium"
          className="object-contain"
        />
        <Image
          src="/assets/Ledlampeclassique.jpg"
          height={200}
          width={200}
          alt="led aquarium"
          className="object-contain"
        />
      </div>

      <p className="p">
        Les <strong>LED</strong> offrent des spectres lumineux adaptés à de
        nombreux besoins, mais à des coûts souvent plus élevés que les autres
        technologies, car elles restent des produits encore peu diffusés et
        généralement spécifiques. Néanmoins, la technologie progresse
        régulièrement, les <strong>performances augmentent</strong> et les{" "}
        <strong>prix</strong> tendent à baisser. Cette évolution signe
        d'ailleurs la fin de vie des <strong>lampes fluocompactes</strong>, qui
        s'étaient pourtant récemment popularisées.
      </p>
      <p className="p">
        Les principaux fabricants de LED viennent majoritairement de l'industrie
        des <strong>semi-conducteurs</strong>, avec une forte concentration
        d'acteurs au Japon, aux États-Unis, en Corée et en Chine.
      </p>

      <h2 className="text-xl font-bold my-3">Avantages des LED :</h2>
      <ul className="list">
        <li>
          Une durée de vie théorique comprise entre{" "}
          <strong>30 000 et 50 000 heures.</strong>
        </li>
        <li>
          <strong>Faible consommation d'énergie</strong> avec une alimentation
          sous basse tension.
        </li>
        <li>
          <strong>Programmabilité</strong> et ajustement de l'intensité
          lumineuse.
        </li>
        <li>
          <strong>Émission lumineuse directive</strong>, sans perte de flux.
        </li>
        <li>
          <strong>Robustesse</strong> et résistance aux chocs, avec une
          étanchéité totale.
        </li>
        <li>
          <strong>Allumage instantané</strong>, bien que ce soit sans grande
          importance pour un aquarium.
        </li>
        <li>
          Pas d'émission de <strong>rayons ultraviolets</strong>.
        </li>
        <li>
          <strong>Sans mercure</strong>, donc plus respectueuses de
          l'environnement.
        </li>
      </ul>
      <h2 className="text-xl font-bold my-3">Inconvénients des LED :</h2>
      <ul className="list">
        <li>
          Actuellement, seules des <strong>LED blanches</strong>, souvent dites
          lumière du jour, sont disponibles pour les aquariums. Aucune source ne
          stimule encore efficacement la{" "}
          <strong>photosynthèse des plantes</strong>.
        </li>
        <li>
          Les <strong>caractéristiques détaillées</strong> (flux lumineux,
          spectre, rendu des couleurs) des LED sont souvent difficiles à
          trouver.
        </li>
        <li>
          La <strong>durée de vie annoncée</strong> n'est pas toujours fiable,
          et les garanties ne dépassent généralement pas deux ans. Certains
          fabricants recommandent de limiter l'usage à{" "}
          <strong>huit heures par jour</strong> pour préserver leur longévité.
        </li>
        <li>
          Des rapports dans la presse spécialisée signalent que le{" "}
          <strong>flux lumineux et le spectre</strong> peuvent diminuer
          considérablement avec le temps.
        </li>
        <li>
          Pour garantir la <strong>qualité et le rendement</strong>, un{" "}
          <strong>ballast électronique spécifique</strong> est souvent
          nécessaire.
          <div role="alert" className="alert alert-warning mt-3">
            <AlertCircle />
            <div>
              <p>
                Les <strong>LED</strong> contiennent effectivement des
                substances dangereuses, dont de l'<strong>arsenic</strong>, un
                poison puissant. Pour cette raison, il est essentiel de ne pas
                les jeter avec les ordures ménagères. Il est fortement
                recommandé de les <strong>faire recycler</strong> via des
                circuits spécialisés afin de protéger l'environnement et éviter
                la contamination des sols et des eaux.
              </p>
            </div>
          </div>
        </li>
        <li>
          L'<strong>indium</strong> et le <strong>gallium</strong>, essentiels à
          la fabrication des LED, sont des ressources naturelles limitées. Leur{" "}
          <strong>recyclage</strong> reste un défi technologique non encore
          maîtrisé, ce qui accentue la pression sur ces matériaux rares.
        </li>
        <li>
          Presque toutes les LED émettent une quantité notable de{" "}
          <strong>lumière bleue</strong>, ce qui peut poser des problèmes pour
          les personnes sensibles à ce type de rayonnement, comme les enfants ou
          ceux atteints de maladies oculaires. Il est donc recommandé de
          maintenir une certaine <strong>distance</strong> de ces sources
          lumineuses.
        </li>
        <li>
          Les <strong>LED</strong> représentent un{" "}
          <strong>investissement</strong> initial plus élevé que les tubes
          fluorescents, bien que leur longévité et faible consommation d'énergie
          en fassent un choix économique sur le long terme.
        </li>
      </ul>

      <h2 className="h2">Les sources lumineuses LED</h2>

      <p className="p">
        Les solutions LED pour remplacer les <strong>tubes fluorescents</strong>{" "}
        dans nos aquariums sont variées, et chaque fabricant propose des
        alternatives différentes, sans qu'un type ne soit encore reconnu comme
        standard.
      </p>

      <ul className="list-decimal">
        <li className="text-xl font-bold">
          Tubes LED pour remplacer ou se substituer aux tubes fluorescents
          <ul className="list-disc text-base font-normal ml-3 flex gap-3">
            <div className="*:my-3">
              <li>
                <strong>
                  Tubes LED pour T8 avec ballast électromagnétique
                </strong>{" "}
                : le remplacement consiste à changer simplement le starter par
                un starter LED spécifique.
              </li>
              <li>
                <strong>
                  Tubes LED pour T8 ou T5 avec ballast électronique
                </strong>{" "}
                : ici, le ballast est conservé, mais le câblage nécessite une
                modification, car le tube LED se connecte d'un seul côté au
                ballast.
              </li>
              <li>
                <strong>Tubes LED sans ballast</strong> : ce type remplace les
                tubes fluorescents, mais nécessite également le changement des
                ballasts par un module spécifique avec un câblage différent.
              </li>
              <li>
                <strong>
                  Tubes LED connectés directement au secteur (120-240 V)
                </strong>{" "}
                : ces modèles se branchent directement sur le secteur, sans
                besoin de ballast.
                <p>
                  Les modèles <strong>les plus efficaces</strong> n'utilisent
                  pas les ballasts existants, ce qui permet une optimisation des
                  performances.
                </p>
              </li>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/assets/tube-LED-substitution-tube-T8-T5.jpg"
                width={300}
                height={300}
                alt="tube led substitution"
              />
              <span className="text-red-600 text-sm font-semibold">Tube LED de substitution</span>
            </div>
          </ul>
        </li>
        <li className="text-xl font-bold">
          <span>Rampes d'éclairage LED</span>
          <p className="text-base font-normal">
            De nombreux modèles de rampes d'éclairage sont disponibles sur le
            marché aquariophile, bien qu'il n'y ait pas de standard reconnu.
            Pour les systèmes les mieux documentés, les fabricants fournissent
            des informations sur la puissance dissipée, le flux lumineux, la
            température de couleur et les dimensions, mais souvent{" "}
            <strong>sans données sur le spectre lumineux</strong> ou l'indice de
            rendu des couleurs. Ces rampes sont généralement composées de LED
            blanches, bleues et rouges, mais la performance varie largement d'un
            fournisseur à l'autre. Les rampes LED restent{" "}
            <strong>significativement plus chères</strong> que les rampes
            constituées de tubes fluorescents.
          </p>
        </li>
        <li className="text-xl font-bold">
          <span>LED pour aquarium</span>
          <p className="text-base font-normal">
            Il est probable que d'ici 2020, l'utilisation généralisée des tubes
            ou rampes LED pour aquarium devienne rentable, mais pour le moment,{" "}
            <strong>les tubes LED de substitution</strong> aux tubes
            fluorescents n'apportent pas d'avantages significatifs en termes de
            mode de remplacement, de rendement lumineux, de flux limité à la
            lumière du jour, ou de prix. Par ailleurs, aucun des grands
            fabricants ne propose encore des tubes LED spécifiques pour les
            plantes ou autres besoins particuliers.
          </p>
          <p className="text-base font-normal">
            Les rampes LED proposées aux aquariophiles varient largement en
            qualité selon les fournisseurs, et aucun modèle ne semble encore
            s'imposer comme un <strong>standard reconnu</strong>.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default LedPage;
