import React, { useMemo, useRef, useState } from 'react';
import Input from '@components/base/input';
import { useForm } from 'react-hook-form';

interface PrivacyForm {
  name: string;
  email: string;
  password: string;
  _password: string;
  companyName?: string;
  companyNumber?: string;
  companyAddress?: string;
  companyEmail?: string;
}

const PrivacyBox: React.FC = () => {
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
          focus ? 'bg-blue-500 opacity-90' : null
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
          <Input
            name="이름"
            type="text"
            placeholder="이름을 입력하세요."
            register={register('name', { required: true })}
            focus={focus}
            required={true}
          />
          <Input
            name="이메일"
            type="text"
            placeholder="이메일을 입력하세요."
            register={register('email', { required: true })}
            focus={focus}
            required={true}
          />
          <Input name="새 비밀번호" type="password" register={register('password', { required: true })} focus={focus} required={true} />
          <Input
            name="새 비밀번호 확인"
            type="password"
            register={register('_password', { required: true })}
            focus={focus}
            required={true}
          />

          <span className={`mt-2 text-[0.6rem] font-light ${!focus ? 'text-gray-400' : null}`}>전자세금계산서 발행 정보 (선택)</span>
          <Input name="회사명" type="text" register={register('companyName')} focus={focus} required={false} />
          <Input name="사업자 등록번호" type="text" register={register('companyNumber')} focus={focus} required={false} />
          <Input name="회사 주소" type="text" register={register('companyAddress')} focus={focus} required={false} />
          <Input name="회사 이메일" type="email" register={register('companyEmail')} focus={focus} required={false} />
        </form>
      </div>
    </React.Fragment>
  );
};

export default PrivacyBox;
