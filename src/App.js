import Navbar from "./components/Navbar/Navbar";
import "./components/App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { anime,comedy,documentaries, originals,action,horror} from "./urls"
function App() {
  return ( <div>

    <Navbar />
    <Banner />
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={action} title='Action Movies' isSmall />
    <RowPost url={horror} title='Horror Movies' isSmall />
    <RowPost url={anime} title='Anime's isSmall/>
    <RowPost url={comedy} title='Comedy Movies' isSmall />
    <RowPost url={documentaries} title='Documentry Movies' isSmall />
  </div>
  );
}

export default App;
