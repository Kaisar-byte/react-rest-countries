import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* 
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h2>Visiting every country of the world</h2>
      <p>Available Countries : {countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>Name : {props.name} </h2>
      <h3>P</h3>
    </div>
  )
} */
export default App;
