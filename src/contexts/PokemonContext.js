import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext({});

export function PokemonContextProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState({});

  return (
    <PokemonContext.Provider value={{
      selectedPokemon,
      setSelectedPokemon
    }}>
      { children }
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  return useContext(PokemonContext);
}