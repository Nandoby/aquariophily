import Link from "next/link";
import ThemesSection from "./_components/ThemesSection";
import { AlertCircle } from "lucide-react";
import Image from "next/image";

const LumierePage = () => {
  return (
    <section>
      <h1 className="h1">L'éclairage des aquariums</h1>

      <ThemesSection />

      <article>
        <h2 className="h2">La lumière</h2>
        <p className="p">
          La lumière qu'elle soit naturelle ou artificielle, est indispensable à
          la vie de la plupart des animaux et joue un rôle crucial dans le
          processus de photosynthèse, qui permet le développement des plantes.
        </p>
        <ul className="list">
          <li>
            <p>
              La lumière visible par l'oeil humain est un rayonnement
              électromagnétique composé de photons, avec une longueur d'onde
              comprise entre environ 400 nm et 750 nm. Cela représente une
              infime partie de l'ensemble du spectre électromagnétique.
            </p>
            <p>
              Les rayons infrarouges (IR), dont la longueur d'onde dépasse 750
              nm, et les rayons ultraviolets (UV), inférieurs à 390 nm, sont
              invisibles pour nous.
            </p>
          </li>
          <li>
            Le spectre lumineux solaire couvre une très large portion du spectre
            électromagnétique de manière continue, mais l'œil humain est
            particulièrement sensible à la zone correspondant à la couleur
            jaune. Les plantes, quant à elles, ont principalement besoin des
            longueurs d'onde correspondant aux zones du bleu et du rouge.
          </li>
        </ul>

        <div role="alert" className="alert alert-info">
          <AlertCircle />
          <div>
            Les longueurs d'onde qui définissent un rayon lumineux sont
            exprimées en nanomètres (nm). Un nanomètre équivaut à un millionième
            de millimètre.
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h2 className="h2">Courbe de distribution spectrale de la lumière</h2>
          <Image
            src="/assets/spectrelumiere.jpg"
            width={600}
            height={600}
            alt="spectre lumiere"
          />
        </div>
      </article>
    </section>
  );
};

export default LumierePage;
