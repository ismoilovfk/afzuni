import React from 'react';

export default function About() {
  return (
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
  );
}
