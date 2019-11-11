import React, { useState, useEffect } from "react";
import TabExampleBasic from "./components/TabNav";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import axios from "axios";


export default function App() {
    const [info, setInfo] = useState([]);
    const [location, setLocation] = useState([]);
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.all([
            axios.get('https://rickandmortyapi.com/api/character'),
            axios.get('https://rickandmortyapi.com/api/location'),
            axios.get('https://rickandmortyapi.com/api/episode')
        ])
            .then(axios.spread((cRes, lRes, eRes) =>{
                setInfo(cRes.data.results);
                setLocation(lRes.data.results);
                setEpisode(eRes.data.results)
            }))
    },[]);
    console.log(info);

  return (
    <main>
      <Header />
      <Route exact path="/" component={ TabExampleBasic } />

      <Route path="/characters" render={props => (
          <CharacterList {...props} character={info} />
      )} />

      <Route path="/location" render={props => (
          <LocationList {...props} location={location} />
      )} />

      <Route path="/episode" render={props => (
          <EpisodeList {...props} episode={episode} />
      )} />
    </main>
  );
}
