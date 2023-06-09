import React, { useMemo, useRef, useState } from 'react';
import Input from '@components/base/input';
import { useForm } from 'react-hook-form';

interface PrivacyForm {
  youtube?: string;
  instagram?: string;
  facebook?: string;
  twitch?: string;
  vimeo?: string;
  tiktok?: string;
}

const PlatformBox: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<PrivacyForm>();
  const onClick = () => {
    setFocus((prev) => !prev);
  };
  const onValid = (data: PrivacyForm) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      {focus && (
        <div
          className="fixed inset-0 opacity-60 bg-black z-40 pointer-events-none transition-colors ease-out duration-300"
          aria-hidden="true"
        />
      )}
      <div
        className={`w-full flex flex-col px-8 py-6 rounded-lg transition-colors ease-out duration-150 z-50 ${
          focus ? 'bg-[#4F7FFF] opacity-90' : null
        }`}
      >
        <div className="w-full flex flex-row justify-between border-white border-b-[1px] pb-2 px-1 ">
          <span className="text-md font-normal">개인 정보</span>
          <div>
            {focus ? (
              <div className="flex flex-row items-end space-x-2">
                <span onClick={onClick} className="text-xs flex items-end">
                  취소
                </span>
                <input type="submit" value="저장" className="text-xs flex items-end" />
              </div>
            ) : (
              <span onClick={onClick} className="text-xs flex items-end cursor-pointer">
                수정
              </span>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-3 mt-4">
          <Input name="유트브" type="text" register={register('youtube')} focus={focus} />
          <Input name="인스타그램" type="text" register={register('instagram')} focus={focus} />
          <Input name="페이스북" type="text" register={register('facebook')} focus={focus} />
          <Input name="트위치" type="text" register={register('twitch')} focus={focus} />
          <Input name="비메오" type="text" register={register('vimeo')} focus={focus} />
          <Input name="틱톡" type="text" register={register('tiktok')} focus={focus} />
        </form>
      </div>
    </React.Fragment>
  );
};

export default PlatformBox;
