import styled from "styled-components";

export const Contact = styled.li`
   display: flex;
   align-items: center;
   justify-content: space-between;

   &:not(:last-child) {
      margin-bottom: ${p => p.theme.spacing(5)};
   };
`;

export const NameWrapp = styled.div`
  display: flex;
  gap: ${p => p.theme.spacing(2)};

  
`;

export const Button = styled.button`
  padding: ${p => p.theme.spacing(1)};
  display: block;
  width: 25px;
  border-radius: 25px;
  border: none;
  background-color: ${p => p.theme.colors.red};
  color: ${p => p.theme.colors.white};
  transition: ${p => p.theme.tratsition};

  &:hover {
    transform: scale(1.1);
  }
`;