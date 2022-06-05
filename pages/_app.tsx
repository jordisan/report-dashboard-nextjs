import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '@styles/global.scss';

function App({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <MantineProvider
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          breakpoints: {
            xs: 340
          }
        }}
      >

      <header>
        <p className="source"><a href="https://github.com/jordisan/report-dashboard-nextjs" target="_blank" rel="noreferrer">report-dashboard-nextjs</a> at GitHub</p>
        <hr />
      </header>

      <Head>
        <title>Report dashboard</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <footer>
        <hr />
        <p className="source"><a href="https://github.com/jordisan/report-dashboard-nextjs" target="_blank" rel="noreferrer">report-dashboard-nextjs</a> at GitHub</p>
      </footer>

      </MantineProvider>
    </Provider>
  );
}

export default App;