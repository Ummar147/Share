import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById('root');


// ReactDOM.render(<App />, rootElement);

createRoot(rootElement).render( <Provider store={store}>
      <App />
    </Provider>);