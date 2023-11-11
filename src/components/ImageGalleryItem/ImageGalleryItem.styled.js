import styled from 'styled-components';

export const Li = styled.li`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: ${p => p.theme.colors.imageBoxShadow};
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  transition: transform ${p => p.theme.tratsition};
  border-radius: 5px;

  &:hover {
    transform: scale(1.02);
  }
`;
