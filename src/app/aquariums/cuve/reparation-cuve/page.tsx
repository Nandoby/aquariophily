import { AlertCircle, Fish } from "lucide-react";

const ReparationCuvePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold my-6 text-center">
        La réparation des glaces d'une cuve d'aquarium
      </h1>

      <h2 className="text-lg font-semibold my-6">
        Diagnostic d'une fuite d'eau
      </h2>

      <p className="my-3">
        Lorsqu'une cuve d'aquarium en état de marche laisse apparaitre une fuite
        d'eau, il est indispensable de réagir dès l'apparition des premières
        traces d'eau, même si elles sont à peine visibles.
      </p>

      <p className="my-3">
        <Fish
          size={14}
          className="text-red-600 font-semibold inline-block mr-2"
        />
        <span className="text-red-600 font-semibold">
          La réparation va dépendre du diagnostic :
        </span>
      </p>
      <ul className="list">
        <li>
          Ne pas s'affoler et prendre son temps pour réparer l'endroit exact de
          la fuite.
        </li>
        <li>Est-ce une fuite provenant du fond de l'aquarium ?</li>
        <li>Est-ce une glace fondue ?</li>
        <li>
          Souvent la fuite se situe au niveau de l'un des quatre angles
          verticaux, dans ce cas à quelle hauteur dans l'aquarium ?
        </li>
      </ul>

      <h2 className="h2">
        Réparation d'une fuite apparaissant dans un angle en haut de l'aquarium
      </h2>

      <p className="p">
        Une fuite dans un angle en haut de l'aquarium est le cas le plus
        fréquent et le plus simple à réparer,{" "}
        <span className="important">
          la réparation consiste à refaire une partie du joint en haut de
          l'aquarium.
        </span>
      </p>

      <p className="p">
        Arrêtez la filtration, aérer le bac avec un diffuseur, descendre vers le
        fond les résistances chauffantes et videz la cuve d'une partie de l'eau
        pour amener le niveau de l'eau 5 à 7 centimètres en dessous du point de
        fuite repéré. Laissez en place sans toucher plantes et poissons, ils
        supporteront bien la situation le temps de la réparation.
      </p>

      <p className="p">
        Retirez à la lame de rasoir le joint intérieur autour du point de fuite
        sur 3 cm de chaque côté, dégraissez avec de l'acétone l'emplacement,
        laissez sécher puis mettre un joint de colle assez large étalez-le avec
        le doigt ou une spatule à lisser.
      </p>

      <p className="p">Attendre 48 heures et refaire la mise en eau.</p>

      <h2 className="h2">
        Réparation d'une fuite apparaissant au fond de la cuve
      </h2>

      <p className="p">
        Une fuite située au fond de la cuve est plus difficie à colmater,{" "}
        <span className="important">
          la réparation consiste à refaire le joint autour de la fuite au fond
          de l'aquarium,
        </span>{" "}
        dans ce cas il est nécessaire de vider complètement l'aquarium pour
        effectuer la réparation.
      </p>
      <p className="p">
        Trouvez un grand bac en plastique d'une contenance égale à environ un
        tiers ou un quart de celle de votre bac. Remplir ce bac avec l'eau de
        votre aquarium, installez chauffage et aération, prévoyez de le
        recouvrir pour éviter que vos pensionnaires passent par-dessus bord.
        Puis placez-y toutes vos plantes, vous y placerez vos pensionnaires dès
        que vous pourrez les capturer sans difficulté, c'est à dire dès que vous
        aurez vidé presque totalement votre cuve.
        <br />
        Vider totalement la cuve. Retirer le sous-sol que vous pourrez
        sauvegarder en conservant à part le sable que vous pourrez laver et le
        compost que vous pourrez réutiliser ou renouveler. Eventuellement, c'est
        le moment d'en profiter pour renouveler le sous-sol.
      </p>

      <p className="p">
        Retirez à la lame de rasoir le joint intérieur autour du point de fuite
        sur 3 à 5 cm de chaque côté. Eliminez toutes traces de colle dans la
        zone à coller. Vérifiez qu'il n'y a pas d'autres points suspects à
        traiter de la même façon. <br />
        Si les joints intérieurs semblent insatisfaisants n'hésitez pas à les
        supprimer complètement et à les refaire tous.
        <br />
        Dégraissez l'espace qui recevra les nouveaux joints avec de l'acétone,
        laissez sécher puis mettre un nouveau joint de colle et l'étaler avec le
        doigt ou une spatule à lisser.
      </p>

      <p className="p">
        Attendre 48 heures pour refaire progressivement la mise en eau.
        N'oubliez pas de vérifier l'étanchéité après réparation en remplissant
        la cuve, tiers par tiers à un jour d'intervalle.
      </p>

      <div role="alert" className="alert">
        <AlertCircle className="text-blue-600" />
        <p>
          La colle silicone n'adhère pas correctement sur une ancienne colle,
          éliminez les anciens joints accessibles et collez en joignant deux
          parois de verre bien nettoyées.
        </p>
      </div>

      <h2 className="h2">Réparation d'une fuite lorsqu'une glace est fendue</h2>

      <p className="p">
        Lorsqu'une vitre d'aquarium est fissurée, la situation devient plus
        complexe. Dans la plupart des cas, il est préférable de remplacer
        entièrement la cuve, car le choc qui a causé la fissure pourrait avoir
        affaibli la structure, ou bien il s'agit d'un défaut de conception (par
        exemple, une épaisseur de verre insuffisante ou l'absence de renforts).
      </p>

      <p className="p">
        Cependant, il est possible de réparer la fissure en collant à
        l'intérieur de l'aquarium une nouvelle plaque de verre, dont l'épaisseur
        doit correspondre à celle des vitres d'origine. Cette plaque doit
        couvrir intégralement la fissure, et sa longueur doit dépasser largement
        celle de la fêlure.
      </p>

      <p className="p">
        Avant de procéder, il est essentiel de bien nettoyer et dégraisser à
        l'acétone la vitre fendue et la plaque de verre. Laissez sécher, puis
        appliquez un cordon de silicone directement sur la fissure, ainsi que
        deux cordons supplémentaires autour du bord de la plaque réparatrice.
        Placez ensuite la plaque sur la vitre, en exerçant une pression légère
        pour que le silicone s'étale uniformément.
      </p>

      <p className="p">
        Après l'application, attendez 48 heures avant de remplir progressivement
        l'aquarium. Pour garantir l'étanchéité, remplissez la cuve par tiers, en
        vérifiant chaque étape sur une durée de trois jours.
      </p>

      <div role="alert" className="alert alert-warning">
        <AlertCircle />
        Le remplacement d'une vitre d'aquarium complète est une opération bien
        trop complexe et risquée pour être réalisée sans expérience.
      </div>
    </section>
  );
};

export default ReparationCuvePage;
