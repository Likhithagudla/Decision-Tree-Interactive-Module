import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
 // Import from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(<App />); // Render your app


ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>,
  document.getElementById('root')
);
