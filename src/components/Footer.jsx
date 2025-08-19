import React from 'react';

export default function Footer() {
  return (
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
  );
}
