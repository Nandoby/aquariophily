import { AlertCircle, Info } from "lucide-react";

const PuissanceFlux = () => {
  return (
    <section>
      <h1 className="h1">
        Puissance et flux d&apos;énergie lumineuse pour l&apos;éclairage
        d&apos;un aquarium
      </h1>
      <h2 className="h2">L&apos;énergie lumineuse</h2>
      <p className="p">
        L&apos;énergie lumineuse des sources d&apos;éclairage est influencée par
        plusieurs facteurs cruciaux pour l&apos;éclairage d&apos;un aquarium :
      </p>
      <ul className="list">
        <li>
          <strong>La puissance électrique consommée</strong>, le{" "}
          <strong>flux lumineux</strong>, et le{" "}
          <strong>rendement des sources lumineuses</strong>, qui déterminent
          l&apos;efficacité de l&apos;éclairage, ainsi que la{" "}
          <strong>durée journalière de l&apos;éclairage</strong> nécessaire pour
          maintenir l&apos;équilibre du bac.
        </li>
        <li>
          Le <strong>spectre lumineux</strong>, la{" "}
          <strong>température de couleur</strong> et le{" "}
          <strong>rendu des couleurs</strong> affectent non seulement la
          croissance des plantes, mais aussi l&apos;aspect visuel du bac et le
          confort des pensionnaires.
        </li>
        <li>
          <strong>La durée de vie des sources lumineuses</strong>, élément à
          considérer pour leur entretien et remplacement.
        </li>
      </ul>
      <p className="p text-red-600 font-semibold">
        ☛ Cette page traite des points suivants :
      </p>
      <ul className="list">
        <li>La puissance électrique consommée.</li>
        <li>Le flux lumineux.</li>
        <li>Le rendement des sources lumineuses.</li>
        <li>
          L&apos;adaptation des besoins selon le comportement de
          l&apos;aquarium.
        </li>
        <li>La durée de l&apos;éclairage.</li>
      </ul>

      <h2 className="h2">La puissance électrique</h2>
      <p className="p">
        La puissance électrique, ou l&apos;énergie consommée par une source
        lumineuse, détermine la consommation électrique de votre aquarium et,
        par conséquent, le coût de l&apos;éclairage. Elle est mesurée en watts
        (W).
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            La puissance électrique d&apos;une source lumineuse, exprimée en
            watts, ne permet plus aujourd&apos;hui de déterminer directement le
            flux lumineux ou l&apos;énergie lumineuse correspondante. En effet,
            les nombreuses sources lumineuses disponibles présentent des
            rendements très variés entre la puissance électrique consommée et le
            flux lumineux généré.
          </p>
        </div>
      </div>
      <div role="alert" className="alert alert-warning my-3">
        <AlertCircle />
        <div>
          <p>
            Les besoins en éclairage d&apos;un aquarium ne s&apos;expriment plus
            en watts dissipés, mais en flux lumineux mesuré en lumens.
          </p>
        </div>
      </div>
      <p className="p">
        La quantité de lumière nécessaire pour assurer un bon processus de
        photosynthèse dans un aquarium était auparavant exprimée en{" "}
        <strong>watts dissipés</strong> par litre d&apos;eau. Cependant, cette
        méthode est aujourd&apos;hui <strong>obsolète</strong> en raison de
        l&apos;arrivée de multiples types de sources lumineuses dont le{" "}
        <strong>rendement lumineux</strong> par watt varie considérablement
        selon la <strong>technologie</strong>, le <strong>modèle</strong> ou le{" "}
        <strong>fabricant</strong>. Ce phénomène est d&apos;ailleurs bien
        visible avec les <strong>lampes basse consommation</strong>,{" "}
        <strong>fluocompactes</strong>, ou <strong>LED</strong> utilisées dans
        les habitations.
      </p>

      <h2 className="h2">Le flux lumineux</h2>
      <p className="p">
        Le <strong>flux lumineux</strong>, exprimé en{" "}
        <strong>lumen (lm)</strong>, mesure l&apos;intensité lumineuse visible
        ar l&apos;oeil humain émise par une source lumineuse.
      </p>
      <p className="p">
        Cette information est généralement indiquée sur l&apos;emballage des{" "}
        <strong>lampes de basse consommation</strong> destinées à
        l&apos;habitat, mais il peut manquer sur les emballages des{" "}
        <strong>tubes fluorescents</strong> et d&apos;autres sources utilisées
        en aquariophilie. Cependant, il est parfois accessible sur le site web
        du <strong>fabricant</strong>.
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Une partie seulement du <strong>flux lumineux</strong> d&apos;une
            source contribue à l&apos;éclairage d&apos;un aquarium
          </p>
        </div>
      </div>
      <p className="p">
        Le <strong>flux lumineux</strong> indique la quantité globale de lumière
        émise par une source dans toutes les directions et sur l&apos;ensemble
        de son spectre. Cependant, le flux lumineux utile pour un aquarium ne
        correspond qu&apos;à la partie de ce flux qui est dirigée vers la
        surface de l&apos;eau, englobant uniquement les longueurs d&apos;onde
        nécessaires à la croissance des plantes et à un bon rendu des couleurs
        pour le spectateur.
      </p>
      <div className="alert alert-info">
        <Info />
        <div>
          <p>
            Les <strong>tubes fluorescents</strong>, qui diffusent la lumière
            sur <strong>360°</strong>, envoient une partie importante du flux
            lumineux vers l&apos;extérieur de l&apos;aquarium.
            L&apos;installation d&apos;un <strong>réflecteur</strong> pour
            chaque tube au sein de la galerie de l&apos;aquarium permet,
            s&apos;il est bien entretenu, de gagner entre{" "}
            <strong>10 et 30</strong> % de flux lumineux renvoyé vers la
            surface.
          </p>
          <p>
            Les <strong>sources à base de LED</strong> diffusent la lumière sous
            un angle plus restreint, de <strong>90</strong>° ou{" "}
            <strong>180</strong>°, ce qui limite ainsi la déperdition du flux
            lumineux.
          </p>
        </div>
      </div>
      <div className="alert alert-warning my-3">
        <AlertCircle />
        <div>
          <p>
            L&apos;intensité du <strong>flux lumineux</strong> décroît avec la{" "}
            <strong>masse d&apos;eau</strong> traversée.
          </p>
        </div>
      </div>
      <p className="p">
        Le <strong>flux lumineux</strong> restant en fonction de la{" "}
        <strong>profondeur d&apos;eau</strong>, dans une eau moyennement claire,
        varie considérablement :
      </p>
      <div className="overflow-x-auto">
        <h3 className="text-sm font-bold text-red-600 text-center mt-3">
          Perte de flux lumineux en fonction de la hauteur d&apos;eau
        </h3>
        <table className="table">
          <tbody>
            <tr>
              <th>Hauteur d&apos;eau traversée par le flux lumineux en cm</th>
              <td>0</td>
              <td>30</td>
              <td>40</td>
              <td>50</td>
              <td>60</td>
              <td>70</td>
            </tr>
            <tr>
              <th>Perte de flux en %</th>
              <td>0</td>
              <td>25</td>
              <td>33</td>
              <td>39</td>
              <td>45</td>
              <td>50</td>
            </tr>
            <tr>
              <th>Flux résiduel en %</th>
              <td>100</td>
              <td>75</td>
              <td>67</td>
              <td>55</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="alert alert-info my-3">
        <Info />
        <div>
          <p>
            La <strong>pénétration de la lumière</strong> dans l&apos;eau est
            optimale à travers une surface d&apos;eau légèrement en mouvement,
            car la <strong>réflexion de la lumière</strong> à la surface est
            réduite.
          </p>
          <p>
            Évitez d&apos;utiliser un <strong>couvercle en verre</strong>, car
            celui-ci absorbe <strong>3 à 5</strong> % du flux lumineux, même
            lorsqu&apos;il est soigneusement nettoyé.
          </p>
        </div>
      </div>

      <div className="alert alert-warning my-3">
        <AlertCircle />
        <div>
          <p>
            Les besoins en <strong>lumière</strong> d&apos;un aquarium dépendent
            de sa <strong>configuration</strong>.
          </p>
        </div>
      </div>

      <p className="p">
        Les besoins en <strong>éclairage</strong> d&apos;un <strong>bac</strong>{" "}
        dépendent de sa <strong>surface</strong>, de sa{" "}
        <strong>hauteur d&apos;eau</strong>, ainsi que de la{" "}
        <strong>densité</strong> et de la <strong>nature</strong> de la
        plantation. Certaines <strong>plantes</strong> préfèrent des conditions
        de faible luminosité, tandis que d&apos;autres en exigent davantage.
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Les besoins en <strong>éclairage</strong> d&apos;un aquarium{" "}
            <strong>très planté</strong> sont en moyenne deux fois plus élevés
            que ceux d&apos;un bac avec une{" "}
            <strong>végétation clairsemée</strong>
          </p>
          <p>
            La <strong>densité</strong> et la <strong>nature</strong> des
            plantes, qu&apos;elles soient plus ou moins exigeantes en{" "}
            <strong>lumière</strong>, ne représentent pas une situation figée.
            En effet, la <strong>plantation</strong> peut évoluer au cours de la
            première année, selon les désirs ou la réussite de l'aquariophilie.
          </p>
        </div>
      </div>
      <p className="p">
        Tablez sur une <strong>évaluation de départ</strong> avec un besoin en{" "}
        <strong>éclairage</strong> de 20 à 40 <strong>lumens</strong> par litre
        d'eau, avec une moyenne de 30 lm/L pour un bac moyennement planté.
        Ensuite, vous pourrez ajuster progressivement l&apos;
        <strong>éclairage</strong> selon les besoins de l'aquarium.
      </p>
      <p className="p">
        Un <strong>flux lumineux insuffisant</strong> ou une{" "}
        <strong>source lumineuse</strong> en fin de vie réduit le rendement du{" "}
        <strong>processus de photosynthèse</strong>, empêchant ainsi le bon
        développement des plantes, qui finissent par dépérir.
      </p>

      <h2 className="h2">Le rendement des sources lumineuses</h2>
      <p className="p">
        Le <strong>rendement lumineux</strong> d'une source, exprimé en{" "}
        <strong>lumens par watt</strong> (lm/W), permet de comparer les
        performances entre différentes sources lumineuses et fabricants. Cette
        comparaison est courante pour les produits destinés au grand public,
        mais reste difficile pour les sources d&apos;
        <strong>aquariophilie</strong>, en raison du manque d'informations
        disponibles.
      </p>

      <h2 className="h2">
        Adaptation des besoins en éclairage au comportement de l'aquarium
      </h2>
      <p className="p">
        ☛ Déterminer avec précision le <strong>flux lumineux</strong> nécessaire
        au bon développement d'un bac est souvent complexe. Après quelques
        semaines ou mois d'observation, il devient parfois nécessaire d'ajuster
        la quantité et la qualité de lumière diffusée en fonction des besoins
        réels de l'aquarium. Pour cela, il est essentiel de pouvoir :
      </p>
      <ul className="list">
        <li>
          <strong>Modifier la durée d'éclairage</strong>, entre 10 et 13 heures
          par jour, en jouant sur une ou plusieurs sources lumineuses.
        </li>
        <li>
          <strong>Ajouter ou supprimer une source lumineuse</strong>, afin
          d'accélerer ou ralentir la croissance des plantes.
        </li>
        <li>
          <strong>Changer le type de source</strong>, pour mieux adapter le
          spectre lumineux aux besoins spécifiques du bac.
        </li>
      </ul>
      <div role="alert" className="alert alert-warning">
        <AlertCircle />
        <div>
          <p>
            Attention, les aquariums commercialisés dans le secteur de l&apos;
            <strong>aquariophilie</strong> sont souvent sous-équipés en termes
            d&apos;éclairage.
          </p>
          <p>
            Pour un programme de <strong>remplacement des lampes</strong>,
            l&apos;aquariophile est le meilleur juge. Il suffit d&apos;observer
            l&apos;aquarium : si les plantes cessent de pousser ou si des algues
            apparaissent, cela peut indiquer qu&apos;un ajustement de
            l&apos;éclairage est nécessaire.
          </p>
        </div>
      </div>

      <h2 className="h2">La durée d&apos;éclairage d&apos;un aquarium</h2>
      <p className="p">
        La majorité des <strong>animaux</strong> et <strong>plantes</strong>{" "}
        présents dans les aquariums proviennent de régions tropicales, où la
        lumière du jour dure environ 12 heures, avec des périodes intenses de 9
        à 10 heures. Il est donc recommandé de simuler cette luminosité
        tropicale dans l&apos;aquarium, tout en garantissant une période de{" "}
        <strong>repos nocturne</strong> de 8 à 9 heures.
      </p>
      <p>
        Pour débuter, prévoyez <strong>12 heures d&apos;éclairage</strong> par
        jour, à ajuster si nécessaire.
      </p>
      <p>
        L&apos;éclairage doit être continu, du matin jusqu&apos;au soir, sans
        interruptions. Un <strong>fractionnement</strong> perturberait le rythme
        naturel des <strong>poissons</strong> et des <strong>plantes</strong>,
        et une faible intensité lumineuse ne peut pas être compensée par une
        durée plus longue d&apos;éclairage.
      </p>

      <ul className="list">
        <li>
          L&apos;utilisation d'une <strong>horloge programmable</strong> est
          essentielle pour gérer efficacement la durée d&apos;éclairage de
          l&apos;aquarium.
        </li>
      </ul>

      <div role="alert" className="alert alert-warning">
        <AlertCircle />
        <div>
          <p>
            Évitez d&apos;éclairer votre aquarium de six heures du matin à
            minuit, même si vous êtes éveillé !
          </p>
          <p>
            Pendant la période de <strong>démarrage</strong> d'un aquarium, il
            est conseillé de réduire l'éclairage de deux heures ou d'éteindre
            une source afin de permettre aux plantes nouvellement introduites de
            s'adapter sans risque de prolifération d'algues. Une fois que les
            plantes génèrent de nouvelles feuilles, vous pouvez restaurer
            l'éclairage optimal.
          </p>
        </div>
      </div>
      <p className="p">
        En plus de la quantité de lumière exprimée en{" "}
        <strong>flux lumineux</strong> (lumens) et en durée d'éclairage, un
        spectre lumineux adéquat est crucial pour assurer le bon développement
        des plantes ou des coraux et mettre en valeur les couleurs vibrantes de
        vos pensionnaires.
      </p>
    </section>
  );
};

export default PuissanceFlux;
