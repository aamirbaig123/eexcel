import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItem";
import {useMediaQuery} from "react-responsive"
import './navItem.css'
import { SCREENS } from "../responsive";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full

    z-50
    lg:-left-5
    max-w-full
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    -mt-2

  `};
`;
const SubBar = styled.div `
${tw`
w-9/12
m-auto
flex
`}
`
const LogoContainer = styled.div``;
const UpperNavbar = styled.div`
${tw`
bg-black
`}
`
export function Navbar() {
  const isMobile = useMediaQuery({maxWidth:SCREENS.lg})


  const [color, SetColor] = useState(false);
  if(isMobile) 
  return(
    <>
      <NavbarContainer className={color ? 'navbarscrollBg' : 'navbarbg'}>
    <LogoContainer>
  <Logo />
  </LogoContainer>
      <NavItems />
    </NavbarContainer>
    </>
  )

  const changeColor = () =>{
    if(window.scrollY >= 90){
SetColor(true)
    }
    else{
SetColor(false)
    }
  }
  
 window.addEventListener("scroll",changeColor)
 

 
  return (
<>
 
    <NavbarContainer className={color ? 'navbarscrollBg' : 'navbarbg'}>
      <SubBar>
    <LogoContainer>
  <Logo />
  </LogoContainer>

 
      <NavItems />
      </SubBar>
    </NavbarContainer>

    </>

  );


}