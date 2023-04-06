import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import {
    faLocation,
    faMailBulk,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeadingReview = styled.h1`
${tw`
text-center
font-medium
text-2xl
`}

`
const ContactContainer = styled.div`
${tw`
m-auto
`}
`

const ContactIcon = styled.p`
${tw`
text-xl
`}
`

const ContactText = styled.span`
${tw`
text-xs
font-light
m-5
`}
`
const Contact = () => {
  return (
      <ContactContainer id='contact'>
    <HeadingReview style={{color:"#1eacc7"}}>Contact Us</HeadingReview>
<ContactIcon> <FontAwesomeIcon icon={faLocation} style={{color:"#1eacc7"}}/><ContactText>1600 Airport Fwy suite 402
Bedford Texas 76022</ContactText></ContactIcon>
<ContactIcon> <FontAwesomeIcon icon={faMailBulk} style={{color:"#1eacc7"}}/><ContactText>mobilityexcel@gmail.com</ContactText></ContactIcon>
<ContactIcon> <FontAwesomeIcon icon={faPhone} style={{color:"#1eacc7"}}/><ContactText>+1 (682) 372-4339</ContactText></ContactIcon>
    </ContactContainer>
  )
}

export default Contact