const WhyUs = () => {
  return (
    <div className="whyUs" id="whyUs">
      <div className="whyUsContainer">
        <div className="whyUsTextContainer">
          <div className="whyUsTitle">Почему выбирают нас?</div>
          <div className="whyUsText">
            Имеем все необходимые гарантии качества работ
          </div>
        </div>
        <div className="whyUsImageContainer">
          <img src="/1.svg" alt="building_image1" />
          <img src="/2.svg" alt="building_image2" className="building_image2" />
        </div>
      </div>
      <div className="points">
      <div className="point1">
          Некачественная экспертиза, приводящая к ущербу наказуема,
          поэтому мы обязаны работать качественно
        </div>
        <div className="point2">
        Лучшие цены 
        </div>
        <div className="point3">
          Состоим в профильных СРО, предоставляющей разрешение на работы и
          страхование до 30 млн рублей
        </div>
        <div className="point4">
          Застрахованы в Британском страховом доме на 10 млн рублей
        </div>
        <div className="point5">
        Имеем все необходимые квалификационные и страховые документы
        </div>
        <div className="point6">
        Оперативный выезд на объект 
        </div>
        <div className="point7">
        Не беремся за дело если не уверены в  результате 
        </div>
        <div className="point8">
        Юридическая поддержка
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
