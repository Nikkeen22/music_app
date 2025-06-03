import React from "react";
import { Play, Pause, Download, SkipBack, SkipForward } from "lucide-react";

export default function AudioPlayer({
  audioRef,
  currentTrack,
  isPlaying,
  togglePlay,
  playNext,
  playPrev,
  progress,
  duration,
  onTimeUpdate,
  onLoadedMetadata,
  onEnded,
  onSeek,
  formatTime,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary border-t border-gray-800 p-4 flex items-center space-x-4 z-20">
      {/* Кнопка «Назад» */}
      <button
        onClick={playPrev}
        className="p-2 bg-primary rounded-full hover:bg-primary/80 transition flex items-center justify-center"
        aria-label="Previous"
      >
        <SkipBack size={20} className="text-black" />
      </button>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="p-3 bg-primary rounded-full hover:bg-primary/80 transition flex items-center justify-center"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause size={20} className="text-black" />
        ) : (
          <Play size={20} className="text-black" />
        )}
      </button>

      {/* Кнопка «Наступний» */}
      <button
        onClick={playNext}
        className="p-2 bg-primary rounded-full hover:bg-primary/80 transition flex items-center justify-center"
        aria-label="Next"
      >
        <SkipForward size={20} className="text-black" />
      </button>

      {/* Інформація про трек та прогрес-бар */}
      <div className="flex-1">
        <div className="text-white font-medium truncate">
          {currentTrack?.title || "Без треку"}
        </div>
        <div onClick={onSeek} className="h-2 bg-gray-700 rounded cursor-pointer mt-1 relative">
          <div className="h-2 bg-primary rounded" style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1 select-none">
          <span>{formatTime(progress * duration)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      

      {/* <audio> сам по собі ховається – ми ним керуємо через audioRef */}
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        className="hidden"
      />
    </div>
  );
}
