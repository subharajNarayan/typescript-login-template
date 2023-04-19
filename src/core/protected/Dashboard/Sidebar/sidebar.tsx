import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './sideNavBar'

// import { logoNegative } from '../../../../assets/dashboard/brand/logo'
// import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from './nav';


interface Props {
  sidebarToggle: boolean;
  setsidebarToggle: (state: boolean) => void;
}

const AppSidebar = ( props : Props) => {
  // const dispatch = useDispatch()

  const { sidebarToggle, setsidebarToggle } = props;
  const togglesidebar = () => setsidebarToggle(!sidebarToggle);

  return (
    <CSidebar
      position="fixed"
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" height={35} />
        <CIcon className="sidebar-brand-narrow" height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
      onClick={togglesidebar}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
