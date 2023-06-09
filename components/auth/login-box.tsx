import React from 'react';
import Input from '@components/base/input';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { useForm } from 'react-hook-form';

interface LoginBoxProps {
  onClose: () => void;
  onRegister: () => void;
  onSearchPassword: () => void;
}

interface LoginForm {
  id: string;
  password: string;
}

const LoginBox: React.FC<LoginBoxProps> = ({ onClose, onRegister, onSearchPassword }) => {
  const { register, handleSubmit } = useForm<LoginForm>();
  return (
    <React.Fragment>
      <div className="flex justify-end">
        <button className="outline-none w-6 h-6" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <span>로그인</span>
      <div className="border-b-2 border-white " />
      <form className="flex flex-col space-y-4 pt-5">
        <Input name="아이디" type="text" focus={true} register={register('id', { required: true })} />
        <Input name="비밀번호" type="password" focus={true} register={register('password', { required: true })} />
        <div className="flex justify-end ">
          <input className="flex justify-center rounded-md items-center bg-white w-20 h-7 text-blue-500 " type="submit" value="로그인" />
        </div>
      </form>
      <div className="flex flex-row justify-center space-x-4 text-xs">
        <span onClick={onRegister} className="border-b-[1px]">
          회원가입
        </span>
        <span onClick={onSearchPassword} className="border-b-[1px]">
          비밀번호 찾기
        </span>
      </div>
    </React.Fragment>
  );
};

export default LoginBox;
