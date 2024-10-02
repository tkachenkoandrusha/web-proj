import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apple Center Service</h1>
        <nav>
          <ul>
            <li><a href="#home">Головна</a></li>
            <li><a href="#about">Про нас</a></li>
            <li><a href="#contact">Контакти</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Вітання</h2>
          <p>Ласкаво просимо на нашу сторінку!</p>
        </section>
        <section id="about">
          <h2>Про нас</h2>
          <p>Тут можна написати коротку інформацію про компанію чи проект.</p>
        </section>
        <section id="contact">
          <h2>Контакти</h2>
          <p>Зв'яжіться з нами за електронною поштою: info@example.com</p>
          <li><a href="#instagram">Інстаграм</a></li>
          <li><a href="#tiktok">Tik Tok</a></li>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;
