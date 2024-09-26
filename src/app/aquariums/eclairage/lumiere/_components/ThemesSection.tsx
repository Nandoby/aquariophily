import Link from "next/link";

const ThemesSection = () => {
  return (
    <div role="alert" className="alert">
      <div>
        <p>Cette section aborde les thèmes suivants :</p>
        <ul className="list list-inside">
          <li>
            <span className="font-bold">La lumière</span>, objet de cette page
          </li>
          <li>
            <Link href="/aquariums/eclairage/objectif-eclairage" className="link link-primary font-bold">
              Les objectifs de l'éclairage d'un aquarium
            </Link>{" "}
            et les éléments d'un système d'éclairage.
          </li>
          <li>
            <Link href="/aquariums/eclairage/puissance-flux" className="link link-primary font-bold">
              Le flux lumineux
            </Link>
            , la puissance électrique, la durée d'éclairage et le rendement des
            sources lumineuses.
          </li>
          <li>
            <Link href="/aquariums/eclairage/spectre-lumineux" className="link link-primary font-bold">
              Le spectre lumineux d'une source d'éclairage
            </Link>
            , sa température de couleur et le rendu des couleurs.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/duree-vie-eclairage"
              className="link link-primary font-bold"
            >
              La durée de vie
            </Link>{" "}
            des sources lumineuses.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/les-sources-lumineuses"
              className="link link-primary font-bold"
            >
              Les différentes sources lumineuses
            </Link>{" "}
            pour un aquarium.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/tubes-fluo"
              className="link link-primary font-bold"
            >
              Les tubes fluorescents
            </Link>
            .
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/led"
              className="link link-primary font-bold"
            >
              Les LED
            </Link>
            .
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/lampes-decharge"
              className="link link-primary font-bold"
            >
              Les lampes à décharge HQI
            </Link>
            .
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/accessoires-eclairage"
              className="link link-primary font-bold"
            >
              Les accessoires et équipements nécessaires
            </Link>{" "}
            pour éclairer un aquarium.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/maintenance-eclairage"
              className="link link-primary font-bold"
            >
              L'entretien
            </Link>{" "}
            et la maintenance d'un système d'éclairage.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/installation-eclairage"
              className="link link-primary font-bold"
            >
              L'installation
            </Link>{" "}
            d'un éclairage personnalisé pour un aquarium.
          </li>
          <li>
            <Link
              href="/aquariums/eclairage/QR-eclairage"
              className="link link-primary font-bold"
            >
              Des questions-réponses
            </Link>{" "}
            sur l'éclairage d'un aquarium
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemesSection;
