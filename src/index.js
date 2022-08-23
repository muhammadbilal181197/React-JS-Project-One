import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import "./index.css"
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Box className="Container">
    <App />
    </Box>
);
