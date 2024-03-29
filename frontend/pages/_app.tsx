/* eslint-disable react/no-children-prop */
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import CustomThemeProvider from '../styles/CustomThemeProvider';
import { DefaultSeo } from 'next-seo';
import axios from 'axios';
import React from 'react';
import { apiAddress, seoConfig } from '../config';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <CookiesProvider>
              <DefaultSeo {...seoConfig} />
              <CustomThemeProvider
                children={<Component {...pageProps} />}
                themeCookie={pageProps.themeCookie}
                ssrUserData={pageProps.userData}
              />
            </CookiesProvider>
          </RecoilRoot>
        </Hydrate>
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }: any) => {
  let pageProps: any = {};
  const connectCookie = ctx.req ? ctx.req.headers.cookie : '';
  const themeCookie = ctx.req ? ctx.req.cookies : '';

  axios.defaults.headers.Cookie = '';
  if (ctx.req && connectCookie) {
    axios.defaults.headers.Cookie = connectCookie;
  }
  const userData = await axios.get(`${apiAddress()}/user`).then((res) => res.data);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = { ...pageProps, themeCookie, userData };
  return { pageProps };
};
export default MyApp;
