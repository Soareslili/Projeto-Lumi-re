
import { useState } from "react";
import { useCart } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";

const fmt = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="pt-40 pb-24 text-center mx-auto max-w-xl px-6">
        <p className="text-[11px] tracking-luxe uppercase text-gold">Merci</p>
        <h1 className="font-display text-5xl mt-4">Your Treasures Are On Their Way</h1>
        <p className="mt-6 text-muted-foreground">A confirmation has been sent to you. Each piece is being prepared with the utmost care.</p>
        <Link to="/" className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-[11px] tracking-luxe uppercase">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 mx-auto max-w-6xl px-6 lg:px-10">
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-luxe uppercase text-gold">Final Step</p>
        <h1 className="font-display text-5xl mt-3">Checkout</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          clearCart();
          setDone(true);
        }}
        className="grid lg:grid-cols-[1.3fr_1fr] gap-14"
      >
        <div className="space-y-10">
          <fieldset className="space-y-5">
            <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Contact</legend>
            {["Full Name", "Email", "Phone"].map((l) => (
              <input key={l} required placeholder={l} className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold transition" />
            ))}
          </fieldset>
          <fieldset className="space-y-5">
            <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Shipping</legend>
            <input required placeholder="Address" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
            <div className="grid grid-cols-2 gap-5">
              <input required placeholder="City" className="border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
              <input required placeholder="Postal Code" className="border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
            </div>
            <input required placeholder="Country" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
          </fieldset>
          <fieldset className="space-y-5">
            <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Payment</legend>
            <input required placeholder="Card Number" className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
            <div className="grid grid-cols-2 gap-5">
              <input required placeholder="MM / YY" className="border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
              <input required placeholder="CVC" className="border-b border-border bg-transparent py-3 outline-none focus:border-gold" />
            </div>
          </fieldset>
        </div>

        <aside className="bg-champagne/40 p-8 h-fit">
          <h3 className="font-display text-2xl mb-6">Order Summary</h3>
          <ul className="divide-y divide-border">
            {items.map((item) => (
              <li key={item.id} className="py-4 flex gap-4">
                <img src={item.image} alt={item.name} className="h-16 w-14 object-cover" />
                <div className="flex-1 text-sm">
                  <p className="font-display text-base">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty {item.quantity}</p>
                </div>
                <span className="text-sm">{fmt(item.price * item.quantity)}</span>
              </li>
            ))}
            {items.length === 0 && <li className="py-6 text-sm text-center text-muted-foreground">Your cart is empty.</li>}
          </ul>
          <div className="border-t border-border pt-4 mt-4 flex justify-between font-display text-xl">
            <span>Total</span><span>{fmt(totalPrice)}</span>
          </div>
          <button disabled={items.length === 0} className="mt-6 w-full bg-primary text-primary-foreground py-4 text-[11px] tracking-luxe uppercase hover:bg-ink transition disabled:opacity-50">
            ✦ Complete Purchase
          </button>
        </aside>
      </form>
    </div>
  );
};

export default Checkout;

