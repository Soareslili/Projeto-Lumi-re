
import { Link } from "react-router-dom";
import BgHero from "../../assets/BgHero.png";
import { collections } from "../../lib/products";
import life1 from "../../assets/life1.png";

const Hero = () => {
    return (
        <>

         <section className="relative h-screen min-h-[680px] w-full overflow-hidden ">

            <img src={BgHero} alt="Model wearing diamond jewelry" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,15,10,0.35) 0%, rgba(20,15,10,0) 100%, rgba(20,15,10,0.55) 100%)" }} />
            <div className="relative z-10 h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-24 text-primary-foreground">
                <div className="max-w-2xl animate-fade-up">
                    <p className="text-[11px] tracking-luxe uppercase text-yellow-200 mb-6">Maison de Joaillerie · Est. 1924</p>
                    <h1 className="font-Cormorant text-alt-accent-foreground text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
                        Elegância<br />em cada detalhe
                    </h1>
                    <p className="mt-8 max-w-lg text-base text-alt-accent-foreground leading-relaxed">
                       Descubra joias artesanais pensadas para celebrar beleza, sofisticação e momentos inesquecíveis.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            to="/collections"
                            className="bg-white text-accent-foreground px-8 py-4 text-[11px] tracking-luxe uppercase hover:bg-accent transition"
                        >
                           Conheça Nossas Coleções
                        </Link>
                        <Link
                            to="/about"
                            className="border border-primary-foreground/60 text-primary-foreground px-8 py-4 text-[11px] tracking-luxe uppercase hover:border-accent hover:text-accent transition"
                        >
                            Sobre Nós
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        


         {/* COLLECTIONS */}
      <section className="py-28 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-luxe uppercase text-accent">Nossas Coleções</p>
          <h2 className="font-Cormorant text-4xl md:text-5xl mt-3">Curadoria para o conhecedor</h2>
          <div className="text-amber w-24 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((c) => (
            <Link to={`/collections/${c.slug}`} key={c.slug} className="group relative overflow-hidden bg-champagne aspect-[3/4]">
              <img src={c.image} alt={c.name} loading="lazy" className="reveal-img absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-accent-foreground/30 from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-Cormorant text-2xl text-white">{c.name}</h3>
                <p className="text-[10px] tracking-luxe uppercase text-accent-foreground mt-1 opacity-0 group-hover:opacity-100 transition">Discover →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

       <section className="py-28 mx-auto max-w-7xl px-6 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <img src={life1} alt="Artisan crafting jewelry" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-luxe" />
                  <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#FCFAF6] p-6 md:p-8 max-w-[260px] shadow-soft">
                    <p className="font-display text-4xl text-amber">100+</p>
                    <p className="text-[11px] tracking-luxe uppercase text-muted-foreground mt-2">Anos de herança artesanal</p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] tracking-luxe uppercase text-amber">Nosso Lumière</p>
                  <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">Criado para brilhar para sempre</h2>
                  <div className="hairline w-20 my-8" />
                  <p className="text-muted-foreground leading-relaxed">
                   Há quatro gerações, nosso ateliê transforma metais preciosos e gemas raras em peças destinadas a atravessar gerações. Cada criação é obra de mestres artesãos — a união de um design atemporal com um trabalho artesanal de excelência absoluta.
                  </p>
                  <ul className="mt-8 space-y-3 text-sm">
                    {["Handcrafted in our Parisian atelier", "Ethically sourced 18k gold & diamonds", "Lifetime restoration & care", "Designed as future heirlooms"].map((t) => (
                      <li key={t} className="flex items-center gap-3"><span className="h-px w-6 bg-amber" />{t}</li>
                    ))}
                  </ul>
                  <Link to="/about" className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-[11px] tracking-luxe uppercase hover:bg-ink transition">Nossa história</Link>
                </div>
              </div>
            </section>
        </>
       
    )
}

export default Hero