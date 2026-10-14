"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";

interface Product {
  id: string;
  name: string;
  category: string;
  badge?: string;
  description: string;
  price: number;
  pixDiscountPercent: number;
  brand: string;
  icon: string;
}

const products: Product[] = [
  {
    id: "ssd-1tb",
    name: "SSD Kingston NV2 1TB M.2 2280 NVMe",
    category: "Armazenamento",
    badge: "Mais Vendido",
    description: "Leitura de até 3500MB/s e gravação de até 2100MB/s. O upgrade definitivo para seu PC ou notebook.",
    price: 389.9,
    pixDiscountPercent: 10,
    brand: "Kingston",
    icon: "⚡"
  },
  {
    id: "ssd-480gb",
    name: "SSD Crucial BX500 480GB SATA III 2.5\"",
    category: "Armazenamento",
    badge: "Custo-Benefício",
    description: "Multiplique a velocidade de inicialização do seu notebook antigo. Inicialização em menos de 15 segundos.",
    price: 219.9,
    pixDiscountPercent: 10,
    brand: "Crucial",
    icon: "💾"
  },
  {
    id: "ram-16gb-ddr4",
    name: "Memória Kingston Fury Beast 16GB DDR4 3200MHz",
    category: "Memória RAM",
    badge: "Alta Performance",
    description: "Dissipador de calor em alumínio preto com perfil baixo. Plug and Play com overclock automático.",
    price: 279.9,
    pixDiscountPercent: 10,
    brand: "Kingston",
    icon: "🧠"
  },
  {
    id: "ram-32gb-ddr5",
    name: "Memória Corsair Vengeance 32GB (2x16GB) DDR5 5600MHz",
    category: "Memória RAM",
    badge: "Topo de Linha",
    description: "Projetada para os processadores mais recentes Intel e AMD. Perfil Intel XMP 3.0 e AMD EXPO.",
    price: 689.9,
    pixDiscountPercent: 10,
    brand: "Corsair",
    icon: "🚀"
  },
  {
    id: "tinta-epson",
    name: "Kit 4 Garrafas de Tinta Epson T544 Original",
    category: "Impressoras",
    badge: "100% Original",
    description: "Para EcoTank L3150, L3250, L3110 e L5190. Cores vivas, secagem rápida e proteção para o cabeçote.",
    price: 189.9,
    pixDiscountPercent: 10,
    brand: "Epson",
    icon: "🖨️"
  },
  {
    id: "mouse-logitech",
    name: "Mouse Gamer Logitech G203 Lightsync RGB",
    category: "Periféricos",
    badge: "Destaque",
    description: "Sensor de 8.000 DPI ajustável, 6 botões programáveis e iluminação RGB com tecnologia Lightsync.",
    price: 149.9,
    pixDiscountPercent: 10,
    brand: "Logitech",
    icon: "🖱️"
  },
  {
    id: "teclado-mecanico",
    name: "Teclado Mecânico Redragon Kumara Switch Blue",
    category: "Periféricos",
    description: "Switches mecânicos táteis, sistema Anti-Ghosting em todas as teclas e estrutura reforçada em metal.",
    price: 229.9,
    pixDiscountPercent: 10,
    brand: "Redragon",
    icon: "⌨️"
  },
  {
    id: "fonte-corsair",
    name: "Fonte Corsair CV650 650W 80 Plus Bronze",
    category: "Hardware",
    badge: "Segurança",
    description: "Certificação 80 Plus Bronze de eficiência energética. Ventoinha de 120mm silenciosa com controle térmico.",
    price: 369.9,
    pixDiscountPercent: 10,
    brand: "Corsair",
    icon: "🔌"
  },
  {
    id: "pasta-termica",
    name: "Pasta Térmica Arctic MX-4 (4g) com Espátula",
    category: "Hardware",
    badge: "Essencial",
    description: "Condutividade de 8.5 W/mK. Reduz drasticamente a temperatura de processadores e chips de notebook.",
    price: 49.9,
    pixDiscountPercent: 10,
    brand: "Arctic",
    icon: "🧪"
  },
  {
    id: "roteador-tplink",
    name: "Roteador TP-Link Archer AX12 Wi-Fi 6 Gigabit",
    category: "Redes",
    description: "Velocidades de até 1.5 Gbps (1201 Mbps em 5GHz + 300 Mbps em 2.4GHz). Suporta dezenas de conexões sem lag.",
    price: 299.9,
    pixDiscountPercent: 10,
    brand: "TP-Link",
    icon: "🌐"
  }
];

const categories = [
  "Todos",
  "Armazenamento",
  "Memória RAM",
  "Periféricos",
  "Hardware",
  "Impressoras",
  "Redes"
];

const whatsappPhone = "5511999998888";

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

export default function LojaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "Todos" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartValue = cart.reduce(
    (acc, item) => acc + item.product.price * (1 - item.product.pixDiscountPercent / 100) * item.quantity,
    0
  );

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }

  function updateQuantity(productId: string, delta: number) {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  }

  function getBuyDirectUrl(product: Product) {
    const pixPrice = product.price * (1 - product.pixDiscountPercent / 100);
    const msg = `Olá! Gostaria de comprar o produto anunciado na Loja Nexus Tech:\n📦 *${product.name}*\n💰 Valor: ${formatCurrency(pixPrice)} no Pix (ou ${formatCurrency(product.price)} parcelado).`;
    return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(msg)}`;
  }

  function getCheckoutCartUrl() {
    const itemsList = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} (${formatCurrency(
            item.product.price * (1 - item.product.pixDiscountPercent / 100)
          )} cada)`
      )
      .join("\n");
    const msg = `Olá! Montei meu carrinho na Loja Online da Nexus Tech:\n\n${itemsList}\n\n*Total no Pix:* ${formatCurrency(totalCartValue)}\n\nGostaria de finalizar meu pedido e combinar a entrega/retirada!`;
    return `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(msg)}`;
  }

  return (
    <div className="loja-page">
      {/* HEADER DA LOJA */}
      <header className="site-header">
        <div className="container header-container">
          <Link href="/" className="header-logo-link" aria-label="Voltar para a página inicial">
            <Logo size="md" />
          </Link>

          <div className="loja-header-center">
            <Link href="/" className="btn btn-secondary btn-sm back-link">
              ← Voltar para o Site Principal
            </Link>
          </div>

          <div className="header-actions">
            <ThemeToggle />
            <button
              type="button"
              className="btn btn-primary cart-toggle-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Abrir carrinho de compras"
            >
              <span>🛒 Carrinho</span>
              {totalCartCount > 0 && <span className="cart-badge">{totalCartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* HERO DA LOJA */}
      <section className="loja-hero">
        <div className="container">
          <span className="badge-pill">LOJA OFICIAL NEXUS TECH</span>
          <h1>Peças, Upgrades e Acessórios Homologados</h1>
          <p className="hero-lead">
            Produtos 100% originais com nota, garantia comprovada e pronta entrega. Compre online com
            atendimento especializado pelo WhatsApp ou retire na nossa unidade.
          </p>

          <div className="loja-perks">
            <div className="perk-item">
              <span className="perk-icon">⚡</span>
              <div>
                <strong>Pronta Entrega</strong>
                <span>Estoque imediato</span>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">🛡️</span>
              <div>
                <strong>Garantia Oficial</strong>
                <span>Até 3 anos pelo fabricante</span>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">💰</span>
              <div>
                <strong>10% OFF no Pix</strong>
                <span>Ou até 12x no cartão</span>
              </div>
            </div>
            <div className="perk-item">
              <span className="perk-icon">🔧</span>
              <div>
                <strong>Instalação Gratuita</strong>
                <span>Na compra de memórias e SSDs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS E BUSCA */}
      <section className="loja-catalog-section">
        <div className="container">
          <div className="catalog-toolbar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Buscar por produto, marca ou especificação..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="search-clear-btn"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="category-chips">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`chip-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* GRID DE PRODUTOS */}
          {filteredProducts.length === 0 ? (
            <div className="empty-catalog text-center">
              <span className="empty-icon">📦</span>
              <h3>Nenhum produto encontrado</h3>
              <p>Tente buscar por outro termo ou selecione uma categoria diferente.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((p) => {
                const pixPrice = p.price * (1 - p.pixDiscountPercent / 100);
                return (
                  <article key={p.id} className="product-card">
                    <div className="product-card-top">
                      <span className="product-brand-tag">{p.brand}</span>
                      {p.badge && <span className="product-badge">{p.badge}</span>}
                    </div>

                    <div className="product-icon-display">{p.icon}</div>

                    <div className="product-info">
                      <span className="product-category-label">{p.category}</span>
                      <h3 className="product-title">{p.name}</h3>
                      <p className="product-desc">{p.description}</p>
                    </div>

                    <div className="product-pricing">
                      <div className="price-pix">
                        <span className="price-pix-val">{formatCurrency(pixPrice)}</span>
                        <span className="price-pix-label">à vista no Pix ({p.pixDiscountPercent}% OFF)</span>
                      </div>
                      <div className="price-card-term">
                        <span>ou {formatCurrency(p.price)} em até 6x sem juros</span>
                      </div>
                    </div>

                    <div className="product-actions">
                      <button
                        type="button"
                        className="btn btn-secondary btn-add-cart"
                        onClick={() => addToCart(p)}
                      >
                        + Adicionar
                      </button>
                      <a
                        href={getBuyDirectUrl(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-buy-now"
                      >
                        Comprar via WhatsApp
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* MODAL / DRAWER DO CARRINHO */}
      {isCartOpen && (
        <div className="cart-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3>
                Seu Carrinho ({totalCartCount} {totalCartCount === 1 ? "item" : "itens"})
              </h3>
              <button
                type="button"
                className="cart-close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="cart-drawer-body">
              {cart.length === 0 ? (
                <div className="empty-cart text-center">
                  <span className="empty-cart-icon">🛒</span>
                  <p>Seu carrinho está vazio no momento.</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Ver Produtos da Loja
                  </button>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cart.map((item) => {
                    const itemPixPrice =
                      item.product.price *
                      (1 - item.product.pixDiscountPercent / 100) *
                      item.quantity;
                    return (
                      <div key={item.product.id} className="cart-item">
                        <div className="cart-item-icon">{item.product.icon}</div>
                        <div className="cart-item-details">
                          <strong>{item.product.name}</strong>
                          <span className="cart-item-price">
                            {formatCurrency(itemPixPrice)}
                          </span>
                          <div className="cart-item-controls">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQuantity(item.product.id, -1)}
                            >
                              -
                            </button>
                            <span className="qty-val">{item.quantity}</span>
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQuantity(item.product.id, 1)}
                            >
                              +
                            </button>
                            <button
                              type="button"
                              className="cart-remove-btn"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-total-row">
                  <span>Subtotal com desconto Pix:</span>
                  <strong>{formatCurrency(totalCartValue)}</strong>
                </div>
                <a
                  href={getCheckoutCartUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-checkout"
                >
                  💬 Finalizar Pedido no WhatsApp →
                </a>
                <span className="checkout-note">
                  Seu pedido será enviado formatado diretamente ao nosso atendimento.
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER DA LOJA */}
      <footer className="loja-footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Nexus Tech - Loja Online Oficial.</p>
          <p className="footer-cred">
            Garantia de procedência, suporte técnico dedicado e atendimento ágil.
          </p>
        </div>
      </footer>
    </div>
  );
}
