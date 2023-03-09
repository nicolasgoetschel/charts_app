import React, { useState, useEffect } from "react";

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
      );
      const data = await response.json();

      setSongs(data.feed.entry);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>UK Top 20 Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={song.id.attributes["im:id"]}>
            {index + 1}. {song["im:name"].label} - {song["im:artist"].label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;