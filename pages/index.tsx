import styled from 'styled-components';

import MainLayout from '@/layouts/MainLayout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import ServicesList from '@/components/ServicesList';
import Slider from '@/components/Slider';
import ProductList from '@/components/ProductList';
import { productsTop } from '@/constants/products';
import { media } from '@/themes/helper';
import { getRelativePath } from '@/utils';
import { partners } from '@/constants';

const StyledSection = styled(Section)`
  flex-direction: column;
  justify-content: flex-start;

  ${media('pad')} {
    > p {
      font-size: 1.2em;
      min-width: 500px;
      width: 60%;
    }
  }
`;

const Logo = styled.img`
  height: 8rem;
  margin: 1em auto;
`;

const Motto = styled.div`
  margin: 3em auto;
  font-weight: bold;
  font-size: ${p => p.theme.fontSize.l};
  color: ${p => p.theme.colors.main};
  padding-left: 1em;
  border-left: solid 8px ${p => p.theme.colors.main};

  ${media('pad')} {
    text-align: center;
  }
`;

const HintArrow = styled.div`
  position: absolute;
  bottom: 1em;
  color: ${p => p.theme.colors.main};
`;

const PartnersInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ol {
    list-style: disc;
    margin-bottom: 0;
  }

  ${media('pad')} {
    padding-left: 10%;
  }

  ${media('desktop')} {
    width: 75%;
    justify-content: space-between;

    > ol {
      width: 50%;
    }
  }
`;

const Index = () => {
  return (
    <MainLayout>
      <StyledSection fullscreen first flex alignItems="center" mode="dark">
        <Logo src={getRelativePath('/static/logo-with-title.png')} />
        <Slider />
        <HintArrow>↓</HintArrow>
      </StyledSection>
      <StyledSection flex>
        <Title title="Our Services" />
        <p>
          We provide all kinds of equipments you need, including AC/DC
          capacitor, lithium battery, connector, solar energy and a series of
          mature equipments.
        </p>
        <p>
          Having more than 10 years researching and developing experience, our
          technology keeps more mature and excellent. We sell not only
          extraordinary well in the domestic market but also great in the global
          market, like European, Japan, Mainland, India, Malaysia, Sri Lanka
          etc.
        </p>
        <ServicesList />

        <Title title="Products" />
        <ProductList data={productsTop} showMore />
        <Motto>We offer our customers all kinds of equipments</Motto>

        <Title title="Strong Partners" />
        <PartnersInfoWrapper>
          <ol>
            {partners.slice(0, 5).map(text => (
              <li key={text}>{text}</li>
            ))}
          </ol>
          <ol>
            {partners.slice(5).map(text => (
              <li key={text}>{text}</li>
            ))}
          </ol>
        </PartnersInfoWrapper>
      </StyledSection>
    </MainLayout>
  );
};

export default Index;
