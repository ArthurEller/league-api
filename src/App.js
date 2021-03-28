import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [smrName, setSmrName] = useState("")
  const [smrLevel, setSmrLevel] = useState("")
  const [data, setData] = useState()

  const getSmr = async() => {
    await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${smrName}?api_key=RGAPI-a3d0d0f7-361b-4589-9262-f64bdd2fc356`)
    .then(res => {
      const response = res.data;
      console.log("Respose: ", response)
      setData(response)
    })
  }

  useEffect(() => {
    if (data) {
      setSmrName(data.name)
      setSmrLevel(data.summonerLevel)

      console.log(data.name)
    }

  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <p>Coloque seu nick:</p>
        <input onChange={(e) => setSmrName(e.currentTarget.value)} value={smrName}/>
        <button onClick={getSmr}>Buscar</button>
        <p>
          Resultado para:
        </p>

        {data ? (
        <>
        <p>
          Nome: {smrName}
        </p>
        <p>
          Level: {smrLevel}
        </p>
        </>) : <p>Não encontrei nenhum invocador!</p> 
        }
        

      </header>
    </div>
  );
}

export default App;
