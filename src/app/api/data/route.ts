import { error } from "console"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    console.log('hellooo')
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
console.log("response")
console.log(response.json(), 'jsonssss')
        if(!response.ok) {

            return NextResponse.json({ error: "Cannot fetch data.." }, { status: 204 })
        }

        const data = response.json()
        
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        
        return NextResponse.json({ error: "Something went wrong!"}, { status: 500 })
    }
}