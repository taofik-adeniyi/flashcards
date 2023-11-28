import { API_URL, TDeck } from "./config";

export async function createCard(deckId:string, text: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
