import React, { useEffect, useState } from 'react'
import { createCard } from './api/createCard'
import { useParams } from 'react-router-dom'
import { TDeck, getDeck } from './api/getDeck'
import { deleteDeckCard } from './api/deleteDeckCard'
import "./Deck.css";

type Props = {}

const Deck = (props: Props) => {
  const { deckId } = useParams()
  const [deck, setDeck] = useState<TDeck|null>()
  const [cards,setCards]=useState<string[]>([])
  const [text,setText] = useState('')
  const handleCreateCard = async (e:React.FormEvent) => {
    e.preventDefault()
    const {cards: serverCards} = await createCard(deckId!,text)
    setCards(serverCards)
    setText('')
  }
  const handleDeleteDeckCard = async ( index:number) => {
    if(!deckId) return
    const latestDeck = await deleteDeckCard(deckId,index)
    console.log("latestDeck",latestDeck)
    setCards(latestDeck.cards)
  }

  useEffect(()=>{
    async function fetchDeck(){
      if(!deckId)return
      console.log("fetching...")
      try{
        const newDeck = await getDeck(deckId!)
        setDeck(newDeck)
        setCards(newDeck.cards)
      }catch(error){

      }
    }
    fetchDeck()
  },[deckId])

  // async function handleDeleteDeck(deckId:string){
  //   await deleteDeck(deckId)
  //   setDecks(decks.filter((deck:DeckType) => deck._id !== deckId))
  // }


  
  return (
    <div className='Deck'>
       <h1>{deck?.title}</h1>
      <ul className='cards'>
        {
          cards?.map((card,index)=>(
            <li key={index}>
              <button type='button' onClick={()=>handleDeleteDeckCard(index)}>X</button>
              {card}
              </li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor='card-text'>Card Text</label>
        <input id='card-text' 
        value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            // save what is typed
            setText(e.target.value)
          }}
        />
        <button type='submit'>Create Card</button>
      </form>
    </div>
  )
}

export default Deck