// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import { createRoot } from "react-dom/client";

import './index.css'
import App from "./App";

const app=document.getElementById("app");
const root=createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
