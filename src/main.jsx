import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { TestComponent } from './components/testComponent.jsx';
import { ContactInfo } from './components/contactInfo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestComponent />
    <ContactInfo />
  </React.StrictMode>,
)
