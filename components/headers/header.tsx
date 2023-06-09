import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginModal from '@components/modal/login';

const routes = [
  { href: '/', path: '', name: '홈' },
  { href: '/upload', path: 'upload', name: '업로드' },
  { href: '/content', path: 'content', name: '나의 콘텐츠' },
  { href: '/profile', path: 'profile', name: '프로필' },
];

const Header: React.FC = () => {
  const router = useRouter();
  const path = router.pathname.split('/')[1];
  console.log(path);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="relative">
      <div className="w-full h-20 fixed bg-white z-30">
        <div className="max-w-[1640px] w-5/6 m-auto text-black">
          <div className="flex flex-row justify-between">
            <div className="my-5">
              <Image src="/logo.svg" width={227} height={45} />
            </div>
            <div className="mb-5 w-full border-b-2 border-black flex justify-end">
              <div className="w-96 flex flex-row font-bold justify-evenly text-sm ">
                {routes.map((route, idx) => {
                  if (path === route.path) {
                    return (
                      <div key={idx} className="px-3 flex justify-center items-center bg-blue-500 text-white  h-full">
                        <Link href={route.href}>
                          <a>{route.name}</a>
                        </Link>
                      </div>
                    );
                  } else {
                    return (
                      <div key={idx} className="px-3 flex justify-center items-center">
                        <Link href={route.href}>
                          <a>{route.name}</a>
                        </Link>
                      </div>
                    );
                  }
                })}

                <div onClick={() => setShowModal(true)} className="px-3 flex justify-center items-center">
                  <span className='text-red-100 hover:text-red-900'>로그인</span>
                  <LoginModal show={showModal} onClose={() => setShowModal(false)} />
                </div>

                <div className="w-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20" />
    </div>
  );
};

export default Header;
