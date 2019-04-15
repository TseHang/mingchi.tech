import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import { media } from '@/themes/helper';

const FamilyImg = styled.img`
  width: 100%;
  margin: 1em auto;

  ${media('pad')} {
    width: auto;
    height: 60%;
  }
`;

const Description = styled.div`
  margin: 0.5rem auto 1rem;
  color: ${p => p.theme.colors.main};
`;

const Slider = () => (
  <>
    <FamilyImg src={getRelativePath('/static/family/dad-horse.jpg')} />
    <Description>Home is the best</Description>
  </>
);

export default Slider;
