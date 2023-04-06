import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../Components/responsive";


import Limo from "./limo.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0

  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`

    flex
    flex-col
    md:ml-6

    w-full
    2xl:ml-16
  `};
`;

const Title = styled.p`
  ${tw`
  
  text-4xl
text-center
  `};
`;

const InfoText = styled.p`
  ${tw`
  w-9/12
  text-xs
    md:text-base
    text-lightGray
    font-extralight
    mt-4

    m-auto

  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer id="about">
      <InfoContainer>
        <Title style={{wordSpacing:"5px"} }>About EEXCEL Services</Title>
        <InfoText>
        We are based in DFW to provide you the luxury and comfortable limousine services anywhere in Dallas and Ft worth. We do not settle for anything less than the best. We make sure that your needs are met in the utmost professional manner. We strive to make your travel safe and as comfortable as possible. We stand by your transportation requirements whether it is a corporate travel, wedding, city tour or airport service.


        </InfoText>
        <br />
        <br />
        <InfoText>
        At DFW, we believe in making your special occasion memorable. Our trained drivers are ready to welcome with a smile and make every effort to drive to your destination with ease. Our services are great for any kind of transportation whether it be an airport service, wedding or a corporate travel.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}


