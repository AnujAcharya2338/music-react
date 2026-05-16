import LyricsCard from './components/LyricsCard'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
function App() {

  const[lyrics, setLyrics] = useState("")
  const[artist, setArtist] = useState("")
  const[song, setSong] = useState("")
  const[loading, setLoading] = useState(false)
  const[error, setError] = useState(null)

async function HandleSearch(){
  console.log("button clicked!", artist, song) // 👈 add this
  if (!artist.trim() || !song.trim()) return;

  setLoading(true)
  setError(null)


  try{
    const lyrApi = await fetch (`https://api.lyrics.ovh/v1/${artist}/${song}`);
    const data = await lyrApi.json();

    setLyrics(data.lyrics)

  }
  
  catch(err){
setError("Lyrics not found")
  }

  finally{
    setLoading(false)
  }

}

  return (
   <>
   <SearchBar 
   artist={artist} 
   setArtist ={setArtist}
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
