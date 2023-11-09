import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${p => p.theme.spacing(125)};
  padding: ${p => p.theme.spacing(10)};
  margin: 0 auto;
  background-color: ${p => p.theme.colors.background};
  border-radius: 25px;
`;
