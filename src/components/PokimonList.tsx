'use client'
import Link from "next/link"
import { useEffect, useState } from "react"


const PokimonList = ({ kantoPokimon }: { kantoPokimon: any}) => {

  const [data, setData] = useState<undefined | any[]>()
  const [search, setSearch] = useState('')

  useEffect(()=> {

    if (search) {
        const dataList = kantoPokimon.results.filter((item: any)=> item.name.toLowerCase().includes(search.toLowerCase()))
        
        setData(dataList)
    } else {
        setData(kantoPokimon.results)
    }
  }, [kantoPokimon, search])

  return (
    <div>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} value={search} />
      {
        data?.map((item: any, idx: any)=> (
          <div className="flex flex-col" key={idx}>
          <Link href={`/${idx + 1}`}>{item.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default PokimonList
