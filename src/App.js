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
              <h2>ВЛАСНА ЛАБОРАТОРІЯ В МІСТІ ДЛЯ ВАЖКИХ РЕМОНТІВ</h2>
              <p>
              Будь-який складний ремонт техніки Apple у Кропивницькому такий як:
              </p>
              <ul>
                <li>Заміна контролера живлення</li>
                <li>Заміна контролера заряду</li>
                <li>Заміна микросхеми управління сенсором</li>
                <li>Заміна Wi-fi модуля</li>
                <li>Заміна флеш-памʼяті</li>
                <li>Заміна процесора</li>
                <li>Відновлення після потрапляння рідини</li>
              </ul>
              <p>
              ми проводимо у власній лабораторії з найсучаснішим обладнанням, яке також знаходиться в центрі міста! Більше ніяких відправок та тижневих очікувань - 90% ремонтів ми виконуємо того ж дня, коли прийняли пристрій!
              </p>
            </div>
            <div class="image">
              <img src={require('./28_i.png')} alt="lab" className="hero-image" />
            </div>
          </div>
        </section>
        <section id="guarantee">
          <div class="content">
            <div class="text">
              <h2>ОРИГІНАЛЬНІ АКСЕСУАРИ, ГАРАНТІЯ 1 РІК!</h2>
              <p>
              Якщо ви хочете купити оригінальний зарядний пристрій iPhone в Кропивницькому з гарантією або будь-який інший аксесуар - ми даємо гарантію 1 рік на всю цифрову продукцію компанії Apple!
              </p>
              <p>
              Досить відвідати нас один раз і ви станете нашим постійним клієнтом. Ми запам'ятовуємось і нам довіряють. Кожного клієнта радіємо знижками та подарунками.
              У нас ви можете не тільки відремонтувати свій гаджет, але й придбати новий, а наші фахівці допоможуть вам його налаштувати.
              </p>
            </div>
            <div class="image">
              <img src={require('./ax.jpg')} alt="lab" className="hero-image" />
            </div>
          </div>
        </section>
        <section id="where">
          <div class="text">
            <h2>Де нас знайти?</h2>
          </div>
        </section>
        <section id="map">
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1321.7234346931705!2d32.2616998120362!3d48.50549769714259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d04303d9be97a5%3A0xd0c446dba472915f!2sApple%20Center!5e0!3m2!1sru!2sua!4v1669120087213!5m2!1sru!2sua"
              width="600" 
              height="450" 
              style={{ border: "0" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта локації Apple Center">
            </iframe>
          </div>
          </section>
      </main>
      <footer id="footer">
        <div class="footer-content">
          <div class="footer-column">
            <h3>Клієнту</h3>
            <ul>
              <li>Про нас</li>
              <li>Ремонт</li>
              <li>Trade-in</li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Наші контакти</h3>
            <p>вул.Набережна 13, ТЦ "Борса", 2-й поверх</p>
            <p>066 00 79 555</p>
            <button>Написати директору</button>
          </div>
          <div class="footer-column">
            <h3>Наші соцмережі</h3>
            <div class="social-icons">
              <a href="https://www.instagram.com/applecenterkr/" target="_blank" rel="noopener noreferrer">
                <img src={require('./instagram.png')} alt="instagram" className="social-icons" />
              </a>
              <a href="https://www.tiktok.com/@applecenterkr" target="_blank" rel="noopener noreferrer">
                <img src={require('./tkt.png')} alt="tkt" className="social-icons" />
              </a>
            </div>
          </div>
        </div>
        <p>&copy; 2024 Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default App;
