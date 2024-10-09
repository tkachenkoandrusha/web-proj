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
          <div class="content">
            <div class="text">
              <h2>Чому саме ми?</h2>
              <h2>ДІАГНОСТИКА І ЗАМІНА ЗАПЧАСТЕЙ У ВАС НА ОЧАХ!</h2>
              <p>
                <strong>AppleCenter</strong> - це єдиний сервісний центр техніки Apple у Кропивницькому з  
                <span class="highlight"> ВІДКРИТИМ ДОСТУПОМ</span> до робочого процесу діагностики та заміни запчастин для клієнта! 
                Завдяки спеціальним заскленим робочим місцям, Ви зможете спостерігати, як розбирають та ремонтують Ваш iPhone!
              </p>
            </div>
            <div class="image">
              <img src={require('./lab.jpg')} alt="lab" className="hero-image" />
          </div>
        </div>
        </section>
        <section id="lab">
          <div class="content">
            <div class="text">
              <h2>ГАРАНТІЯ НА РЕМОНТ ДО 5-ТИ РОКІВ!</h2>
              <p>
              Ми використовуємо тільки оригінальні запчастини та всю свою увагу фокусуємо на якість та швидкий ремонт техніки Apple у Кропивницькому! За таких обставин і якщо ви не порушуєте умови експлуатації, ваш пристрій служитиме Вам довгі роки після ремонту!
              </p>
            </div>
          </div>

        </section>
      </main>
      <footer>
        <p>&copy; 2024 Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;
