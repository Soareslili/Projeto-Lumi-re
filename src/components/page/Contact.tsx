
import { Mail, Phone, MapPin } from "lucide-react";
import {FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pt-32 pb-24 mx-auto max-w-6xl px-6 lg:px-10">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-luxe uppercase text-primary">Adeus, distância</p>
        <h1 className="font-Cormorant text-5xl md:text-6xl mt-3">Vamos falar</h1>
        <div className="hairline w-24 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <form className="space-y-5">
          {[
            { l: "Nome", t: "text" }, { l: "Email", t: "email" }, { l: "Telefone", t: "tel" },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground">{f.l}</label>
              <input type={f.t} className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-gold transition" />
            </div>
          ))}
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground">Messagem</label>
            <textarea rows={5} className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-gold transition resize-none" />
          </div>
          <button className="bg-primary text-primary-foreground px-10 py-4 text-[11px] tracking-luxe uppercase hover:bg-ink transition">Enviar mensagem</button>
        </form>

        <div className="space-y-8">
          <div className="bg-[#F7F2E9] p-10 space-y-6">
            <div className="flex gap-4 items-start"><MapPin className="h-5 w-5 text-primary mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Boutique</p><p className="mt-1">12 Rue de la Paix, 75002 Paris</p></div></div>
            <div className="flex gap-4 items-start"><Phone className="h-5 w-5 text-primary mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Concierge</p><p className="mt-1">+33 1 42 00 00 00</p></div></div>
            <div className="flex gap-4 items-start"><Mail className="h-5 w-5 text-primary mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Email</p><p className="mt-1">private@lumiere-maison.com</p></div></div>
            <div className="flex gap-4 items-start"><FaInstagram className="h-5 w-5 text-primary mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Instagram</p><p className="mt-1">@lumiere.maison</p></div></div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Nosso concierge privativo está à disposição de segunda a sábado, das 10h às 19h (CET). Respondemos a todas as solicitações em até 24 horas.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;




