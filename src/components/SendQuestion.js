import React, { useState } from "react";

const SendQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    wishes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = `
      Новый запрос на консультацию:
      Имя: ${formData.name}
      Фамилия: ${formData.lastName}
      Телефон: ${formData.phone}
      Почта: ${formData.email}
      Пожелания: ${formData.wishes}
    `;

    const botToken = "7026300930:AAEF6oauOI7RQMAC1UiWvrfzWzbqbOzpux4";
    const chatId = -4503751220;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      });

      alert("Форма отправлена!");
      // Clear the form
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        wishes: "",
      });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке формы.");
    }
  };

  return (
    <div className="sendQuestion">
      <form className="sendQuestionForm" onSubmit={handleSubmit}>
        <div className="sendQuestionFormRow">
          <div className="sendQuestionFormRow1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Имя"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Телефон"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="sendQuestionFormRow2">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Фамилия"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <textarea
          type="text"
          id="wishes"
          name="wishes"
          placeholder="Дополнительная информация"
          value={formData.wishes}
          onChange={handleChange}
        />

        <button type="submit" className="sendQuestionSubmit">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default SendQuestion;
