
import { ChangeEventHandler } from 'react';
import '../assets/styles/components/InputField.scss';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: ChangeEventHandler;
}

export function InputField({ label, type, placeholder, value, onChange, name }: InputFieldProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
