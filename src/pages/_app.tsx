import React, { FC } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppProps } from 'next/app';
import rootReducer from '../components/App.reducers';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
