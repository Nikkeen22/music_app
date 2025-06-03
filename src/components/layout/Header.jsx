import React from "react";
import { Instagram, Youtube, Send } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-black border-b border-gray-800 z-10">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">Nikkeen</h1>
        <div className="hidden sm:flex space-x-6">
          <a href="https://www.instagram.com/nikkeen_music?igsh=MXgyeWFjM2kwMHdqbw==" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="hover:text-primary transition" />
          </a>
          <a href="https://t.me/Nikkeen_music" target="_blank" rel="noopener noreferrer">
            <Send size={24} className="hover:text-primary transition" />
          </a>
          <a href="https://youtube.com/@nikolasmusic2264?si=hzFR59vi8Bcy4VOA" target="_blank" rel="noopener noreferrer">
            <Youtube size={24} className="hover:text-primary transition" />
          </a>
        </div>
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-900"></div>
    </header>
  );
}