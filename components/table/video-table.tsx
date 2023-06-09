import React from 'react';

const VideoTable: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-between border-b-[1px] py-4">
      {/* 이미지 */}
      <div className="basis-1/2 flex flex-row">
        <div className="bg-gray-600 w-28 h-18" />
        <div className="basis-3/4 px-5 py-1 flex flex-col">
          <h3 className="text-sm font-bold pb-2 flex justify-start">콘텐츠의 제목</h3>
          <p className="text-xs line-clamp-2 font-thin">
            콘텐츠의 설명이 들어가는 자리입니다. 블라 블라 블라 어쩌고 그래서 어디까지 나오냐 이 설명 줄은 최대 두줄이 좋겠죠?
          </p>
        </div>
      </div>
      <div className="basis-1/2 flex text-sm font-thin">
        <span className="basis-1/5 flex items-center justify-center">3건</span>
        <span className="basis-1/5 flex items-center justify-center">2022.05.31</span>
        <span className="basis-1/5 flex items-center justify-center">527,652회</span>
        <span className="basis-1/5 flex items-center justify-center">52,452개</span>
        <span className="basis-1/5 flex items-center justify-center">20%</span>
      </div>
    </div>
  );
};

export default VideoTable;
