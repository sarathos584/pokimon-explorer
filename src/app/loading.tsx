import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-[95vh] flex justify-center items-center'> 
      <Image src='/loader.gif' width={32} height={32} alt=''/>
    </div>
  )
}

export default Loading
