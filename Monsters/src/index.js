import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Monsters from './components/Monsters';

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Monsters />
  </StrictMode>
);