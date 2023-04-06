
import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu} from "react-burger-menu";
import {useMediaQuery} from "react-responsive"
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Logo } from "../logo";
import { NavLink } from "react-router-dom";
import './navItem.css'
import { useRef } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none

  `};
`; 

const NavItem = styled.li<{menu?:any}>`
  ${tw`
    text-sm
    md:text-base
    font-medium
    mr-5
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out

    pr-2
  `};
  ${({ menu }) =>
  menu &&
  css`
    ${tw`
    text-white
    text-xl
    mb-9
    focus:text-graywhite

  `};
  `};
`;

const NavLinks = styled.a`
${tw`
no-underline
text-white
text-xs
font-bold
      
`}
`



const NavLinksMobile = styled.a`
${tw`
no-underline
text-white
text-xl
focus:text-graywhite
font-bold
hover:text-graywhite
ease-in-out
duration-300
`}
`
const LogoContainer = styled.div``;
export function NavItems() {
  const services = useRef(null);
const scrollToSection = (elementRef:any) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

  const handleClick = () =>{

  }
const isMobile = useMediaQuery({maxWidth:SCREENS.lg})

if(isMobile)
return (
  <Menu right styles={menuStyles}>

  <ListContainer>
  <NavItem menu>
<NavLinksMobile>Home</NavLinksMobile>

  </NavItem>
  <NavItem menu>
<NavLinksMobile>About Us</NavLinksMobile>

  </NavItem>
  <NavItem menu>
<NavLinksMobile>Our Services</NavLinksMobile>
  </NavItem>
  <NavItem menu>
 <NavLinksMobile>Fleet</NavLinksMobile>
  </NavItem>
  <NavItem menu>
<NavLinksMobile>Testimonial</NavLinksMobile>
  </NavItem>
  <NavItem menu>
<NavLinksMobile>Reservation</NavLinksMobile>
  </NavItem>
  <NavItem  menu>
<NavLinksMobile>Contact</NavLinksMobile>
  </NavItem>
</ListContainer>
</Menu>

)


  return (

    <ListContainer>

      <NavItem>
      <NavLinks className="underlineHover" ><Link activeClass="active" to="about" spy={true} smooth={true}>About Us</Link></NavLinks>
 
      </NavItem>
      <NavItem>
  <NavLinks className="underlineHover" > <Link activeClass="active" to="service" spy={true} smooth={true}>Our Services</Link> </NavLinks>
      </NavItem>
      <NavItem>
      <NavLinks className="underlineHover"><Link activeClass="active" to="fleet" spy={true} smooth={true}>Fleet</Link></NavLinks>
      </NavItem>
      <NavItem>
      <NavLinks className="underlineHover"><Link activeClass="active" to="testimonial" spy={true} smooth={true}>Testimonial</Link></NavLinks>
      </NavItem>
      <NavItem>
      <NavLinks className="underlineHover"><Link activeClass="active" to="reservation" spy={true} smooth={true}>Reservation</Link></NavLinks>
      </NavItem>
      <NavItem>
      <NavLinks className="underlineHover"><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></NavLinks>
      </NavItem>
    </ListContainer>


  );
}