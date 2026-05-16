import LyricsCard from './components/LyricsCard'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
function App() {

  const[lyrics, setLyrics] = useState("")
  const[author, setAuthor] = useState("")
  const[song, setSong] = useState("")
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState(null)

async function HandleSearch(){

  setLoading(true)
  setError(null)


  try{

  }
  catch(err){

  }

  finally{
    setLoading(false)
  }

}

  return (
   <>
   <SearchBar 
   author={author} 
   setAuthor ={setAuthor}
   song={song}
   setSong ={setSong}
   onSearch={HandleSearch}

   />

   <LyricsCard
   lyrics = {lyrics}

   />
</>
  )
}

export default App
