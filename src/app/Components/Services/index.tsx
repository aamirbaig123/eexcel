import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faPlane,
  faMoon,
  faCalendar,
  faUsers,
  faCar,
  faDashboard
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ServicesContainer = styled.div`
${tw`
w-full 
min-h-screen 
bg-blue-50 
p-6
`}
`
const CardsContainer = styled.div`
${tw`
flex 
flex-wrap 
justify-center

w-11/12
m-auto

`}
`

const CardColumn = styled.div`
${tw`
flex 
flex-col 
bg-white 
rounded-lg 
shadow-md 
w-full 
m-6 
p-5
overflow-hidden 
sm:w-52
`}
`
const ServiceTitle = styled.h1`
${tw`
text-3xl
text-center
font-normal
`}
`
const ServiceText = styled.p`
${tw`
text-xs
  md:text-base
  text-lightGray
  font-extralight
  mt-4
  m-auto
  text-center
`}
`
const FeatureIcon = styled.div`
${tw`
text-white
text-center

`}
`

const ServiceName = styled.p`
${tw`
text-lg
font-normal
text-center

`}
`

const ServiceSLogan = styled.p`
${tw`
text-xs
font-normal
text-center
text-lightGray
-mt-3.5
`}
`
export function Services() {
    return(
<ServicesContainer style={{backgroundColor:"#F9F9F9"}} id="service">
  <ServiceTitle  style={{color:"#199EB8"}}> Our Services</ServiceTitle>
  <ServiceText>Customer service representatives at Dallas and Ft worth Limousine will be happy</ServiceText>
  <br />

  <ServiceText>to answer any queries you have concerning our services</ServiceText>
<CardsContainer>
  <CardColumn>
    <FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faPlane} /></FeatureIcon>
    <ServiceName style={{color:"#199EB8"}}>Airport Service</ServiceName>
    <ServiceSLogan>We offer reliable and affordable airport service wherever you need us.</ServiceSLogan>
    </CardColumn>
  <CardColumn><FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faMoon} /></FeatureIcon>
  
  <ServiceName style={{color:"#199EB8"}}>Night Tours</ServiceName>
    <ServiceSLogan>Enjoy an incredible night out on town in your own private limousine in Dallas and Ft worth</ServiceSLogan>
  </CardColumn>
  <CardColumn>
  <FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faCalendar} /></FeatureIcon>
  <ServiceName style={{color:"#199EB8"}}>Wedding Limo
</ServiceName>
<ServiceSLogan>We present to you the finest from our fleet on the best day of your life.</ServiceSLogan>
  </CardColumn>

  
</CardsContainer>
<CardsContainer>
  <CardColumn>
  <FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faUsers} /></FeatureIcon>
  <ServiceName style={{color:"#199EB8"}}>Bachelor Party
</ServiceName>
<ServiceSLogan>We offer one of the best fleet of party buses and limousines for your Bachelor Party.</ServiceSLogan>


  </CardColumn>
  <CardColumn>
  <FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faCar} /></FeatureIcon>
  <ServiceName style={{color:"#199EB8"}}>City Ride
</ServiceName>
<ServiceSLogan>Luxury transportation provider serving Dallas and Ft worth and surrounding areas.</ServiceSLogan>

  </CardColumn>
  <CardColumn>
  <FeatureIcon style={{width:"70px",height:"70px",background:"#199EB8",fontSize:"24px",lineHeight:"70px",borderRadius:"50%",margin:"auto"} }> <FontAwesomeIcon icon={faDashboard} /></FeatureIcon>
  <ServiceName style={{color:"#199EB8"}}>24x7 Assistance
</ServiceName>
<ServiceSLogan>We are available 24 x 7 whenever you need we are there for you.</ServiceSLogan>

  </CardColumn>

  
</CardsContainer>
</ServicesContainer>
    )
}