import React from "react";
import "./index.css";

function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then(async response => {
      if (response.ok) {
        const data = await response.json();
        return Promise.resolve(data);
      } else {
        return Promise.reject(new Error(`No pokemon with the name ${name}`));
      }
    })
    .catch(error => {
      return Promise.reject({message: "Problem with API"});
    });
}

export const App = () => {
  const [pokemons, setPokemons] = React.useState([]);

  return (
    <div>
      <h2>Pokemon</h2>
      <Search setPokemons={setPokemons} />
      <Pokedex pokemons={pokemons} />
    </div>
  );
};

export const Search = ({setPokemons}) => {
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    fetchPokemon(search).then(data => setPokemons(prev => [...prev, data]));
    setLoading(false);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} />
        <input type="submit" value="Search" />
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export const Pokedex = ({pokemons}) => {
  return (
    <div>
      <ul className="pokemon-list">
        {pokemons.map(pokemon => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </ul>
    </div>
  );
};

export const Pokemon = ({pokemon}) => {
  return (
    <li className="pokemon-card">
      <div>
        <img src={`${pokemon.sprites.front_default}`} />
        <div>
          <strong>{pokemon.name}</strong>
        </div>
        <div>
          <strong>3 Moves: </strong>
          {pokemon.moves
            .map(move => move.move.name)
            .slice(0, 3)
            .join(", ")}
        </div>
        <div>
          <strong>Stats: </strong>
          {pokemon.stats.map(stat => {
            return (
              <div key={`${pokemon.id}-${stat.stat.name}`}>
                {stat.stat.name} = {stat.base_stat}
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export {App as PokemonApp};
