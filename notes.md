import { BrowserRouter, Match, Miss } from 'react-router';

<BrowserRouter>
  <div>
    <Match exactly pattern="/" component={Login}/>
    <Match pattern="/top" component={App} />
    <Miss component={NotFound} />
  </div>
</BrowserRouter>

*ONLY WORKS WITH*

"react": "15.3.2",
"react-dom": "15.3.2",
"react-router": "4.0.0-alpha.4"
