import React from 'react'
import {Link}from 'react-router-dom'
import "./sidebar.css"

const Sidebar = () => {
 return (
  <div>
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <Link to="/" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </Link>
        <Link to="/" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></Link>
        <Link to="/" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Findings</span></Link>
        <Link to="/" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-thumbs-o-up fa-fw me-3"></i><span>Recommendations</span></Link>
        <Link to="/" class="list-group-item list-group-item-action py-2 ripple"
          ><i class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></Link>
        
      </div>
    </div>
  </nav>
  </div>
 )
}

export default Sidebar
