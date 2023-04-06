import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import CarsImg from './cover2.png'

const BannerContainer = styled.div`
${tw`
mt-20
max-w-full
w-full
h-96
bg-black
flex
flex-col
items-center
justify-center
bg-center
h-auto
`}
`

const TextSection= styled.div`
    ${tw`
    text-center
    w-1/2
    `}
`

const Heading = styled.h1`
${tw`
mt-24
text-white
text-5xl
font-bold
`}
`

const SmallTagline = styled.p`
${tw`
text-lightGray
font-light
text-xl
text-white
`}
`
export function Banner() {
return(
<BannerContainer  style={{backgroundImage: 'url(' + require('./parallax-bg.jpeg') + ')',backgroundSize:"cover",backgroundPosition:"center",} }>
 <TextSection>
<Heading>Welcome To EEXCEL </Heading>
<SmallTagline>We're here to serve you with a great traveling experience!.</SmallTagline>
 </TextSection>

    <div className="imageSection" >
    <img src={CarsImg} alt="" style={{maxWidth:"60vw",marginTop:"5px"}}/>
    </div>
</BannerContainer>
)
}