import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App2 from './app2';

// import { BrowserRouter } from "react-router-dom";
// import App from './contextApi/App';
// import Contact from "./components/Contact"
// import App from './App';
// import Counter2 from './classcomponent/Counter2';
// import Navbar from './router/Navbar';
// import Parent from './router/Parent';
// import Api from "./Hooks/Api";


// import Todo from "./TODO/Todo";
// import Todolist from "./TODO/Todolist"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter/>
<App2/>
<BrowserRouter/>
  </StrictMode>
);