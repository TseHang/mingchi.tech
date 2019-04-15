import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import { media } from '@/themes/helper';

const Wrapper = styled.div<{ color?: string }>`
  position: relative;
  margin: 5em auto 2em;

  > h1 {
    position: relative;
    margin: 0;
    color: ${p => p.color || 'inherit'};
  }
`;

const Circle = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 4px;
  left: -7px;

  ${media('pad')} {
    top: 5px;
    left: -9px;
    width: 20px;
    height: 20px;
  }
`;

type TProps = {
  title?: string;
  className?: string;
  color?: string;
};

const Title: React.FunctionComponent<TProps> = ({
  color,
  title,
  className,
  children,
}) => (
  <Wrapper className={className} color={color}>
    <Circle src={getRelativePath('/static/circle.svg')} />
    {title && <h1>{title}</h1>}
    {children}
  </Wrapper>
);

export default Title;
