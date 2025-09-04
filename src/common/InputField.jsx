import React from 'react'
import PhoneInputWithCountry from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const InputField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  className = '',
  options = [], 
  error,
  ...props 
}) => {
  // handle phone input
  const handlePhoneChange = (phoneValue) => {
    if (onChange) {
      onChange(phoneValue || '');
    }
  }
  
  if (type === 'phone') {
    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <PhoneInputWithCountry
          name={name}
          international
          countryCallingCodeEditable={true}
          defaultCountry="EG"
          placeholder={placeholder}
          value={value}
          onChange={handlePhoneChange}
          className={`bg-gray-200 border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    )
  }

  // select input type
  if (type === 'select') {
    return (
      <div className={className}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          className={`w-full border bg-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          name={name}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    )
  }

  // handle regular input (text, email, password)
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border bg-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        name={name}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

export default InputField 