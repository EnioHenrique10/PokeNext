import Image from "next/image";
import styles from "@/styles/Home.module.css";
import pokeball from "../../public/images/pokeball.png"
import Card from "../pages/components/Card";


export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  // Adicionando o ID a cada Pokémon
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results, // Nome da propriedade deve ser 'pokemons'
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
      <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src={pokeball} alt={"pokeball"}/>
        
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
         <Card key={pokemon} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
