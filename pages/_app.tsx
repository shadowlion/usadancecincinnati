import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import BaseFooter from "../components/BaseFooter";
import BaseNavigation from "../components/BaseNavigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="d-flex flex-column">
      <header>
        <BaseNavigation />
      </header>
      <main className="flex-shrink-0">
        <Component {...pageProps} />
      </main>
      <footer className="mt-auto py-5 bg-light">
        <BaseFooter />
      </footer>
    </div>
  );
}
export default MyApp;
