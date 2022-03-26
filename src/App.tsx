/* Local dependencies */
import Search from './components/Search';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <Search title={'Enter a City'} />
    </div>
  );
}
