import Image from 'next/image';

import styles from './styles.module.scss';

export default function PokemonCard() {

  return (
    <aside className={styles.container}>
      <div>
        <Image
          src="https://pokeres.bastionbot.org/images/pokemon/150.png"
          alt="Mewtwo"
          width={300}
          height={300}
          objectFit="contain"
        />

        <h2>Mewtwo</h2>

        <div className={`${styles.types} ${styles.info}`}>
          <span>Types:</span>

          <p>Psychic</p>
        </div>

        <div className={`${styles.info}`}>
          <span>Abilities:</span>

          <p>Pressure, Unnerve</p>
        </div>

        <div className={`${styles.status} ${styles.info}`}>
          <p><span>Hp:</span> 106</p>
          <p><span>Attack:</span> 110</p>
          <p><span>Defense:</span> 90</p>
          <p><span>Special-Attack:</span> 154</p>
          <p><span>Special-Defense:</span> 90</p>
          <p><span>Speed:</span> 130</p>
        </div>
      </div>
    </aside>
  );
}