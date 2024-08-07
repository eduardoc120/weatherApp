
import '../assets/styles/components/InputField.css';

import PropTypes from 'prop-types';

export function InputField({ label, type, placeholder, value, onChange, name }) {
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

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
