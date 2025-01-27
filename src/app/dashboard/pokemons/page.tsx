import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";
import Image from 'next/image';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: PokemonsReponse = await response.json();
        const pokemons = data.results.map(pokemon => ({
            id: pokemon.url.split('/')[6],
            name: pokemon.name,
            url: pokemon.url
        }));
        return pokemons;
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        return [];
    }
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);

    if (!pokemons) {
        return (
            <div>
                <p>Error fetching pokemons. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
           <PokemonGrid pokemons={pokemons} />
        </div>
    );
}