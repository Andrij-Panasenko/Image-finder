import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: ${p => p.theme.spacing(5)};
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: 0 auto;
  outline: none;
  padding: ${p => p.theme.spacing(2)};
  margin-top: ${p => p.theme.spacing(2)};
  border: 1px solid ${p => p.theme.colors.lightGrey};
  border-radius: ${p => p.theme.spacing(1)};
`;
