"use client"
import { useState, useEffect } from "react";

export default function TypingEffect({ text = "", speed = 100 } : {text:string, speed?:number}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{text.slice(0, index)}</span>;
}
