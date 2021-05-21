import React from 'react';
import Header from '../../components/Header'
import HeroHome from '../../components/index/HeroHome'
import FeaturesHome from '../../components/index/Features'
import FeaturesBlocks from '../../components/index/FeaturesBlocks'
import Testimonials from '../../components/index/Testimonials'
import Newsletter from '../../components/index/Newsletter'


export const Landing = () => {
let body = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio doloribus magni, ullam qui odit dolores necessitatibus aliquid saepe quae incidunt libero? Tempore molestias quasi officia pariatur necessitatibus qui voluptatibus."

 return (
  <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
       
      </main>

    </div>
 )
}
