import '@/styles/globals.css'
import { Provider } from 'react-redux'
import configureAppStore from '@/redux/store';

function MyApp({ Component, pageProps }) {
  const store = configureAppStore({});

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
