import { API_URL, TDeck } from "./config"

export async function deleteDeckCard(deckId:string, index:number):Promise<TDeck> {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`,{
        method: 'DELETE',
      })
    return await response.json()
}