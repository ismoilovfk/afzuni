import React from 'react';

export default function Contact() {
  return (
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
  );
}
