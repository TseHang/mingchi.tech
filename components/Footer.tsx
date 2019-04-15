import styled from 'styled-components';
import { Layout } from 'antd';

import { media } from '@/themes/helper';
import { getRelativePath } from '@/utils';

import Title from './Title';

const Wrapper = styled(Layout.Footer)`
  display: flex;
  justify-content: space-between;
  color: white;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.black};

  ${media('desktop')} {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  ${media('desktop')} {
    width: 43%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  line-height: 1.2;

  > img {
    width: 30px;
    height: 30px;
    margin-right: 2em;
  }

  > p {
    margin: 0;
  }

  a {
    color: white;
    font-weight: 300;
    text-decoration: underline;
  }
`;

const Footer: React.FunctionComponent = () => (
  <Wrapper>
    <ContentWrapper>
      <Title title="About us" color="white" />
      <p>
        MINGCHI originally was a capacitor equipment company from Taiwan, and
        now is devoted to producing all kinds of equipments. Having more than 10
        years researching and developing experience, we have our own strong and
        stable ability to customize products with customer’s requirements. Our
        main supporting and producing factory is in China mainland and another
        is in Singapore..
      </p>
      <p>
        Besides the capacitors equipment, we also provide other design of
        automatic equipment, such as connector, dolar energy etc., includes any
        customized requirements. In the future, we will keep renewing our
        technology and make our products more mature and excellent to solve the
        problem of life, industry and the words.
      </p>
    </ContentWrapper>
    <ContentWrapper id="contact-us">
      <Title title="Contact us" color="white" />
      <IconWrapper>
        <img src={getRelativePath('/static/icon-location.svg')} />
        <p>
          5F., No.13, Ln. 122, Wuhua St. Sanchong Dist., New Taipei City 24151,
          Taiwan (R.O.C.)
        </p>
      </IconWrapper>
      <IconWrapper>
        <img src={getRelativePath('/static/icon-mail.svg')} />
        <div>
          <a
            target="_blank"
            href="mailto:hang_tm@hotmail.com?subject=[Contact]: ..."
          >
            hang_tm@hotmail.com
          </a>
          <br />
          <a
            target="_blank"
            href="mailto:hangtm@mingchi.tech?subject=[Contact]: ..."
          >
            hangtm@mingchi.tech
          </a>
        </div>
      </IconWrapper>
      <IconWrapper>
        <img src={getRelativePath('/static/icon-mobile.svg')} />
        <p>+886 903568802</p>
      </IconWrapper>
    </ContentWrapper>
  </Wrapper>
);

export default Footer;
