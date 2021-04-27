import { createContext, ReactNode, useContext, useState, } from "react";

type PokemonData = {
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

type PokemonContextData = {
  selectedPokemon: SelectedPokemon;
  setPokemon: ({ pokemon: PokemonData, sprite: string }) => void;
}

type PokemonContextProviderProps = {
  children: ReactNode;
}

export const PokemonContext = createContext({} as PokemonContextData);


export function PokemonContextProvider({ children }: PokemonContextProviderProps) {
  const [selectedPokemon, setSelectedPokemon] = useState({} as SelectedPokemon);

  function setPokemon({ pokemon, sprite }: SelectedPokemon) {

    setSelectedPokemon({ pokemon, sprite });
  }

  return (
    <PokemonContext.Provider value={{
      selectedPokemon,
      setPokemon,
    }}>
      { children }
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  return useContext(PokemonContext);
}