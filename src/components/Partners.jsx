import React from 'react';

const partners = [
  { href: '#', img: 'images/martin-logo.jpg', alt: 'Мартин' },
  { href: '#', img: 'images/vanya.png', alt: 'Дядя Ваня' },
  { href: '#', img: 'images/voron.png', alt: 'Воронцовские' },
  { href: '#', img: 'images/stamba.png', alt: 'Stamba' },
  { href: '#', img: 'images/pasteroni.png', alt: 'Pasteroni' },
  { href: '#', img: 'images/sibbalt.png', alt: 'Sibbalt' },
  { href: '#', img: 'images/mikado.jpg', alt: 'Mikado' },
  { href: '#', img: 'images/hlebprom.jpg', alt: 'Хлебпром' },
  { href: '#', img: 'images/Logo-Baraket-Isfara.png', alt: 'Barakat' },
  { href: '#', img: 'images/sibyksys.png', alt: 'Sibyksys' },
];

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container">
        <h2>Наши партнеры</h2>
        <p className="muted">Сотрудничаем с ведущими брендами региона</p>
        <div className="logo-grid">
          {partners.map((p, i) => (
            <a key={i} className="logo-card" href={p.href} aria-label={p.alt}>
              <img src={p.img} alt={p.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
