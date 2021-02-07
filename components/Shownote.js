import { escape, unescape } from 'html-escaper';

export default function Shownote({ shownote }) {
  return (
    <li><a href={ shownote.url } target='_blank' rel='noopner noreferrer'>{ unescape(shownote.title).replaceAll('&nbsp;', ' ') }</a></li>
  );
}
