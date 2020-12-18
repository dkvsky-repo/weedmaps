// PART 1 - Routing
// Section 1
// Implement the router with react-router-dom
// https://reactrouter.com/
// The lib is installed, all you need to do is import it

// Requirements:
// Home component only renders for path /
// Retailer component only renders for path /retailerType/:wmid
// where retailerType is dispensaries | deliveries | doctors

// ✅

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/';
import Retailer from './pages/retailer';
import { useGlobal, GlobalContext } from './context';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const queryCache = new QueryCache();
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
    line-height: 1.5;
  }
`;

function ContextWrapper() {
  const globalValues = useGlobal();
  return (
    <GlobalContext.Provider value={globalValues}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/:retailerType/:wmid' component={Retailer} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </ReactQueryCacheProvider>
    </GlobalContext.Provider>
  );
}

render(<ContextWrapper />, document.getElementById('root'));
