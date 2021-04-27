import Image from 'next/image';
import { usePokemon } from '../../contexts/PokemonContext';

import styles from './styles.module.scss';

export default function PokemonCard() {

  const { selectedPokemon: { pokemon, sprite } } = usePokemon();

  return (
    <aside className={styles.container}>
      <div>
        { pokemon?.name ? (
          <>
            <Image
              src={ sprite }
              alt={ pokemon.name }
              width={300}
              height={300}
              objectFit="contain"
            />

            <h2>{ pokemon.name }</h2>

            <div className={`${styles.types} ${styles.info}`}>
              <span>Types:</span>

              <p>{ pokemon.types.map(type => type.type.name).join(', ') }</p>
            </div>

            <div className={`${styles.info}`}>
              <span>Abilities:</span>

              <p>{ pokemon.abilities.map(ability => ability.ability.name).join(', ') }</p>
            </div>

            <div className={`${styles.status} ${styles.info}`}>
              { pokemon.stats.map(status => (
                <p><span>{ status.stat.name }:</span> { status.base_stat }</p>
              )) }
            </div>
          </>
        ) : (
          <p>Selecione um pokémon</p>
        ) }
        
      </div>
    </aside>
  );
}