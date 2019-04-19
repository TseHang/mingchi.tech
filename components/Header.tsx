import { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import InlineSVG from 'react-svg';

import { getRelativePath, scrollToID } from '@/utils';
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
      transform: translateY(-100%);
    `}
`;

const LogoTitle = styled.img`
  height: 1.5rem;
`;

const Circle = styled(InlineSVG)<{ open: boolean }>`
  transform: ${p => (p.open ? 'rotateZ(270deg)' : 'rotateZ(0deg)')};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  svg {
    height: 2em;
    transform: translateY(5px);
    path {
      fill: ${p => (p.open ? 'white' : p.theme.colors.main)};
    }
  }
`;

const SmallCircle = styled(InlineSVG)`
  margin-right: 0.5em;
  svg {
    height: 1em;
  }
`;

const BgWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: ${p => (p.open ? '100vh' : '0')};
  color: ${p => p.theme.colors.main};
  background: ${p => p.theme.colors.black};
  z-index: ${p => p.theme.z.header - 1};
  transition: height 0.5s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: ${p => (p.open ? 'flex' : 'none')};
    cursor: pointer;
    align-items: center;
    margin-bottom: 1em;
    min-width: 100px;

    &:hover {
      color: white;
      path {
        fill: white;
      }
    }
  }

  p {
    margin: 0;
    font-size: ${p => p.theme.fontSize.m};
  }
`;

const Triangle = styled.div<{ open: boolean }>`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${p => (p.open ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};
  margin-left: 2em;
  margin-right: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 6px 0px 6px;
  border-color: ${p => p.theme.colors.main} transparent transparent transparent;
  border: transparent 1px 1px 1px;
  ${media('desktop')} {
    display: none;
  }
`;

const SectionSelectWrapper = styled.div`
  .sections {
    display: none;
    cursor: pointer;
    font-weight: 300;
    margin-right: 1.5em;
    color: ${p => p.theme.colors.main};
    &:hover,
    &.active {
      color: white;
    }
  }

  ${media('desktop')} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: auto;
    margin-left: 3%;
    max-width: 65%;
    height: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    .sections {
      display: block;
    }
  }
`;

const MobileSectionsSelectWrapper = styled(BgWrapper)`
  z-index: ${p => p.theme.z.header - 2};
  > div {
    min-width: 200px;
  }
`;

export type TSection = {
  name: string;
  id: string;
};

const Header: React.FunctionComponent<{ sections?: TSection[] }> = ({
  sections,
}) => {
  const [openSectionList, setOpenSectionList] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { y, oldY } = useWindowScroll();
  const firstSectionHeight = useMemo(() => {
    if (y) {
      const section = document.getElementById('first-section');
      return section && section.offsetHeight;
    }
    return Infinity;
  }, [!!y]);

  // If page has no first section, outOfFirst always be correct
  const outOfFirst = !firstSectionHeight || y >= firstSectionHeight;

  const scrollTo = useCallback(
    (section: TSection) => {
      scrollToID(section.id);
      setOpenSectionList(false);
      setOpen(false);
    },
    ['no change'],
  );

  const changePage = useCallback(() => {
    setOpenSectionList(false);
    setOpen(false);
  }, ['no change']);

  return (
    <>
      <Wrapper hideUp={outOfFirst && !open && y > oldY}>
        <LogoTitle
          src={getRelativePath('/static/logo-title.png')}
          alt="logo-title"
        />
        {sections && (
          <>
            <Triangle
              open={openSectionList}
              onClick={() => setOpenSectionList(state => !state)}
            />
            <SectionSelectWrapper>
              {sections.map(section => (
                <div
                  className="sections"
                  key={section.id}
                  onClick={() => scrollTo(section)}
                >
                  {section.name}
                </div>
              ))}
            </SectionSelectWrapper>
          </>
        )}
        <Circle
          open={open}
          src={getRelativePath('/static/circle.svg')}
          onClick={() => setOpen(state => !state)}
        />
      </Wrapper>

      {sections && (
        <MobileSectionsSelectWrapper open={openSectionList}>
          {sections.map(section => (
            <div key={section.id} onClick={() => scrollTo(section)}>
              {section.name}
            </div>
          ))}
        </MobileSectionsSelectWrapper>
      )}

      <BgWrapper open={open}>
        <Link href="/">
          <div onClick={changePage}>
            <SmallCircle
              src={getRelativePath('/static/circle.svg')}
              wrapper="span"
            />
            <p>Home</p>
          </div>
        </Link>
        <Link href="/products">
          <div onClick={changePage}>
            <SmallCircle
              src={getRelativePath('/static/circle.svg')}
              wrapper="span"
            />
            <p>Products</p>
          </div>
        </Link>
      </BgWrapper>
    </>
  );
};

export default Header;
