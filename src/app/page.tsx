
import PokimonList from "@/components/PokimonList";


export const  metadata = {
  title: "Pokimon Explorer",
  description: "Find your favorite pokimon"
}

export default async function Home() {


  const kantoPokimon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(response => response.json())
    
  return (
    <section id="pokimon-list" className="">
      <PokimonList kantoPokimon={kantoPokimon}/>
    </section>
  );
}
