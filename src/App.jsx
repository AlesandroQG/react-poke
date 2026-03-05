import {useState, useEffect} from 'react';
import FormSearch from './components/FormSearch';
import Card from './components/Card';
import './App.css';

function App() {
    const [search, setSearch] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPokemon = async () => {
            const api = `https://pokeapi.co/api/v2/pokemon/${search}`;
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    setPokemon(null);
                    setError("Pokémon no encontrado")
                } else {
                    const data = await response.json();
                    setPokemon(data);
                }
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        fetchPokemon();
    }, [search]);
    return (
        <>
            <h1>Buscar Pokémon</h1>
            <FormSearch search={search} setSearch={setSearch} />
            <Card pokemon={pokemon} error={error} />
        </>
    );
};

export default App;