import { Request, Response } from "express";
import Deck from "../src/models/deck";

export async function createDeckController(req:Request, res:Response){
      try{
      const newDeck = new Deck({
        title: req.body.title,
      });
      const createdDeck = await newDeck.save();
      return res.json(createdDeck);
      }catch(error){
        console.log("error",error)
      }
}