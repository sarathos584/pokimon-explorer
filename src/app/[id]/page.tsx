import PokimonView from '@/components/PokimonView';
import { _processViewApiData } from '@/helpers/apiHelpers';



export const metadata = {
    title: 'Pokimon',
    description: "Pokimon view"
}


const PokimonViewPage = async ({ params }: { params: { id: string }}) => {

    let error = false

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(response => response.json()).catch((err: any)=> {
        console.error(err)
        error = true
    })

        
  return (
    <section className='min-h-[100vh] pt-[20vh] max-w-[60%] mx-auto text-center flex flex-col justify-center'>
    {
        error ? (
            <div>
                No such pokimon!
            </div>
        ) : <PokimonView data={data}/>
    }
    </section>
  )
}

export default PokimonViewPage
