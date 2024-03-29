import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  width: ${({ theme }) => theme.deviceWrapSizes.default};
  margin: 0 auto;
  margin-top: 30px;

  @media ${({ theme }) => theme.device.laptopL} {
    width: ${({ theme }) => theme.deviceWrapSizes.laptopL};
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: ${({ theme }) => theme.deviceWrapSizes.laptop};
  }
  @media ${({ theme }) => theme.device.tabletL} {
    width: ${({ theme }) => theme.deviceWrapSizes.tabletL};
  }
`;

export const Ahref = styled.a<{ pathName: string }>`
  color: ${({ theme }) => theme.colors.gray2};
  padding: 0 3rem 0.5rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xl};

  ${(props) =>
    props.pathName === props.href &&
    css`
      color: ${({ theme }) => theme.colors.black1};
      font-weight: 700;
      border-bottom: 2px solid ${({ theme }) => theme.colors.black1};
    `}

  svg {
    vertical-align: -3px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 2rem 0.5rem;
  }
`;
