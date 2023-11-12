import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  margin: 0 auto 20px auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.loadMoreBcg};
  transition: background-color ${p => p.theme.tratsition};
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: ${p => p.theme.colors.loadMoreBoxShadow};

  &:hover {
    background-color: #303f9f;
  }
`;
