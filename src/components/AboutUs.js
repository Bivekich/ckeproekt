const AboutUs = () => {
  return (
    <div className="aboutUs" id="aboutus">
      <div className="aboutUsLeft">
        <div className="aboutUsLeftTitle">Коротко о нас</div>
        <div className="aboutUsLeftTextContainer">
          <div className="aboutUsLeftText">Более 9 лет на рынке</div>
          <div className="aboutUsLeftText">
            В нашей организации работают дипломированные специалисты, кандидат
            технических наук, инженеры с большим стажем работы и
            квалифицированный сметчик
          </div>
          <div className="aboutUsLeftText">
            Наработан огромный опыт, позволяющий провести экспертизу даже в
            самых сложных ситуациях
          </div>
          <div className="aboutUsLeftText">
            Работаем как с юридическими, так и с физическими лицами
          </div>
          <div className="aboutUsLeftText">
            Не накручиваем цены и не навязываем ненужные допуслуги
          </div>
        </div>
      </div>

      <div className="aboutUsRight">
        <div className="leftHalf">
          <div className="buildingContainer">
          <img src="/Building1.svg" alt="Building 1" className="leftHalfImg" />
          <img src="/topBuilding.svg" alt="Building Top" className="leftHalfImgTop" />
          </div>
          <div className="leftHalfSmallBlocks">
            <div className="smallBlock1">
              <div className="smallBlock1Text">{">"}500</div>
              <div className="smallBlock1Text2">обследовано зданий и сооружений</div>
            </div>
            <div className="smallBlock1">
              <div className="smallBlock1Text">{">"}1500 </div>
              <div className="smallBlock1Text2">квартир прошли проверку на качество ремонта</div>
            </div>
          </div>
        </div>
        <div className="rigthHalf">
          <img src="/Building2.svg" alt="Building 2" />
          <div className="smallBlock2">
            <div className="smallBlock1Text">{">"}1500</div>
            <div className="smallBlock1Text3">квартирам мы оказали помощь при затоплении</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
