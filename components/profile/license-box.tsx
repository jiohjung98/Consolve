import React, { useMemo, useRef, useState } from 'react';
import Input from '@components/base/input';
import { useForm } from 'react-hook-form';

interface LicenseForm {
  name: string;
}

const LicenseBox: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<LicenseForm>();
  const onClick = () => {
    setFocus((prev) => !prev);
  };
  const onValid = (data: LicenseForm) => {
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
        className={`w-full flex flex-col px-8 py-6 rounded-lg transition-colors ease-out duration-150 mb-10 z-50 ${
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
          <span className="text-xs">유튜브 + 인스타 기업용 20인 (1년권)</span>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LicenseBox;
