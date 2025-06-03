import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { throttle } from "lodash";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SocialLinks from "./components/layout/SocialLinks";
import TrackItem from "./components/player/TrackItem";
import TabButton from "./components/tabs/TabButton";
import AudioPlayer from "./components/player/AudioPlayer";
import AlbumsView from "./components/views/AlbumsView";
import VideosView from "./components/views/VideosView";

export default function RapArtistPortfolio() {

  const [view, setView] = useState("albums");


  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);


  const albums = useMemo(
    () => [
      {
        title: "Що у тебе на душі",
        year: 2025,
        tracks: [
          { title: "Мої батьки", url: "/tracks/Мої батьки.mp3" },
          { title: "В прірву за сонцем", url: "/tracks/В прірву за сонцем.mp3" },
          { title: "Що у тебе на душі", url: "/tracks/Що у тебе на душі.m4a" },
          
        ],
      },
      {
        title: "Наречена - Рок версія",
        year: 2024,
        tracks: [
          { title: "Наречена - Рок версія", url: "/tracks/Наречена - Рок версія.m4a" },
          
        ],
      },
      {
        title: "Щоб не казали",
        year: 2024,
        tracks: [
          { title: "Вірив", url: "/tracks/tin.mp3" },
          { title: "Темрява розтає", url: "/tracks/Темрява розтає.mp3" },
          { title: "Щоб не казали", url: "/tracks/Щоб не казали.mp3" },
          { title: "Сценарій", url: "/tracks/Сценарій.mp3" },
        ],
      },
      
    ],
    []
  );

  const videos = useMemo(
    () => [
      "https://www.youtube.com/embed/sH5mthDL9x8?",
      "https://www.youtube.com/embed/5mYZeHga52w?",
      "https://www.youtube.com/embed/oin1dzyf8Ic?",
      "https://www.youtube.com/embed/dby-L59aTNg?",
    ],
    []
  );



  const allTracks = useMemo(
    () => albums.flatMap((album) => album.tracks),
    [albums]
  );


  const togglePlayGlobal = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.warn("Помилка відтворення:", err));
    }
  }, [isPlaying]);

  const playTrack = useCallback(
    (track) => {
      if (currentTrack?.url === track.url) {
        togglePlayGlobal();
      } else {
        setCurrentTrack(track);
        setIsPlaying(true);
      }
    },
    [currentTrack, togglePlayGlobal]
  );


  const throttledUpdate = useRef(
    throttle(() => {
      if (!audioRef.current) return;
      setProgress(audioRef.current.currentTime / audioRef.current.duration);
    }, 300)
  ).current;

  const onTimeUpdateGlobal = () => {
    throttledUpdate();
  };

  const onLoadedMetadataGlobal = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };


  const onEndedGlobal = () => {

    const idx = allTracks.findIndex((t) => t.url === currentTrack.url);
    if (idx === -1) {

      setIsPlaying(false);
      setCurrentTrack(null);
      setProgress(0);
      return;
    }

    if (idx < allTracks.length - 1) {
      const next = allTracks[idx + 1];
      setCurrentTrack(next);
      setIsPlaying(true);
      setProgress(0);
    } else {

      setIsPlaying(false);
      setCurrentTrack(null);
      setProgress(0);
    }
  };


  const playNext = () => {
    if (!currentTrack) return;
    const idx = allTracks.findIndex((t) => t.url === currentTrack.url);
    if (idx === -1) return;
    if (idx < allTracks.length - 1) {
      setCurrentTrack(allTracks[idx + 1]);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const playPrev = () => {
    if (!currentTrack) return;
    const idx = allTracks.findIndex((t) => t.url === currentTrack.url);
    if (idx === -1) return;
    if (idx > 0) {
      setCurrentTrack(allTracks[idx - 1]);
      setIsPlaying(true);
      setProgress(0);
    }
  };


  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;
    audio.src = currentTrack.url;
    audio.load();
    setProgress(0);


    if (isPlaying) {
      audio
        .play()
        .catch((err) => console.warn("Помилка відтворення:", err));
    }
  }, [currentTrack, isPlaying]);


  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) => console.warn("Помилка відтворення:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);


  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };


  const onSeekGlobal = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime / duration);
  };


  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />

      {/* HERO / PROFILE */}
      <section className="p-6 flex flex-col items-center text-center bg-secondary">
        <img
          src="/artist.jpg"
          alt="MC Shadow"
          className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-primary"
        />
        <h2 className="text-3xl font-semibold">Nikkeen</h2>
        <p className="text-gray-300 max-w-lg mt-2">
          У кожен трек вкладаю свою енергію й емоції, щоб передати справжній вайб.
        </p>

        {/* TAB BUTTONS */}
        <div className="flex space-x-3 mt-6">
          <TabButton
            label="Альбоми"
            keyName="albums"
            isActive={view === "albums"}
            onClick={setView}
          />
          <TabButton
            label="Всі пісні"
            keyName="all"
            isActive={view === "all"}
            onClick={setView}
          />
          <TabButton
            label="Кліпи"
            keyName="clips"
            isActive={view === "clips"}
            onClick={setView}
          />
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1 p-6 w-[100%] mx-auto space-y-6">
        {/* ALBUMS */}
        {view === "albums" && (
          <AlbumsView
            albums={albums}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            playTrack={playTrack}
          />
        )}

        {/* ALL TRACKS */}
        <div
          className={view === "all" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "hidden"}
        >
          {allTracks.map((track) => (
            <TrackItem
              key={track.url}
              track={track}
              isCurrent={currentTrack?.url === track.url}
              isPlaying={isPlaying}
              playTrack={playTrack}
            />
          ))}
        </div>

        
        {view === "clips" && <VideosView videos={videos} />}
      </main>

      {/* AUDIO PLAYER */}
      {currentTrack && (
        <AudioPlayer
          audioRef={audioRef}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          togglePlay={togglePlayGlobal}
          playNext={playNext}
          playPrev={playPrev}
          progress={progress}
          duration={duration}
          onTimeUpdate={onTimeUpdateGlobal}
          onLoadedMetadata={onLoadedMetadataGlobal}
          onEnded={onEndedGlobal}
          onSeek={onSeekGlobal}
          formatTime={formatTime}
        />
      )}

      {/* Схований аудіоелемент */}
      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdateGlobal}
        onLoadedMetadata={onLoadedMetadataGlobal}
        onEnded={onEndedGlobal}
        preload="auto"
        className="hidden"
      />

      {/* FOOTER */}
      <SocialLinks />
      <Footer />
    </div>
  );
}
