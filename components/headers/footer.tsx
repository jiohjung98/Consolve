import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const onBusinessClick = () => {
    window.open('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=8608702304', 'bizCommPop', 'width=750, height=700;');
  };
  return (
    <div className="w-full h-52 bg-[#343434]">
      <div className="max-w-[1640px] w-5/6 m-auto flex flex-row py-10">
        <div>
          <Image className="basis-1/3 flex justify-start items-start" src="/logo-footer.svg" width={261} height={53} />
        </div>
        <div className="basis-2/3 flex justify-center">
          <div className="w-2/3 flex flex-col text-[#707070] space-y-4">
            <div className="w-full justify-between flex flex-row text-sm ">
              <span className="block">이용약관</span>
              <span className="block">개인정보처리방침</span>
              <span className="block">청소년보호정책</span>
              <span className="block">고객센터</span>
            </div>
            <div className="space-y-1">
              <div className="text-xs space-x-5">
                <span>상호: 콘솔브</span>
                <span>대표: 정지오</span>
              </div>
              <div className="text-xs">
                <span>주소: 경기도 안산시 상록구 한양대학로 55</span>
              </div>
              <div className="text-xs space-x-5">
                <span>이메일: support@ravnus.com</span>
                <span>사업자등록번호: 860-87-02304</span>
                <span onClick={onBusinessClick} className="border-b-[1px] border-[#707070]">
                  사업자정보확인
                </span>
                <span>통신판매업신고번호:</span>
              </div>
              <div className="text-xs">
                <span>© Consolve Inc. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
