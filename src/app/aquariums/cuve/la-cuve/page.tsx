import { Fish } from "lucide-react";
import { links } from "./links";
import Link from "next/link";
import Image from "next/image";

const LaCuvePage = () => {
  return (
    <section className="container mx-auto">
      {/* title */}
      <h1 className="text-2xl font-bold my-6">
        Les matériaux constituant une cuve d'aquarium
      </h1>

      <div className="alert items-start">
        <Fish />
        <div>
          <p>
            Cette section sur la cuve constituant un aquarium traite les thèmes
            suivants :
          </p>
          <ul>
            <li>
              <span className="text-red-600 font-semibold">Les matériaux</span>{" "}
              utilisés pour réaliser une cuve d'aquarium, objet de cette page.
            </li>
            {links.map((link, id) => {
              return (
                <li key={id}>
                  <Link
                    href={link.url}
                    className="text-blue-600 hover:text-blue-300"
                  >
                    {link.title}
                  </Link>
                  {link.description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h2 className="text-md my-4 font-bold">La cuve ou bac d'un aquarium</h2>

      <div className="flex">
        <div className="flex-1">
          <p>
            Un aquarium est constitué d'une cuve et de divers équipements de
            filtration, de chauffage, d'éclairage, etc.
          </p>

          <h3 className="my-3 text-red-600 font-bold">
            La cuve est l'élément essentiel constituant un aquarium
          </h3>

          <p className="my-3">
            Généralement et improprement, la cuve est dénommée aquarium, alors
            qu'une cuve doit être équipée de nombreux éléments pour devenir un
            aquarium capable d'héberger des plantes et des animaux aquatiques.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/cuveverre.jpg"
            width={100}
            height={100}
            alt="cuve en verre"
          />
          <span className="text-sm text-red-500 font-semibold">
            Cuve en verre
          </span>
        </div>
      </div>

      <h2 className="text-md my-4 font-bold">
        Les matériaux pour réaliser une cuve
      </h2>
      <p>
        <span className="text-red-600 font-semibold">
          Les matériaux utilisés pour réaliser une cuve d'aquarium
        </span>{" "}
        ont été et sont encore très variés :
      </p>
      <ul className="list-disc list-inside marker:text-red-600 *:my-3">
        <li>
          Il y a quelques dizaines d'années les glaces des cuves étaient
          supportées par des cornières soit en fer peint peu chères, mais d'une
          durée de vie très réduite, soit en laiton chromé ou nickelé mais très
          couteux, soit en inox encore plus onéreux, mais résistant à la
          corrosion des dizaines d'années.
        </li>
        <li className="list-[square] marker:text-blue-600 text-blue-900">
          Un aquarium en cornières métalliques inoxidables réalisé il y a 50 ans
          est encore en bon état de marche, sans avoir besoin de refaire les
          joints de mastic des glaces et en conservant des glaces toujours sans
          rayures !
        </li>
        <li>
          Des cuves furent aussi réalisées en ciment, mais vraiment trop lourdes
          et inamovibles, puis en résine époxy.
        </li>
        <li>
          Aujourd'hui, les très grands aquariums des musées ou aquariums publics
          sont fabriqués à l'aide de résines ou de matériaux composites
        </li>
        <li>
          Maintenant, pratiquement toutes les cuves disponibles sur le marché et
          destinées aux amateurs sont réalisées en verre collé, une technologie
          très bien maitrisée qui a permis le développement de l'aquariophilie
          marine. Ces cuves en dalles de verre ont une durée de vie de plusieurs
          dizaines d'années lorsqu'elles sont correctement assemblées avec une
          colle mastic silicone, laquelle est non toxique et inaltérable.
        </li>
        <li className="list-[square] marker:text-blue-600 text-blue-900">
          Lors de l'achat d'une cuve vérifier bien qu'il n'y a pas de bulles
          d'air dans les joints en silicone, car ces bulles sont toujours à
          l'origine d'une future fuite d'eau.
        </li>
        <li className="list-[square] marker:text-blue-600 text-blue-900 font-semibold">
          <span className="text-red-600">Une cuve en verre</span> implique de
          prendre beaucoup de précaution lors de son transport ou de son
          installation afin de ne pas endommager les glaces par un choc, même
          léger.
        </li>
        <li className="list-[square] marker:text-blue-600 text-blue-900 font-semibold">
          Il est prudent de souscrire une assurance dégât des eaux pour
          possession d'un aquarium, en cas d'explosion de la cuve, surtout si
          elle est de grande capacité. Vérifier au paravant, auprès de vos
          assureurs si vous n'êtes pas déjà couvert pour ce genre de risque.
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

export default LaCuvePage;
