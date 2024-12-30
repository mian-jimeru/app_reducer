import AddTask from './AddTask';
import ShowTask from './ShowTask';
import './App.css';
import { useState } from 'react';

function App() {
  const datas = [
    { id: 0, text: 'Visitar el Museo Kafka', done: true },
    { id: 1, text: 'Ver espectáculo de títeres', done: false },
    { id: 2, text: 'Foto del muro de Lennon', done: false },
  ];
  const [initialTasks, setInitialTask] = useState(datas);

  return (
    <table className="App">
      <tbody>
        <AddTask OnAddEvent={NewTask} />
        <ShowTask tasks={initialTasks} OnDeleteEvent={DeleteTask} OnModifyEvent={ModifyTask}/>
      </tbody>
    </table>
  )

  function NewTask(newText) {
    setInitialTask([
      ...initialTasks,
      {
        id: initialTasks.length,
        text: newText,
        done: false
      }
    ]);
  }

  function DeleteTask(identificador) {
    setInitialTask(
      initialTasks.filter((t) => t.id !== identificador)
    );
  }

  function ModifyTask(identificador, newText) {
    setInitialTask(
      initialTasks.map((t) => {
        if(t.id === identificador){
          t.text = newText;
        }  
      }))
  }
}



export default App;
