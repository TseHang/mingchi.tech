import styled from 'styled-components';

import Section from '@/components/Section';
import MainLayout from '@/layouts/Main';
import { getRelativePath } from '@/utils';

const StyledSection = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;
`;

const Img = styled.img`
  height: 8rem;
  margin: 1em auto;
`;

const FamilyImg = styled.img`
  height: 60%;
  margin: 1em auto;
`;

const Motto = styled.div`
  font-size: ${p => p.theme.fontSize.m};
  margin: 1.5rem auto;
  color: ${p => p.theme.colors.main};
`;

const HintArrow = styled.div`
  position: absolute;
  bottom: 1em;
  color: ${p => p.theme.colors.main};
`;

const Index = () => {
  return (
    <MainLayout>
      <StyledSection fullscreen first flex alignItems="center" mode="dark">
        <Img src={getRelativePath('/static/logo-with-title.png')} />
        <FamilyImg src={getRelativePath('/static/family/dad-horse.jpg')} />
        <Motto>“Home is the best”</Motto>
        <HintArrow>↓</HintArrow>
      </StyledSection>
      <Section>456</Section>
    </MainLayout>
  );
};

export default Index;
