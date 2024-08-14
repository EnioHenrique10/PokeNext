// src/pages/components/Card.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Card.module.css';


// Define o tipo para um Pokémon
interface Pokemon {
  id: number;
  name: string;
}

// Define o tipo para as props do componente Card
interface CardProps {
  pokemon: Pokemon;
}

export default function Card({ pokemon }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href="/somepage" legacyBehavior>
      <a className={styles.btn}>Detalhes</a>
    </Link>

    </div>
  );
}
