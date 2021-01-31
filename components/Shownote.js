export default function Shownote({ shownote }) {
  return (
    <li><a href={ shownote.url } target='_blank' rel='noopner noreferrer'>{ shownote.title }</a></li>
  );
}
