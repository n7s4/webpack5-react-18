import React, { useEffect, useState } from "react";
import routerConfig from "@/router/index-old";
import { RouterProvider } from "react-router-dom";
import "./app.css"; 

const App: React.FC = () => {
  return <RouterProvider router={routerConfig} />;
};
export default App;
