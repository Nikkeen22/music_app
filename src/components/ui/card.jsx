export function Card({ children }) {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-md">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
