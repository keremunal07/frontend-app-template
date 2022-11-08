import 'src/styles/globals.scss';
import type { AppProps } from 'next/app';
import AppContext from 'src/app-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <div>
        <Component {...pageProps} />;
      </div>
    </AppContext>
  );
}
