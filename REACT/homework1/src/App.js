import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



const DataComponent = ({ dataItem }) => {
  return (
    <div>
      <p style={{border: '1px dotted grey'}}><b>Country</b>:{dataItem.Nation}</p>
      <p style={{border: '3px dotted purple'}}>Year: <i>{dataItem.Year}</i></p>
      <p style={{border: '1px dotted grey'}}>Population: {dataItem.Population}</p>
    </div>
  );
};


const data = [
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2016,
    "Year": "2016",
    "Population": 323127515,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2015,
    "Year": "2015",
    "Population": 321418821,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2014,
    "Year": "2014",
    "Population": 318857056,
    "Slug Nation": "united-states"
  },
  {
    "ID Nation": "01000US",
    "Nation": "United States",
    "ID Year": 2013,
    "Year": "2013",
    "Population": 316128839,
    "Slug Nation": "united-states"
  }
];



let results = [
      {
          "name": "Luke Skywalker", 
          "height": "172", 
          "mass": "77", 
          "hair_color": "blond", 
          "skin_color": "fair", 
          "eye_color": "blue", 
          "birth_year": "19BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [
              "https://swapi.dev/api/vehicles/14/", 
              "https://swapi.dev/api/vehicles/30/"
          ], 
          "starships": [
              "https://swapi.dev/api/starships/12/", 
              "https://swapi.dev/api/starships/22/"
          ], 
          "created": "2014-12-09T13:50:51.644000Z", 
          "edited": "2014-12-20T21:17:56.891000Z", 
          "url": "https://swapi.dev/api/people/1/"
      }, 
      {
          "name": "C-3PO", 
          "height": "167", 
          "mass": "75", 
          "hair_color": "n/a", 
          "skin_color": "gold", 
          "eye_color": "yellow", 
          "birth_year": "112BBY", 
          "gender": "n/a", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/4/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [
              "https://swapi.dev/api/species/2/"
          ], 
          "vehicles": [], 
          "starships": [], 
          "created": "2014-12-10T15:10:51.357000Z", 
          "edited": "2014-12-20T21:17:50.309000Z", 
          "url": "https://swapi.dev/api/people/2/"
      }, 
      {
          "name": "R2-D2", 
          "height": "96", 
          "mass": "32", 
          "hair_color": "n/a", 
          "skin_color": "white, blue", 
          "eye_color": "red", 
          "birth_year": "33BBY", 
          "gender": "n/a", 
          "homeworld": "https://swapi.dev/api/planets/8/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/4/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [
              "https://swapi.dev/api/species/2/"
          ], 
          "vehicles": [], 
          "starships": [], 
          "created": "2014-12-10T15:11:50.376000Z", 
          "edited": "2014-12-20T21:17:50.311000Z", 
          "url": "https://swapi.dev/api/people/3/"
      }, 
      {
          "name": "Darth Vader", 
          "height": "202", 
          "mass": "136", 
          "hair_color": "none", 
          "skin_color": "white", 
          "eye_color": "yellow", 
          "birth_year": "41.9BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [], 
          "starships": [
              "https://swapi.dev/api/starships/13/"
          ], 
          "created": "2014-12-10T15:18:20.704000Z", 
          "edited": "2014-12-20T21:17:50.313000Z", 
          "url": "https://swapi.dev/api/people/4/"
      }, 
      {
          "name": "Leia Organa", 
          "height": "150", 
          "mass": "49", 
          "hair_color": "brown", 
          "skin_color": "light", 
          "eye_color": "brown", 
          "birth_year": "19BBY", 
          "gender": "female", 
          "homeworld": "https://swapi.dev/api/planets/2/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [
              "https://swapi.dev/api/vehicles/30/"
          ], 
          "starships": [], 
          "created": "2014-12-10T15:20:09.791000Z", 
          "edited": "2014-12-20T21:17:50.315000Z", 
          "url": "https://swapi.dev/api/people/5/"
      }, 
      {
          "name": "Owen Lars", 
          "height": "178", 
          "mass": "120", 
          "hair_color": "brown, grey", 
          "skin_color": "light", 
          "eye_color": "blue", 
          "birth_year": "52BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [], 
          "starships": [], 
          "created": "2014-12-10T15:52:14.024000Z", 
          "edited": "2014-12-20T21:17:50.317000Z", 
          "url": "https://swapi.dev/api/people/6/"
      }, 
      {
          "name": "Beru Whitesun lars", 
          "height": "165", 
          "mass": "75", 
          "hair_color": "brown", 
          "skin_color": "light", 
          "eye_color": "blue", 
          "birth_year": "47BBY", 
          "gender": "female", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [], 
          "starships": [], 
          "created": "2014-12-10T15:53:41.121000Z", 
          "edited": "2014-12-20T21:17:50.319000Z", 
          "url": "https://swapi.dev/api/people/7/"
      }, 
      {
          "name": "R5-D4", 
          "height": "97", 
          "mass": "32", 
          "hair_color": "n/a", 
          "skin_color": "white, red", 
          "eye_color": "red", 
          "birth_year": "unknown", 
          "gender": "n/a", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/"
          ], 
          "species": [
              "https://swapi.dev/api/species/2/"
          ], 
          "vehicles": [], 
          "starships": [], 
          "created": "2014-12-10T15:57:50.959000Z", 
          "edited": "2014-12-20T21:17:50.321000Z", 
          "url": "https://swapi.dev/api/people/8/"
      }, 
      {
          "name": "Biggs Darklighter", 
          "height": "183", 
          "mass": "84", 
          "hair_color": "black", 
          "skin_color": "light", 
          "eye_color": "brown", 
          "birth_year": "24BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.dev/api/planets/1/", 
          "films": [
              "https://swapi.dev/api/films/1/"
          ], 
          "species": [], 
          "vehicles": [], 
          "starships": [
              "https://swapi.dev/api/starships/12/"
          ], 
          "created": "2014-12-10T15:59:50.509000Z", 
          "edited": "2014-12-20T21:17:50.323000Z", 
          "url": "https://swapi.dev/api/people/9/"
      }, 
      {
          "name": "Obi-Wan Kenobi", 
          "height": "182", 
          "mass": "77", 
          "hair_color": "auburn, white", 
          "skin_color": "fair", 
          "eye_color": "blue-gray", 
          "birth_year": "57BBY", 
          "gender": "male", 
          "homeworld": "https://swapi.dev/api/planets/20/", 
          "films": [
              "https://swapi.dev/api/films/1/", 
              "https://swapi.dev/api/films/2/", 
              "https://swapi.dev/api/films/3/", 
              "https://swapi.dev/api/films/4/", 
              "https://swapi.dev/api/films/5/", 
              "https://swapi.dev/api/films/6/"
          ], 
          "species": [], 
          "vehicles": [
              "https://swapi.dev/api/vehicles/38/"
          ], 
          "starships": [
              "https://swapi.dev/api/starships/48/", 
              "https://swapi.dev/api/starships/59/", 
              "https://swapi.dev/api/starships/64/", 
              "https://swapi.dev/api/starships/65/", 
              "https://swapi.dev/api/starships/74/"
          ], 
          "created": "2014-12-10T16:16:29.192000Z", 
          "edited": "2014-12-20T21:17:50.325000Z", 
          "url": "https://swapi.dev/api/people/10/"
      }
  ];


const renderedData = data.map((item) => (
  <DataComponent dataItem={item} />
));





function CharacterInfo({ name, height, mass, hairColor, skinColor, eyeColor }) {
  
  let weightAndHeight = (mass !== 'unknown' && height !== 'unknown') ? `${mass} kg, ${height} cm` : 'Unknown';

  
  let hair = (hairColor !== 'n/a' && hairColor !== 'none') ? hairColor : 'Unknown';

  let skin = (skinColor !== 'n/a' && skinColor !== 'none') ? skinColor : 'Unknown';

  let eye = (eyeColor !== 'n/a' && eyeColor !== 'none') ? eyeColor : 'Unknown';

  return (
    <div className="character-info">
      <h2>{name}</h2>
      <p>Height: {weightAndHeight}</p>
      <p>Hair Color: {hair}</p>
      <p>Skin Color: {skin}</p>
      <p>Eye Color: <span style={{ color: eye }}>{eye}</span></p>
    </div>
  );
}


///////////

function Character({ name, gender, image, episodes }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <img src={image} alt={name} />
      <h3>Episodes:</h3>
      <ul>
        {episodes.map((episode, index) => (
          <li key={index}>{episode.name} - {episode.air_date}</li>
        ))}
      </ul>
    </div>
  );
}


function Episode({ name, air_date, characters }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Air Date: {air_date}</p>
      <h3>Characters:</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}



  

   




    function Episodes() {
      const [episodes, setEpisodes] = useState([]);
    
      useEffect(() => {
        fetchEpisodes();
      }, []);
    
      const fetchEpisodes = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                query episodes {
                  episodes(page: 1) {
                    results {
                      name
                      air_date
                      characters {
                        name
                      }
                    }
                  }
                }
              `,
            }),
          });
          const { data } = await response.json();
          setEpisodes(data.episodes.results);
        } catch (error) {
          console.error('Error fetching episodes:', error);
        }
      };
    
      return (
        <div>
          <h2>Episodes</h2>
          <ul>
            {episodes.map((episode, index) => (
              <li key={index}>
                <h3>{episode.name}</h3>
                <p>Air Date: {episode.air_date}</p>
                <p>Characters:</p>
                <ul>
                  {episode.characters.map((character, index) => (
                    <li key={index}>{character.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    function Characters() {
      const [characters, setCharacters] = useState([]);
    
      useEffect(() => {
        fetchCharacters();
      }, []);
    
      const fetchCharacters = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                query characters {
                  characters(page: 1) {
                    results {
                      name
                      gender
                      image
                      episode {
                        name
                        air_date
                      }
                    }
                  }
                }
              `,
            }),
          });
          const { data } = await response.json();
          setCharacters(data.characters.results);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
    
      return (
        <div>
          <h2>Characters</h2>
          <div className="character-list">
            {characters.map((character, index) => (
              <div key={index} className="character-card">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Gender: {character.gender}</p>
                <p>Episodes:</p>
                <ul>
                  {character.episode.map((episode, index) => (
                    <li key={index}>
                      {episode.name} - {episode.air_date}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

function App () {
  return (
    <div>
      <h1>Population info </h1>
      {renderedData}
      <h1>Star Wars Characters</h1>
      <div className="characters">
        {results.map((character, index) => (
          <CharacterInfo
            key={index}
            name={character.name}
            height={character.height}
            mass={character.mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
            eyeColor={character.eye_color}
          />
        ))}
      </div>
      <Episodes />
      <Characters />
    </div>
  );
};

export default App;
