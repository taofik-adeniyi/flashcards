import { Request, Response } from "express";
import Deck from "../src/models/deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  // get deckid from the url
  // delete the deck from mongo
  // return the deleted deck to the user
  const deckId = req.params.deckId;
  const index = req.params.index;
  console.log("deckId",deckId);
  console.log("index",index);
  try {
    const deck = await Deck.findById(deckId);
    deck?.cards.splice(parseInt(index),1)
    await deck?.save()
    console.log(deck);
    res.json(deck)
  } catch (error) {
    console.log("error", error);
  }
}
