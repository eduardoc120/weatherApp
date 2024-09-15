import "../assets/styles/components/ContactForm.scss";

import { useState, useEffect } from "react";

import { InputField } from "./InputField";
import { Lang } from "@/types";

type FormField = "name" | "birthday" | "city" | "email" | "phone";

interface FieldConfig {
  label: string;
  placeholder: string;
  type: string;
}

interface LangLabels {
  [key: string]: {
    name: FieldConfig;
    birthday: FieldConfig;
    city: FieldConfig;
    email: FieldConfig;
    phone: FieldConfig;
  }
}

interface FormData {
  name: string;
  birthday: string;
  city: string;
  email: string;
  phone: string;
}

interface ContactFormProps {
  lang: Lang
}

const langsLabels: LangLabels = {
  en: {
    name: { label: "Name", placeholder: "Enter your name", type: "text" },
    birthday: { label: "Birthday", placeholder: "Select your birthday", type: "date" },
    city: { label: "City", placeholder: "Enter your city", type: "text" },
    email: { label: "Email", placeholder: "Enter your email", type: "email" },
    phone: { label: "Phone", placeholder: "Enter your phone", type: "tel" },
  },
  es: {
    name: { label: "Nombre", placeholder: "Ingresa tu nombre", type: "text" },
    birthday: { label: "Cumpleaños", placeholder: "Selecciona tu cumpleaños", type: "date" },
    city: { label: "Ciudad", placeholder: "Ingresa tu ciudad", type: "text" },
    email: { label: "Email", placeholder: "Ingresa tu email", type: "email" },
    phone: { label: "Teléfono", placeholder: "Ingresa tu teléfono", type: "tel" },
  },
};

export function ContactForm({ lang }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    birthday: "",
    city: "",
    email: "",
    phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <h3>{lang.code === 'en' ? 'Contact Form' : 'Contáctanos'}</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        {Object.keys(langsLabels[lang.code]).map((key) => {
          const field = key as FormField;
          const { label, placeholder, type } = langsLabels[lang.code][field];

          return (
            <InputField
              key={field}
              label={label}
              type={type}
              placeholder={placeholder}
              value={formData[field]}
              onChange={handleChange}
              name={field}
            />
          );
        })}
        <button disabled={!isFormValid}>{lang.code === 'en' ? 'Send' : 'Enviar'}</button>
      </form>
    </div>
  );
}
