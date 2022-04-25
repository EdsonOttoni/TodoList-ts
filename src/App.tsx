import React from 'react';

import { GlobalStyle } from './Global/styledGlobal';
import Home from './page/Home';


function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home/>
    </React.Fragment>
  );
}

export default App;
