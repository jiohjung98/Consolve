import React, { ReactNode } from 'react';
import Image from 'next/image';

interface SideBarIconProps {
  title: string;
  icon: ReactNode;
  isIn: boolean;
}

const SidebarIcon: React.FC<SideBarIconProps> = ({ title, icon, isIn }) => {
  return (
    <div className={`w-full h-12 flex flex-row ${isIn ? 'text-blue-500 bg-white' : 'text-white bg-blue-500'}`}>
      <div className={`w-2 h-full ${isIn ? 'bg-blue-700' : 'bg-blue-500'}`} />
      <div className="basis-1/4 flex justify-center items-center fill-blue-500 h-full">{icon}</div>
      <span className="flex items-center">{title}</span>
    </div>
  );
};

export default SidebarIcon;
