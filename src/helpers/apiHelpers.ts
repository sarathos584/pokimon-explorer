/**
 * 
 * @param data - response data of pokimon view api
 * @returns - processed data object for view page
 */

import { PokimonView } from "@/types/types"

export const _processViewApiData = (data: any): PokimonView => {

    const abilityArray: string[] = []
    const statsArray: string[] = []
    const movesArray: string[] = []

    const {types, abilities, stats, moves: movesArr, sprites } = data
    const type = types.find((item: any)=> item.type).type.name

    abilities.map((item: any)=> {
        abilityArray.push(item.ability.name)
    })

    stats.map((item: any)=> {
        statsArray.push(item.stat.name)
    })

    movesArr.map((item: any)=> {
        movesArray.push(item.move.name)
    })

    const moves = {
        count: `+${movesArray.length - 5}`,
        data: movesArray.slice(0, 5)
    }
    
    
    const images = {
        front_default: sprites.front_default,
        front_shiny: sprites.front_shiny,
        back_default: sprites.back_default,
        back_shiny: sprites.back_shiny
    }

    return {
        abilityArray, type, statsArray, moves, images
    }
}