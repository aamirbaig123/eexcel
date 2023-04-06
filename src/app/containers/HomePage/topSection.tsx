/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../Components/responsive";
import Text from '../../../assets/Images/text.png'
import { Button } from "../../Components/button";
import Limo1 from './slide1.jpg'
import Limo2 from './slide2.jpg'
import Limo3 from './slide3.jpg'
import { motion, Variants } from "framer-motion";

import Swiper from './Swiper'
const TopSectionContainer = styled.div`
  min-height: 390px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-full
    pl-3
    pr-3
    lg:pl-12
    bg-cover
    bg-center
    lg:pr-12
    -mt-16
  `};
`;

const LeftContainer = styled.div`
  ${tw`
     flex
max-w-full
bg-black
-mt-40

  `};
`;

const RightContainer = styled.div`
  ${tw`
max-w-full
    flex
    flex-col
    relative
    -mt-40
    z-10
  `};
`;





const Slogan = styled.p`
  ${tw`
  font-Lato
  text-2xl
  font-bold
    mb-4
  text-white
    mt-20
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12

   text-white
  `};
`;




const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const Content = styled.div`
${tw`
flex
flex-col
w-3/6
left-96
m-auto
justify-center
items-center
absolute
top-32
z-10
text-center

`}
`
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap

  `};
`;

const items = [
  {
    imageSrc: Limo1,
    imageAlt: "A person's eye",
  },
  {
    imageSrc: Limo2,
    imageAlt: 'A rock formation',
  },
  {
    imageSrc: Limo3,
    imageAlt: 'Some flowers',
  },
  {
    imageSrc: './slide3.jpg',
    imageAlt: 'An egyptian wall painting',
  },
  {
    imageSrc: './limonew.jpg',
    imageAlt: 'A butterfly on a leaf',
  },
];
const Titletext = styled.div`
${tw`
font-Rubik:
text-white



z-10

`}
`

const Text1 = styled.h1`
${tw`
font-Spectral
font-bold
text-white
text-6xl
`}
`


const Text2 = styled.h3`
${tw`
font-Rubik
text-white
text-6xl

`}
`
const InnerContent = styled.div`
${tw`


flex
flex-col
items-center
justify-center
`}
`

const BgImage = styled.div`


${tw`

w-full
max-w-full
object-cover
bg-cover
bg-center
`}
`
const Containerchild = styled.div`

${tw`
m-auto
absolute
top-4

inset-x-1/4
// bg-white
w-6/12
`}
`
const ContactNumber = styled.span`
${tw`

text-sm
font-bold
  mb-4
text-white

`}
`
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
export function TopSection() {
return (
  <>
  <TopSectionContainer id="Home">
    <BgImage style={{backgroundImage: 'url(' + require('./cover.jpeg') + ')',filter:"brightness(.4)",backgroundSize:"cover",backgroundPosition:"center",height:"400px",} }>Hello</BgImage>
    <Containerchild>
    <InnerContent>
    <Slogan>Live the Life. Get a chauffeured Limousine.</Slogan>
{/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
<ContactNumber>For Booking Call Now : +1 (682) 372-4339 </ContactNumber>
    {/* <Text2>Get a chauffeured Limousine</Text2> */}
      <ButtonsContainer>
          <Button text="Get Started Now" />
        </ButtonsContainer>
    </InnerContent>
    </Containerchild>
    </TopSectionContainer>
    </>
)
}