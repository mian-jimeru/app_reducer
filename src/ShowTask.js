import React, { useState } from 'react';

function ShowTask({ tasks, OnDeleteEvent, OnModifyEvent }) {
    return (
        tasks.map(task => (<Task task={task} OnDeleteEvent={OnDeleteEvent} OnModifyEvent={OnModifyEvent} />))
    );
}

function Task({ task, OnDeleteEvent, OnModifyEvent }) {
    const [editable, setEditable] = useState(false);
    const [texto, setTexto] = useState('');

    return (<tr>
        <td>
            <input type='checkbox' defaultChecked={task.done} />
        </td>
        <td>
            <span>{task.id}</span>{editable ? <input type='text' defaultValue={task.text} onChange={(e) => {setTexto(e.target.value)}}/> : <span>{task.text}</span>}
        </td>
        <td>
            {
            editable 
            ? 
            <button onClick={() => { OnModifyEvent(task.id, texto)}}>Guardar</button>
            :
            <button onClick={() => { setEditable(!editable); }}>Editar</button>
            }
        </td>
        <td>
            <button onClick={() => { OnDeleteEvent(task.id) }}>Borrar</button>
        </td>
    </tr>);
}


export default ShowTask;