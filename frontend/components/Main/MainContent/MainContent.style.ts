import styled from 'styled-components';

export const Content = styled.div`
  width: 20rem;
  margin: 1rem;
  background-color: white;
  border-radius: 10px;

  @media ${({ theme }) => theme.device.tabletL} {
    width: calc(50% - 2rem);
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

export const ContentTop = styled.div`
  .content_img {
    padding-top: 56.125%;
    position: relative;

    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;
export const ContentMiddle = styled.div`
  padding: 15px;

  .title {
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.calcRem(10)};
    font-weight: ${({ theme }) => theme.fontWeights.xl};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  .write {
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.gray1};
    height: 65px;
    line-height: 1.5;
    margin-bottom: ${({ theme }) => theme.calcRem(30)};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  .sub_info {
    display: flex;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray2};
  }
`;
export const ContentBottom = styled.div`
  border-top: 1px solid #eee;
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  font-size: ${({ theme }) => theme.fontSizes.small};

  .profile {
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      margin-right: ${({ theme }) => theme.calcRem(7)};
    }

    span {
      color: ${({ theme }) => theme.colors.gray2};
    }
  }
  .like {
    display: flex;
    align-items: center;

    svg {
      margin-right: ${({ theme }) => theme.calcRem(10)};
    }
  }
`;