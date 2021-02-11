import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox/SearchBox'
import CardList from './components/Card-List/CardList'

function App() {
  const [monsters, setMonsters] = useState([])
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setTimeout(() => {
          setLoading(true)
        }, 2000)
        setMonsters(res.data)
      })
      .then(setLoading(false))
      .catch(err => console.log(err))
  }, [])

  //filter monsters
  const filteredMonsters = monsters.filter(monster => monster.username.toLowerCase().includes(input.toLowerCase()))


  return (
    <div className="App">
      <SearchBox input={input} setInput={setInput} placeholder="Search monsters..." />
      <CardList monsters={filteredMonsters} loading={loading} />
    </div>
  );
}

export default App;
