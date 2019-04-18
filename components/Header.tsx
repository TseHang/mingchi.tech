import { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import InlineSVG from 'react-svg';

import { getRelativePath } from '@/utils';
import { media } from '@/themes/helper';
import useWindowScroll from '@/hooks/useWindowScroll';

const Wrapper = styled(({ hideUp, ...res }) => <Layout.Header {...res} />)<{
  hideUp: boolean;
}>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 12px ${props => props.theme.headerHorizontalPadding};
  z-index: ${props => props.theme.z.header};
  background-color: ${props => props.theme.colors.black};
  border-bottom: solid 1px rgba(51, 51, 51, 0.65);
  transform: translateY(0);
  transition: all 0.3s ease-in;

  ${media('pad')} {
    height: ${props => props.theme.headerHeight};
  }

  ${p =>
    p.hideUp &&
    css`
      transform: translateY(-200%);
    `}
`;

const LogoTitle = styled.img`
  height: 1.5rem;
`;

const Logo = styled(InlineSVG)`
  svg {
    height: 2em;
    transform: translateY(5px);
  }
`;

const Header: React.FunctionComponent = () => {
  const { y, oldY } = useWindowScroll();
  const firstSectionHeight = useMemo(() => {
    if (y) {
      const section = document.getElementById('launch-section');
      if (section) {
        return section.offsetHeight;
      }
    }
    return Infinity;
  }, [!!y]);

  return (
    <Wrapper hideUp={y > firstSectionHeight && y > oldY}>
      <LogoTitle
        src={getRelativePath('/static/logo-title.png')}
        alt="logo-title"
      />
      <Logo src={getRelativePath('/static/circle.svg')} />
    </Wrapper>
  );
};

export default Header;
