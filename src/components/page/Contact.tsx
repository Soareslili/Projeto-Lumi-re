import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lumière Maison" },
      { name: "description", content: "Visit our Paris boutique or reach our private concierge." },
      { property: "og:title", content: "Contact — Lumière Maison" },
      { property: "og:description", content: "Speak with our private jewelry concierge." },
    ],
  }),
  component: Contact,
});

const Contact = () => {
  return (
    <div className="pt-32 pb-24 mx-auto max-w-6xl px-6 lg:px-10">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-luxe uppercase text-gold">Au Revoir, Distance</p>
        <h1 className="font-display text-5xl md:text-6xl mt-3">Let Us Speak</h1>
        <div className="hairline w-24 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <form className="space-y-5">
          {[
            { l: "Name", t: "text" }, { l: "Email", t: "email" }, { l: "Phone", t: "tel" },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground">{f.l}</label>
              <input type={f.t} className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-gold transition" />
            </div>
          ))}
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground">Message</label>
            <textarea rows={5} className="w-full mt-2 border-b border-border bg-transparent py-3 outline-none focus:border-gold transition resize-none" />
          </div>
          <button className="bg-primary text-primary-foreground px-10 py-4 text-[11px] tracking-luxe uppercase hover:bg-ink transition">Send Message</button>
        </form>

        <div className="space-y-8">
          <div className="bg-champagne/40 p-10 space-y-6">
            <div className="flex gap-4 items-start"><MapPin className="h-5 w-5 text-gold mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Boutique</p><p className="mt-1">12 Rue de la Paix, 75002 Paris</p></div></div>
            <div className="flex gap-4 items-start"><Phone className="h-5 w-5 text-gold mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Concierge</p><p className="mt-1">+33 1 42 00 00 00</p></div></div>
            <div className="flex gap-4 items-start"><Mail className="h-5 w-5 text-gold mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Email</p><p className="mt-1">private@lumiere-maison.com</p></div></div>
            <div className="flex gap-4 items-start"><Instagram className="h-5 w-5 text-gold mt-0.5" /><div><p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Instagram</p><p className="mt-1">@lumiere.maison</p></div></div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Our private concierge is available Monday through Saturday, 10:00–19:00 CET. We respond to all enquiries within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;