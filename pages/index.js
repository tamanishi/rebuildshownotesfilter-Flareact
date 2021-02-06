import Episode from '../components/Episode'
import Header from '../components/Header'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

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
  }
}

export default function Index(props) {
  const [episodes, setEpisodes] = useState(props.episodes)
  const filterShownotes = (e) => {
    // console.log(e.target.value)
    // setEpisodes([]);
    // useEffect(() => {
    //   setEpisodes([])
    // })
  }
  
  return (
      <>
        <Container>
          <Header />
          <Row><Col xs="3"><Form.Control type='text' placeholder='query' onChange={ filterShownotes } /></Col></Row>
            { props.episodes.map((episode, i) => <Episode episode={ episode } key={ i } />)}
        </Container>
      </>
  );
}
