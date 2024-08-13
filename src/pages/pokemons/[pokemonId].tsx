import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon, index) => ({
    params: { pokemonId: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const Id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return <p>{pokemon.name}</p>;
}
