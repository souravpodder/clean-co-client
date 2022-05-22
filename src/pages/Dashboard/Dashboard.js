import React from 'react';
import { Outlet, Route, Router, Routes } from 'react-router-dom';
import DashboardSidebar from '../shared/DashboardSidebar';
import AddAdmin from './AddAdmin';
import AddService from './AddService';

const Dashboard = () => {
  return (
    <>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
    </>
  );
};

export default Dashboard;