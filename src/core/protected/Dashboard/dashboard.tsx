import React, { Suspense } from 'react'
import AppHeader from './Header/Header'
import Sidebar from './Sidebar/sidebar'
import AppFooter from './Footer/footer'
import "../../../assets/dashboard/scss/style.scss"
import FallbackLoader from '../../../components/React/FallBackLoader/FallBackLoader'
import Home from '../pages/home/Home'

const Dashboard = () => {
  const [sidebarToggle, setsidebarToggle] = React.useState(false);

  return (
    <Suspense fallback={<FallbackLoader />}>
      <div
        className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`}
        style={{ position: "relative" }}
      >
        <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
        <main className="stickyHeader">
          <AppHeader sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
          <div className="body flex-grow-1 px-3">
            {/* <AppContent /> */}
            <Home />
          </div>
          <AppFooter />
        </main>
      </div>
    </Suspense>
  )
}

export default Dashboard;
