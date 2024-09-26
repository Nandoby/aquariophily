import { AlertCircle } from "lucide-react";
import Image from "next/image";

const RealisationCuvePage = () => {
  return (
    <section>
      <h1 className="h1">Réalisation d'une cuve d'aquarium en verre collé</h1>

      <h2 className="h2">Les avantages d'une cuve d'aquarium personnalisée</h2>

      <p className="p">
        L'achat d'un aquarium tout équipé comporte souvent certaines limites :
        un éclairage mal adapté, une filtration insuffisante, un chauffage
        inapproprié, et des équipements généralement de qualité basique. Ces
        ensembles offrent des performances modestes, bien que leur prix soit
        souvent attractif.
      </p>

      <p className="p">
        De plus, que l'on opte pour une cuve nue ou un aquarium équipé, les
        dimensions ne correspondent pas toujours à l'espace disponible.
      </p>

      <p className="important">
        ☛ C'est pourquoi concevoir et fabriquer une cuve personnalisée en verre
        collé devient une option intéressante.
      </p>

      <p className="p">
        Un aquariophile expérimenté ou un bricoleur averti peut soit commander
        une cuve sur mesure, soit la fabriquer lui-même. Ensuite, en fonction de
        ses besoins et de la qualité des matériaux choisis, il peut sélectionner
        les équipements nécessaires au bon fonctionnement de son aquarium.
      </p>

      <h2 className="h2">Le choix des vitres pour construire un aquarium</h2>

      <p className="p">
        Pour fabriquer une cuve d'aquarium, il est conseillé de faire appel à un
        miroitier pour obtenir des vitres découpées sur mesure, avec une coupe
        franche sans façonnage. Il suffira ensuite d'ébavurer les arêtes avec
        une pierre à affûter en grès, en prenant soin de ne pas rayer le verre,
        puis de bien dégraisser les surfaces à coller à l'acétone ou à l'alcool
        dénaturé.
      </p>

      <p className="p">
        Le verre utilisé sera de la dalle ordinaire, recuite, polie et
        transparente. Toutefois, pour réduire les coûts, et uniquement si c'est
        plus économique, on peut opter pour une dalle brute granitée pour le
        fond et la vitre arrière, surtout si celle-ci est adossée à un mur.
      </p>

      <p className="p">
        Il est déconseillé d'utiliser du verre sécurit, qui est non seulement
        plus cher, mais aussi plus dangereux en cas de choc violent, car il peut
        éclater. En revanche, le verre ordinaire a l'avantage de simplement se
        fissurer.
      </p>

      <p className="p">
        L'épaisseur des vitres dépend principalement de la hauteur d'eau et de
        la plus grande dimension de l'aquarium, généralement la face avant. Il
        est crucial de prendre en compte la pression de l'eau sur les vitres et
        la capacité du verre à se déformer en s'incurvant sur de longues
        distances.
      </p>

      <p className="p">
        Voici quelques indications pour choisir approximativement l'épaisseur
        des vitres en fonction de ces critères :
      </p>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <tbody>
            <tr>
              <th>Hauteur d'eau en cm</th>
              <td>25</td>
              <td>30</td>
              <td>35</td>
              <td>40</td>
              <td>50</td>
              <td>50</td>
              <td>60</td>
              <td>60</td>
              <td>70</td>
            </tr>
            <tr>
              <th>Longueur de la cuve en cm</th>
              <td>&lt; 60</td>
              <td>&lt; 60</td>
              <td>&lt; 60</td>
              <td>&lt; 100</td>
              <td>&lt; 120</td>
              <td>&gt; 120 &lt; 200</td>
              <td>&lt; 140</td>
              <td>&gt; 140 &lt; 250</td>
              <td>&lt; 250</td>
            </tr>
            <tr>
              <th>Epaisseur de la glace en mm</th>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>8</td>
              <td>10</td>
              <td>10</td>
              <td>12</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="alert alert-warning">
        <AlertCircle />
        <div>
          Pour les cuves dont la hauteur est de 25 ou 30 cm, il est préférable
          de choisir des glaces de 5 mm d'épaisseur pour en faciliter
          l'encollage, alors qu'une épaisseur des glaces de 3 ou 4 mm est
          théoriquement suffisante.
        </div>
      </div>

      <h2 className="h2">
        Choisir les dimensions de votre cuve pour un aquarium personnalisé
      </h2>

      <p className="p">
        Les dimensions d'un aquarium dépend des objectifs de l'aquariophile
        ainsi que de l'espace disponible. Toutefois, il est essentiel de prendre
        en compte une contrainte majeure : les dimensions standardisées des
        lampes d'éclairage. En effet, la longueur des tubes fluorescents
        détermine généralement la longueur de la cuve.
      </p>

      <p className="p">
        ☛ Les tubes traditionnels les plus répandus, et donc les plus
        abordables, sont disponibles dans les dimensions suivantes :
      </p>

      <ul className="list">
        <li>
          <strong>Tubes T8 (diamètre 25 mm) :</strong> <br />
          45 cm pour 15 W, 90 cm pour 30 W, 120 cm pour 36 W
        </li>
        <li>
          <strong>Tubes T5 (diamètre 16 mm) :</strong> <br />
          55 cm pour 24 W, 85 cm pour 39 W, 115 cm pour 54 W, 145 cm pour 80 W
        </li>
      </ul>

      <p className="p">
        Pour faciliter l'installation et le remplacement des tubes, la longueur
        intérieure de la cuve doit être supérieure de 6 à 10 cm à celle des
        tubes choisis, permettant ainsi d'ajuster les embouts étanches et
        d'assurer un éclairage homogène sur toute la surface de l'aquarium.
      </p>

      <p className="p">
        ☛ Les dimensions des vitres d'un aquarium se calculent de la manière
        suivante :
      </p>

      <ul className="list">
        <li>
          <strong>Vitre de fond :</strong>
          <br />
          Sa longueur et sa largeur correspondent exactement aux dimensions
          finales de l'aquarium (L, l)
        </li>
        <li>
          <strong>Vitre avant et arrière :</strong>
          <br />
          Leur longueur (L) est identique à celle de la vitre de fond, sur
          laquelle elles reposent, et leur hauteur (h) est égale à la hauteur de
          l'aquarium, diminuée de l'épaisseur des vitres (H - e).
        </li>
        <li>
          <strong>Vitres latérales :</strong>
          <br />
          Leur longueur (l) correspond à la largeur de la vitre de fond, moins
          l'épaisseur des vitres avant et arrières et 2 mm de colle (soit : l -
          2e - 2). Leur hauteur (h) est calculée de la même façon que celle des
          vitres avant et arrière (H - e).
        </li>
      </ul>

      <div className="alert alert-warning">
        <AlertCircle />
        <div>
          <p>
            La précision des coupes de verre effectuées par un professionnel est
            telle qu'il n'est plus nécessaire de prévoir une marge pour
            d'éventuelles erreurs de coupe.
          </p>
          <p>
            La hauteur de l'aquarium sera légèrement augmentée d'environ 1 mm,
            correspondant à l'épaisseur de la colle entre le fond et les parois.
          </p>
        </div>
      </div>

      <p className="p">
        ☛ La longueur d'un aquarium, qu'il soit fabriqué ou acheté sur mesure,
        doit correspondre aux dimensions standardisées des tubes fluorescents
        disponibles. Cela permet d'éviter les zones mal éclairées et de
        remplacer facilement une lampe défectueuse, en suivant le schéma suivant
        :
      </p>

      <div className="flex justify-center my-6">
        <Image
          src="/assets/dimension-aquarium.jpg"
          alt="Dimension aquarium"
          width={600}
          height={600}
        />
      </div>

      <p className="p">
        Ainsi, la longueur de l'aquarium devra dépasser celle des tubes
        d'éclairage choisis de 10 à 12 cm, en laissant un espace &laquo; s
        &raquo; d'environ 3 à 4 cm.
      </p>

      <h2 className="h2">Plaques de renfort et supports de galerie</h2>
      <p className="p">
        Pour les aquariums de grande taille, il est essentiel d'ajouter des
        renforts intérieurs afin de prévenir toute déformation des vitres avant
        et arrière. Même lorsqu'ils ne sont pas indispensables, ces renforts
        peuvent être utilisés comme supports pour la galerie d'éclairage.
      </p>
      <p className="p">
        Ces renforts doivent être réalisés avec des plaques de verre de la même
        épaisseur que les vitres de l'aquarium. Leur largeur doit correspondre à
        5 ou 6 fois l'épaisseur des vitres (5e), tandis que leur longueur sera
        celle de l'aquarium (L), diminuée de chaque côté de l'espace nécessaire
        pour le passage de divers équipements (siphon, thermostat, tuyauteries),
        soit environ 5 cm de chaque côté. La longueur totale des renforts sera
        donc de (L - 10 cm).
      </p>
      <p className="p">
        Les supports de galerie doivent être fixés horizontalement, sur la
        tranche, à 1 cm du bord intérieur et supérieur des vitres avant et
        arrière. Ils permettent ainsi d'encastrer la galerie d'éclairage,
        empêchant toute sortie d'eau du bac vers l'extérieur et réduisant les
        risques d'évasion pour les poissons sauteurs.
      </p>
      <div className="flex justify-center my-6">
        <Image
          src="/assets/renfort-support-galerie.jpg"
          alt="Dimension aquarium"
          width={600}
          height={600}
        />
      </div>

      <div className="alert alert-warning">
        <AlertCircle />
        <div>
          Les supports de galerie pour les petites cuves peuvent être fixés sur
          les parois latérales de l'aquarium.
        </div>
      </div>

      <p className="p">
        La colle à utiliser doit être un mastic silicone translucide
        spécialement conçu pour les aquariums. Elle est fournie en cartouche
        pour pistolet et ne doit contenir aucun agent antibactérien,
        anti-moisissure ou autre additif.
      </p>

      <h2 className="h2">
        La réalisation de la cuve : assemblage final des vitres
      </h2>

      <p className="p font-bold">☛ Étapes d'assemblage de la cuve :</p>

      <ol className="list-decimal *:my-3 marker:text-red-600 marker:font-semibold">
        <li>
          <strong>Transport des vitres :</strong> Manipulez les vitres avec
          précaution pour éviter tout choc ou rayure. Séparez-les avec des
          cartons ou des couvertures pour les protéger.
        </li>
        <li>
          <strong>Ébavurage</strong> : À réception, ébavurez les arêtes des
          vitres à l'aide d'une pierre à affûter en grès, en veillant à ne pas
          les rayer, afin d'éviter les blessures.
        </li>
        <li>
          <strong>Dégraissage</strong> : Nettoyez soigneusement les vitres avec
          de l'acétone, en insistant particulièrement sur les zones à coller.
          Évitez de toucher ces surfaces avec les mains par la suite, car la
          colle ne tolère aucune trace de matières organiques. Laissez sécher
          avant d'appliquer la colle.
        </li>
        <li>
          <strong>Préparation de la surface de travail</strong> : Disposez les
          vitres à plat sur un support propre et plan, protégé par une
          couverture, des journaux ou des cartons, afin de les isoler du contact
          direct avec le support. <br />
          <div className="flex justify-center">
            <Image
              src="/assets/encollage-glaces.jpg"
              alt="encollage glaces"
              width={600}
              height={600}
            />
          </div>
        </li>
        <li>
          <strong>Encollage</strong> : Appliquez un ruban de colle au centre des
          surfaces à coller, en utilisant le pistolet à colle. Cela doit couvrir
          tout le pourtour de la vitre de fond ainsi que les côtés correspondant
          à la hauteur des vitres avant et arrière. La largeur du ruban doit
          être proportionnelle à l'épaisseur des vitres pour garantir un joint
          de colle d'environ 1 mm d'épaisseur une fois l'assemblage terminé.
        </li>
        <li>
          <strong>Assemblage</strong> : Commencez par fixer les deux petits
          côtés en utilisant des cales préparées à l'avance. Placez ensuite la
          vitre arrière, suivie de la vitre avant, en appliquant une légère
          pression pour permettre à la colle de déborder légèrement sur tous les
          côtés, éliminant ainsi les espaces vides et les bulles d'air. Une fois
          l'adhérence suffisante, vous pouvez relâcher les vitres.
        </li>
        <li>
          <strong>Vérification</strong> : Vérifiez immédiatement l'équerrage et
          corrigez-le délicatement tout en maintenant une pression minimale sur
          les vitres, en utilisant du ruban adhésif en haut et en bas sur les
          quatre côtés.
        </li>
        <li>
          <strong>Renforcement des joints</strong> : Profitez des bavures
          intérieures de colle pour renforcer les joints et assurer
          l'étanchéité. Si ces bavures sont insuffisantes ou manquantes, ajoutez
          un peu de colle dans les angles pour obtenir un joint adéquat.
          Utilisez un outil spécial pour mastic ou une spatule à lisser, ou
          simplement votre doigt, pour étaler la colle uniformément le long des
          angles.
        </li>
        <li>
          <strong>Temps de séchage</strong> : Attendez entre 24 et 48 heures
          avant de manipuler la cuve.
        </li>
        <li>
          <strong>Retrait des bavures</strong> : Enlevez les excès de colle avec
          une lame de rasoir.
        </li>
        <li>
          <strong>Collage des renforts</strong> : Commencez par bien nettoyer
          les surfaces à coller et laissez-les sécher. Posez l'aquarium sur la
          face avant et collez le renfort verticalement à 1 cm du bord
          supérieur, centré sur la paroi. Attendez 24 heures avant de répéter la
          procédure pour la vitre arrière.
        </li>
        <li>
          <strong>Séchage complet</strong> : Patientez entre 24 et 48 heures
          pour un séchage complet et attendez une semaine avant de procéder à la
          mise en eau.
        </li>
        <li>
          <strong>Mise en eau</strong> : Placez la cuve sur son support après
          avoir intercalé une feuille de polystyrène expansé d'un centimètre
          d'épaisseur entre le support et le fond de l'aquarium, afin de
          compenser les irrégularités, même si le support est bien plat et
          propre.
        </li>
      </ol>

      <p className="p">
        Commencez par effectuer un essai en remplissant la cuve progressivement
        avec de l'eau du robinet, en trois étapes, afin de minimiser les risques
        en cas de fuite. Remplissez d'abord un tiers du volume et attendez une
        journée. Ensuite, remplissez jusqu'aux deux tiers du volume, puis
        attendez encore un jour avant de compléter à 100 %.
      </p>

      <div className="alert alert-warning my-6">
        <AlertCircle />
        <div>
          <p>
            En cas de fuite lors des essais de mise en eau, identifiez
            soigneusement l'emplacement de la fuite. Ensuite, videz la cuve
            jusqu'à au moins 5 cm en dessous du niveau de la fuite si celle-ci
            se trouve sur un montant vertical, ou videz complètement la cuve si
            ce n'est pas le cas. Utilisez une lame de rasoir pour retirer le
            joint intérieur sur 3 cm de chaque côté du point de fuite,
            dégraissez la zone, laissez sécher, puis appliquez un joint de colle
            assez large, en l'étalant avec le doigt ou une spatule à lisser.
            Attendez 48 heures avant de reprendre progressivement la mise en
            eau.
          </p>
          <p>
            Si une vitre est légèrement rayée pendant les manipulations, veillez
            à positionner la rayure à l'intérieur de l'aquarium et, si possible,
            en haut. En effet, la pression de l'eau aura tendance à refermer la
            fente si elle se trouve à l'intérieur, et la pression est
            généralement plus faible en haut de l'aquarium.
          </p>
          <p>
            La colle silicone ayant un temps de séchage relativement rapide, il
            est crucial de coller les vitres rapidement et avec précision. Cela
            nécessite de tout préparer à l'avance et, pour les aquariums de
            grande taille, il est conseillé de se faire aider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealisationCuvePage;
