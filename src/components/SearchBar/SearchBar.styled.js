import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => p.theme.spacing(32)};
  padding-right: ${p => p.theme.spacing(12)};
  padding-left: ${p => p.theme.spacing(12)};
  padding-top: ${p => p.theme.spacing(6)};
  padding-bottom: ${p => p.theme.spacing(6)};
  color: ${p=>p.theme.colors.white};
  background-color: ${p => p.theme.colors.headerBackground};
  box-shadow: ${p=>p.theme.colors.boxShadow};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.spacing(5)};
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.spacing(5)};
  padding-right: ${p => p.theme.spacing(5)};

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: ${p => p.theme.spacing(5)};
  background-color: ${p => p.theme.colors.orange};
  transition: background-color ${p => p.theme.tratsition};

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #f59d56;
  }
`;
