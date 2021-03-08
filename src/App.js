import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
  }

    useEffect(() => {
      console.log("hello");
      fetchData("https://v2.jokeapi.dev/joke/Any");
    },[]);


    return (
      <h1>Hello</h1>

    )

}

export default App;
