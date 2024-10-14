import { Info } from "lucide-react";

const MaintenanceEclairagePage = () => {
  return (
    <section>
      <h1 className="h1">Maintenance de l'éclairage d'un aquarium</h1>
      <h2 className="h2">
        L'entretien et la maintenance des sources d'éclairage
      </h2>

      <p className="p">
        Les <strong>lampes doivent être changées régulièrement</strong>, même si
        elles semblent fonctionner correctement à l'oeil nu. En effet, avec le
        temps, le spectre lumineux se dégrade, ce qui peut ralentir la
        croissance des plantes et favoriser l'apparition d'algues.
      </p>
      <p className="p">
        La <strong>durée de vie des tubes fluorescents</strong> dédiés à
        l'aquariophilie n'est souvent pas clairement indiquée par les
        distributeurs. En général, il est recommandé tous les 18 mois à deux
        ans. Les <strong>tubes T5</strong> auraient une durée de vie légèrement
        plus longue, environ un an de plus que les <strong>tubes T8</strong>.
        Toutefois, le véritable indicateur pour changer les tubes doit être
        l'état des plantes et l'apparition d'algues.
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            <strong>Remplacer les lampes chaque année</strong> devient de moins
            en moins nécessaire, malgré les recommandations de certains
            vendeurs. Beaucoup conseillent un remplacement après seulement 4 000
            heures de fonctionnement, alors que la{" "}
            <strong>durée de vie réelle des tubes</strong> se situe généralement
            entre 6 000 et 10 000 heures.
          </p>
          <p>
            Il arrive parfois, bien que rarement, qu'un tube devienne défectueux
            rapidement, après seulement <strong>quatre à six mois</strong>{" "}
            d'utilisation. Dans ce cas, son <strong>spectre lumineux</strong> se
            dégrade fortement, ce qui peut entraîner une apparition soudaine
            d'algues <strong>brunes ou noires</strong>. Ce phénomène est souvent
            inattendu, et on pense pas immédiatement à l'éclairage comme cause
            de cette prolifération. Toutefois <strong>remplacer le tube</strong>{" "}
            et <strong>éliminer manuellement les algues</strong> permet en
            général de remettre l'aquarium sur la bonne voie.
          </p>
        </div>
      </div>

      <p className="p">
        Les tubes fluorescents se dégradent plus rapidement lorsqu'ils sont
        exposés à des <strong>températures élevées</strong>, ce qui se manifeste
        souvent par un <strong>noircissement à l'une des extrémités</strong> du
        tube. Ce problème est fréquemment observé dans les installations
        aquariophiles où les tubes sont confinés. Pour prolonger leur durée de
        vie, il est conseillé de <strong>ventiler les tubes</strong> placés
        au-dessus de l'aquarium.
      </p>

      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Une lampe qui <strong>clignote</strong> ou ne s'allume plus doit
            être remplacée <strong>immédiatement</strong>. Un tube défectueux
            peut non seulement{" "}
            <strong>affecter la qualité de l'éclairage</strong> de l'aquarium,
            mais aussi <strong>stresser les plantes et les poissons</strong>. De
            plus, laisser un tube clignotant en place peut entraîner une{" "}
            <strong>usure prématurée du ballast</strong> et réduire la durée de
            vie des autres composants du système d'éclairage.
          </p>
        </div>
      </div>

      <p className="p">
        Le <strong>starter</strong> des lampes équipées d'un ballast
        électromagnétique s'use très peu, surtout si l'éclairage de l'aquarium
        est limité à{" "}
        <strong>un seul allumage et une seule extinction par jour</strong>.
        Cette faible sollicitation contribue à prolonger sa durée de vie.
      </p>
      <p className="p">
        Cependant, il est crucial de{" "}
        <strong>nettoyer régulièrement les tubes et les réflecteurs</strong>{" "}
        pour éviter l'accumulation de <strong>dépôts d'eau et d'algues</strong>,
        causée notamment par une <strong>aération vigoureuse</strong> ou l'
        <strong>évaporation de l'eau</strong>. Ces dépôts peuvent{" "}
        <strong>réduire l'efficacité de l'éclairage</strong> en bloquant une
        partie du flux lumineux, ce qui peut avoir un impact négatif sur les
        plantes et la clarté de l'aquarium.
      </p>

      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Lors de la mise en place ou du remplacement d'un{" "}
            <strong>tube fluorescent</strong>, il est recommandé de{" "}
            <strong>talquer les embouts étanches</strong> à l'intérieur avant
            d'insérer le tube. Cette précaution permet de{" "}
            <strong>réduire, voire de supprimer, le colmatage</strong> entre
            l'embout et le tube. Un embout colmaté peut rendre l'extraction du
            tube extrêmement difficile, augmentant le risque de{" "}
            <strong>casse de l'embout</strong> lors du remplacement du tube.
            Cette étape simple garantit une manipulation plus facile lors des
            futurs changements de lampe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceEclairagePage;
