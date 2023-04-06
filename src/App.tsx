import React from 'react';
import styled from "styled-components"
import tw from  'twin.macro'

import './App.css';
import { HomePage } from './app/containers/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './app/containers/HomePage/aboutUs';
import { Services } from './app/Components/Services';
import { Banner } from './app/Components/Banner';
import { TopCars } from './app/containers/HomePage/topCars';
import Review from './app/containers/HomePage/review';
import Contact from './app/Components/Contact/Contact';
import { Navbar } from './app/Components/navbar';
const AppContainer = styled.div`
${tw`
w-full
h-full
flex
flex-col
`}
`

function App() {
  return (
<>
<BrowserRouter>

<Routes>

  <Route path='/'  element={<HomePage />}/>
  <Route path='/about'  element={<AboutUs />}/>
  <Route path='/services'  element={<Services />}/>
  <Route path='/banner'  element={<Banner />}/>
  <Route path='/fleet'  element={<TopCars />}/>
  <Route path='/testimonial'  element={<Review/>}/>
  <Route path='/contact'  element={<Contact/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
