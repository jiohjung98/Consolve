import React from 'react';
import Image from 'next/image';

const Description: React.FC = () => {
  return (
    <div className="w-5/6 m-auto">
      <div className="flex flex-row justify-between my-20">
        <div className="h-full flex mt-10">
          <div className="flex flex-col space-y-4">
            <h2 className="block font-medium text-lg mb-5">저작권 원본 증명 서비스</h2>
            <h1 className="block font-bold text-4xl ">
              찾아줘!
              <br />
              불펌된 나의 콘텐츠!
            </h1>
            <p>
              수정·증감이나 변경이 가해진 것이라 해도
              <br />
              허락받지 않은 콘텐츠는 원작자를 힘들게 한다.
              <br />
              세상의 모든 콘텐츠의 불펌을 막을 때까지 끝까지 찾아낸다!
            </p>
          </div>
        </div>
        <Image src="/assets/main-1.svg" width={500} height={400} />
      </div>
      <div className="flex flex-row justify-evenly my-20">
        <Image src="/assets/main-2.svg" width={500} height={400} />
        <div className="h-full flex mt-14">
          <div className="flex flex-col space-y-4">
            <h1 className="block font-bold text-4xl ">
              콘텐츠 전문 기업이 만든
              <br />
              저작권 원본 증명 서비스
            </h1>
            <p>
              ConSolv는 레이븐어스의 콘텐츠 제작 기술력과
              <br />
              해싱 기술이 적용된 웹 기반 저작권 원본 증명 서비스입니다.
              <br />
              편리하고 유용한 저작권 원본 증명 서비스를 안심하고 사용해보세요!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly my-20">
        <div className="h-full flex">
          <div className="flex flex-col space-y-4">
            <h1 className="block font-bold text-4xl ">
              해싱 기술과 콘텐츠의 만남,
              <br />
              원작자의 자존심의 지키다!
            </h1>
            <p>
              해싱 기술을 사용하여 콘텐츠의 정보를 알아볼 수 없는 난해한 문자열로 표현하여
              <br />
              원본과 사본의 데이터를 비교하여 원본을 증명합니다.
              <br />
              원작자의 개인 이익을 넘어 콘텐츠 산업 발전에 이바지합니다!
            </p>
          </div>
        </div>
        <Image src="/assets/main-3.svg" width={500} height={400} />
      </div>
    </div>
  );
};

export default Description;
