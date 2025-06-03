import React from "react";
import { Instagram, Youtube, Send } from "lucide-react";

export default function SocialLinks() {
  return (
    <section className="bg-secondary text-white py-8">
      <p className="text-center text-lg mb-4">Слідкуй за мною:</p>
      <div className="flex justify-center space-x-8">
        <a
          href="https://www.instagram.com/nikkeen_music?igsh=MXgyeWFjM2kwMHdqbw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-primary transition"
        >
          <Instagram size={32} className="text-pink-500" />
          <span className="text-sm mt-1">Instagram</span>
        </a>
        <a
          href="https://t.me/Nikkeen_music"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-primary transition"
        >
          <Send size={32} className="text-blue-400" />
          <span className="text-sm mt-1">Telegram</span>
        </a>
        <a
          href="https://youtube.com/@nikolasmusic2264?si=hzFR59vi8Bcy4VOA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-primary transition"
        >
          <Youtube size={32} className="text-red-600" />
          <span className="text-sm mt-1">YouTube</span>
        </a>
      </div>
    </section>
  );
}
