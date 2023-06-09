import React from 'react';
import Image from 'next/image';

const Partners: React.FC = () => {
  return (
    <div className="flex flex-col text-black my-10">
      <h1 className="flex justify-center text-4xl font-bold">ConSolv®를 사용중인 파트너사</h1>
      <h2 className="flex justify-center text-lg font-medium">수많은 파트너사가 ConSolv®를 사용하여 콘텐츠를 보호하고 있습니다!</h2>
      <Image src="/assets/partners.png" width={1500} height={500} />
    </div>
  );
};

export default Partners;
