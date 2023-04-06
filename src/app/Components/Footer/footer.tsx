import React from 'react'
import styled from "styled-components"
import tw from  'twin.macro'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const FooterContainer = styled.footer`
${tw`
mt-9
w-full
bg-black
flex
flex-row
sm:flex-col
xs:flex-col
xss:flex-col
mobilesmall:flex-col
h-40
justify-between
`}
`
const FooterSubContainer = styled.div`
${tw`
w-2/4
flex
lg:flex-row
sm:flex-col
xs:flex-col
xss:flex-col
mobilesmall:flex-col
justify-between
items-center
m-auto
`}
`
const FooterItems = styled.li`
${tw`
flex
`}
`

const FooterLinks = styled.a`
${tw`
text-white
text-xs
m-3
cursor-pointer
hover:text-graywhite
`}
`
const FooterContent = styled.p`
${tw`
text-graywhite
text-xs
`}
`
const Footer = () => {
  return (
<FooterContainer>
    <FooterSubContainer>
<FooterContent>
©2022 EEXCEL Limousines

</FooterContent>
<FooterItems>

   <FooterLinks><Link activeClass="active" to="Home" spy={true} smooth={true}>About Us</Link></FooterLinks> 
   <FooterLinks><Link activeClass="active" to="service" spy={true} smooth={true}>Our Services</Link> </FooterLinks> 
   <FooterLinks><Link activeClass="active" to="fleet" spy={true} smooth={true}>Fleet</Link></FooterLinks> 
   <FooterLinks><Link activeClass="active" to="testimonial" spy={true} smooth={true}>Testimonial</Link></FooterLinks> 
   <FooterLinks><Link activeClass="active" to="reservation" spy={true} smooth={true}>Reservation</Link></FooterLinks> 
   <FooterLinks><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></FooterLinks> 
</FooterItems>

</FooterSubContainer>
</FooterContainer>
  )
}

export default Footer