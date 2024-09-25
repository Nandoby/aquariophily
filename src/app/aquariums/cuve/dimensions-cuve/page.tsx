"use client";

import { Fish } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const DimensionsCuvePage = () => {
  const [volume, setVolume] = useState("0");
  const [poids, setPoids] = useState({
    "30": "0",
    "50": "0",
  });
  const [dimension, setDimension] = useState({
    Long: 0,
    Larg: 0,
    Haut: 0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setDimension({
      ...dimension,
      [name]: value,
    });
  };

  const handleClick = () => {
    const volume =
      Math.round((dimension.Haut * dimension.Larg * dimension.Long) / 1000) +
      " L";
    setVolume(volume);
  };

  useEffect(() => {
    setPoids({
      "30": volume ? parseInt(volume) * 1.3 : "0",
      "50": volume ? parseInt(volume) * 1.5 : "0",
    });
  }, [volume]);

  return (
    <section>
      <h1 className="text-2xl font-bold my-6">
        Les formes et dimensions des aquariums
      </h1>

      <h2 className="text-lg font-bold my-3">La forme d'un aquarium</h2>
      <p className="my-3 flex gap-2 items-center">
        <Fish className="text-red-600" size={16} />
        <span className="text-red-600 font-semibold">
          La forme d'une cuve
        </span>{" "}
        dépend du gout de chacun, mais nous devons avoir à l'esprit quelques
        principes de base :
      </p>
      <ul className="list-disc marker:text-red-600 list-inside *:my-3">
        <li>
          La cuve doit avoir un volume suffisant pour assurer un bon confort et
          une longue durée de vie des pensionnaires, un faible volume réduit
          considérablement le nombre d'individus admissibles dans le bac.
        </li>
        <li>
          Les cuves plates, comme des écrans de télévision fixés au mur, sont
          totalement à proscrire car elles ne remplissent aucune des conditions
          garantissant la pérennité des pensionnaires et elles sont très
          difficile à entretenir.
        </li>
        <li>
          Eviter les cuves présentant une glace bombée, même si cela parait très
          esthétique, car la vue des animaux et des plantes est déformée, de
          plus la glace bombée est plus difficile à nettoyer.
        </li>
        <li>
          De même les formes polygonales qui créent de curieux effets, ne sont
          pas conseillées à cause d'une visibilité déformée des plantes et des
          pensionnaires, ce qui n'a rien de naturel.
        </li>
        <li>
          La forme parallélépipédique rectangulaire classique reste la meilleure
          des possibilités.
        </li>
      </ul>

      <h3 className="text-lg font-bold my-6">Le couvercle d'un aquarium</h3>

      <p>
        <Fish className="text-red-600 inline-block mr-3" size={16} />
        <span className="text-red-600 font-semibold">
          Le couvercle d'une cuve
        </span>{" "}
        n'est pas toujours nécessaire et peut se présenter sous différentes
        formes. Avant de choisir nous devons tenir compte des aspects suivants :
      </p>
      <ul className="list-disc marker:text-red-600 list-inside *:my-3">
        <li>
          Sans couvercle un bac est ouvert et présente une importante capacité
          d'évaporation de l'eau.
        </li>
        <li>
          Un bac recouvert d'un vitrage, voit cette vitre se salir rapidement et
          se couvrir de condensation et de calcaire, réduisant ainsi la
          propagation de la lumière.
        </li>
        <li>
          Un bac ne contenant que des plantes peut être un bac ouvert, sans
          difficultés particulières.
        </li>
        <li>
          Un bac doit être fermé pour éviter le suicide des individus sauteurs.
        </li>
        <li>
          Une galerie contenant les sources lumineuses, sans vitre de protection
          peut fermer correctement le bac.
        </li>
      </ul>

      <h3 className="text-lg font-bold my-6">Les dimensions d'un aquarium</h3>

      <p className="my-3">
        <span className="text-red-600 font-semibold">
          Les dimensions de la cuve
        </span>{" "}
        devront satisfaire aux différents facteurs précédemment mentionnés :
        objectif, cout, place disponible... La contrainte commune à tous les
        aquariums est la dimension des tubes fluorescents d'éclairage qui est
        standardisée, mais qui varie en fonction des évolutions technologiques
        des sources d'éclairage.
      </p>
      <ul className="list-disc marker:text-red-600 list-inside *:my-3">
        <li>
          Plus un aquarium est grand, plus son milieu est stable et moins il est
          sujet aux dysfonctionnements, ainsi il est bien plus facile à
          maintenir en équilibre. Dans un petit aquarium le nombre d'individus
          est très vite limité. Un volume de 200 litres est un minimum
          généralement satisfaisant.
        </li>
        <li>
          Une hauteur comprise entre 50 et 60 centimètres est idéale pour la
          plupart des aquariums, elle est suffisante pour le développement de la
          plupart des plantes et permet un entretien facile du sol et des
          plantes.
        </li>
        <li>
          Au-delà de 65 centimètres de hauteur, les besoins en éclairage d'un
          aquarium deviennent très nettement plus importants.
        </li>
        <li>
          En eau douce, un aquarium peuplé d'espèces de grandes dimensions comme
          les Symphysodon aequifasciatus dite Discus ou les Pterophyllum
          scalaire dite Scalaire doit avoir une capacité minimum de 300 litres
          et un aquarium récifal un minimum de 400 litres.
        </li>
        <li>
          Les grandes cuves de plus de 500 litres sont à réserver aux
          aquariophiles chevronnés. Bien souvent, il est plus agréable d'avoir
          deux cuves de 500 litres plutôt qu'une seule cuve de 1 000 litres, car
          il est ainsi possible d'avoir deux types ou deux styles d'aquariums,
          un autre avantage est sanitaire, car si l'un des aquariums est
          contaminé par une maladie l'autre en est isolé.
        </li>
        <li>
          Les petites cuves de 5 à 50 litres servent de bacs d'acclimation, de
          maternité ou bien l'hôpital.
        </li>
        <li>
          Une nouvelle tendance est de proposer des aquariums miniatures, les
          nano-aquariums de 10 à 30 litres, ils sont bien sûr peu onéreux, mais
          plus difficiles à maintenir en équilibre à moyen terme. Leur
          maintenance implique chaque jour d'éliminer les parties mortes des
          plantes, deux à trois fois par semaine de changer 50 % de l'eau de
          l'aquarium, toutes les semaines de fertiliser les plantes et de
          nettoyer le filtre.{" "}
          <span className="text-red-600 font-bold">
            Bon courage, mais c'est possible !
          </span>
        </li>
      </ul>

      <ul className="list-disc marker:text-blue-800 list-inside *:my-3 text-blue-800">
        <li className="font-bold">
          Un aquarium boule de quelques litres hébergeant un &laquo; poisson
          rouge &raquo; est une configuration scandaleuse, car il manque
          d'espace, de dioxygène et vit dans un milieu très pollué limitant sa
          durée de vie à trois mois contre dix ans en moyenne dans un espace
          suffisant et vingt ans dans la nature.
        </li>
        <li>
          Ce type d'aquarium boule &laquo; poisson rouge &raquo; est interdit de
          vente dans de nombreux pays comme l'Allemagne, les Pays-Bas,
          l'Italie... Un nano aquarium, surpeuplé ou avec de trop gros individus
          peut aussi être assimilé à ce type de cage.
        </li>
        <li>
          Le poids d'une cuve est très supérieur au poids de l'eau qu'il
          contient, nous devons compter environ 30 à 50 % de poids en plus pour
          les glaces, le sous-sol, les décors et accessoires.
        </li>
      </ul>
      <div className="flex justify-center my-6">
        <Image
          src="/assets/aquariumsauvage.jpg"
          alt="aquarium"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      <h2 className="text-lg font-bold my-3">
        Calculez le volume et le poids de votre aquarium
      </h2>

      <div className="alert my-6">
        <div>
          <p>Entrez les dimensions de l'aquarium en centimètre :</p>
          <div className="flex gap-2 my-3">
            <div className="flex gap-2 items-center text-sm">
              <label>Larg. :</label>
              <input
                name="Larg"
                onInput={handleInput}
                type="number"
                className="input input-bordered"
                defaultValue={dimension.Larg}
              />
            </div>
            <div className="flex gap-2 items-center text-sm">
              <label>Long. :</label>
              <input
                name="Long"
                onInput={handleInput}
                type="number"
                className="input input-bordered"
                defaultValue={dimension.Long}
              />
            </div>
            <div className="flex gap-2 items-center text-sm">
              <label>Haut. :</label>
              <input
                name="Haut"
                onInput={handleInput}
                type="number"
                className="input input-bordered"
                defaultValue={dimension.Haut}
              />
            </div>
          </div>
          <button onClick={handleClick} className="btn btn-accent">
            Calculer
          </button>

          <div className="flex gap-3 my-3">
            <div className="flex gap-4 items-center">
              <span>Volume de l'aquarium</span>
              <input
                value={volume}
                type="text"
                className="input input-bordered"
              />
            </div>
            <div className="flex gap-4 items-center">
              <span>Poids de l'aquarium</span>
              <input
                value={`${Math.round(parseInt(poids[30]))} à ${Math.round(parseInt(poids[50]))} kg`}
                type="text"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DimensionsCuvePage;
