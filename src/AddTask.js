import React, { useState } from 'react';

function AddTask({ OnAddEvent }) {
    const [text, setText] = useState('');

    return (
        <tr>
            <td></td>
            <td>
                <input type='text' onChange={(e) => setText(e.target.value)} placeholder="Agregar tarea" value={text} />
            </td>
            <td>
                <button onClick={
                    () => { OnAddEvent(text); setText(''); }
                    }>Agregar</button>
            </td>
        </tr>
    );
}

export default AddTask;