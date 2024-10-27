const RegWindow = ({ isOpen, onClose, selectedCity }) => {
  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const wishes = event.target.wishes.value;

    const message = `
      Новый запрос на консультацию:
      Имя: ${name}
      Телефон: ${phone}
      Почта: ${email}
      Пожелания: ${wishes}
      Город: ${selectedCity}
    `;

    const botToken = '7026300930:AAEF6oauOI7RQMAC1UiWvrfzWzbqbOzpux4';
    const chatId = 5882350650;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML', 
        }),
      });

      alert('Форма отправлена!');
      onClose(); 
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Произошла ошибка при отправке формы.');
    }
  };

  return (
    <>
      <div className="BgDark" onClick={onClose}></div>
      <div className="window">
        <button className="closeButton" onClick={onClose}>
          <span className="closeIcon"></span>
        </button>
        <div className="hReg1">Получить бесплатную консультацию</div>
        <div className="hReg2">
          Заполните форму, наш специалист свяжется с вами в течение нескольких
          минут, чтобы обсудить все ваши пожелания.
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" className="inputWindow" placeholder="Как вас зовут?" required />
          <input type="tel" id="phone" name="phone" className="inputWindow" placeholder="+7 (999) 999-99-99" required />
          <input type="email" id="email" name="email" className="inputWindow" placeholder="Ваша почта" required />
          <textarea id="wishes" name="wishes" className="inputWindow" placeholder="Ваши пожелания" required></textarea>
          <input type="submit" value="Отправить" className="submitWindow" />
        </form>
      </div>
    </>
  );
};

export default RegWindow;

