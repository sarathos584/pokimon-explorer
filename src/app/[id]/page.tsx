import Link from 'next/link';
import React from 'react'

const PokimonView = async ({ params }: { params: { id: string }}) => {
    
    
    let data
    let image; 
    if (params?.id) {
        data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(response => response.json())
        image = data.sprites.front_default
        console.log(data,  'view page')
    }

  return (
    <div className='min-h-[100vh] pt-[20vh] max-w-[60%] mx-auto text-center flex flex-col items-center justify-center'>
        <h2 className='text-2xl capitalize font-bold'>{data.name}</h2>
        <img src={image} alt="" />
        <div className="flex justify-center items-center flex-wrap gap-2">
        <p className='key badge'>Height: <span className="value">{data.height}</span></p>
        <p className='key badge'>Weight: <span className="value">{data.weight}</span></p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-x-5">
            
        {data.stats.map((stat: any, index: any) => (
            <div key={index} className='max-w-[60%] '>
            <p className='key badge'>
                {stat.stat.name}: <span className="value">{stat.base_stat}</span>
            </p>
            </div>
        ))}
        </div>
         <Link className='border-purple-500 border-[1px] border-solid rounded-md p-2 mt-4 my-3 bg-white hover:bg-purple-500 hover:text-white' href={'/'}>Back to home</Link>
    </div>
  )
}

export default PokimonView
