import React from 'react';
import { Featurerette } from '../../components/index/featurerette.jsx';
import {Features} from '../../components/index/Features';
import {Header} from '../../components/index/Header';
import HeroHome from '../../components/index/HeroHome';
import Footer from '../../components/index/Footer';

export function Home() {
  let body = "Infohorus sssoffers cybersecurity services that combine diverse expertise in the areas of cybersecurity, defensive social engineering, cyber negotiations, intelligence, and other specialized operations to enhance critical infrastructure cyber resilience.";
  return (
    <>
    <Header/>  
    <HeroHome/>
    <Features/>
    <Footer/>
      </>
  );
}

