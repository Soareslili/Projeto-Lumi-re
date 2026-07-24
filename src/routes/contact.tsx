import { createFileRoute } from "@tanstack/react-router";
import Contact from "../components/page/Contact";

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