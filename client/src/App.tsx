import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { getDecks } from './api/getDecks'
import { createDeck } from './api/createDeck'
import { deleteDeck } from './api/deleteDeck'
import { TDeck } from './api/config'

type DeckType = {
  _id:string,title:string
}
function App() {
  const [decks,setDecks]=useState<TDeck[]>([])
  const [title,setTitle] = useState('')
  const handleCreateDeck = async (e:React.FormEvent) => {
    e.preventDefault()
    const newDeck = await createDeck(title)
    setDecks([...decks, newDeck])
    setTitle('')
  }

  useEffect(()=>{
    async function fetchDecks(){
      try{
        const newDecks = await getDecks()
        setDecks(newDecks)
      }catch(error){
      }
    }
    fetchDecks()
    return ()=> {
      console.log("clean up")
    }
  },[])

  async function handleDeleteDeck(deckId:string){
    await deleteDeck(deckId)
    setDecks(decks.filter((deck:DeckType) => deck._id !== deckId))
  }


  
  return (
    <div className='App'>
      <h1>Decks</h1>
      <ul className='decks'>
        {
          decks.map((deck:{_id:string,title:string})=>(
            <li key={deck._id}>
              <button onClick={()=>handleDeleteDeck(deck._id)}>X</button>
              <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
              </li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='deck_title'>Deck Title</label>
        <input id='deck_title' 
        value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            // save what is typed
            setTitle(e.target.value)
          }}
        />
        <button type='submit'>Create Deck</button>
      </form>
    </div>
  )
}

export default App
