import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import { slide as Menu } from 'react-burger-menu';
import menuStyles from './menuStyles';

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md:text-base
    text-black
    mr-1
    font-medium
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-red-500
  `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
        hover:text-red-500
      `}
    `}
`;
export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#home">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="#cars">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="#services">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#contact">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="#home">Home</a>
      </NavItem>
      <NavItem>
        <a href="#cars">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#services">Services</a>
      </NavItem>
      <NavItem>
        <a href="#contact">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
