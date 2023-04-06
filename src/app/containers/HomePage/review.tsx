import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../Components/button";
const HeadingReview = styled.h1`
${tw`
text-center
font-medium
text-2xl
`}
`

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap

  `};
`;

const review = () => {
  return (
      <><div id='testimonial'>
   <HeadingReview style={{color:"#1eacc7"}}>Testimonial</HeadingReview>
   <ButtonsContainer>
   <Button text="View All Reviews" />
 </ButtonsContainer>
 </div>
 </>
  )
}

export default review