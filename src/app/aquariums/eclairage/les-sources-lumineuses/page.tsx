import { Info } from "lucide-react";

const LesSourcesLumineuses = () => {
  return (
    <section>
      <h1 className="h1">Les sources d&apos;éclairage d&apos;un aquarium</h1>
      <h2 className="h2">Sources lumineuses</h2>
      <div role="alert" className="alert alert-info">
        <Info />
        <div>
          <p>
            Nous utiliserons l&apos;expression <strong>source lumineuse</strong>{" "}
            et non <strong>lampe</strong>, pour désigner toutes les nouvelles
            sources d&apos;éclairage, qu&apos;il s&apos;agisse d&apos;
            <strong>ampoules</strong>, de <strong>tubes</strong>, de{" "}
            <strong>diodes</strong>, de <strong>LED</strong>, de{" "}
            <strong>panneaux</strong>, de <strong>vitres</strong> ou de{" "}
            <strong>films flexibles</strong>...
          </p>
        </div>
      </div>

      <p className="p">
        Les sources lumineuses répondant aux exigences des aquariophiles sont
        très variées, tant par leur forme, leurs dimensions, les
        caractéristiques de la lumière émise que par la technologie, qui ne
        cesse d'évoluer rapidement depuis les années 1980.
      </p>
      <p className="p">
        Après l&apos;apparition des <strong>lampes à incandescence</strong> en
        1879, les premiers <strong>tubes fluorescents</strong> sont arrivés sur
        le marché en 1936, et dès 1960, ils équipent couramment les aquariums.
        Ce n&apos;est qu&apos;après 1973 que leur efficacité s'améliore
        suffisamment pour devenir populaires. En 1980, l'arrivée de l'allumage
        électronique et de nouvelles matières fluorescentes permet d'accroître
        significativement leur efficacité, donnant naissance aux{" "}
        <strong>lampes fluorescentes compactes</strong>, souvent utilisées en
        habitation en remplacement des lampes à incandescence.
      </p>
      <p className="p">
        Dans les années 2010-2018, la quasi-totalité des aquariums d'eau douce
        et une grande partie des aquariums marins sont équipés de tubes
        fluorescents. Cependant, la{" "}
        <strong>technologie des diodes électroluminescentes (LED)</strong>,
        développée entre 1962 et 1990, commence à remplacer progressivement ces
        sources dès 2015, marquant une nouvelle ère dans l'éclairage
        aquariophile. General Electric, en 2016, arrête la production d'ampoules
        fluocompactes pour se concentrer sur les LED, qui représentaient environ
        50 % du marché domestique en 2018.
      </p>
      <p className="p">
        Des recherches sont en cours pour développer des technologies encore
        plus innovantes, comme les{" "}
        <strong>OLED (Organic Light-Emitting Diode)</strong>, les{" "}
        <strong>PHOLED</strong> ou encore les <strong>PLED</strong>, des diodes
        électroluminescentes organiques. Ces technologies permettent de
        programmer l'intensité lumineuse ainsi que le spectre des couleurs, avec
        un rendu très proche de la lumière solaire. Bien qu'encore
        principalement utilisées dans les domaines de l'électronique (téléphones
        mobiles, appareils photo, etc.), ces innovations pourraient bientôt
        conquérir l'aquariophilie.
      </p>
      <p className="p">
        Quant aux <strong>LED</strong>, elles pourraient être rapidement
        remplacées par une nouvelle génération de lampes à base de{" "}
        <strong>graphène</strong>, un matériau découvert en 2004,
        ultrarésistant, transparent et excellent conducteur. Les premières
        lampes à graphène, attendues en 2020, promettent une consommation
        énergétique encore plus faible que les LED et une durée de vie de 25
        ans.
      </p>
      <p className="p">
        Malgré ces avancées, en 2018, les <strong>tubes fluorescents</strong>{" "}
        restent la solution la plus courante en aquariophilie d'eau douce, étant
        à la fois abordables et bien maîtrisés. En aquariophilie marine, les{" "}
        <strong>lampes à iodures métalliques</strong>, les{" "}
        <strong>lampes à vapeur de mercure haute pression</strong>, et de plus
        en plus les <strong>LED</strong>, dominent l'éclairage, parfois
        combinées avec des tubes fluorescents spécifiques aux besoins marins et
        coralliens.
      </p>
    </section>
  );
};

export default LesSourcesLumineuses;
