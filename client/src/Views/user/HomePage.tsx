import React, { Component } from 'react'
import Welcome from '../../Components/Welcome/Welcome';
import Experience from '../../Components/Experiences/Experience';
import HomeFeature from '../../Components/Home-Feature/HomeFeature';
import HomeBanner from '../../Components/stateless/banners/Home-Banner/HomeBanner';


const HomePage = () :React.FunctionComponentElement<{}> =>{
  let content = <>
    <HomeBanner title="Bienvenue"/>
    <Welcome/>
    <Experience/>
    <HomeFeature/>
    {/* <HomeGallerie/> */}
  </>

  return content;
}

export default  HomePage;