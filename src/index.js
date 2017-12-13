
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Login from './components/Login';
import App from './components/App';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

import './index.css'; //Global styles

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Login}/>
        <Match pattern="/top/" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('root'));
registerServiceWorker();
