import React from 'react'
import {Header} from '../../components/index/Header'
import Sidebar from '../../components/Sidebar'
import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import "./body.css"

export const Findings = () => {
 return (
  <div>
   <Header/>
   <div className="main">
   <h4 className="text-center display-4 bdy">Recomendations</h4>
   <p className="mx-5 px-3 fs-2 mb-3 mt-3">Click on the Recomendations you think would work for your company</p>
    <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
   </div>
   <Sidebar/>

  </div>

 )
}
