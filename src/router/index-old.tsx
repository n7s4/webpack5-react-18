import React from "react";
import { HashRouter, Route, createBrowserRouter } from 'react-router-dom';
import Layout from '@/Layout/Layouts';

const routes = createBrowserRouter([
  // 首页路由
  {
    path: '/',
    element: <Layout/>,
  }
])

export default routes;