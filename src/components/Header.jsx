import React from 'react';

export default function Header() {
  return (
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
  );
}
