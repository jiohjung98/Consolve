import React from 'react';
import Input from '@components/base/input';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface SearchPasswordBoxProps {
  onClose: () => void;
  onLogin: () => void;
}

interface SearchPasswordForm {
  id: string;
  email: string;
}

const SearchPasswordBox: React.FC<SearchPasswordBoxProps> = ({ onClose, onLogin }) => {
  const { register, handleSubmit } = useForm<SearchPasswordForm>();
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <button className="outline-none w-6 h-6" onClick={onLogin}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button className="outline-none w-6 h-6" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <span>비밀번호 찾기</span>
      <div className="border-b-2 border-white " />
      <form className="flex flex-col space-y-4 pt-5">
        <Input name="아이디" type="text" focus={true} register={register('id', { required: true })} />
        <Input name="이메일" type="email" focus={true} register={register('email', { required: true })} />
        <div className="flex justify-end ">
          <input
            className="flex justify-center rounded-md items-center bg-white w-full h-7 text-blue-500 "
            type="submit"
            value="비밀번호 찾기"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default SearchPasswordBox;
