import Shownote from './Shownote'
import Moment from 'react-moment'
import Highlighter from  'react-highlight-words'
import { escape, unescape } from 'html-escaper';
import '../styles/global.css'

export default function Episode({ episode, query }) {
  return (
    <>
      <span className='epititle'><a href={ episode.mediaUrl } target='_blank' rel='noopner noreferrer'><Highlighter highlightClassName='Highlight' searchWords={ [ query ] } textToHighlight={ unescape(episode.title).replaceAll('&nbsp;', ' ') } /></a></span> <span className='pubdate'>(<Moment format='YYYY/MM/DD'>{ episode.publicationDate }</Moment>)</span>
      <span>{ episode.shownotes.map((shownote, i) => <Shownote shownote={ shownote } query={ query } key={ i } />)}</span>
    </>
  );
}
