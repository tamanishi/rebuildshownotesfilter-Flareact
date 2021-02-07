import Shownote from './Shownote'
import Moment from 'react-moment'
import { escape, unescape } from 'html-escaper';

export default function Episode({ episode }) {
  return (
    <>
      <span className='epititle'><a href={ episode.mediaUrl } target='_blank' rel='noopner noreferrer'>{ unescape(episode.title).replaceAll('&nbsp;', ' ') }</a></span> <span className='pubdate'>(<Moment format='YYYY/MM/DD'>{ episode.publicationDate }</Moment>)</span>
      <span>{ episode.shownotes.map((shownote, i) => <Shownote shownote={ shownote } key={ i } />)}</span>
    </>
  );
}
