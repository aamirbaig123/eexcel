import React from 'react'
import styled from "styled-components"
import tw from  'twin.macro'
import { Marginer } from "../../Components/marginer";
import { BookCard } from '../../Components/bookCard'
import { BookingSteps } from "./bookingSteps";
import { Navbar } from '../../Components/navbar'
import { TopSection } from './topSection'
import { AboutUs } from './aboutUs';
import { TopCars } from './topCars';
import { Banner } from '../../Components/Banner';
import { Services } from '../../Components/Services';
import Review from './review';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/footer';
// import Reservation from '../../Components/reservation/index'
const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`

export function HomePage(){
    return (
     <PageContainer style={{backgroundColor:"#F9F9F9"}}>
    <TopSection/>
    <Navbar />
    <Marginer direction="vertical" margin="4em" />
      {/* <BookCard /> */}
      <AboutUs />
      <Marginer direction="vertical" margin="10em" />
      <Banner />
      <Marginer direction="vertical" margin="8em" />
    
      <Services />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Marginer direction="vertical" margin="8em" />
      <Review />
      <Marginer direction="vertical" margin="8em" />
      <Contact/>

      <Marginer direction="vertical" margin="8em" />
      {/* <Reservation/> */}
      <Footer />
    </PageContainer>
    )
}