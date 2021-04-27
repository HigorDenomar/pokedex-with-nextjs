import Image from 'next/image';
import axios from "axios";

import styles from './home.module.scss';
import { usePokemon } from '../contexts/PokemonContext';

interface PokemonData {
  id: number;
  name: string;
  types: Array<{
    type: {
      name: string;
    }
  }>
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    }
  }>;
  abilities: {
    ability: {
      name: string;
    }
  }[];
}

type SelectedPokemon = {
  pokemon: PokemonData;
  sprite: string;
}

interface HomeProps {
  pokemons: Array<PokemonData>
}

export default function Home({ pokemons }: HomeProps) {
  const { setPokemon } = usePokemon();

  return (
    <div className={styles.container}>
      <ul>
        { pokemons?.map( pokemon => (
          <li
            key={pokemon.id}
            onClick={() => setPokemon({ pokemon, sprite: `https://pokeres.bastionbot.org/images/pokemon/${ pokemon.id }.png` })}
          >
            <Image
              src={ `https://pokeres.bastionbot.org/images/pokemon/${ pokemon.id }.png` }
              width={60}
              height={60}
              objectFit="contain"
            />

            <span>{ pokemon.name }</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const maxPokemons = 150;

  const pokemonPromises = Array(maxPokemons).fill(0).map(async (_, index) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
    return data;
  });

  const pokemons = await Promise.all(pokemonPromises)
    .then(response => response)
    .catch(err => console.error(err));

  return {
    props: {
      pokemons,
    }
  }
}
