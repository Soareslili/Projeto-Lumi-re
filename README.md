 Loja Virtual: LumièreMaison

 Sobre o Projeto

LumièreMaison é uma plataforma de e-commerce de joias de luxo, desenvolvida com foco em uma experiência visual sofisticada e fluida. O projeto combina uma identidade visual elegante — tons de champagne, dourado e creme — com uma arquitetura de frontend moderna, performática e escalável.

Da vitrine de produtos ao checkout, cada detalhe foi pensado para transmitir exclusividade e refinamento, unindo boas práticas de engenharia a uma experiência de usuário impecável.

🛠️ Tecnologias Utilizadas
Tecnologia	Uso no Projeto
React	Construção da interface e componentização
TypeScript	Tipagem estática e maior segurança no desenvolvimento
Tailwind CSS	Estilização utilitária com identidade visual customizada
AOS (Animate On Scroll)	Animações suaves ao rolar a página
JSON	Estrutura de dados do catálogo de produtos
Consumo de API	Integração e requisições assíncronas de dados
React Router DOM	Navegação entre páginas (SPA)
Vite	Build tool e ambiente de desenvolvimento rápido
🎨 Identidade Visual

O projeto utiliza uma paleta e tipografia customizadas no Tailwind, criando uma atmosfera de luxo consistente em toda a aplicação:

text-gold — dourado para destaques e elementos premium
bg-champagne — fundo em tom champagne
font-display — tipografia elegante para títulos
tracking-luxe — espaçamento de letras refinado para textos institucionais
🖥️ Funcionalidades
🛍️ Catálogo de produtos com filtros por categoria (Anéis, Brincos, Colares, Pulseiras)
🖼️ Fotografia de produto com identidade visual consistente (macro, luz dourada, fundo champagne)
🛒 Carrinho de compras dinâmico com atualização de quantidade e subtotal em tempo real
💳 Checkout modal com resumo do pedido
✨ Animações on-scroll com AOS para uma navegação fluida e elegante
📱 Design responsivo adaptado para desktop e mobile
⭐ Avaliações e destaques de produtos
📂 Estrutura do Projeto
lumieremaison/
├── public/
│   └── img/              # Imagens dos produtos
│   └── data/
│       └── products.json # Catálogo de produtos
├── src/
│   ├── components/
│   │   ├── Home/          # Seções da página inicial
│   │   ├── Layout/         # Header, CartSheet, etc.
│   │   ├── page/           # About, Contact, Checkout, Footer
│   │   ├── service/         # Consumo de dados e API
│   │   └── ui/              # Componentes reutilizáveis de UI
│   ├── Contexts/
│   │   └── CartContext.tsx  # Gerenciamento de estado do carrinho
│   ├── types/
│   │   └── products.ts      # Tipagens do produto
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json
🚀 Como Executar o Projeto

Clone o repositório:

bash
git clone https://github.com/seu-usuario/lumieremaison.git

Acesse a pasta do projeto:

bash
cd lumieremaison

Instale as dependências:

bash
npm install

Execute o projeto em ambiente de desenvolvimento:

bash
npm run dev

Acesse em seu navegador:

http://localhost:5173
📦 Build para Produção
bash
npm run build

Os arquivos otimizados serão gerados na pasta dist/.

🌐 Deploy

O projeto está preparado para deploy na Vercel. Para SPAs com React Router, é necessário garantir o redirecionamento correto das rotas através de um arquivo vercel.json:

json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
🗺️ Roadmap
 Integração com gateway de pagamento real
 Área de login e histórico de pedidos
 Sistema de wishlist persistente
 Painel administrativo para gestão do catálogo
 Internacionalização (i18n)
👩‍💻 Autora

Desenvolvido por Lidiane, desenvolvedora frontend especializada em React, TypeScript e experiências de e-commerce.

LinkedIn
GitHub
📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo como referência ou base de estudo.