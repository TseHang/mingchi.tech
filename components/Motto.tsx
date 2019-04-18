import styled from 'styled-components';
import { media } from '@/themes/helper';

export default styled.div`
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
