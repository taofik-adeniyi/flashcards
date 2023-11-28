import { Request, Response } from "express";
import Deck from "../src/models/deck";

export async function getDecksController(req:Request, res:Response){

        // fetch all decks and send back to user
        // how do we fetch decks fro mongo
        // how do we fetch the decks from mongo
      
        try{
          const decks = await Deck.find()
          // console.log(decks)
          res.json(decks)
        }catch(error){
          console.log("error",error)
        }
}