
import BgAbout from "../../assets/BgAbout.png";
import life1 from "../../assets/life1.png";




function About() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center mb-20">
        <p className="text-[11px] tracking-luxe uppercase text-accent">Lumière Maison</p>
        <h1 className="font-Cormorant text-5xl md:text-7xl mt-4 leading-none">Cem Anos de Luz</h1>
        <div className="hairline w-24 mx-auto mt-8" />
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
         Fundada em Paris em 1924, a Lumière Maison dedica-se, há quatro gerações, a aperfeiçoar a arte da alta joalheria — criando peças concebidas para transcender as tendências e se tornar relíquias de família.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-10 mb-24">
        <img src={BgAbout} alt="Artesão em ação" loading="lazy" className="w-full aspect-4/5 object-cover" />
        <img src={life1} alt="Modelo em ouro" loading="lazy" className="w-full aspect-4/5 object-cover mt-12" />
      </section>

      <section className="bg-[#F7F2E9] py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { t: "Herança", d: "Um ateliê parisiense desde 1924, moldado por quatro gerações de mestres joalheiros." },
            { t: "Arte", d: "Cada peça é cravejada e polida à mão, e assinada pelo seu artesão." },
            { t: "Consciência", d: "Ouro obtido de forma ética, diamantes verificados em laboratório e restauração vitalícia." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-display text-2xl text-alt-ring">{b.t}</h3>
              <p className="mt-4 text-sm font-Inter text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;