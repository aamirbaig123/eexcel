import React from 'react'
import styled from "styled-components"
import tw from  'twin.macro'
import LogoImage from './logo.png'
interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
  }
  
  const LogoContainer = styled.div`
    ${tw`

      flex
      items-center
    `};
  `;
  
  const LogoText = styled.div`
    ${tw`
      text-xl
      md:text-2xl
      break-words
      text-white
      mt-3
      `};
    ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-white`)}
  ` as any;
  
  const Image = styled.div`
    width: auto;
    ${tw`h-6 md:h-9`};
    img {
      width: auto;
      height: 100%;
    }
  `;
  
  export function Logo(props: ILogoProps) {
    const { color, bgColor } = props;
  
    return (
      <LogoContainer>
    
        <LogoText color={color || "dark"} style={{wordSpacing:"5px"} }>EEXCEL Limousines</LogoText>
      </LogoContainer>   
    );
  }