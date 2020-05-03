import showdown from "showdown";
import ReactDOMServer from "react-dom/server";
import { useEffect, useState } from "react";

type Props = {
  text: string;
};
export const useMarkdown = ({ text }: Props): { html: string | null } => {
  const [html, setHtml] = useState<null | string>(null);
  useEffect(() => {
    const converter = new showdown.Converter();
    setHtml(converter.makeHtml(text));
  }, [text]);

  return { html };
};
