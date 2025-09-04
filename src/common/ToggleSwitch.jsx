import React from 'react'

const ToggleSwitch = ({ 
  id, 
  checked, 
  onChange, 
  label, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="order-1 px-2 text-sm font-medium text-gray-700">
        {label}
      </span>
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <div className="relative">
          <input 
            type="checkbox" 
            id={id} 
            className="sr-only" 
            checked={checked}
            onChange={onChange}
          />
          <div className={`block w-12 h-7 border border-gray-300 border-2 rounded-full transition-all duration-300 ease-in-out ${
            checked 
              ? 'bg-blue-200 shadow-neumorphic-toggle-inset' 
              : 'bg-gray-50 shadow-neumorphic-toggle-outset'
          }`}></div>
          <div className={`dot absolute left-1 top-1 bg-gray-500 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
            checked ? 'translate-x-6' : ''
          }`}></div>
        </div>
      </label>
    </div>
  )
}

export default ToggleSwitch 