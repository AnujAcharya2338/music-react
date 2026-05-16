function SearchBar({ artist, song, setArtist, setSong, onSearch }) {
  function handdleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex mx-auto gap-4 w-full  max-w-xl flex-col border rounded-4xl">
          <h2 className="text-2xl py-3 text-center">Lyrics Finder App</h2>
          <input
            type="text"
            className="mx-8 h-10 bg-gray-900"
            placeholder="Enter the Lyrics "
            value={song}
            onKeyDown={handdleKeyDown}
            onChange={(e) => setSong(e.target.value)}
          />
           <input
            type="text"
            className="mx-8 h-10 bg-gray-900"
            placeholder="Enter the Artist Name "
            value={artist}
            onKeyDown={handdleKeyDown}
            onChange={(e) => setArtist(e.target.value)}
          />
          <div className="flex justify-center items-center h-20 ">
            <button 
            onClick={onSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
