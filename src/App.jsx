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

export default function App() {
  return (
    <div className="site-root">
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#hero">
            <img className="brand-logo" src="images/Afzni-logo.png" alt="Afzuni" />
            <span className="brand-name">Afzuni</span>
          </a>
          <nav className="nav">
            <a href="#about">О нас</a>
            <a href="#services">Преимущества</a>
            <a href="#partners">Партнеры</a>
            <a href="#contact">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container hero-inner">
            <h1>Надежный дистрибьютор в Таджикистане</h1>
            <p>Afzuni — путь к изобилию и процветанию</p>
            <a className="btn-primary" href="#contact">Связаться</a>
          </div>
          <div className="hero-bg" aria-hidden="true" />
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <h2>О нас</h2>
              <p className="tagline">Мы не просто дистрибьюторы — мы двигаем рынок вперёд.</p>
              <ul className="feature-list">
                <li>Прорывная логистика по всей стране</li>
                <li>Надёжная партнёрская сеть</li>
                <li>Стабильный рост 10+ лет</li>
                <li>Команда профессионалов</li>
              </ul>
            </div>
            <div className="media">
              <img src="images/about.jpg" alt="Afzuni в действии" />
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Наши преимущества</h2>
            <div className="cards">
              <article className="card">
                <div className="icon"><i className="fas fa-truck-fast" /></div>
                <h3>Логистика без границ</h3>
                <p>Доставляем товары по всему Таджикистану.</p>
              </article>
              <article className="card">
                <div className="icon"><i className="fas fa-warehouse" /></div>
                <h3>Современные склады</h3>
                <p>Передовые технологии хранения и сохранность товара.</p>
              </article>
              <article className="card">
                <div className="icon"><i className="fas fa-handshake" /></div>
                <h3>Партнёрство и рост</h3>
                <p>Помогаем брендам выходить на рынок и масштабироваться.</p>
              </article>
              <article className="card">
                <div className="icon"><i className="fas fa-chart-line" /></div>
                <h3>Аналитика рынка</h3>
                <p>Решения на основе актуальных данных и трендов.</p>
              </article>
            </div>
          </div>
        </section>

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

        <section id="contact" className="section">
          <div className="container contact">
            <div>
              <h2>Свяжитесь с нами</h2>
              <p><i className="fas fa-map-marker-alt" /> Таджикистан, г. Худжанд, Мевагул, 16 микрорайон, ОАО «СОРБОН»</p>
              <p>
                <a className="link" href="tel:+992557655555"><i className="fas fa-phone" /> +992 55-765-55-55</a>
              </p>
              <p>
                <a className="link" href="https://wa.me/992557655555" target="_blank" rel="noreferrer">
                  <i className="fab fa-whatsapp" /> WhatsApp
                </a>
              </p>
              <p>
                <a className="link" href="mailto:info@afzuni.ru"><i className="fas fa-envelope" /> info@afzuni.ru</a>
              </p>
              <p>
                <a className="link" href="https://t.me/afzuni_tj" target="_blank" rel="noreferrer">
                  <i className="fab fa-telegram" /> Telegram
                </a>
              </p>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" placeholder="Ваше имя" required />
              <input type="email" name="email" placeholder="Ваш email" required />
              <textarea name="message" placeholder="Ваше сообщение" required />
              <button type="submit" className="btn-primary">Отправить</button>
              <p className="muted small">Форма демо. Напишите нам на email или в мессенджеры.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2025 Afzuni. Все права защищены.</p>
          <div className="social">
            <a href="https://t.me/afzuni_tj" target="_blank" rel="noreferrer" aria-label="Telegram"><i className="fab fa-telegram" /></a>
            <a href="https://instagram.com/afzuni.tj" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href="https://wa.me/992557655555" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}


