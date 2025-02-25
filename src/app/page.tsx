
import PokimonList from "@/components/PokimonList";



export default async function Home() {


    const kantoPokimon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    
  return (
    <main>
      <PokimonList kantoPokimon={kantoPokimon}/>
    </main>
  );
}
