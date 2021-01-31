import Episode from '../components/Episode'
import Header from '../components/Header'

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
  return (
      <div>
        <Header />
        <p>
          { episodes.map((episode, i) => <Episode episode={ episode } />)}
        </p>
      </div>
  );
}
