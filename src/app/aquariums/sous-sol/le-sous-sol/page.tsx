import { Info } from "lucide-react";
import Link from "next/link";

const LeSousSolPage = () => {
  return (
    <section>
      <h1 className="h1">Les différents types de sous-sol d&apos;aquarium</h1>
      <div role="alert" className="alert">
        <div>
          <p>
            <strong>☛ Cette section sur le sous-sol d&apos;un aquarium</strong>{" "}
            traite des thèmes suivants :
          </p>
          <ul className="ml-4 list-disc">
            <li>
              <strong>Les différents types de sous-sol</strong> : Présentation
              des substrats disponibles pour les aquariums et leurs
              spécificités.
            </li>
            <li>
              <Link className="link link-primary font-bold" href="creation-CAH">
                La création d&apos;un C.A.H.
              </Link>{" "}
              : Comment mettre en place un{" "}
              <strong>Complexe Argilo-Humique</strong> pour favoriser la santé
              des plantes aquatiques.
            </li>
            <li>
              <Link
                className="link link-primary font-bold"
                href="composition-sol-CAH"
              >
                La composition d&apos;un C.A.H.
              </Link>{" "}
              : Description des composants d&apos;un C.A.H., un substrat enrichi
              en argile et matière organique.
            </li>
            <li>
              <Link
                className="link link-primary font-bold"
                href="processus-CAH"
              >
                Le processus de fonctionnement d&apos;un C.A.H
              </Link>{" "}
              : Explication de la manière dont un C.A.H. agit dans
              l&apos;aquarium pour soutenir la croissance des plantes et
              maintenir un sol riche en nutriments.
            </li>
            <li>
              <Link className="link link-primary font-bold" href="decor">
                La décoration d&apos;un aquarium
              </Link>{" "}
              : Conseils sur la manière d&apos;intégrer le sous-sol avec
              d&apos;autres éléments de décor dans l&apos;aquarium.
            </li>
            <li>
              <Link
                className="link link-primary font-bold"
                href="mise-en-route-sol"
              >
                La mise en route d&apos;un nouveau sous-sol d&apos;aquarium
              </Link>{" "}
              : Guide étape par étape pour démarrer un aquarium avec un nouveau
              sol.
            </li>
            <li>
              <Link
                href="maintenance-sol"
                className="link link-primary font-bold"
              >
                L&apos;entretien et la maintenance d&apos;un sous-sol
              </Link>{" "}
              : Instructions sur la gestion à long terme du sous-sol de
              l&apos;aquarium, pour éviter le compactage et maintenir la santé
              du substrat.
            </li>
          </ul>
        </div>
      </div>
      <h2 className="h2">Un sous-sol d&apos;aquarium</h2>
      <p>
        Le <strong>sous-sol</strong> des aquariums d&apos;eau douce est
        l&apos;un des éléments essentiels pour la réussite d&apos;un aquarium,
        au même titre que l&apos;eau et la lumière. Pourtant, il est souvent
        négligé, surtout par les débutants, qui s&apos;intéressent davantage aux
        animaux qu&apos;aux plantes. Toutefois, même si un aquarium sans plantes
        est possible, il est fortement recommandé d&apos;en avoir au moins
        quelques-unes. Les plantes apportent non seulement une esthétique
        attrayante, mais elle créent également un environnement plus sain et
        équilibré pour les poissons, tout en réduisant l&apos;effort de
        maintenance.
      </p>
      <p className="p">
        Un <strong>aquarium bien planté</strong> bénéficie d&apos;un meilleur
        équilibre biologique : les plantes fournissent de l&apos;oxygène aux
        poissons et absorbent les nitrates issus de la décomposition des
        déchets, créant ainsi un écosystème plus stable.
      </p>
      <ul className="list">
        <li>
          <strong>Importance du sous-sol</strong> : Un bon sous-sol est crucial
          pour l&apos;équilibre aquatique. Il doit être stable, souple et
          capable de soutenir les plantes tout en abritant des microorganismes
          essentiels. Ces microorganismes participent à la transformation du sol
          en un milieu vivant et dynamique. Un sous-sol de qualité ne devrait ni
          s&apos;acidifier ni s&apos;alcalinifier progressivement, et doit
          favoriser les échanges nutritifs entre les plantes et
          l&apos;environnement.
        </li>
      </ul>
      <p className="p">
        La plupart des plantes d&apos;aquarium proviennent de régions tropicales
        où les sols ne sont pas toujours riches en nutriments. Ces plantes
        absorbent souvent les éléments nutritifs par leurs feuilles, tandis que
        les racines les ancrent dans le sol. En revanche, de nombreuses plantes
        de marais, disponibles dans le commerce, tirent leur alimentation
        principalement par leurs racines. Dans ce cas, un{" "}
        <strong>sous-sol nutritif</strong> est essentiel.
      </p>
      <p className="p">
        Les <strong>aquariums de type néerlandais</strong> ou inspirés par
        l&apos;aquariophile japonais <strong>Takashi Amano</strong> utilisent
        des sols particulièrement fertiles pour maintenir la santé des plantes.
      </p>
      <ul className="list">
        <li>
          <strong>Composition du sous-sol</strong> : Il est généralement
          constitué d&apos;une première couche de{" "}
          <strong>substrat nutritif</strong> d&apos;une épaisseur de 3 à 10 cm,
          recouverte de 2 à 5 cm de graviers pour fixer les plantes et parfois
          le décor.
        </li>
      </ul>
      <p className="p">
        <strong>☛ Types de substrats</strong> disponibles :
      </p>
      <ul className="list">
        <li>
          <strong>Sable uniquement</strong>
        </li>
        <li>
          <strong>Substrat nutritif commercial</strong>
        </li>
        <li>
          <strong>Complexe argilo-humique</strong>
        </li>
        <li>
          <strong>Sous-sol inspiré par Takashi Amano</strong>
        </li>
        <li>
          <strong>Système Plocher</strong>
        </li>
      </ul>
      <h2 className="h2">Sable uniquement</h2>
      <p className="p">
        Un <strong>substrat composé uniquement de sable</strong>, qu&apos;il
        soit de rivière ou de quartz, est quasiment inerte. Dans ce cas,
        l&apos;eau devient la seule source de nutriments pour les plantes. Ce
        type de sol ne convient pas à toutes les plantes d&apos;aquarium, mais
        il est tout de même possible d&apos;y cultiver des espèces peu
        exigeantes comme les <strong>fougères</strong> ou les{" "}
        <strong>Anubias</strong>, qui n&apos;ont pas besoin de substrat nutritif
        pour leur croissance.
      </p>
      <p className="p">
        Au fil du temps, le sable s&apos;enrichit naturellement en nutriments
        grâce à la <strong>décomposition des déchets</strong> organiques par les
        bactéries (reste de nourriture, excréments de poissons, feuilles mortes,
        etc.). Après quelques mois, il devient alors suffisamment riche pour
        permettre la croissance de plantes plus exigeantes, telles que les{" "}
        <strong>Cryptocoryne</strong>.
      </p>
      <ul className="list">
        <li>
          <strong>Mise en garde</strong> :
          <ul className="list">
            <li>
              L&apos;emploi de <strong>verre concassé</strong>, de{" "}
              <strong>sable de mer</strong> ou de{" "}
              <strong>sable de carrière</strong> est déconseillé car ces
              matériaux peuvent altérer la qualité de l&apos;eau et nuire à
              l&apos;équilibre de l&apos;aquarium.
            </li>
          </ul>
        </li>
        <li>
          <strong>Précaution lors de l&apos;acquisition de sable</strong> :
          <ul className="list">
            <li>
              Lorsque vous achetez du sable, évitez d&apos;utiliser celui
              provenant d&apos;anciens aquariums. Ce type de sable peut
              introduire des <strong>maladies</strong> ou des{" "}
              <strong>déséquilibres</strong> graves dans votre nouvel aquarium.
            </li>
          </ul>
        </li>
      </ul>
      {/* Substrat du commerce --> */}
      <h2 className="h2">Substrat nutritif du commerce</h2>
      <p className="p">
        Il existe de nombreux <strong>substrats nutritifs</strong> de qualité
        dans le commerce, bien que leur composition soit rarement spécifiée en
        détail. En général, ils contiennent des composés humiques comme la{" "}
        <strong>terre de bruyère</strong> véritable ou la{" "}
        <strong>tourbe</strong>, des <strong>oligoéléments</strong>, du{" "}
        <strong>fer</strong>, ainsi que du <strong>sable</strong> ou du{" "}
        <strong>quartz</strong>.
      </p>
      <p className="p">
        L&apos;épaisseur recommandée pour un <strong>substrat nutritif</strong>{" "}
        est d&apos;environ <strong>5 à 6 cm</strong> pour assurer une bonne
        croissance des plantes, bien que <strong>3 cm</strong> soit un minimum.
        Il est nécéssaire de recouvrir ce substrat par une couche de{" "}
        <strong>graviers bien lavés</strong> pour stabiliser le sol.
      </p>
      <ul className="list">
        <li>
          <strong>Conseils pour les débutants</strong> :
          <ul className="list">
            <li>
              Il est recommandé aux aquariophiles débutants d&apos;utiliser des
              substrats préparés spécialement pour l&apos;aquariophilie par des{" "}
              <strong>marques reconnues</strong>. Ces produits garantissent
              généralement l&apos;absence de <strong>phosphate</strong> et de{" "}
              <strong>nitrates</strong>, qui sont néfastes à l&apos;équilibre de
              l&apos;aquarium.
            </li>
          </ul>
        </li>
        <li>
          <strong>Attention aux substrats de jardin</strong> :
          <ul className="list">
            <li>
              Les terreaux ou les terres de bruyère destinés au jardinage sont
              souvent traités avec des produits chimiques nocifs pour la vie
              aquatique et ne doivent pas être utilisés dans un aquarium.
            </li>
          </ul>
        </li>
        <li>
          <strong>Mise en place du substrat</strong> :
          <ul className="list">
            <li>
              Le substrat doit être <strong>mélangé à sec</strong> pour obtenir
              un mélange homogène, puis légèrement <strong>humidifié</strong>,
              juste assez pour former un compost bien lié, mais non liquide.
              Lorsqu&apos;il est déposé dans l&apos;aquarium, il doit être étalé
              en <strong>fines couches superposées</strong> et tassé légèrement
              pour éviter les poches d&apos;air ou d&apos;eau, tout en assurant
              une bonne circulation de l&apos;eau et de l&apos;oxygène,
              essentiels à la santé des racines.{" "}
            </li>
          </ul>
        </li>
        <li>
          <strong>Risques d&apos;une mauvaise mise en place</strong> :
          <ul className="list">
            <li>
              Si le substrat est <strong>trop humidifié</strong> avant
              d&apos;être installé, cela peut entraîner des problèmes tels que
              la <strong>fermentation</strong>, la prolifèration d&apos;
              <strong>algues bleues</strong>, et affecter la santé des poissons.
              De plus, un substrat avec des poches d&apos;air ou d&apos;eau peut
              libérer des <strong>gaz toxiques</strong> dans l&apos;aquarium.
            </li>
          </ul>
        </li>
      </ul>
      {/* <-- Substrat du commerce */}
      {/* Complexe argilo-humique --> */}
      <h2 className="h2">Complexe argilo-humique</h2>
      <p className="p">
        Les aquariophiles néerlandais, spécialisés dans le{" "}
        <strong>développement des plantes aquatiques</strong>, utilisent depuis
        des décennies un substrat unique : le{" "}
        <strong>complexe argilo-humique</strong> (C.A.H.).
      </p>
      <p className="p">
        Ce substrat se compose d&apos;un mélange équilibré de{" "}
        <strong>matières organiques</strong> (humus), de <strong>sable</strong>,
        d&apos;<strong>hydrogène</strong>, de <strong>minéraux</strong>{" "}
        (calcium, potassium, magnésium, sodium), et d&apos;
        <strong>argile</strong>. L&apos;argile joue un rôle central en se lient
        à l&apos;humus pour former, sous l&apos;effet stabilisateur du calcium,
        un <strong>complexe argilo-humique</strong> capable de{" "}
        <strong>stocker les sels minéraux</strong> (ions de calcium, potassium,
        sodium) à sa surface et de les restituer aux plantes selon leurs
        besoins.
      </p>
      <p className="p">
        Ce mécanisme repose sur des échanges d&apos;ions entre les racines des
        plantes et le substrat, permettant de maintenir un{" "}
        <strong>équilibre minéral</strong> dans le sol. Le{" "}
        <strong>complexe argilo-humique</strong> agit ainsi comme un{" "}
        <strong>réservoir naturel</strong> d&apos;éléments nutritifs, offrant
        aux plantes un accès durable aux nutriments essentiels à leur
        croissance.
      </p>
      <p className="p">
        Ce type de sol est particulièrement apprécié dans les aquariums{" "}
        <strong>fortement plantés</strong>, car il favorise un développement
        sain et durable aux plantes, tout en contribuant à l&apos;
        <strong>équilibre biologique</strong> de l&apos;ensemble du système.
      </p>
      {/* <-- Complexe argilo-humique */}
      {/* Sous-sol Amano --> */}
      <h2 className="h2">Sous-sol &laquo; Amano &raquo;</h2>
      <p className="p">
        Takashi Amano, maître de l&apos;aquascaping, a révolutionné
        l&apos;aquariophilie en intégrant l&apos;esthétique des{" "}
        <strong>jardins japonais</strong> dans les aquariums, créant ainsi de
        véritables <strong>oeuvres d&apos;art vivantes</strong>. Ces aquariums
        sont le fruit d&apos;une approche minutieuse, centrée sur
        l&apos;équilibre naturel et la beauté. Chaque année, son influence
        culmine lors du{" "}
        <strong>International Aquatic Plant Layout Contest</strong>, un concours
        mondial célébrant les plus beaux paysages aquatiques.
      </p>
      <p className="p">
        Le substrat utilisé par Amano repose sur une version sophistiquée du{" "}
        <strong>complexe argilo-humique</strong>, constitué de composants
        spécifiques vendus sous sa propre marque. Ce mélange favorise un
        environnement optimal pour la <strong>croissance des plantes</strong> et
        l&apos;<strong>équilibre biologique</strong>.
      </p>
      <p className="p">
        <strong>☛ Composition du substrat Amano</strong> :
      </p>
      <ul className="list">
        <li>
          <strong>Matières humiques</strong> : Variantes spécifiques de régions
          géographiques, apportant des nutriments essentiels.
        </li>
        <li>
          <strong>Sable</strong> : Composé de{" "}
          <strong>pierres volcaniques poreuses</strong>, il assure une bonne{" "}
          <strong>circulation de l&apos;eau</strong> et offre un support idéal
          pour le <strong>développement de bactéries</strong> nécessaires à la
          vie aquatique.
        </li>
        <li>
          <strong>Tourmaline</strong> : Un silicate complexe, dont la formule
          chimique est{" "}
          <span className="bg-red-100 p-1 font-bold text-red-700">
            Al<sub>6</sub>Y<sub>3</sub>Na[(Si<sub>6</sub>O<sub>18</sub>)(BO
            <sub>3</sub>)<sub>3</sub>(OH,F)<sub>4</sub>] avec Y=Mg, (Fe, Mn) ou
            (Li, Al)
          </span>
        </li>
        <li>
          <strong>Bactéries</strong> : Différentes souches sont introduites pour{" "}
          <strong>accélérer le cycle de l&apos;azote</strong>, essentiel au
          démarrage de l&apos;écosystème.
        </li>
        <li>
          <strong>Charbon de bambou</strong> : Connu pour ses propriétés de{" "}
          <strong>clarification de l&apos;eau</strong>, il contribue à la pureté
          du milieu aquatique.
        </li>
        <li>
          <strong>Composants spécifiques</strong> : Le système Plocher, du{" "}
          <strong>carbonate de calcium</strong>, et des bâtonnets d&apos;
          <strong>argile cuite</strong> et de <strong>poudre de quartz</strong>{" "}
          pour favoriser un environnement sain.
        </li>
      </ul>
      <p className="p">
        Avec ce type de substrat, il est crucial de{" "}
        <strong>renouveler l&apos;eau fréquemment</strong> lors des premières
        semaines, pour éviter une accumulation de substances indésirables. Par
        la suite, un <strong>changement hebdomadaire</strong> d&apos;environ un
        tiers du volume de l&apos;eau est recommandé. De plus, le{" "}
        <strong>pH</strong> de l&apos;eau doit être maintenu en dessous de 7
        pour assurer un milieu optimal pour les plantes et la faune aquatique.
      </p>
      {/* <-- Sous-sol Amano */}
      {/* Système Plocher */}
      <h2 className="h2">Système Plocher</h2>
      <p className="p">
        Le <strong>Système Plocher</strong>, développé par l'Allemand{" "}
        <strong>Roland Plocher</strong> dans les années 1980, propose une
        approche unique pour améliorer les conditions de vie dans l'aquarium en
        stimulant les processus biologiques vitaux. Bien que ce système ait fait
        grand bruit à sa sortie, il n'a pas convaincu l'ensemble de la
        communauté scientifique.
      </p>
      <p className="p">
        <strong>☛ Les deux éléments clés du système Plocher sont :</strong>
      </p>
      <ul className="list">
        <li>
          <strong>Poudre de carbonate de calcium</strong> : Ce composé a pour
          objectif de{" "}
          <strong>stimuler naturellement les bactéries aérobies</strong>, les
          poissons et plantes en renforçant leurs processus vitaux. Pour
          l'utiliser correctement, il est recommandé d'ajouter{" "}
          <strong>un gramme pour 100 litres d'eau</strong> chaque semaine, en
          veillant à <strong>dissoudre la poudre dans un verre</strong> avant de
          l'introduire dans l'aquarium.
        </li>
        <li>
          <strong>Bâtonnets d'argile cuite et de poudre de quartz</strong> : Ces
          bâtonnets, introduits une semaine après la poudre de carbonate de
          calcium, sont censés{" "}
          <strong>favoriser les processus biologiques</strong> de manière plus
          active, constituant une{" "}
          <strong>solution de traitement à long terme</strong>. Leur{" "}
          <strong>durée de vie</strong> est importante, ce qui les rend durables
          dans le cadre de la maintenance de l'aquarium.
        </li>
        <li>
          Le <strong>Système Plocher</strong> est conçu pour{" "}
          <strong>régénerer l'eau</strong> de l'aquarium en améliorant
          progressivement les conditions de l'écosystème. Cependant, il est
          crucial de respecter les dosages recommandés pour éviter de perturber
          l'équilibre biologique existant, surtout lors de la{" "}
          <strong>première utilisation</strong> dans un aquarium déjà stable.
        </li>
      </ul>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Bien que les produits Plocher soient très coûteux, les résultats
            annoncés n'ont pas convaincu la communauté scientifique. Les études
            réalisés ont montré que les effets du système étaient principalement
            attribués aux propriétés naturelles de l'argile cuite dans l'eau, un
            élément déjà exploité dans des substrats tels que le{" "}
            <strong>complexe argilo-humique</strong>.
          </p>
        </div>
      </div>
      {/* END Système Plocher */}
      {/* Couche de gravier */}
      <h2 className="h2">Couche de graviers</h2>
      <p className="p">
        La couche de <strong>gravier</strong> d'une épaisseur de{" "}
        <strong>1 à 3 cm</strong> est essentielle pour recouvrir le substrat
        nutritif, empêchant ainsi le mélange avec l'eau de l'aquarium. Elle
        contribue également à l'esthétique de l'aquarium. Les graviers utilisés
        doivent avoir une granulométrie de <strong>2 à 3 mm</strong> et ne pas
        contenir de calcaire. Le <strong>sable de Loire</strong> et le{" "}
        <strong>quartz</strong> sont les choix les plus populaires.
      </p>
      <div className="alert alert-info">
        <Info />
        <div>
          <p>
            Il est crucial que les graviers ne soient pas trop petits, car cela
            entraînerait une <strong>compaction du sous-sol</strong>, bloquant
            la circulation de l'eau et rendant le substrat inefficace. Une
            granulométrie adéquate garantit la{" "}
            <strong>circulation de l'eau</strong> et de l'oxygène, favorisant
            ainsi la santé des plantes.
          </p>
        </div>
      </div>

      <p className="p">
        L'épaisseur recommandée pour la couche de gravier est en moyenne de{" "}
        <strong>4 à 5 cm</strong>. Avant de l'ajouter dans l'aquarium, le
        gravier doit être soigneusement <strong>rincé</strong> sous l'eau du
        robinet pour éviter de troubler l'eau du bac.
      </p>
      <div className="alert alert-info">
        <Info />
        <div>
          <p>
            Pour encourager l'enracinement des plantes, il est possible
            d'ajouter de la <strong>pouzzolane</strong> au compost. Ce matériau,
            une roche volcanique siliceuse à structure alvéolaire, améliore la
            stabilité et la fertilité du sous-sol.
          </p>
        </div>
      </div>
      <p className="p">
        ► Il est important de <strong>patienter plusieurs semaines</strong>{" "}
        après la mise en place d'un nouveau sous-sol avant d'introduire des
        poissons dans l'aquarium, afin de permettre aux bactéries et aux plantes
        de s'établir.
      </p>
      <p className="p">
        ► Pour des informations sur la mise en route d'un aquarium, consultez la
        section{" "}
        <Link href="/eau/dechets/start-aquarium" className="link link-primary font-semibold">
          ☛ Le processus de démarrage
        </Link>
        .
      </p>
      {/* END Couche de gravier */}
    </section>
  );
};

export default LeSousSolPage;
