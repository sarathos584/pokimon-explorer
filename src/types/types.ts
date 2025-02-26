
export type PokimonView = {
    abilityArray: string[]
    type: string
    statsArray: string[]
    moves: {
        count: string
        data: string[]
    }
    images: {
        front_default: string
        front_shiny: string
        back_default: string
        back_shiny: string
    }
}