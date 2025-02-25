import React from 'react'

const PokimonView = async ({ params }: { params: { id: string }}) => {
    
    
    let data
    let image; 
    if (params?.id) {
        data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(response => response.json())
        image = data.sprites.front_default
        console.log(data.name,  'view page')
    }

  return (
    <div>
        <p>Name: {data.name}</p>
        <img src={image} alt="" />
        <p>Height: {data.height}</p>
        <p>Weight: {data.weight}</p>
        {data.stats.map((stat: any, index: any) => (
            <div key={index}>
            <p>
                {stat.stat.name}: {stat.base_stat}
            </p>
            </div>
        ))}
         
    </div>
  )
}

export default PokimonView
