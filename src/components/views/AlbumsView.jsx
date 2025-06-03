import React from "react";
import TrackItem from "../player/TrackItem";

export default function AlbumsView({ albums, currentTrack, isPlaying, playTrack }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      {albums.map((album) => (
        <div
          key={album.title}
          className="p-5 bg-gradient-to-br from-[rgba(27,0,0,0)] to-[rgb(102,0,0)] rounded-xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">
              {album.title} <span className="text-gray-400">({album.year})</span>
            </h3>
          </div>
          <div className="mt-4 space-y-3">
            {album.tracks.map((track) => (
              <TrackItem
                key={track.url}
                track={track}
                isCurrent={currentTrack?.url === track.url}
                isPlaying={isPlaying}
                playTrack={playTrack}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
