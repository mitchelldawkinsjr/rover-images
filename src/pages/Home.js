import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoverList from '../components/homeComponents/roverlist';


function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Mars Rovers</h1>
      <hr/>
      <RoverList />
    </div>
  );
}

export default Home;
