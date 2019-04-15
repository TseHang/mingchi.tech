import styled from 'styled-components';
import Link from 'next/link';

import { TProduct } from '@/constants/products';
import { media } from '@/themes/helper';
import { getRelativePath } from '@/utils';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  margin: 2em auto;
`;

const Title = styled.h3`
  margin-right: auto;
`;

const Cover = styled.img`
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > figure {
    width: 47%;
    text-align: center;
    margin-bottom: 1.5em;

    ${media('pad')} {
      width: 23%;
    }
  }

  ${media('desktop')} {
    margin: 0 10%;
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
  title?: string;
  showMore?: boolean;
  className?: string;
};

const ProductList: React.FunctionComponent<TProps> = ({
  data,
  title,
  showMore = false,
  className,
}) => (
  <Wrapper className={className}>
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
        <figure key={product.name}>
          <Cover src={product.coverUri} />
          <figcaption>{product.name}</figcaption>
        </figure>
      ))}
    </DataWrapper>
  </Wrapper>
);

export default ProductList;
