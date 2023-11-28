import { Request, Response } from "express";
import Deck from "../src/models/deck";

export async function deleteDecksController(req: Request, res: Response) {
  // get deckid from the url
  // delete the deck from mongo
  // return the deleted deck to the user
  const deckId = req.params.id;
  console.log(deckId);
  try {
    const deck = await Deck.findByIdAndDelete(deckId);
    console.log(deck);
    res.json({
      message: "successfully deleted",
    });
  } catch (error) {
    console.log("error", error);
  }
}
