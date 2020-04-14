import { useState, useEffect } from "react";
import useAppState from "../reducers/useAppState";

const insertStyleSheetRule = (ruleText: string) => {
  const sheets = document.styleSheets;

  if (sheets.length === 0) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
  }

  const sheet = sheets[sheets.length - 1];
  // @ts-ignore
  sheet.insertRule(
    ruleText,
    // @ts-ignore
    sheet.rules ? sheet.rules.length : sheet.cssRules.length
  );
};

const makeAnimation = () => {
  const random = "a" + String(Math.random()).replace(/\./g, "");
  const animation = `@keyframes ${random} { 0% {opacity: 0;} 35% {opacity:1;} 100% {opacity: 0;} `;
  insertStyleSheetRule(animation);
  return random;
};

export const useIncrementalAnimation = () => {
  const { timer } = useAppState(s => s.shuffle);
  const [animation, setAnimation] = useState<string | null>(null);

  useEffect(() => {
    setAnimation(makeAnimation());
  }, [timer]);

  return {
    animation: `${animation} 1.2s`
  };
};
