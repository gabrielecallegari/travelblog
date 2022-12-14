import './App.css';
import Topbar from './Topbar/Topbar';
import Card from './Card/Card';
import database from "./database"

function App() {
  const carta = database.map( element =>{
    return <Card 
    key = {element.key}
    {...element}
    ></Card>
  })

  return (
    <div className="App">
      <Topbar></Topbar>
      {carta}
    </div>
  );
}

export default App;
