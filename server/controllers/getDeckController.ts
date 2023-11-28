import { Request, Response } from "express";
import Deck from "../src/models/deck";


export async function getDeckController(req:Request, res:Response){
    const { deckId } = req.params
    try{
        const decks = await Deck.findById(deckId)
        res.json(decks)
      }catch(error){
        console.log("error",error)
      }
}