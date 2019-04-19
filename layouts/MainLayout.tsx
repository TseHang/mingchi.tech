import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import { ThemeProvider } from 'styled-components';

import '@/assets/style.less';

import Header, { TSection } from '@/components/Header';
import Footer from '@/components/Footer';
import GlobalStyles from '@/themes/globalStyles';
import defaultTheme from '@/themes/defaultTheme';
import { SITE_TITLE } from '@/constants';

import Meta from './meta';

type TProps = {
  title?: string;
  sections?: TSection[];
  children: React.ReactNode;
};

const MainLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
  sections,
}) => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <Head>
        <title>{title}</title>
        <Meta />
      </Head>
      <Header sections={sections} />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
      <GlobalStyles />
    </Layout>
  </ThemeProvider>
);

export default MainLayout;
