import Link from 'next/link';
import styled from 'styled-components';
import { Layout } from 'antd';

import { NAV_TITLE } from '@/constants';
import { getRelativePath } from '@/utils';

const Header = styled(Layout.Header)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 36px;
  z-index: ${props => props.theme.z.header};
  background-color: ${props => props.theme.colors.black};
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const NavTitle = styled.span`
  line-height: 2.5rem;
  display: inline-block;
  font-size: 15px;
  margin-left: 10px;
  transform: translateY(5px);
`;

export default () => (
  <Header>
    <span>
      <Logo src={getRelativePath('/static/logo.svg')} alt="logo" />
      <NavTitle>{NAV_TITLE}</NavTitle>
    </span>
    <span>
      <Link href="/" as={getRelativePath('/')}>
        <a>Home</a>
      </Link>
      {' | '}
      <Link href="/about" as={getRelativePath('/about')}>
        <a>About</a>
      </Link>
    </span>
  </Header>
);
