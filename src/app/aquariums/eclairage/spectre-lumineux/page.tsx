import { AlertCircle, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SpectreLumineuxPage = () => {
  return (
    <section>
      <h1 className="h1">
        Spectre lumineux, température et indice de rendu des couleurs
      </h1>

      <h2 className="h2">L&apos;énergie lumineuse</h2>
      <p className="p">
        <strong>L&apos;énergie lumineuse</strong> des sources d&apos;éclairage
        se caractérise par plusieurs facteurs :
      </p>
      <ul className="list">
        <li>
          <strong>Puissance électrique</strong> consommée,{" "}
          <strong>flux lumineux</strong>, et <strong>rendement</strong> des
          sources lumineuses, ainsi que la durée quotidienne d&apos;éclairage
          d&apos;un aquarium.
        </li>
        <li>
          <strong>Spectre lumineux</strong>,{" "}
          <strong>température de couleur</strong>, et{" "}
          <strong>indice de rendu des couleurs</strong> d&apos;une source
          lumineuse.
        </li>
        <li>
          <strong>Durée de vie</strong> des sources lumineuses.
        </li>
      </ul>
      <p className="p">☛ Cette page traite des sujets suivants :</p>
      <ul className="list">
        <li>
          <Link href="#spectre" className="link link-accent">
            Spectre lumineux
          </Link>{" "}
          d'une source d'éclairage.
        </li>
        <li>
          <Link href="#temperature" className="link link-accent">
            Température de couleur
          </Link>
          .
        </li>
        <li>
          <Link href="#indice-de-rendu" className="link link-accent">
            Indice de rendu des couleurs.
          </Link>
        </li>
      </ul>

      <h2 className="h2" id="spectre">
        Le spectre lumineux d&apos;une source d&apos;éclairage
      </h2>
      <p className="p">
        Le <strong>spectre lumineux</strong> d&apos;une source d&apos;éclairage
        correspond à l&apos;ensemble des rayonnements lumineux émis par cette
        source. Il se présente sous forme de graphe, qui illustre l&apos;
        <strong>énergie lumineuse</strong> en fonction de la longueur
        d&apos;onde des différentes couleurs visibles.
      </p>
      <p className="p">
        Le spectre lumineux couvre une plage de longueurs d'ondes allant du{" "}
        <strong>violet</strong> (380 nanomètres) au <strong>rouge foncé</strong>{" "}
        (780 nanomètres). L'<strong>intensité énergétique</strong> varie tout au
        long de cette échelle, avec des pics d'émission sur certaines longueurs
        d'ondes, ce qui renforce des couleurs spécifiques.
      </p>

      <p className="p">On distingue deux types de spectres :</p>
      <ul className="list">
        <li>
          <strong>Spectre de bandes</strong> (ou{" "}
          <strong>spectre continu</strong>) : la répartition des couleurs est
          continue, sans interruption sur l&apos;ensemble du spectre visible.
        </li>
        <li>
          <strong>Spectre de raies</strong> : la répartition est discontinue,
          avec des zones spécifiques où certaines couleurs sont plus intensément
          émises.
        </li>
      </ul>

      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Une <strong>longueur d&apos;onde</strong> est exprimée en{" "}
            <strong>nanonmètre (nm)</strong>, qui correspond à un{" "}
            <strong>millionième de millimètre</strong> (10<sup>-9</sup>m). Cette
            unité est couramment utilisée pour mesurer les différentes couleurs
            du <strong>spectre lumineux</strong>.
          </p>
          <p>
            Le <strong>graphique</strong> ci-contre illustre un{" "}
            <strong>spectre lumineux</strong>, généralement trouvé sur
            l'emballage des sources lumineuses, permettant de visualiser la
            répartition des couleurs émises par la source en fonction de leur
            longueur d'onde.
          </p>
        </div>
        <div>
          <Image
            src="/assets/spectretubefluoaqua.jpg"
            width={200}
            height={200}
            alt="spectre tube fluoaqua"
          />
        </div>
      </div>

      <p className="p">
        C&apos;est un <strong>spectre lumineux de raies</strong> ou{" "}
        <strong>discontinu</strong>, dont le rayonnement dans les zones de
        couleur <strong>bleue</strong>, <strong>verte</strong> et{" "}
        <strong>rouge</strong> correspond aux besoins des{" "}
        <strong>plantes</strong>, tandis que la zone <strong>jaune</strong>{" "}
        répond aux besoins de notre <strong>oeil</strong>. Bien que cette
        information soit présente sur certaines sources lumineuses, elle reste
        souvent <strong>difficilement exploitable</strong> pour
        l&apos;aquariophile moyen. C&apos;est pourquoi les fabricants indiquent
        fréquemment l&apos;usage optimal de la source en se basant sur son{" "}
        <strong>flux lumineux</strong>.
      </p>
      <p className="p">
        Il existe divers types de sources lumineuses dont le{" "}
        <strong>spectre</strong> est spécifiquement adapté à un usage
        particulier.
      </p>
      <p className="p">
        Pour les besoins aquariophiles, ce spectre diffère de celui des lampes
        classiques destinées à l&apos;habitat. Il joue un rôle essentiel dans le
        processus de <strong>photosynthèse</strong> des plantes, aidant à leur
        croissance tout en limitant le développement des <strong>algues</strong>
        . De plus, il met en valeur les <strong>couleurs des poissons</strong>{" "}
        pour le plaisir visuel du spectateur. Certains spectres peuvent
        également être dédiés au développement des <strong>coraux</strong>, à
        l&apos;<strong>observation nocturne</strong>, ou encore à la{" "}
        <strong>purification de l&apos;eau.</strong>
      </p>
      <p className="p">
        Des sources spécifiques favorisent soit la{" "}
        <strong>photosynthèse</strong> (comme celles dites{" "}
        <strong>horticoles</strong>, qui sont peu coûteuses mais dont le{" "}
        <strong>rendu des couleurs</strong> est faible), soit le{" "}
        <strong>confort visuel</strong> avec une bonne restitution des{" "}
        <strong>couleurs des plantes et animaux</strong>. Il existe aussi des
        sources qui associent plusieurs de ces objectifs simultanément.
      </p>

      <div role="alert" className="alert alert-warning">
        <AlertCircle />
        <div>
          <p>
            Un <strong>spectre lumineux inadéquat</strong> ou qui se{" "}
            <strong>dégrade avec le temps</strong> affecte directement le{" "}
            <strong>rendement du processus de photosynthèse</strong>, ce qui a
            pour conséquence de freiner ou même de stopper le développement des{" "}
            <strong>plantes</strong>. Ces dernières peuvent alors{" "}
            <strong>dépérir</strong>, ce qui impacte l&apos;équilibre global de
            l&apos;aquarium. Assurer un <strong>éclairage de qualité</strong> et
            veiller à la régularité de son entretien est donc essentiel pour
            garantir un environnement favorable à la croissance des plantes
            aquatiques.
          </p>
        </div>
      </div>

      <h2 id="temperature" className="h2">
        La température de couleur
      </h2>
      <p className="p">
        La <strong>température de couleur (Tc)</strong> d&apos;une source
        lumineuse, exprimée en <strong>kelvin (K)</strong>, indique la teinte de
        la lumière émise. Une <strong>température basse</strong> (moins de{" "}
        <strong>5 000 K</strong>) produit une <strong>lumière chaude</strong>{" "}
        aux teintes rouges et jaunes, tandis qu&apos;une{" "}
        <strong>température élevée</strong> (plus de <strong>9 000 K</strong>)
        émet une <strong>lumière froide</strong> à dominante bleue.
      </p>
      <p className="p">
        Pour les aquariums, une <strong>température de couleur</strong> comprise
        entre <strong>6500 K</strong> et <strong>10 000 K</strong> imite le{" "}
        <strong>spectre solaire</strong> des tropiques, favorisant la croissance
        des plantes. Une température encore plus élevée, autour de{" "}
        <strong>20 000 K</strong>, est idéale pour les <strong>coraux</strong>,
        car elle favorise leur développement. Cette information est généralement
        indiquée sur les <strong>emballages</strong> des sources lumineuses.
      </p>

      <h2 className="h2" id="indice-de-rendu">
        L&apos;indice de rendu des couleurs
      </h2>
      <p className="p">
        L&apos;<strong>indice de rendu des couleurs (IRC)</strong> ou{" "}
        <strong>Color Rendering Index (CRI)</strong> mesure la capacité
        d&apos;une source lumineuse à restituer fidèlement les couleurs du{" "}
        <strong>spectre visible</strong> sans en altérer les teintes. Un IRC de{" "}
        <strong>100</strong> est idéal, car il correspond à une{" "}
        <strong>lumière blanche</strong> similaire à celle du{" "}
        <strong>soleil</strong>, offrant un excellent rendu des couleurs.
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            La <strong>mesure standard</strong> de cet indice est généralement
            réalisée sur <strong>huit couleurs</strong>, mais parfois seulement
            sur <strong>trois</strong>.
          </p>
        </div>
      </div>
      <p className="p">☛ L'IRC peut être exprimé de différentes manières :</p>
      <ul className="list">
        <li>
          La plus courante est une échelle de <strong>1 à 100</strong>
        </li>
        <li>
          Une classification plus précise propose quatre{" "}
          <strong>classes de rendu des couleurs</strong> :
          <ol className="list-decimal ml-3">
            <li>
              <strong>A - IRC de 90 à 100</strong> : Très bon
            </li>
            <li>
              <strong>B - IRC de 80 à 89</strong> : Très bon
            </li>
            <li>
              <strong>A - IRC de 70 à 79</strong> : Bon
            </li>
            <li>
              <strong>B - IRC de 60 à 69</strong> : Bon
            </li>
            <li>
              <strong>40 à 59</strong> : Moins bon
            </li>
            <li>
              <strong>20 à 39</strong> : Mauvais
            </li>
          </ol>
        </li>
      </ul>
      <p className="p">
        Il existe aussi une <strong>codification</strong> combinant{" "}
        <strong>rendu des couleurs</strong> et{" "}
        <strong>température de couleur</strong>, par exemple{" "}
        <strong>827</strong>, indiquant un <strong>IRC de 80 à 89</strong> et
        une température de <strong>2 700 K</strong>.
      </p>
      <p className="p">
        L&apos;IRC des <strong>sources lumineuses</strong> en aquariophilie
        varie selon leur usage. Les lampes dédiées au{" "}
        <strong>développement des plantes</strong> peuvent avoir un indice très
        bas, parfois inférieur à <strong>10</strong>, tandis que celles
        orientées vers la satisfaction visuelle humaine atteignent un{" "}
        <strong>IRC de 85</strong> ou plus. Les{" "}
        <strong>lampes domestiques</strong> ont souvent un{" "}
        <strong>IRC de 90 à 95</strong>.
      </p>

      <div role="alert" className="alert alert-warning my-6">
        <AlertCircle />
        <div>
          <p>
            Pour maintenir un <strong>équilibre optimal</strong> dans un
            aquarium, la <strong>durée de vie</strong> des{" "}
            <strong>sources lumineuses</strong> est aussi cruciale que le{" "}
            <strong>flux lumineux</strong>, le <strong>spectre lumineux</strong>
            , et la <strong>durée d&apos;éclairage</strong>. Une{" "}
            <strong>source lumineuse</strong> qui se dégrade avec le temps perd
            en efficacité, impactant ainsi la <strong>photosynthèse</strong> et
            le <strong>développement des plantes</strong>. Un remplacement
            régulier des lampes est donc nécessaire pour préserver les
            conditions idéales de l&apos;écosystème aquatique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpectreLumineuxPage;
