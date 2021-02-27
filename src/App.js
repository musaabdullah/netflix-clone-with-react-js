 import Row from './Row';
 import request from './request';
 import './app.css'
 import Banner from './Banner';
 import Nav from './Nav'
 export default function App() {
   
  const isLargeRow = true;
 
  return (
   <div className=" text-white app">
     {/* Navbar */}
       <Nav />
     {/* banner */}
       <Banner />
         
         <Row title="NETFLIX ORIGINALS" 
          fetchUrl={request.fetchNetflixOriginals}
          isLargeRow  />
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

