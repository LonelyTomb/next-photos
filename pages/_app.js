import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import configureAppStore from '../src/redux/store';

function MyApp({ Component, pageProps }) {
  const store = configureAppStore({});

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
