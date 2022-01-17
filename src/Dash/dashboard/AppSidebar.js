import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link}
 from 'react-router-dom';
import {Image} from 'react-bootstrap';
import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem, 
} from '@coreui/react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import {_nav, _assesnav} from '../../_nav'

const AppSidebar = (props) => {
  const {group} = props;
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch({ type: 'set', sidebarShow: false })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <Link to="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><Image className="img-fluid" src="\images\logok.png" alt="logo"  width="150" height="35"/></Link>
       </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <CCreateNavItem items={group==="Assessors" ? _assesnav: _nav} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
