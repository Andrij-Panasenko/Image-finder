import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.spacing(8)};
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  padding-top: ${p => p.theme.spacing(10)};
  padding-bottom: ${p => p.theme.spacing(10)};

  margin: 0 auto;
`;