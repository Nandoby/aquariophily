import { Camera } from "lucide-react";
import Image from "next/image";

const EntretienCuvePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center my-6">
        Maintenance d'une cuve d'aquarium
      </h1>

      <h2 className="text-lg font-bold my-6">
        L'entretien des glaces de l'aquarium
      </h2>

      <ul className="list">
        <li>
          <span className="text-red-600 font-semibold">
            Le nettoyage des glaces d'une cave d'aquarium
          </span>{" "}
          consiste essentiellement à les conserver propres, transparentes et
          sans rayures.
        </li>
        <li>
          <span className="text-red-600 font-semibold">
            Les glaces seront régulièrement nettoyées
          </span>{" "}
          pour éliminer toutes traces susceptibles de perturber la visibilité du
          décor, à l'extérieur avec une peau de chamois humide et à l'intérieur
          à l'aide d'une raclette traditionnelle munie d'un manche et d'une lame
          de rasoir inoxydable de préférence. Un grattoir de glaces constitué
          d'un aimant garni de feutre et d'un grattoir à algues n'est pas du
          tout aussi efficace que la raclette traditionnelle.
        </li>
        <li className="text-blue-800 marker:text-blue-800">
          Sur l'extérieur des glaces évitez d'utiliser un produit quelconque
          susceptible de polluer l'aquarium à l'occasion d'une maladresse.
        </li>
        <li className="text-blue-800 marker:text-blue-800">
          Il est évident que le nettoyage des glaces bombées d'un aquarium est
          difficile et quasiment impossible avec l'outil le plus efficace qu'est
          la raclette équipée d'une lame de rasoir, car les glaces sont très
          vite endommagées par des rayures irréversibles.
        </li>
      </ul>

      <h2 className="text-lg font-bold my-6">
        L'inspection régulière pour détecter d'éventuelles fuites d'eau
      </h2>

      <p className="my-3">
        La vigilence consiste simplement à surveiller l'apparition de fuites
        d'eau, c'est-à-dire de simples traces d'eau autour de l'aquarium, signe
        précurseur d'une fuite qui deviendra importante à plus ou moins long
        terme. Procédez à une réparation le plus rapidement possible afin
        d'éviter une catastrophe.
      </p>

      <ul className="list">
        <li className="text-blue-800 marker:text-blue-800">
          Evitez toute contraintes sur les parois de la cuve, ne pas s'appuyer
          dessus par exemple, afin de ne pas provoquer un décollement partiel
          des parois de verre.
        </li>
        <li className="text-blue-800 marker:text-blue-800">
          Ne pas laisser un aquarium sans eau, pour éviter que certains joints
          des glaces ne se dégradent en l'absence d'humidité ou en présence de
          produits nuisibles. Hors d'eau, la détérioration des anciens joints en
          mastic non silicone est inévitable.
        </li>
      </ul>
      <div className="flex justify-center my-6">
        <Image
          src="/assets/aquariumsauvage.jpg"
          alt="aquarium sauvage"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default EntretienCuvePage;
