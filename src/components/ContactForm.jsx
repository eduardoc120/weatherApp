import "../assets/styles/components/ContactForm.css";

import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { InputField } from "./InputField";

const langsLabels = {
  en: {
    name: {
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
    },
    birthday: {
      label: "Birthday",
      placeholder: "Select your birthday",
      type: "date",
    },
    city: {
      label: "City",
      placeholder: "Enter your city",
      type: "text",
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    phone: {
      label: "Phone",
      placeholder: "Enter your phone",
      type: "tel",
    },
  },
  es: {
    name: {
      label: "Nombre",
      placeholder: "Ingresa tu nombre",
      type: "text",
    },
    birthday: {
      label: "Cumpleaños",
      placeholder: "Selecciona tu cumpleaños",
      type: "date",
    },
    city: {
      label: "Ciudad",
      placeholder: "Ingresa tu ciudad",
      type: "text",
    },
    email: {
      label: "Email",
      placeholder: "Ingresa tu email",
      type: "email",
    },
    phone: {
      label: "Teléfono",
      placeholder: "Ingresa tu teléfono",
      type: "tel",
    },
  },
};

export function ContactForm({ lang }) {
  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    city: "",
    email: "",
    phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  return (
    <div className="contact-form-container">
      <h3>Contact Form</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        {Object.keys(langsLabels[lang]).map((key) => (
          <InputField
            key={key}
            label={langsLabels[lang][key].label}
            type={langsLabels[lang][key].type}
            placeholder={langsLabels[lang][key].placeholder}
            value={formData[key]}
            onChange={handleChange}
            name={key}
          />
        ))}
        <button disabled={!isFormValid}>Send</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  lang: PropTypes.string.isRequired,
};
