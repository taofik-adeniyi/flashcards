import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import Deck from "./models/deck";
import { getDecksController } from "../controllers/getDecksController";
import { createDeckController } from "../controllers/createDeckController";
import { deleteDecksController } from "../controllers/deleteDeckController";
import { createCardForDeckController } from "../controllers/createCardForDeckController";
import { getDeckController } from "../controllers/getDeckController";
import { deleteCardOnDeckController } from "../controllers/deleteCardOnDeckController";

const PORT = 5000;
const app = express();

app.use(cors({origin: 'http://localhost:5173'})) // or pass nothing into cors() or origin = *
app.use(express.json())


app.delete('/decks/:id', deleteDecksController)
app.get('/decks', getDecksController)
app.post("/decks", createDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController)
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController)
app.get("/decks/:deckId", getDeckController)


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
