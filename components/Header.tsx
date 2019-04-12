import styled from 'styled-components';
import { Layout } from 'antd';

import { getRelativePath } from '@/utils';

const Header = styled(Layout.Header)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.headerHeight};
  padding: 12px ${props => props.theme.headerHorizontalPadding};
  z-index: ${props => props.theme.z.header};
  background-color: ${props => props.theme.colors.black};
  border-bottom: solid 1px rgba(51, 51, 51, 0.65);
`;

const LogoTitle = styled.img`
  height: 1.5rem;
`;

const Logo = styled.img`
  height: 2rem;
`;

export default () => (
  <Header>
    <LogoTitle
      src={getRelativePath('/static/logo-title.png')}
      alt="logo-title"
    />
    <Logo src={getRelativePath('/static/logo.svg')} alt="logo" />
  </Header>
);
