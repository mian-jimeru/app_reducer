import AddTask from './AddTask';
import './App.css';


function App() {
  
  const initialTasks = [
    {id: 0, text: 'Visitar el Museo Kafka', done: true},
    {id: 1, text: 'Ver espectáculo de títeres', done: false},
    {id: 2, text: 'Foto del muro de Lennon', done: false},
  ];

  return (
    <div className="App">
      <AddTask />
    </div>
  );
}

export default App;
