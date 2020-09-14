import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="page">
        <header className="header">

          <img className="header__logo" src={require("./images/logo.png")} alt="Логотип" />
          <ul className="social-links">
            <li className="social-links__link">
              <a target="_blank" href="https://github.com>"><img src={require("./images/github.png")} alt="логотип сайта " /></a>
            </li>
            <li className="social-links__link">
              <a target="_blank" href="https://twitter.com>"><img src={require("./images/twitter.png")} alt="логотип сайта" /></a>
            </li>
            <li className="social-links__link">
              <a href="https://instagram.com" target="_blank"><img src={require("./images/instagram.png")} alt="логотип сайта " /></a>
            </li>
            <li className="social-links__link">
              <a target="_blank" href="https://facebook.com>"><img src={require("./images/facebook.png")} alt="логотип сайта " /></a>
            </li>
          </ul>
        </header>
        <main className="main">
          <section className="content">
            <div className="content__item">
              <h1 className="content__title">Фрилансер</h1>
              <h2 className="content__subtitle">Петр Федоров</h2>
              <p className="content__text">Разрабатываю сайты для малого и среднего бизнеса. У меня можно заказать дизайн и верстку небольшого сайта или интернет-магазина</p>
              <form action="#footer-form">
                <button className="button" type="button">Бесплатная
                консультация
                </button>
              </form>
            </div>
            <div className="content__item">
              <img className="content__avatar" src={require("./images/hero-avatar.png")} alt="аватар"/>
            </div>

           </section>
            <section className="features">
              <div className="features-content">
                <h2 className="features-content__title">Со мной удобно работать</h2>
                <div className="features-block">
                  <div className="features-block__item">
                    <img src={require("./images/offer-img.png")} alt="логотип оффер" />
                    <p className="features-block__title">По договору</p>
                    <p className="features-block__text">Предоставлю все документы для бухгалтерии: договоры, счета и акты. Работаю как ИП без НДС.</p>
                  </div>
                  <div className="features-block__item">
                    <img src={require("./images/deadline-img.png")} alt="логотип дедлайн" />
                    <p className="features-block__title">Точно в срок</p>
                    <p className="features-block__text">В договоре прописана моя ответственность за срок проекта. Если просрочу — плачу неустойку.</p>

                  </div>
                  <div className="features-block__item">
                    <img src={require("./images/agreement-img.png")} alt="логотип ценник" />
                    <p className="features-block__title">Ценник под вас</p>
                    <p className="features-block__text">Если у вас нетиповой проект, сделаю рассчет цены за работу и объясню, как складывается цена.</p>
                  </div>
                  <div className="features-block__item">
                    <img src={require("./images/steps-img.png")} alt="логотип шаги" />
                    <p className="features-block__title">Премежуточные итоги</p>
                    <p className="features-block__text">Показываю работу поэтапно, а не в последий момент перед крайним сроком.
                        </p>
                  </div>
                  <div className="features-block__item">
                    <img src={require("./images/storage-img.png")} alt="логотип хостинг"/>
                      <p className="features-block__title">Хостинг и домен </p>
                      <p className="features-block__text">Если мы договорились о цене проекта, в неё входит всё: домен и хостинг на год + SSL сертификат.</p>
                    </div>
                    <div className="features-block__item">
                      <img src={require("./images/conversation-img.png")} alt="логотип поддержка" />
                      <p className="features-block__title">Не брошу после сдачи</p>
                      <p className="features-block__text">Научу вас или вашего сотрудника пользоваться сайтом, запишу видео-инструкции.
                        </p>
                    </div>

                  </div>
                </div>

               </section>
              <footer className="footer">

                <div className="contacts">
                  <h2 className="contacts__title">Свяжитесь со мной</h2>
                  <div className="contacts-block">
                    <div className="contacts-form">
                      <form id="footer-form" className="form">
                        <p className="form__title">Можете просто оставить заявку, я позвоню вам сегодня</p>
                        <input className="form__text" type="text" placeholder="Ваше имя"/>
                          <input className="form__number" type="tel" placeholder="Ваш телефон"/>
                            <button className="button button_footer" type="submit">Бесплатная
                            консультация
                        </button>
                        </form>
                    </div>
                        <div className="contacts-text">
                          <div className="contacts-data">
                            <div className="contacts-data__phone">
                              <p className="contacts-data__phone-title">Телефон</p>
                              <p className="contacts-data__phone-number">+7 999 123 45 67</p>
                            </div>
                            <div className="contacts-data__email">
                              <p className="contacts-data__email-title">Почта</p>
                              <p className="contacts-data__email-adress">ivanov@mail.ru</p>
                            </div>

                          </div>
                          <div className="contacts-social">
                            <p className="contacts-social__title">Соцсети</p>
                            <ul className="contacts-social__links">
                              <li className="contacts-social__link">t.me/ivanov</li>
                              <li className="contacts-social__link">vk.me/ivanov</li>
                              <li className="contacts-social__link">fb.me/ivanov</li>
                            </ul>

                          </div>
                          <ul className="social-links">
                            <li className="social-links__link">
                              <a target="_blank" href="https://github.com>"><img src={require("./images/github.png")} alt="логотип сайта " /></a>
                            </li>
                            <li className="social-links__link">
                              <a target="_blank" href="https://twitter.com>"><img src={require("./images/twitter.png")} alt="логотип сайта" /></a>
                            </li>
                            <li className="social-links__link">
                              <a href="https://instagram.com" target="_blank"><img src={require("./images/instagram.png")} alt="логотип сайта " /></a>
                            </li>
                            <li className="social-links__link">
                              <a target="_blank" href="https://facebook.com>"><img src={require("./images/facebook.png")} alt="логотип сайта " /></a>
                            </li>
                          </ul>
                          <a className="contacts-text__policy" href="https://policies.google.com/privacy?hl=ru" target="_blank">Политика
                        конфиденциальности</a>


                        </div>
                </div>

                  </div>


             </footer>
         </main>
      </body>
   </div>
  );
}

export default App;

