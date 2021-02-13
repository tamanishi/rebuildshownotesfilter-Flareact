import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import TagManaget from 'react-gtm-module'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  // Your custom stuff here
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-VTE9S5859Y' })
  })

  return <Component {...pageProps} />;
}
