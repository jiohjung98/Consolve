import React, { MouseEventHandler, useEffect, useState } from 'react';
import Input from '@components/base/input';
import { useForm } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import LoginBox from '@components/auth/login-box';
import RegisterBox from '@components/auth/register-box';
import SearchPasswordBox from '@components/auth/search-password-box';

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

enum LoginEnum {
  LOGIN,
  REGISTER,
  SEARCH_PASSWORD,
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose }) => {
  const [tap, setTap] = useState<LoginEnum>(LoginEnum.LOGIN);
  const onLogin = () => setTap(LoginEnum.LOGIN);
  const onRegister = () => setTap(LoginEnum.REGISTER);
  const onSearchPassword = () => setTap(LoginEnum.SEARCH_PASSWORD);
  const taps = [
    <LoginBox key={LoginEnum.LOGIN} onClose={onClose} onRegister={onRegister} onSearchPassword={onSearchPassword} />,
    <RegisterBox key={LoginEnum.REGISTER} onClose={onClose} onLogin={onLogin} />,
    <SearchPasswordBox key={LoginEnum.SEARCH_PASSWORD} onClose={onClose} onLogin={onLogin} />,
  ];

  return (
    <Dialog open={show} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 opacity-60 bg-black" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-blue-500 py-4">
          <div className="flex flex-col w-10/12 m-auto text-white space-y-2">{taps[tap]}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default LoginModal;
