import React from 'react';

interface RadioButtonProps {
  name: string;
  title: string;
  value: string;
  backgroundColor?: string;
  checked?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, title, backgroundColor = 'black', checked = false }) => {
  return (
    <label className="block text-xs">
      <input
        className={`appearance-none rounded-full h-2 w-2 mr-2 bg-${backgroundColor}  ring-1 checked:bg-blue-500 checked:ring-offset-2 checked:ring-offset-${backgroundColor}`}
        type="radio"
        id={title}
        name={name}
        value={value}
        defaultChecked={checked}
      />
      {title}
    </label>
  );
};

export default RadioButton;
