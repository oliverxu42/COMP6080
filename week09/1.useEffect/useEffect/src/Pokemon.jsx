import { useEffect, useState } from "react";

const Pokemon = () => {
  // Why does this not work?
  let pokemon;

  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => {
      pokemon = data;
      console.log(pokemon);
    });

  //   const [pokemon, setPokemon] = useState("");

  //   useEffect(() => {
  //     const getPokemon = async () => {
  //       const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //       const data = await res.json();
  //       setPokemon(JSON.stringify(data));
  //     };

  //     getPokemon();
  //   }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <p>{pokemon}</p>
    </>
  );
};

export default Pokemon;
