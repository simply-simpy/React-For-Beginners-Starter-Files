const main = document.querySelector('#main');
import React from 'react';
import { render } from 'react-dom'; // import one method from react-dom
import './css/style.css';


import StorePicker from './components/StorePicker';

render(<StorePicker/>, main);
