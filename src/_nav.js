import React from 'react'
import CIcon from '@coreui/icons-react'
import {CBadge} from '@coreui/react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dash/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />, 
    badge:<CBadge color="secondary">New</CBadge>,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Assessment',
    to: '/dash/assessment',
    icon: <CIcon name="cil-notes" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Recommendations',
    to: '/dash/theme/colors',
    icon: <CIcon name="cil-comment-square" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Projects',
    to: '/dash/to',
    icon: <CIcon name="cil-user" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'The Team',
        to: '/dash/team',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Message',
        to: '/dash/chat',
         badge: <CBadge color="info">New</CBadge>,
      },
    ]
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Calendar',
    to: '/dash/calendar',
    icon: <CIcon name="cil-calendar" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },}
]

const _assesnav = [
  {
    _component:'CNavItem',
    as: NavLink,
    anchor: 'Assess',
    to:'/dash/cust',
    icon: <CIcon name="cil-notes" customClasses="nav-icon" />,
  },
  {
    _component:'CNavItem',
    as: NavLink,
    anchor: 'Send Message',
    to: '/dash/chat',
    icon: <CIcon name="cil-comment-square" customClasses="nav-icon" />,
  },
  {
    _component:'CNavItem',
    as:NavLink,
    anchor:'Report',
    to:'/dash/report',
    icon: <CIcon name="cil-chart-line" customClasses="nav-icon" />,

  }
]

export {_nav, _assesnav}
