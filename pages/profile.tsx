import { NextPage } from 'next';
import PrivacyBox from '@components/profile/privacy-box';
import LicenseBox from '@components/profile/license-box';
import PlatformBox from '@components/profile/platform-box';

const Profile: NextPage = () => {
  return (
    <div className="flex flex-col max-w-[1640px] w-full m-auto py-10">
      <div className="w-full h-28">
        <span className="flex w-full h-full justify-center items-center font-bold text-4xl">프로필 관리</span>
      </div>
      <div className="flex flex-row w-3/5 space-x-20 m-auto pb-10">
        <div className="basis-1/2 flex">
          <PrivacyBox />
        </div>
        <div className="basis-1/2 flex flex-col">
          <LicenseBox />
          <PlatformBox />
        </div>
      </div>
    </div>
  );
};

export default Profile;
