import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  margin-top: ${p => p.theme.spacing(5)};
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Field = styled(FormikField)`
  display: block;
  width: 100%;
  margin: 0 auto;
  outline: none;
  padding: ${p => p.theme.spacing(2)};
  border: 1px solid ${p => p.theme.colors.lightGrey};
  border-radius: ${p => p.theme.spacing(1)};
`;

export const FormField = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.spacing(5)};
  font-size: ${p => p.theme.spacing(5)};
  font-weight: 700;
`;

export const ErrorMessage = styled(FormikError)`
  font-size: ${p => p.theme.spacing(4)};
  color: red;
`;

export const Button = styled.button`
  display: block;
  text-transform: uppercase;
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(4)};
  margin: 0 auto;
  font-weight: 700;
  border: none;
  box-shadow: ${p => p.theme.colors.boxShadow};
  background-color: ${p => p.theme.colors.orange};
  transition: ${p => p.theme.tratsition};
  border-radius: 25px;

  &:hover {
    transform: scale(1.05);
  }
`;
