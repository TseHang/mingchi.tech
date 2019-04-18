import styled from 'styled-components';

type TSectionProps = {
  flex?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  fullscreen?: boolean;
  first?: boolean;
  mode?: 'dark' | 'light';
};

export default styled.section<TSectionProps>`
  position: relative;
  width: 100%;
  padding: ${props => (props.first ? props.theme.headerHeight : 0)}
    ${props => props.theme.headerHorizontalPadding} 8vh;
  display: ${p => (p.flex ? 'flex' : 'block')};
  justify-content: center;
  align-items: ${props => props.alignItems || 'center'};
  text-align: ${props => props.textAlign || 'left'};
  height: ${props => (props.fullscreen ? '100vh' : 'initial')};
  overflow-y: ${props => (props.fullscreen ? 'hidden' : 'auto')};
  background-color: ${p => (p.mode === 'dark' ? p.theme.colors.black : '#fff')};
  color: ${p => (p.mode === 'dark' ? '#fff' : 'inherit')};
`;
