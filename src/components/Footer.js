import { HashLink as Link } from "react-router-hash-link";

const Footer = ({ selectedCity }) => {
  const address =
    selectedCity === "Чебоксары"
      ? "г.Чебоксары, Тракторостроителей 11"
      : "г.Москва, ул. Пресненская, д.6, ст. 2";

  return (
    <div className="footer" id="footer">
      <div className="footerContacts">
        <img src="/logo.svg" alt="Logo" />
        <div className="footerContactsTitle">
          <b>Контакты</b>
          <a href="tel:+79168305858">+7 (916) 830-58-58</a>
          <p>
            <a href="mailto:ckeproekt@yandex.ru">ckeproekt@yandex.ru</a>
          </p>
        </div>
      </div>
      <div className="footerLinks">
        <div className="footerLinksTitle">
          <Link to="#aboutus" smooth>О нас</Link>
          <Link to="#services" smooth>Услуги</Link>
        </div>
        <div className="footerLinksTitle">
          <Link to="#jobs" smooth>Порядок работ</Link>
          <Link to="#whyUs" smooth>Почему выбирают нас</Link>
        </div>
      </div>
      <div className="footerLocation">
        <b className="footerLocationTitle">
          <img
            src="/location.svg"
            alt="Location"
            className="footerLocationIcon"
          />
          Где мы находимся?
        </b>
        <p>{address}</p>
        <p>ПН-ПТ 8:00 - 20:00</p>
      </div>
    </div>
  );
};

export default Footer;
