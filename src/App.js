import { useState } from 'react';
import axios from 'axios';

function App() {
  const [smrName, setSmrName] = useState("")
  const [summoner, setSummoner] = useState({})

  const getResponseFromAPI = async() => {
    try {
      const { data } = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${smrName}?api_key=${process.env.REACT_APP_API_KEY}`)
      setSummoner(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Coloque seu nick:</p>
        <input onChange={(e) => setSmrName(e.currentTarget.value)} value={smrName}/>
        <button onClick={getResponseFromAPI}>Buscar</button>
        <p>
          Resultado para:
        </p>

        {summoner ? (
        <>
        <p>
          Nome: {summoner.name}
        </p>
        <p>
          Level: {summoner.summonerLevel}
        </p>
        </>) : <p>Não encontrei nenhum invocador!</p> 
        }
      </header>
    </div>
  );
}

export default App;
