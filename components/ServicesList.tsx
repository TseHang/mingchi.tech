import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import { media } from '@/themes/helper';

type TConfig = {
  key: string;
  title: string;
};

const configs: TConfig[] = [
  {
    key: 'equipments',
    title: 'All kinds of Equipments',
  },
  {
    key: 'customized',
    title: 'Customized Design',
  },
  {
    key: 'service-first',
    title: 'Service First, Customer First',
  },
  {
    key: 'global-team',
    title: 'Global Developing & Researching',
  },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3em auto;

  > div {
    width: 100%;
    text-align: center;
    margin: 1em auto;

    ${media('pad')} {
      width: 50%;
    }

    ${media('desktop')} {
      width: 25%;
    }
  }

  ${media('desktop')} {
    width: 80%;
    margin-top: 10%;
  }
`;

const Icon = styled.img`
  width: 50%;
  margin-bottom: 1em;
`;

const Services: React.FunctionComponent = () => (
  <Wrapper>
    {configs.map(service => (
      <div key={service.key}>
        <Icon src={getRelativePath(`/static/icon-${service.key}.png`)} />
        <h3>{service.title}</h3>
      </div>
    ))}
  </Wrapper>
);

export default Services;
