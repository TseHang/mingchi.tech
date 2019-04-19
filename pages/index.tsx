import styled, { keyframes } from 'styled-components';

import MainLayout from '@/layouts/MainLayout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import ServicesList from '@/components/ServicesList';
import ProductList from '@/components/ProductList';
import Motto from '@/components/Motto';
import { productsOnHome } from '@/constants/products';
import { media } from '@/themes/helper';
import { getRelativePath } from '@/utils';
import { partners } from '@/constants';

const StyledSection = styled(Section)<{ vertical?: boolean }>`
  flex-direction: column;

  ${media('pad')} {
    > p {
      font-size: 1.2em;
      min-width: 500px;
      width: 60%;
    }
  }
`;

const ContentSection = styled(StyledSection)`
  display: block;
  ${media('pad')} {
    display: flex;
  }
`;

const slideInKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(40%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const showKeyframes = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Logo = styled.img`
  opacity: 0;
  height: 10em;
  margin: 2em auto;
  animation: ${slideInKeyframes} 2s 0.5s ease-in-out forwards;

  ${media('pad')} {
    margin: 3em auto;
    height: 13em;
  }
`;

const LogoTitle = styled.h1`
  font-size: 3em;
  letter-spacing: 3px;
  margin: 0 auto;
  color: white;
  opacity: 0;
  line-height: 1.2;
  animation: ${showKeyframes} 2.5s 0.5s ease-in-out forwards;

  ${media('pad')} {
    line-height: 1.5;
  }
`;

const LogoDescription = styled.p`
  opacity: 0;
  text-align: center;
  animation: ${showKeyframes} 2.5s 0.5s ease-in-out forwards;
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
    <MainLayout
      title="MingChi Tech - All Kinds of Capacitor Equipments"
      sections={[
        {
          name: 'Service',
          id: 'our-service',
        },
        {
          name: 'Products',
          id: 'products',
        },
        {
          name: 'Partners',
          id: 'partners',
        },
        {
          name: 'About',
          id: 'about-us',
        },
        {
          name: 'Contact',
          id: 'contact-us',
        },
      ]}
    >
      <StyledSection
        id="first-section"
        fullscreen
        first
        flex
        alignItems="center"
        mode="dark"
      >
        <Logo src={getRelativePath('/static/logo-with-title(white).svg')} />
        <LogoTitle style={{ textAlign: 'center' }}>
          We offer you all kinds of equipments.
        </LogoTitle>
        <LogoDescription>
          Having more than 10 years researching and developing experience in the
          global market.
        </LogoDescription>
      </StyledSection>
      <ContentSection>
        <Title id="our-service" title="Our Services" />
        <p>
          We provide all kinds of equipments you need, including AC/DC
          capacitor, lithium battery, connector, solar energy and a series of
          mature equipments.
        </p>
        <p>
          Having more than 10 years researching and developing experience, our
          technology keeps more mature and excellent. We sell not only
          extraordinary well in the domestic market but also great in the global
          market,{' '}
          <b>like European, Japan, Mainland, India, Malaysia, Sri Lanka etc.</b>
        </p>
        <ServicesList />

        <Title id="products" title="Products" />
        <ProductList data={productsOnHome} showMore />
        <Motto>We offer you all kinds of equipments</Motto>

        <Title id="partners" title="Strong Partners" />
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
      </ContentSection>
    </MainLayout>
  );
};

export default Index;
