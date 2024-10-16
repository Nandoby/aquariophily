import Link from "next/link";

const UneGaleriePage = () => {
  return (
    <section>
      <h1 className="h1">Galerie et rampe d&apos;éclairage</h1>

      <div role="alert" className="alert">
        <div>
          <p>
            <strong>Cette section sur la galerie d&apos;un aquarium</strong>{" "}
            aborde plusieurs thématiques essentielles :
          </p>
          <ul className="list ml-4">
            <li>
              <strong>Galerie ou rampe d&apos;éclairage</strong> : explorez les
              différentes options disponibles pour couvrir et éclairer un
              aquarium de manière optimale, point central de cette page.
            </li>
            <li>
              <Link
                className="link link-primary font-bold"
                href="/aquariums/galerie/realisation-galerie"
              >
                Réalisation d&apos;une galerie personnalisée
              </Link>{" "}
              : un guide pour créer une galerie sur mesure répondant à des
              critères spécifiques de place, d&apos;esthétique, ou de
              fonctionnalité.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="h2">Galerie ou rampe d&apos;éclairage</h2>
      <p className="p">
        Toutes les cuves d&apos;aquarium nécessitent un couvercle pour plusieurs
        raisons :
      </p>
      <ul className="list">
        <li>
          <strong>Empêcher les poissons de sauter hors de l&apos;eau</strong>
        </li>
        <li>
          <strong>Réduire l&apos;évaporation de l&apos;eau</strong>
        </li>
        <li>
          <strong>Protéger l&apos;eau de la poussière</strong>
        </li>
        <li>
          <strong>Supporter les sources lumineuses</strong>
        </li>
      </ul>
      <p className="p">
        Différentes solutions sont envisageables pour cette fonction :
      </p>
      <ul className="list">
        <li>
          Une <strong>galerie intégrée</strong> à l&apos;aquarium dès sa
          conception.
        </li>
        <li>
          Une <strong>galerie indépendante</strong> qui repose sur la cuve.
        </li>
        <li>
          Une <strong>rampe d&apos;éclairage suspendue</strong> au-dessus de
          l&apos;aquarium
        </li>
      </ul>
      <p className="p">
        Certaines galeries sont équipées d&apos;un système qui permet de les{" "}
        <strong>pivoter</strong> partiellement ou complètement pour faciliter
        l&apos;accès à l&apos;intérieur du bac.
      </p>
      <p className="p">
        La plupart des galeries disponibles dans le commerce sont fabriquées en{" "}
        <strong>plastique</strong>, généralement en PVC (polychlorure de
        vinyle). Les accessoires comme les ballasts, starters ou horloges
        peuvent être intégrés directement dans la galerie ou installés à
        l&apos;exterieur, à l&apos;abri de l&apos;humidité.
      </p>
      <p className="p">
        Les lampes d&apos;aquarium incluent souvent des{" "}
        <strong>douilles étanches</strong> et des <strong>réflecteurs</strong>{" "}
        pour améliorer la diffusion de la lumière. Certaines galeries sont
        également équipées de <strong>ventilateurs</strong> pour refroidir les
        lampes, prolongeant ainsi leur durée de vie et empêchant une
        augmentation excessive de la température de l&apos;eau.
      </p>
      <p className="p">
        Dans le commerce, on trouve des galeries et rampes d&apos;éclairage avec
        des systèmes complets, mais ces solutions présentent quelques
        inconvénients : elles sont souvent{" "}
        <strong>lourdes, difficiles à manipuler</strong>, et peuvent poser des
        problèmes de <strong>sécurité électrique</strong>. Par ailleurs, il est
        essentiel de sélectionner soigneusement les{" "}
        <strong>tubes fluorescents</strong> et de définir la durée
        d&apos;éclairage pour s&apos;adapter au type de bac.
      </p>
      <ul className="list">
        <li>
          Les <strong>ensembles cuve et galerie</strong> du commerce sont
          souvent conçus pour l&apos;esthétique, intégrant des bandeaux en{" "}
          <strong>aluminium anodisé</strong> ou en plastique pour masquer la
          galerie et le sol de l&apos;aquarium.
        </li>
        <li>
          Cependant, ces galeries{" "}
          <strong>ne facilitent pas toujours l&apos;entretien</strong> de
          l&apos;aquarium : l&apos;accès à l&apos;intérieur est souvent limité à
          un tiers de la surface ou nécessite le démontage complet de la
          galerie. De plus, elles n&apos;offrent souvent{" "}
          <strong>pas assez de lampes</strong> pour un bon développement des
          plantes.
        </li>
        <li>
          Il est possible de <strong>modifier</strong> une galerie du commerce
          pour la rendre pivotante sans avoir à la démonter, mais cela ne
          permettra <strong>pas d&apos;ajouter de lampe supplémentaire</strong>.
          Le type de modifications à effectuer dépendra du modèle acheté.
        </li>
      </ul>

      <h2 className="h2">L&apos;entretien d&apos;une galerie</h2>
      <p className="p">
        L&apos;entretien d&apos;une galerie consiste principalement en un{" "}
        <strong>nettoyage régulier</strong> des parois, en particulier à
        l&apos;intérieur. Cela permet d&apos;éliminer les{" "}
        <strong>traces d&apos;algues</strong>, de <strong>mousses</strong> ou{" "}
        <strong>dépôts de calcaire</strong> qui peuvent s&apos; y accumuler avec
        le temps.
      </p>

      <div role="alert" className="alert my-6">
        ► Pour l&apos;entretien des sources lumineuses, consultez la section :{" "}
        <Link
          className="link-active link font-semibold"
          href="/aquariums/eclairage/maintenance-eclairage"
        >
          La maintenance de l&apos;éclairage
        </Link>
      </div>
    </section>
  );
};

export default UneGaleriePage;
