import React from "react";
import TrackItem from "../player/TrackItem";

export default function AllTracksView({ albums, currentTrack, isPlaying, playTrack }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {albums
        .flatMap((album) => album.tracks)
        .map((track) => (
          <TrackItem
            key={track.url}
            track={track}
            isCurrent={currentTrack?.url === track.url}
            isPlaying={isPlaying}
            playTrack={playTrack}
          />
        ))}
    </div>
  );
}