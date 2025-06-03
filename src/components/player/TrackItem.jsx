import React from "react";
import { Play, Pause, Download } from "lucide-react";

export default React.memo(
  function TrackItem({ track, isCurrent, isPlaying, playTrack }) {
    return (
      <div className="bg-secondary p-3 rounded-md flex items-center justify-between hover:bg-secondary/80 transition">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => playTrack(track)}
            className="p-2 bg-primary rounded-full hover:bg-primary/80 transition flex items-center justify-center"
            aria-label={isCurrent && isPlaying ? "Pause" : "Play"}
          >
            {isCurrent && isPlaying ? (
              <Pause size={20} className="text-black" />
            ) : (
              <Play size={20} className="text-black" />
            )}
          </button>
          <span className="text-white font-medium truncate">{track.title}</span>
        </div>
            <a
        href={track.url}
        download
        className="flex items-center space-x-1 bg-primary text-black px-3 py-1 rounded hover:bg-primary/80 transition text-sm"
      >
        <Download size={16} />
        <span className="hidden sm:inline">Скачати</span>
      </a>
      </div>
    );
  },
  (prev, next) => {

    return (
      prev.track.url === next.track.url &&
      prev.isCurrent === next.isCurrent &&
      prev.isPlaying === next.isPlaying
    );
  }
);