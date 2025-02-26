'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"


const PokimonList = ({ kantoPokimon }: { kantoPokimon: any }) => {

  const [data, setData] = useState<undefined | any[]>()
  const [search, setSearch] = useState('')

  useEffect(()=> {

    if (search) {
        const dataList = kantoPokimon.results.filter((item: any)=> item.name.toLowerCase().includes(search.toLowerCase()))
        console.log(dataList, ": data list")
        setData(dataList)
    } else {
        setData(kantoPokimon.results)
    }
  }, [kantoPokimon, search])

  return (
    <div className="relative">
        <div className="pt-16 text-center mb-10 bg-purple-100 fixed w-full pb-5">
        <input id="search" name='search' type="text" onChange={(e)=> setSearch(e.target.value)} value={search}  
        placeholder="Ex: Bulbasaur"
        className="border min-w-[30vw] min-h-10 rounded-md p-3"/>
        </div>
        <div className="list px-10 py-[20vh] flex flex-wrap gap-5 justify-center items-center max-w-[80vw] min-h-[95vh]  mx-auto overflow-hidden scroll overflow-y-scroll">
        {
        data?.map((item: any, idx: any)=> (
          <div className="border border-solid min-w-[200px] min-h-[200px] rounded-md p-5 bg-white"  key={idx}>
            <Link href={`/${idx + 1}`} >
              <div className="flex flex-col">
              <div className="w-full text-center flex justify-center">
              <Image 
              width={30} 
              height={30} 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png`} 
              alt="" 
              className="w-[70%]"
              />
              </div>
                <h3 className="capitalize text-center">Name: {item.name}</h3>
                <button className="border-purple-500 border-[1px] border-solid rounded-sm p-1 mt-2 hover:bg-purple-500 hover:text-white">View</button>
              </div>
            </Link>
          </div>
        ))
      }
        </div>
    </div>
  )
}

export default PokimonList
