import { createFileRoute } from "@tanstack/react-router";
import About from "../components/page/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nossa História — Lumière Maison" },
      { name: "description", content: "Quatro gerações de artesãos parisienses dedicados à arte da joalheria fina." },
      { property: "og:title", content: "Nossa História — Lumière Maison" },
      { property: "og:description", content: "Heritage, craftsmanship and timeless design." },
    ],
  }),
  component: About,
});