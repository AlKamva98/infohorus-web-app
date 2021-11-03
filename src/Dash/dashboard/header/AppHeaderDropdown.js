import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
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
        <CDropdownItem href="#">
          <CIcon name="cil-bell" className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-envelope-open" className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-task" className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            {tasks && tasks.length}
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-comment-square" className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon name="cil-user" className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-settings" className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-credit-card" className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon name="cil-file" className="me-2" />
          Recommendations
          <CBadge color="primary" className="ms-2">
            {recommendations && recommendations.length}
          </CBadge>
        </CDropdownItem>
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
