import Episode from '../components/Episode'
import Header from '../components/Header'
import { Container, Row, Col, Form, Input } from 'react-bootstrap';

async function getEpisodes() {
  const endpoint = `https://tamanishi.net/rebuildshownotesfilter3/shownotes-json`
  const res = await fetch(endpoint)
  const json = await res.json()
  return json.episodes
}

export async function getEdgeProps() {
  const episodes = await getEpisodes()
  return {
    props: {
      episodes: episodes,
    }
  };
}

export default function Index({ episodes }) {
  const filterShownotes = (e) => {

  }
  
  return (
      <div>
        <Container>
          <Header />
          <Row><Col xs="3"><Form.Control type='text' placeholder='query' onChange={ filterShownotes } /></Col></Row>
          {/* <form><input type='text' placeholder='query' onChange={ filterShownotes } /></form> */}
            { episodes.map((episode, i) => <Episode episode={ episode } key={ i } />)}
        </Container>
      </div>
  );
}
