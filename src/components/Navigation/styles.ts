import styled, { css } from 'styled-components';

type ItemProps = {
  active?: boolean;
};

export const Wrapper = styled.nav`
  width: 400px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
`;

export const List = styled.ul`
  width: 350px;
  display: flex;
`;

export const ItemLink = styled.a`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;

  div {
    display: block;
    position: relative;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: var(--raisinBlack);
  }
`;

export const ItemContent = styled.span`
  position: absolute;
  color: var(--raisinBlack);
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;

export const Item = styled.li<ItemProps>`
  ${({ active }) => css`
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 30;

    ${active &&
    css`
      ${ItemLink} {
        div {
          transform: translateY(-32px);
        }
      }
      ${ItemContent} {
        opacity: 1;
        transform: translateY(10px);
      }
    `}
  `}
`;

export const Indicator = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: var(--malachite);
  top: -50%;
  border-radius: 50%;
  border: 6px solid var(--raisinBlack);
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0 -10px 0 0 var(--raisinBlack);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0 -10px 0 0 var(--raisinBlack);
  }
`;
