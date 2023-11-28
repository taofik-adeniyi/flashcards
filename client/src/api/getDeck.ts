import { API_URL } from "./config";

export type TDeck = {
    _id: string;
    title:string;
    cards:string[]
}
export async function getDeck(deckId:string):Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}`)
    return await response.json()
}
