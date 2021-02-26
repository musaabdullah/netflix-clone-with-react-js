 import Row from './Row';
 import request from './request';
export default function App() {
 
  return (
   <div className="bg-dark text-white">
         <Row title="NETFLIX ORIGINALS"  fetchUrl={request.fetchNetflixOriginals} />
         <Row title="Trending Now" fetchUrl={request.fetchTrending} />
         <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
         <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
    </div> 
    );
}

