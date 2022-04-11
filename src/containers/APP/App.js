// import logo from './logo.svg';
import './App.css';
import Page from "../Page/Page";
import {useSelector} from 'react-redux';


function App() {
  const state = useSelector((state) => state.inputs);

  return (
    <div className="App">
      <Page data={state}/>
    </div>
  );
}

export default App;
