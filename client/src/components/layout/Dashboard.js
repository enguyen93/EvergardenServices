import React, { Component } from 'react';
import './style.css';

import MyNav from '../DashNav'
import Sidebar from '../DashSidebar'
import MainContent from '../DashMainContent'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <MyNav />
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default Dashboard;