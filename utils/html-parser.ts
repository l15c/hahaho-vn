import parse from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify';

// export function replaceNode() {}

export default function html(html:string) {
    return parse(DOMPurify.sanitize(html))
}