import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./request.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fettchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocuentaries} />
      <Row title="User Collection" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
