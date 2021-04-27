import PokemonCard from "../components/PokemonCard";
import { PokemonContextProvider } from "../contexts/PokemonContext";

import '../styles/global.scss';
import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PokemonContextProvider>
      <div className={styles.wrapper}>
        <main>
        <header>
          <h1>Pokédex</h1>
        </header>

          <Component {...pageProps} />
        </main>

        <PokemonCard />
      </div>
    </PokemonContextProvider>
  );
}

export default MyApp;
