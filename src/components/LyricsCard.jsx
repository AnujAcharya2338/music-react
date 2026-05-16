function LyricsCard({ lyrics }) {
  if (!lyrics) return null;

  return (
    <>
      <div>{lyrics}</div>
    </>
  );
}

export default LyricsCard;
