import { AlertCircle, Info } from "lucide-react";
import Image from "next/image";

const LampesDechargePage = () => {
  return (
    <section>
      <h1 className="h1">Les lampes à décharge électrique</h1>
      <p className="p">
        Les <strong>lampes à décharge</strong>, développées depuis 1969, ont
        initialement été conçues pour des projecteurs de grande puissance, avant
        de trouver leur application en aquariophilie marine, principalement avec
        des modèles de moindre puissance.
      </p>
      <p className="p">
        Les <strong>lampes à décharge aux halogènes métalliques</strong>, aussi
        connues sous le nom de <strong>HQI</strong> (Hydrargyrum Quartz Iodide),
        contiennent un tube à décharge rempli d'iodures métalliques comme le
        mercure, le sodium ou l'indium. Bien que le HQI soit une marque, ce
        terme est souvent utilisé pour désigner ce type de lampes.
      </p>
      <p className="p">
        Leur <strong>principe de fonctionnement</strong> est similaire à celui
        des tubes fluorescents, mais à des températures beaucoup plus élevées,
        offrant un rendement lumineux d'environ <strong>100 lm/W</strong>. Elles
        se distinguent par une <strong>longue durée de vie</strong>, un{" "}
        <strong>excellent rendu des couleurs</strong> avec un IRC de 90, et une{" "}
        <strong>température de couleur</strong> comprise entre 4 900 et 15 000
        K.
      </p>
      <p className="p">
        En aquariophilie, les lampes à décharge sont principalement utilisées
        dans les <strong>bacs marins</strong>, notamment pour les aquariums
        coralliens. Leur <strong>température de couleur</strong> est adaptée aux
        besoins des coraux, notamment en profondeur et en qualité de lumière. En
        revanche, elles sont{" "}
        <strong>déconseillées pour les aquariums d'eau douce</strong>, où
        d'autres types de lumières sont mieux adaptées.
      </p>

      <div className="flex gap-3 justify-center my-7">
        <Image
          src="/assets/lampedecharge1.jpg"
          width={400}
          height={400}
          alt="lampe à decharge"
          className="rounded-md"
        />
        <Image
          src="/assets/lampedecharge2.jpg"
          width={400}
          height={400}
          alt="lampe à decharge"
          className="rounded-md"
        />
      </div>

      <div role="alert" className="alert alert-warning">
        <AlertCircle />
        <div>
          <p>
            Les <strong>lampes à décharge</strong> produisent une{" "}
            <strong>quantité importante de chaleur</strong> et émettent
            également des <strong>rayons ultraviolets dangereux</strong>. C'est
            pourquoi il est essentiel de les utiliser avec un{" "}
            <strong>filtre UV</strong> pour protéger à la fois les organismes
            aquatiques et les observateurs.
          </p>
          <p>
            De plus, en raison de la chaleur générée, ces lampes doivent être
            installées à une distance de <strong>40 à 70 cm</strong> au-dessus
            de la surface de l'eau pour limiter l'impact de l'
            <strong>énergie dissipée</strong> sur l'aquarium. Cette distance
            permet de réduire le risque de surchauffe et de préserver
            l'équilibre thermique du bac, tout en assurant un éclairage optimal.
          </p>
        </div>
      </div>

      <div role="alert" className="alert alert-info my-6">
        <Info />
        <div>
          <p>
            Autrefois, on utilisait des{" "}
            <strong>lampes à vapeur de mercure</strong> en aquariophilie,
            constituées d'un tube en quartz entouré d'une enceinte en verre
            recouverte d'une <strong>couche fluorescente</strong>, le tout
            contenant du mercure dans un gaz neutre. Leur{" "}
            <strong>fonctionnement</strong> était similaire à celui de toutes
            les lampes à décharge, où une décharge électrique provoquait
            l'émission de lumière visible.
          </p>
          <p>
            Cependant, ces sources lumineuses sont aujourd'hui largement
            remplacées par les <strong>ampoules HQI</strong>, plus performantes
            et mieux adaptées aux besoins spécifiques des aquariums, notamment
            marins et coralliens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LampesDechargePage;
