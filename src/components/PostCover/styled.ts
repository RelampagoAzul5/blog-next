import styled, { css } from 'styled-components';

export const CoverImage = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
    max-height: 600px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
