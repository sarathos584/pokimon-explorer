
import PokimonList from "@/components/PokimonList";


export const  metadata = {
  title: "Pokimon Explorer",
  description: "Find your favorite pokimon"
}

export default async function Home() {

  let error: boolean = false
  const kantoPokimon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(response => response.json()).catch(()=> {
    error = true
  })
  
  return (
    <section id="pokimon-list" className="">
      {
        error ? <p>Something Went Wrong</p> : <PokimonList kantoPokimon={kantoPokimon}/>
      }
    </section>
  );
}
