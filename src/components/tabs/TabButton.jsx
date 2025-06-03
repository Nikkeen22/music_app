import React from "react";
import { Button } from "../ui/button";

export default React.memo(function TabButton({ label, keyName, isActive, onClick }) {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`${
        isActive ? "bg-primary text-black" : "text-white hover:text-primary"
      }`}
      onClick={() => onClick(keyName)}
    >
      {label}
    </Button>
  );
});