import { API_URL, TDeck } from "./config";


export async function getDecks():Promise<TDeck[]> {
    const response = await fetch(`${API_URL}/decks`)
    return await response.json()
}
