import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './scss/app.scss';

// main app
import AppRoutes from './routes';

ReactDOM.render(<AppRoutes />, document.getElementById('app'))