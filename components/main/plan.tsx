import React from 'react';
import RadioButton from '@components/base/radio-button';

const Plan: React.FC = () => {
  return (
    <div className="w-5/6 m-auto flex flex-col my-16">
      <div>
        <h1 className="text-4xl font-bold my-3">ConSolv®플랜 안내</h1>
        <p>
          첫 해 50% 할인, 연간 결재 시 20% 할인 혜택 등
          <br />
          다양한 할인 혜택을 적용하여 저렴하게 사용해보세요!
        </p>
      </div>

      <form className="mt-10 w-5/6 flex flex-row text-black bg-white m-auto py-8 rounded-xl">
        <div className="flex flex-row w-full">
          <div className="basis-2/5">
            <div className="w-5/6 m-auto flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg">사용자 수는 몇명인가요?</span>
                <div className="flex flex-row border-blue-500 border-b-2 font-medium">
                  <input className="flex-1 outline-none" type="text" />
                  <span className="text-md">명</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg">회원 유형</span>
                <div className="flex flex-row space-x-10">
                  <RadioButton name="service" backgroundColor="white" checked title="개인 크리에이터" value="personal" />
                  <RadioButton name="service" backgroundColor="white" title="기업(개인, 법인 사업자)" value="enterprise" />
                </div>
              </div>
              <div className="flex flex-col border-blue-500 border-b-2 space-y-2">
                <span className="font-bold text-lg">플랜 유형</span>
                <select className="outline-none">
                  <option>Basic</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-bold text-lg">결제 방식</span>
                <div className="flex flex-row space-x-10">
                  <RadioButton name="payment" backgroundColor="white" checked title="연간 (20%할인)" value="yearly" />
                  <RadioButton name="payment" backgroundColor="white" title="월간" value="monthly" />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/5 flex flex-col items-end">
            <div className="w-5/6 m-auto  h-full space-y-6">
              <span className="font-bold text-lg mb-5 block">총 이용요금</span>
              <div>
                <div className="flex flex-col text-gray-400 text-sm space-y-1">
                  <div className="flex flex-row justify-between">
                    <span>정상 요금</span>
                    <span>100,000원</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>할인</span>
                    <span>-10,000원</span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span>부가세</span>
                    <span>VAT 별도</span>
                  </div>
                </div>
                <div className="w-full border-b-[1px] border-gray-500 my-5" />
              </div>
              <div className="flex flex-col items-end space-y-1">
                <h1 className="text-4xl font-bold">100,000원</h1>
                <h2 className="text-md font-bold text-gray-400">부가세 포함 110,000원</h2>
              </div>
              <button className="w-full h-14 rounded-xl bg-blue-500 font-bold text-md text-white">내 콘텐츠 지키러 가기!</button>
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex flex-col text-xs my-5 font-light">
        <span className="w-full flex justify-center">
          콘솔브 서비스 및 제품(이하’서비스’)를 이용하시면 아래 약관을 동의하는 것으로 간주됩니다.
        </span>
        <span className="w-full flex justify-center">
          어쩌고 저쩌고 그래서 저쩌고 그런데 살짝 배고픈거 같기도하고 쥬시 먹고 싶기도하고 음 쥬시 먹고 싶긴한데 사러가기엔 너무 멀고
        </span>
        <span className="w-full flex justify-center">
          기말고사는 왤케 시키는게 많은지 그냥 세상 모든 사람들이 놀고 먹고 자고 싸고 공부같은거 안하면 안되나?
        </span>
      </div>
    </div>
  );
};
export default Plan;
