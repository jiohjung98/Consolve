import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface EmailInputProps {
  name: string;
  register: UseFormRegisterReturn;
  backgroundColor?: string;
  placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ name, register, placeholder, backgroundColor = 'black' }) => {
  return (
    <div className="relative">
      <span className="absolute text-xs font-light -top-2 left-3 px-1 transition-colors ease-out bg-blue-500">{name}</span>
      <div className="border-[1px] rounded-sm border-white">
        <label className="flex flex-row">
          <input
            {...register}
            placeholder={placeholder}
            required={true}
            type="email"
            className="flex-1 bg-transparent outline-none p-1  text-xs font-light px-3 h-9 placeholder:font-light"
            autoComplete="off"
          />
          <span className="flex justify-center items-center mr-2 text-xs">인증번호 받기</span>
        </label>
      </div>
    </div>
  );
};

export default EmailInput;
