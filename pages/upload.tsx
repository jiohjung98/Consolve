import { NextPage } from 'next';
import Input from '@components/base/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import RadioButton from '@components/base/radio-button';
import TextArea from '@components/base/text-area';

const Upload: NextPage = () => {
  const { register } = useForm();
  return (
    <div className="flex flex-col">
      <div className="w-full h-44">
        <span className="flex w-full h-full justify-center items-center font-bold text-4xl">업로드</span>
      </div>
      <form className="w-3/5 m-auto space-y-8">
        <div className="h-40">
          <label className="block w-full h-full outline-none border-white border-2 border-dashed rounded-xl">
            <div className="flex flex-col justify-evenly items-center h-full">
              <span className="text-2xl font-md">드래그 앤 드롭으로 파일을 업로드하세요</span>
              <div className="h-[1px] w-2/5 bg-gray-300" />
              <div className="w-36 h-9 bg-[#4F7FFF] rounded-lg flex justify-center items-center text-sm font-light">파일 선택하기</div>
            </div>
            <input className="hidden" type="file" />
          </label>
        </div>
        <div className="flex flex-row space-x-5">
          <div className="basis-1/2 py-2 bg-black">
            <Input name="제목" type="text" focus={true} register={register('title')} backgroundColor="black" />
          </div>
          <div className="flex flex-col basis-1/2 space-y-2 justify-center">
            <span className="text-xs">공개 여부</span>
            <div className="flex flex-row items-center space-x-5">
              <RadioButton name="uploadOption" title="공개" value="public" checked />
              <RadioButton name="uploadOption" title="비공개" value="private" />
              <RadioButton name="uploadOption" title="예약" value="reserved" />
            </div>
          </div>
        </div>
        <div className="space-y-5 pb-16">
          <div className="h-36">
            <TextArea name="설명" focus={true} register={register('text')} />
          </div>
          <div className="flex justify-end pt-6">
            <input className="w-36 h-10 rounded-lg bg-blue-500" type="submit" value="업로드" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
