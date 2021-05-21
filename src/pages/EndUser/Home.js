import React from 'react';
import {Jumbotron} from '../../components/index/jumbotron.jsx';
import { Featurerette } from '../../components/index/featurerette.jsx';
import { Customer } from '../../components/index/customer.jsx';
import Header from '../../components/Header';

export function Home() {
  let body = "Infohorus offers cybersecurity services that combine diverse expertise in the areas of cybersecurity, defensive social engineering, cyber negotiations, intelligence, and other specialized operations to enhance critical infrastructure cyber resilience.";
  return (
    <>
    <Header/>
    <div className="Home align-items-center">
      <Jumbotron head="Welcome to Infohorus" body={body} btn1Link="/about" btn1Text="Learn More" jumboType="two-btns" />
      <Featurerette/>
      <Customer/>
      </div>
      </>
  );
}

