import Image from "next/image";
import Link from "next/link";

const RealisationGaleriePage = () => {
  return (
    <section>
      <h1 className="h1">Réalisation d&apos;une galerie</h1>

      <h2 className="h2">Les avantages d&apos;une galerie personnalisée</h2>
      <ul className="list">
        <li>
          <strong>Accessibilité optimisée</strong> : Les galeries disponibles
          dans le commerce privilégient souvent l&apos;esthétique et le coût au
          détriment de l&apos;accès à l&apos;intérieur de l&apos;aquarium.
          Certains modèles doivent être partiellement démontés pour permettre la
          maintenance, tandis que d&apos;autres offrent un accès limité à
          environ un tiers de la surface après avoir soulevé une plaque. Les
          galeries pivotantes, plus rares, permettent un accès facile à
          l&apos;ensemble de l&apos;aquarium tout en conservant l&apos;éclairage
          en place.
        </li>
        <li>
          <strong>Adaptabilité et personnalisation :</strong> Créer une galerie
          personnalisée permet de répondre à des besoins spécifiques, que ce
          soit en termes de <strong>place</strong>, <strong>esthétique</strong>,
          ou de <strong>nombre de tubes d&apos;éclairage</strong>. Une galerie
          sur mesure peut également faciliter l&apos;entretien en offrant un
          accès plus aisé à l&apos;aquarium. Elle peut inclure des lampes
          équipées de <strong>réflecteurs de lumière</strong>, un ou plusieurs{" "}
          <strong>ventilateurs</strong> pour limiter la chaleur, ainsi
          qu&apos;un mécanisme permettant de faire pivoter ou relever la galerie
          lors de l&apos;entretien.
        </li>
        <li>
          <strong>Optimisation du poids</strong> : Pour alléger la galerie, les{" "}
          <strong>accessoires électriques ou électroniques</strong> (ballasts,
          starters, interrupteurs, horloges) ne seront pas intégrés à la galerie
          elle-même. Ils seront installés à proximité, à l&apos;extérieur de
          l&apos;aquarium, et protégés de l&apos;eau.
        </li>
        <li>
          <strong>Simplicité de réalisation</strong> : Concevoir et assembler
          soi-même une galerie avec un système d&apos;éclairage personnalisé est
          une tâche relativement simple, et offre une plus grande liberté pour
          répondre aux besoins spécifiques de son aquarium.
        </li>
      </ul>

      <h2 className="h2">
        Schéma de principe de réalisation d&apos;une galerie
      </h2>

      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <figcaption className="my-3 text-center text-sm font-semibold text-red-600">
            Aquarium équipé d&apos;une galerie avec réflecteurs de lumière et
            ventilateurs
          </figcaption>
          <figure>
            <Image
              src="/assets/galerieperso.jpg"
              width={690}
              height={690}
              alt="galerie perso"
            />
          </figure>
        </div>
        <div>
          <figcaption className="my-3 text-center text-sm font-semibold text-red-600">
            Aquarium équipé d&apos;une galerie avec réflecteurs de lumière et
            ventilateurs
          </figcaption>
          <figure>
            <Image
              src="/assets/galeriepersoouverte.jpg"
              width={690}
              height={690}
              alt="galerie perso ouverte"
            />
          </figure>
        </div>
      </div>

      <h2 className="h2">La conception d&apos;une galerie</h2>
      <ul className="list">
        <li>
          <strong>Positionnement sécurisé</strong> : La galerie reposera sur les
          renforts intérieurs de l&apos;aquarium, généralement présents dans
          tous les modèles en verre. Elle sera dimensionnée pour correspondre
          aux mesures internes de l&apos;aquarium, garantissant une position
          parfaite et stable.
        </li>
        <li>
          <strong>Décoration personnalisée</strong> : La face avant visible de
          la galerie peut être décorée avec des matériaux résistants à
          l&apos;eau, tels que des <strong>posters</strong> ou autres éléments
          décoratifs pour un rendu esthétique agréable.
        </li>
        <li>
          <strong>Sécurité d&apos;éclairage</strong> : Pour des raisons de
          sécurité, il est recommandé d&apos;avoir{" "}
          <strong>au moins deux tubes d&apos;éclairage</strong>, chacun étant
          alimenté par un ballast distinct. Cela permet d&apos;assurer une
          continuité d&apos;éclairage en cas de panne de l&apos;un des tubes ou
          ballasts.
        </li>
        <li>
          <strong>Ventilation et circulation d&apos;air</strong> : Il est
          essentiel de prévoir des ouvertures dans la galerie pour assurer une{" "}
          <strong>circulation d&apos;air</strong> adéquate. Quelques trous
          positionnés au-dessus des réflecteurs et sur les côtés aideront à
          dissiper la chaleur générée par les tubes.
        </li>
        <li>
          <strong>Passage des équipements</strong> : La galerie doit comporter
          des <strong>orifices spécifiques</strong> pour faciliter le passage
          des équipements, tels que les câbles d&apos;éclairage, mais aussi ceux
          liés à la <strong>filtration</strong>, au <strong>chauffage</strong>,
          à l&apos;<strong>aération</strong>, ainsi qu&apos;à la{" "}
          <strong>distribution de nourriture</strong>. Cette dernière fonction
          devrait pouvoir être réalisée sans soulever la galerie, pour plus de
          commodité.
        </li>
        <li>
          Pour les aquariums de grande taille avec plusieurs tubes, il est
          recommandé d&apos;installer un <strong>système de ventilation</strong>{" "}
          afin d&apos;éviter les surchauffes provoquées par la dissipation
          thermique. Il existe des ventilateurs spécialement adaptés à cet usage
          disponibles dans le commerce.
        </li>
        <li>
          <strong>Maintenance facilitée</strong> : Un dispositif de pivotement
          permettra de soulever facilement la galerie pour l&apos;entretien de
          l&apos;aquarium. Ce système peut être similaire à celui des capots de
          voiture, avec des <strong>barres de soutien en plastique</strong> ou,
          pour les plus grands aquariums, une option de suspension au plafond ou
          à une étagère.
        </li>
        <li>
          <strong>Matériaux adaptés</strong> : Les matériaux à privilégier pour
          la construction d&apos;une galerie sont l&apos;
          <strong>aluminium</strong> et le <strong>plexiglas</strong> (ou
          altuglas), que l&apos;on peut facilement trouver sous forme de plaques
          à découper. Les plaques d&apos;altuglas ou plexiglas de 3 mm
          d&apos;épaisseur, non transparentes et de couleur blanc brillant, sont
          particulièrement adaptées. Ces plaques sont faciles à découper, à
          coller avec une <strong>colle spéciale</strong>, et à percer pour
          installer les différents éléments (éclairage, fils électriques,
          système de fixation). Leur durée de vie peut dépasser{" "}
          <strong>30 ans</strong>, à condition de les manipuler avec soin.
        </li>
        <li>
          <strong>Fonction de réflecteur</strong> : La couleur blanche et
          brillante de ces plaques peut également servir de{" "}
          <strong>réflecteur de lumière</strong> naturel, améliorant
          l&apos;efficacité de l&apos;éclairage.
        </li>
        <li>
          Des plaques et cornières en aluminium, assemblées avec des{" "}
          <strong>vis en inox</strong>, sont également une option robuste et
          durable pour la réalisation d&apos;une galerie.
        </li>
      </ul>
      <p className="p">
        ► Pour plus d&apos;informations sur l&apos;installation de
        l&apos;éclairage, consultez{" "}
        <Link
          href="/aquariums/eclairage/installation-eclairage"
          className="link link-primary font-semibold"
        >
          Installation personnalisée de l&apos;éclairage
        </Link>
        .
      </p>
    </section>
  );
};

export default RealisationGaleriePage;
