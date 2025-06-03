export function Button({ children, onClick, variant = "default" }) {
  const base = "px-4 py-2 rounded-xl font-medium transition";
  const variants = {
    default: "bg-white text-black hover:bg-gray-200",
    ghost: "bg-transparent text-white hover:text-gray-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
