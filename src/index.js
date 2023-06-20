import React from 'react';
import { createRoot } from 'react-dom/client';

const element = React.createElement('div', {
  a: 5,
  b:10,
})
console.log(element);
const container = document.querySelector('#root');
const root = createRoot(container)
root.render(element);
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
