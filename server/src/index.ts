import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/deck";

const PORT = 5000;
const app = express();


app.use(express.json())
app.post("/decks", async (req: Request, res: Response) => {
    console.log(req.body)
  try{
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  return res.json(createdDeck);
  }catch(error){
    console.log("error",error)
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("gg");
});

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).json({ mssg: "Hello Wold!" });
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log(`listening on port: ${PORT}`);
  app.listen(PORT);
});
