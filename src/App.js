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
      <li><a href="#rem">Ремонт</a></li>
      <li><a href="#user">Клієнту</a></li>
      <li><a href="#tradein">Trade-in</a></li>
      <li>
        <button className="quick-check-button">
          Швидка перевірка
        </button>
      </li>
    </ul>
  </nav>
</header>
      <main>
        <section id="home">
        <h1 className="hero-title">Apple  Center</h1>
        <div className="hero-info">
          <span>® Тільки оригінальні запчастини</span>
          <span>🔄 Заміна у Вашій присутності</span>
          <span>👍 До 5 років гарантії на ремонт</span>
          <span>🔬 Власна лабораторія у місті для складних ремонтів</span>
        </div>
        <img src={require('./iphone_x_large_2x.png')} alt="iPhone" className="hero-image" />
        </section>
        <section id="about">
          <h2>Чому саме ми?</h2>
          <p>ДІАГНОСТИКА І ЗАМІНА ЗАПЧАСТЕЙ У ВАС НА ОЧАХ! 
            AppleCenter - це єдиний сервісний центр техніки Apple у Кропивницькому з ВІДКРИТИМ ДОСТУПОМ до робочого процесу діагностики та заміни запчастин для клієнта! Завдяки спеціальним заскленим робочим місцям, Ви зможете спостерігати як розбирають та ремонтують Ваш iPhone!
          </p>
        </section>
        <section id="contact">
          <h2>Контакти</h2>
          <p>Зв'яжіться з нами за електронною поштою:</p>
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
