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
import { scrollToID } from '@/utils';

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
  <MainLayout
    title="MingChi Tech - Products"
    sections={[
      {
        name: 'Masking',
        id: 'masking',
      },
      {
        name: 'Healing Welding Assembling',
        id: 'healing',
      },
      {
        name: 'Axial Type',
        id: 'axial-type',
      },
      {
        name: 'Test Sorting',
        id: 'test-sorting',
      },
      {
        name: 'Laser Marking',
        id: 'laser-marking',
      },
      {
        name: 'Forming Tapping',
        id: 'forming-tapping',
      },
      {
        name: 'Spraying',
        id: 'spraying',
      },
      {
        name: 'Thermal Press',
        id: 'thermal-press',
      },
    ]}
  >
    <StyledSection first>
      <StyledMotto>Want to customize?</StyledMotto>
      <StyledButton outline onClick={() => scrollToID('contact-us')}>
        Contact us
      </StyledButton>
      <Title title="Our Products" />
      <ProductList id="masking" data={MASKING} title="Masking Machine" />
      <ProductList
        id="healing"
        data={HEALING}
        title="Healing & Welding Tapping & Assembling Machine "
      />
      <ProductList
        id="axial-type"
        data={AXIAL_TYPE}
        title="Axial Type Machine"
      />
      <ProductList
        id="test-sorting"
        data={TEST_SORTING}
        title="Test Sorting Machine"
      />
      <ProductList
        id="laser-marking"
        data={LASER_MARKING}
        title="Laser Marking Machine"
      />
      <ProductList
        id="forming-tapping"
        data={FORMING_TAPPING}
        title="Forming Tapping Machine"
      />
      <ProductList id="spraying" data={SPRAYING} title="Spraying Machine" />
      <ProductList
        id="thermal-press"
        data={THERMAL_PRESS}
        title="Thremal Press Machine"
      />
      <StyledMotto>Nothing meet you? We customize for you!</StyledMotto>

      <StyledButton outline onClick={() => scrollToID('contact-us')}>
        Contact us
      </StyledButton>
    </StyledSection>
  </MainLayout>
);
