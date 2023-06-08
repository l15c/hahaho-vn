import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import {sanitize} from "@/utils/html-parser";

interface MarkdownProps {
  data: string;
}

export default function Markdown({ data }: MarkdownProps) {
  return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{sanitize(data)}</ReactMarkdown>
  );
}
