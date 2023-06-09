import { NextPage } from 'next';
import SidebarIcon from '@components/headers/sidebar-icon';
import Sidebar from '@components/headers/sidebar';
import VideoTable from '@components/table/video-table';

const Content: NextPage = () => {
  return (
    <div className="flex h-[91vh] flex-row max-w-[1640px] w-full m-auto">
      <Sidebar />
      <div className="flex flex-col w-2/3 mx-8">
        <h1 className="text-4xl font-bold my-5 pt-5">동영상</h1>
        <div className="flex flex-row w-full font-thin border-b-[1px] pb-2">
          <span className="basis-1/2">동영상</span>
          <div className="basis-1/2 flex text-sm">
            <span className="basis-1/5 flex items-center justify-center">의심 사례</span>
            <span className="basis-1/5 flex items-center justify-center">날짜</span>
            <span className="basis-1/5 flex items-center justify-center">총 조회수</span>
            <span className="basis-1/5 flex items-center justify-center">총 댓글</span>
            <span className="basis-1/5 flex items-center justify-center">좋아요</span>
          </div>
        </div>
        <div className="flex flex-row font-light py-2 border-b-[1px]">
          <span>필터</span>
        </div>
        <div className="flex flex-col">
          {[0, 0, 0, 0, 0].map((_, idx) => {
            return <VideoTable key={idx} />;
          })}
        </div>
        <div className="flex flex-row font-light py-2 border-b-[1px]">
          <span>필터</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
