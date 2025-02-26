import { _processViewApiData } from '@/helpers/apiHelpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export const metadata = {
    title: 'Pokimon',
    description: "Pokimon view"
}


const PokimonView = async ({ params }: { params: { id: string }}) => {
    
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(response => response.json())

        const { abilityArray, type, statsArray, moves, images } = _processViewApiData(data)
        
        const renderImages = ()=> {
            if (!images) return null
            return Object.values(images)
                    .map((image: string, idx: number)=> (
                        <Image 
                        width={200} 
                        height={300} 
                        src={image} 
                        alt="" 
                        className='max-w-[px]:' 
                        key={idx}/>
                    ))
        }

        const renderAbilities = ()=> {
            const renderElements = abilityArray.map((ability: string, idx: number)=> (
                <p className='key badge' key={idx}>
                    <span className="value">{ability}</span>
                </p>
            ))

            return renderElements
        }

        const renderStats = ()=> {
            const renderElements = statsArray.map((stat: string, idx: number)=> (
                <p className='key badge' key={idx}>
                    <span className="value">{stat}</span>
                </p>
            ))

            return renderElements
        }

        const renderMoves = ()=> {
            const renderElements = moves.data.map((move: string, idx: number)=> (
                <p className='key badge' key={idx}>
                    <span className="value">{move}</span>
                </p>
            ))

            return renderElements
        }
        

  return (
    <div className='min-h-[100vh] pt-[20vh] max-w-[60%] mx-auto text-center flex flex-col justify-center'>
        <h2 className='text-2xl capitalize font-bold'>{data.name}</h2>
        <div className="flex flex-wrap justify-center mt-3">
        {
            renderImages()
        }
        </div>
        <div className='type flex items-center baseline'>
        <h5 className='key'> Type:</h5>
        <p className='key badge'>
            <span className="value">{type}</span>
        </p>
        </div>
        <div className='abilities flex items-baseline '>
        <h5 className='key'> Abilities:</h5>
        <div className="flex flex-wrap items-center">
        {
            renderAbilities()
        }
        </div>
        </div>
        <div className='abilities flex items-baseline '>
        <h5 className='key'> Stats:</h5>
        <div className="flex flex-wrap items-center">
        {
            renderStats()
        }
        </div>
        </div>
        <div className='abilities flex items-baseline '>
        <h5 className='key'>Moves:</h5>
        <div className="flex flex-wrap items-center">
        {
            renderMoves()
        }
        <span>{moves.count}</span>
        </div>
        </div>
         <Link className='border-purple-500 border-[1px] border-solid rounded-md p-2 mt-4 my-3 bg-white hover:bg-purple-500 hover:text-white' href={'/'}>Back to home</Link>
    </div>
  )
}

export default PokimonView
