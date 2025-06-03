import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center py-4 border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Nikkeen. Всі права захищені.</p>
    </footer>
  );
}
