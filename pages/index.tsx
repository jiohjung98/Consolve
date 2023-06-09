import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Description from '@components/main/description';
import Plan from '@components/main/plan';
import Partners from '@components/main/partners';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>CONSOLV - 콘솔브</title>
      </Head>
      <div className="flex flex-col">
        <div className="max-w-[1640px] w-5/6 m-auto">
          <Description />
        </div>
        <div className="bg-blue-500">
          <div className="max-w-[1640px] w-5/6 m-auto">
            <Plan />
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-[1640px] w-5/6 m-auto">
            <Partners />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
