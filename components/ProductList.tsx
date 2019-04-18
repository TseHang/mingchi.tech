import styled from 'styled-components';
import Link from 'next/link';

import { TProduct } from '@/constants/products';
import { media } from '@/themes/helper';
import { getRelativePath } from '@/utils';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  margin: 2em auto;

  ${media('desktop')} {
    padding: 0 10%;
  }
`;

const Title = styled.h3`
  margin-right: auto;
  font-size: ${p => p.theme.fontSize.m};
`;

const Cover = styled.div<{ src: string }>`
  cursor: pointer;
  height: 15em;
  background: rgba(231, 231, 231, 0.3) url(${p => p.src}) no-repeat center /
    contain;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1%;
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > figure {
    width: 46%;
    text-align: center;
    margin: 0 1% 1.5em;

    ${media('pad')} {
      width: 23%;
    }
  }

  figcaption {
    p {
      font-size: ${p => p.theme.fontSize.s};
    }
  }

  a {
    color: rgba(0, 0, 0, 0.65);
    text-decoration: underline;
  }
`;

const MoreWrapper = styled.div`
  margin-left: auto;
  display: flex;
  flex-wrap: nowrap;

  ${media('desktop')} {
    margin-right: 10%;
  }
`;

type TProps = {
  data: TProduct[];
  id?: string;
  title?: string;
  showMore?: boolean;
  className?: string;
};

const ProductList: React.FunctionComponent<TProps> = ({
  id,
  data,
  title,
  showMore = false,
  className,
}) => (
  <Wrapper id={id} className={className}>
    {(title || showMore) && (
      <InfoWrapper>
        {title && <Title>{title}</Title>}
        {showMore && (
          <MoreWrapper>
            <Link href="#contact-us">
              <Button>Contact us</Button>
            </Link>
            <Link href="/products" as={getRelativePath('/products')}>
              <Button outline>View all</Button>
            </Link>
          </MoreWrapper>
        )}
      </InfoWrapper>
    )}
    <DataWrapper>
      {data.map(product => (
        <figure key={product.modal}>
          <Cover
            src={product.coverUri}
            onClick={() => window.open(product.pdfUri)}
          />
          <figcaption>
            <b>{product.category}</b>
            <a href={product.pdfUri} target="_blank">
              <p>{product.modal}</p>
            </a>
          </figcaption>
        </figure>
      ))}
    </DataWrapper>
  </Wrapper>
);

export default ProductList;
