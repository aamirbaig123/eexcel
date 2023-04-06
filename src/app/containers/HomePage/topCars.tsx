import React,{useState}from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../Components/cars";
import { ICar } from "../../typings/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../Components/responsive";
import CarOne from './car1.jpeg'
import CarTwo from './car2.jpeg'
import CarThree from './car3.jpeg'
import CarFour from './car4.jpeg'
import CarFive from './car5.jpeg'
const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10

  `};
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-5xl
    text-black
    font-medium
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-lightGray
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

export function TopCars(){
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({maxWidth:SCREENS.sm})
    const testCar: ICar = {
        name: "SEDAN",
        thumbnailSrc: CarOne,
        dailyPrice: 60,
        tip:20,
 
        tax:8,
      };
    
      const testCar2: ICar = {
        name: "SUV",
  
        thumbnailSrc:CarTwo,
        dailyPrice:75,
        tip:20,
 
        tax:8,
      };

      const testCar3: ICar = {
        name: "STRETCH SEDAN",
       
        thumbnailSrc:CarThree,
        dailyPrice: 105,
        tip:20,
 
        tax:8,
      };


      const testCar4: ICar = {
        name: "STRETCH HUMMER",

        thumbnailSrc:CarFour,
        dailyPrice: 150,
        tip:20,
 
        tax:8,
      };

      const testCar5: ICar = {
        name: "ESCALADE",

        thumbnailSrc:CarFive,
        dailyPrice: 90,
        tip:20,
 
        tax:8,
      };
      const cars = [
        <Car {...testCar} />,
        <Car {...testCar2} />,
        <Car {...testCar3} />,
        <Car {...testCar4} />,
        <Car {...testCar5} />,
      ];
      const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
return (

<TopCarsContainer>
    <Title style={{color:"#1eacc7"}}>Our Fleet</Title>
    <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
    </TopCarsContainer>
  );
}