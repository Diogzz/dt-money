import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', ()=> {
      return [
        {
          id: 1,
          title: 'Transactions 1',
          amout: 400,
          type: 'deposit',
          category: 'food',
          createAt: new Date()
        }
      ]
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);