import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { Link} from 'react-router-dom';
import CIcon from '@coreui/icons-react'

const AppHeaderDropdown = (props) => {
  const {signOut, tasks,recommendations} = props;
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CIcon name="cil-user" size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
       <Link to="/dash/profile">
          <CDropdownItem href="#">
          <CIcon name="cil-user" className="me-2" />
          Profile
        </CDropdownItem>
        </Link>
        <CDropdownItem href="#">
          <CIcon name="cil-task" className="me-2" />
          Tasks
          <CBadge color="info" className="ms-2">
            {tasks && tasks.length}
          </CBadge>
        </CDropdownItem>
        <Link to="/dash/theme/colors">
        <CDropdownItem href="#">
          <CIcon name="cil-comment-square" className="me-2" />
          Recomendations
          <CBadge color="info" className="ms-2">
            {recommendations && recommendations.length}
          </CBadge>
        </CDropdownItem>
        </Link>
        <CDropdownDivider />
        <CDropdownItem onClick={signOut}>
          <CIcon name="cil-lock-locked" className="me-2" />
          Sign Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
