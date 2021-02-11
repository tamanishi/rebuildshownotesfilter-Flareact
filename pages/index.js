import Episode from '../components/Episode'
import Header from '../components/Header'
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { escape, unescape } from 'html-escaper';
import _ from 'lodash'

export const config = {
  amp: true,
}

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
  const [query, setQuery] = useState("")
  const intervalRef = useRef(null)

  const debounceSearch = useRef(
    _.debounce( query => {
      const filtered = props.fullEpisodes.map(episode => ({
        ...episode,
        shownotes: episode.shownotes
          .filter(shownote => shownote.title.toLowerCase().includes(escape(query.toLowerCase())))
      }))
      .filter(episode => episode.shownotes.length > 0)
  
      setFilteredEpisodes(filtered)
    },
    1000)
  )

  useEffect(
    () => {
      if (query) {
        debounceSearch.current(query)
      } else {
        setFilteredEpisodes(props.fullEpisodes)
      }
    },
    [query]
  )

  return (
      <>
        <Container>
          <Header />
          <Row><Col xs="3"><Form.Control type='text' placeholder='query' onChange={ e => setQuery(e.target.value) } /></Col></Row>
            { filteredEpisodes.map((episode, i) => <Episode episode={ episode } key={ i } />)}
        </Container>
      </>
  );
}
