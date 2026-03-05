import styles from './Card.module.css';

function Card({pokemon, error}) {
    return (
        <div>
            {pokemon ? (
                <div className={styles.card}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites?.other?.["official-artwork"]?.front_default} alt={pokemon.name} />
                </div>
            ) : (!pokemon &&
                <p>{error}</p>
            )}
        </div>
    );
}

export default Card;