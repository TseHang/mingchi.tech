import styled from 'styled-components';
import Link from 'next/link';

import MainLayout from '@/layouts/MainLayout';
import Section from '@/components/Section';
import Motto from '@/components/Motto';
import Title from '@/components/Title';
import Button from '@/components/Button';
import ProductList from '@/components/ProductList';

import {
  THERMAL_PRESS,
  MASKING,
  SPRAYING,
  HEALING,
  AXIAL_TYPE,
  TEST_SORTING,
  FORMING_TAPPING,
  LASER_MARKING,
} from '@/constants/products';
import { media } from '@/themes/helper';

const StyledSection = styled(Section)`
  ${media('pad')} {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMotto = styled(Motto)`
  margin-bottom: 0.5em;
`;

const StyledButton = styled(Button)`
  width: 30%;
  max-width: 115px;
  text-align: center;
  margin-bottom: 3em;
`;

export default () => (
  <MainLayout>
    <StyledSection first>
      <StyledMotto>Want to customize?</StyledMotto>
      <Link href="#contact-us">
        <StyledButton outline>Contact us</StyledButton>
      </Link>
      <Title title="Our Products" />
      <ProductList data={MASKING} title="Masking Machine" />
      <ProductList
        data={HEALING}
        title="Healing & Welding Tapping & Assembling Machine "
      />
      <ProductList data={AXIAL_TYPE} title="Axial Type Machine" />
      <ProductList data={TEST_SORTING} title="Test Sorting Machine" />
      <ProductList data={LASER_MARKING} title="Laser Marking Machine" />
      <ProductList data={FORMING_TAPPING} title="Forming Tapping Machine" />
      <ProductList data={SPRAYING} title="Spraying Machine" />
      <ProductList data={THERMAL_PRESS} title="Thremal Press Machine" />
      <StyledMotto>Nothing meet you? We customize for you!</StyledMotto>
      <Link href="#contact-us">
        <StyledButton outline>Contact us</StyledButton>
      </Link>
    </StyledSection>
  </MainLayout>
);
