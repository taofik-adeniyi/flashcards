import { Request, Response } from "express";
import Deck from "../src/models/deck";

export async function createCardForDeckController(req:Request, res:Response){
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId)
  if(!deck) return res.status(400).send("no deck of this id exists");
  const {text} = req.body;
  try{
    deck.cards.push(text)
    await deck.save()
    res.json(deck)
  }catch(error){
    console.log(error)
  }
}