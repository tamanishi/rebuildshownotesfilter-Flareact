import Episode from '../components/Episode'
import Header from '../components/Header'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
// import Fuse from 'fuse.js'

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
      fullEpisodes: episodes,
    }
  }
}

export default function Index(props) {
  const [filteredEpisodes, setFilteredEpisodes] = useState(props.fullEpisodes)
  // const options = {
  //   keys: ['title', 'shownotes.title']
  // }
  // const fuse = new Fuse(props.fullEpisodes, options)

  const filterShownotes = (e) => {
    if (e.target.value === '') {
      setFilteredEpisodes(props.fullEpisodes)
      return
    }

    // const filtered = fuse.search(e.target.value).map((item) => {
    //   return item.item
    // })

    const filtered = props.fullEpisodes.map(episode => ({
      ...episode,
      shownotes: episode.shownotes
        .filter(shownote => shownote.title.toLowerCase().includes(e.target.value.toLowerCase()))
    }))
    .filter(episode => episode.shownotes.length > 0)

    setFilteredEpisodes(filtered)
  }
  
  return (
      <>
        <Container>
          <Header />
          <Row><Col xs="3"><Form.Control type='text' placeholder='query' onChange={ filterShownotes } /></Col></Row>
            { filteredEpisodes.map((episode, i) => <Episode episode={ episode } key={ i } />)}
        </Container>
      </>
  );
}
