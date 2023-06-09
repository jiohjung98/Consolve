import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="해싱 기술을 사용하여 콘텐츠의 정보를 알아볼 수 없는 난해한 문자열로 표현하여 원본과 사본의 데이터를 비교하여 원본을 증명합니다.
            원작자의 개인 이익을 넘어 콘텐츠 산업 발전에 이바지합니다!"
          />
          <meta name="naver-site-verification" content="7947e4d1d63674e590c52f010f490b45da5799e5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
