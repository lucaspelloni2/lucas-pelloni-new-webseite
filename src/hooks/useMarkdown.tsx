import showdown from "showdown";
// @ts-ignore
import HtmlToReact from "html-to-react";
import { ReactNode, useEffect, useState } from "react";
const HtmlToReactParser = HtmlToReact.Parser;
const htmlToReactParser = new HtmlToReactParser();

type Props = {
  text: string;
};
export const useMarkdown = ({ text }: Props): { html: ReactNode | null } => {
  const [html, setHtml] = useState<null | ReactNode>(null);
  useEffect(() => {
    const converter = new showdown.Converter();
    const htmlString = converter.makeHtml(text);
    const reactElement = htmlToReactParser.parse(htmlString);
    setHtml(reactElement);
  }, [text]);

  return { html };
};
