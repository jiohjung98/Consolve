import React from 'react';
import SidebarIcon from '@components/headers/sidebar-icon';
import { useRouter } from 'next/router';
import VideoIcon from '@components/icons/video-icon';
import SoundIcon from '@components/icons/sound-icon';
import CopyrightIcon from '@components/icons/copyright-icon';
import AnalysisIcon from '@components/icons/analysis-icon';
import TriangleIcon from '@components/icons/triangle-icon';
import DollarIcon from '@components/icons/dollar-icon';
import SettingIcon from '@components/icons/setting-icon';

const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname.split('/')[2];
  return (
    <aside className="h-full ml-28 w-56 bg-blue-500 flex flex-col">
      <div className="my-10 m-auto">
        <h2 className="flex justify-center items-center text-3xl font-bold">침튜브</h2>
        <span className="flex justify-center items-center text-md font-light">CJ DIA TV</span>
      </div>
      <div className="flex flex-col">
        <SidebarIcon title="동영상" icon={<VideoIcon />} isIn={pathname === undefined} />
        <SidebarIcon title="음원" icon={<SoundIcon />} isIn={pathname === 'music'} />
        <SidebarIcon title="의심 사례" icon={<CopyrightIcon />} isIn={pathname === 'violate'} />
        <SidebarIcon title="분석" icon={<AnalysisIcon />} isIn={pathname === 'analysis'} />
        <SidebarIcon title="채널 관리" icon={<TriangleIcon />} isIn={pathname === 'channel'} />
        <SidebarIcon title="수익 관리" icon={<DollarIcon />} isIn={pathname === 'benefits'} />
        <SidebarIcon title="맞춤 설정" icon={<SettingIcon />} isIn={pathname === 'setting'} />
      </div>
    </aside>
  );
};

export default Sidebar;
