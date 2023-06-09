import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  focus: boolean;
  register: UseFormRegisterReturn;
  required?: boolean;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, register, focus, placeholder, required }) => {
  return (
    <div className={`relative h-full ${!focus ? 'text-gray-400' : ''}`}>
      <span className={`absolute text-xs font-light -top-2 left-3 px-1 transition-colors ease-out bg-black`}>{name}</span>
      <textarea
        {...register}
        placeholder={placeholder}
        required={required}
        className={`w-full h-full bg-transparent resize-none outline-none p-1 border-[1px] rounded-sm text-xs font-light px-3 placeholder:font-light ${
          !focus ? 'border-gray-400' : 'border-white'
        }`}
      />
    </div>
  );
};

export default TextArea;
