import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../typings/car";
import { Button } from "../button";
import CarImg  from './car1.jpeg'
interface ICarProps extends ICar {}

const CarContainer = styled.div`
  ${tw`
  grid 
  grid-cols-1 
  gap-5 
  md:grid-cols-2 
  lg:grid-cols-3
  `};
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
  text-white
  text-center
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    -mt-6
  `};
`;

const SmallText = styled.p`

  ${tw`
text-white
    text-xs
    font-thin
    text-center
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
  block
    text-lightGray
    font-bold
    text-sm
    mr-3
  `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-lightGray
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-lightGray
    text-sm
    mr-1
  `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const CarDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const CarInfo = styled.h6`
  ${tw`
    text-lightGray
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-500
    -mt-2

  `};
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
   mt-2
  `};
`;

export function Car(props: ICarProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
 tip,
 tax
  } = props;
const WrapContainer = styled.div`
${tw`
flex 
min-h-screen 
items-center
justify-center 
bg-black
`}
`

const CarCard = styled.div `

${tw`
relative 
overflow-hidden
w-full

`}
`

const HeightWidth = styled.div`
${tw`
h-96
w-11/12

`}
`

const CarImage = styled.img`
${tw`
h-full 
w-11/12
object-cover 
transition-transform 
duration-500 
group-hover:rotate-3 
group-hover:scale-125

`}
`

const AnimationText1 = styled.div`
${tw`
absolute 
h-full
w-full 
// bg-black

-bottom-10 
group-hover:bottom-0 
opacity-0 
group-hover:opacity-100 
transition-all 
duration-300
`}
`



const AnimationText2 = styled.div`
${tw`
absolute 
inset-0 
flex 
translate-y-[60%] 
flex-col
items-center 
justify-center
px-9 
text-center 
transition-all 
duration-500 
group-hover:translate-y-0
`}
`



const AnimationtextHeading = styled.h1`
${tw`
font-serif
text-3xl 
font-bold 
text-white
`}
`


const Animationtextparagraph = styled.p`
${tw`
mb-3 
text-lg 
italic 
text-white 
opacity-0 
transition-opacity 
duration-300 
group-hover:opacity-100
`}
`
const WrapContainers = styled.div`
${tw`
mx-auto
w-full
p-12

h-36
`}
`
  return (
    <WrapContainers id="fleet">
<HeightWidth className="group">

<CarCard>

  <CarImage src={thumbnailSrc}/>
<AnimationText1 style={{background:"rgba(0,0,0,.8)"}}>
<CarName>{name}</CarName>

 <SmallText>${dailyPrice}</SmallText>
     <SmallText>{tip}% Tip</SmallText>
     <SmallText>{tax}% Tax</SmallText>
</AnimationText1>
</CarCard>
</HeightWidth>
</WrapContainers>

    // <CarContainer>
    //   <CarThumbnail>
    //     <img src={thumbnailSrc} />
    //   </CarThumbnail>
    //   <CarName>{name}</CarName>
    //   <PricesContainer>
    //     <DailyPrice>
    //       ${dailyPrice}
    //       <SmallText>/Day</SmallText>
    //     </DailyPrice>
    //     <MonthlyPrice>
    //       ${monthlyPrice}
    //       <SmallText>/Month</SmallText>
    //     </MonthlyPrice>
    //   </PricesContainer>
    //   <Seperator />
    //   <CarDetailsContainer>
    //     <CarDetail>
    //       <SmallIcon>
    //         <FontAwesomeIcon icon={faTachometerAlt} />
    //       </SmallIcon>
    //       <CarInfo>{mileage}</CarInfo>
    //     </CarDetail>
    //     <CarDetail>
    //       <SmallIcon>
    //         <FontAwesomeIcon icon={faEllipsisH} />
    //       </SmallIcon>
    //       <CarInfo>{gearType}</CarInfo>
    //     </CarDetail>
    //     <CarDetail>
    //       <SmallIcon>
    //         <FontAwesomeIcon icon={faFillDrip} />
    //       </SmallIcon>
    //       <CarInfo>{gas}</CarInfo>
    //     </CarDetail>
    //   </CarDetailsContainer>
    //   <RentButton text="Rent Now" />
    // </CarContainer>
  );
}