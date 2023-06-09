import React from 'react';

interface VideoBoxProps {
  id: number;
  src: string;
  title: string;
}

const VideoBox: React.FC<VideoBoxProps> = ({ id, src, title }) => {
  return (
    <div className="flex flex-col w-full h-80 border-[1px] border-white border-opacity-20 rounded-sm">
      <div className="bg-gray-500 w-full aspect-square" />
      <span className="flex justify-center items-center opacity-100">{title}</span>
    </div>
  );
};

export default VideoBox;
