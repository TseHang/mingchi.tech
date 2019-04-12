import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import '@/assets/style.less';

import Header from '@/components/Header';
import GlobalStyles from '@/themes/globalStyles';
import defaultTheme from '@/themes/defaultTheme';
import { SITE_TITLE } from '@/constants';

import Meta from './meta';

type TProps = {
  title?: string;
  children: React.ReactNode;
};

const MainLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
}) => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <Head>
        <title>{title}</title>
        <Meta />
      </Head>
      <Header />
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer> Footer is here </Layout.Footer>
      <GlobalStyles />
    </Layout>
  </ThemeProvider>
);

export default MainLayout;
