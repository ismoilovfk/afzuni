import React from 'react';

export default function Services() {
  return (
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
  );
}
