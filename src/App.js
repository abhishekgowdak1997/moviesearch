import { useState,useEffect } from 'react';
import './App.css';


function App () {


  let [movieinfo,setMovieinfo]=useState(null)
  let [Title,setTitle]=useState("the avengers")

useEffect(()=>{
  getMovieData();
},[])

 function readTitle(value){
   setTitle(value);
 }
 function getMovieData(){
  let url=`http://omdbapi.com/?t=${Title}&apikey=e2ae8713`;
  fetch(url)
.then ((response )=>response.json())
.then((movie)=>{
  console.log(movie)
  setMovieinfo(movie);
})
.catch((err)=>{
  console.log(err);
})

}
  

 

 return (
    <div className="App">

      <div className="container">
        <div className="padd">
          <h1>Netflix</h1>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Enter movie name" onChange={(event)=>{(readTitle(event.target.value))}} className="search-field"/>
          <button className="btn"  onClick={getMovieData}>Search</button>
          
            
          
        </div>

      
        
        <div className="movie">
          <div className="poster">
          <img src={movieinfo?.Poster} className="img-posture"/>
          </div>
          <div className="details">
            <div className="padd">
              <h1>{movieinfo?.Title}</h1>
              <p><strong>Genre</strong>:{movieinfo?.Genre}</p>
              <p><strong>Directed by</strong>:{movieinfo?.Director}</p>
              <p>{movieinfo?.Plot}</p>
              <p>{movieinfo?.BoxOffice}</p>
              <p>{movieinfo?.Actors}</p>
              <p>{movieinfo?.Released}</p>

              <div className="ratings">
                {
                  movieinfo?.Ratings.map((rating,index)=>(
                    <div key ={index}>
                      <strong>{rating.Source}</strong>
                      <h3>{rating.Value}</h3>
                      </div>
                  ))
                }
              </div>
              

              
            </div>
          </div>

        </div>
          
          
      </div>
     
    </div>
          
  );
}
export default App;
