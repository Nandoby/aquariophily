import { Info } from "lucide-react";

const DureeVieEclairagePage = () => {
  return (
    <section>
      <h1 className="h1">La durée de vie des sources d&apos;éclairage</h1>
      <h2 className="h2">La durée de vie des sources lumineuses</h2>
      <p className="p">
        La <strong>durée de vie</strong> des <strong>sources lumineuses</strong>{" "}
        varie énormément, et bien qu&apos;elle soit de plus en plus longue, elle
        ne garantit pas que le <strong>flux lumineux</strong> et le{" "}
        <strong>spectre lumineux</strong> resteront optimaux durant toute cette
        période. En aquariophilie, cette durée est souvent plus courte, entre 10
        000 et 15 000 heures, car les <strong>dégradations du spectre</strong>{" "}
        peuvent favoriser l&apos;apparition d&apos;algues et rendre la lumière
        insuffisante pour maintenir les plantes ou coraux en bonne santé.
      </p>
      <p className="p">
        Par ailleurs, les sources dédiées à l&apos;aquariophilie doivent être
        remplacées bien avant leur fin de vie théorique. Par exemple, une source
        garantie pour 15 000 heures peut être utilisée entre 6 mois et 2 ans
        dans un aquarium, en fonction de la qualité de son installation et de
        l&apos;environnement.
      </p>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            L&apos;aquariophile est le <strong>meilleur juge</strong> pour
            déterminer quand remplacer ses <strong>sources lumineuses</strong>.
            Il lui suffit d&apos;observer son aquarium : si certaines plantes
            cessent de <strong>pousser</strong> ou si des{" "}
            <strong>algues</strong> commencent à se développer, c&apos;est un
            signe que les lampes ne sont plus efficaces. Un{" "}
            <strong>programme de remplacement progressif</strong> des sources
            lumineuses permettra de maintenir un éclairage optimal pour la santé
            des plantes et l&apos;équilibre de l&apos;aquarium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DureeVieEclairagePage;
