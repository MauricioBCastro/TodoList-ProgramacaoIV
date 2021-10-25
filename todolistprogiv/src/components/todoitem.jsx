import React, { useEffect, useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import './todoitem.css';

const TodoItem = (props) => {
    
    const [todoItem, setTodoItem] = useState(props.data)
    const [isDirty, setDirty] = useState(false)

    useEffect(() => {
        if (isDirty) {
            console.log(todoItem);
            //ERROR Doesn't fetchs
                fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify(todoItem)
                
            }).then((response) => response.json())
                .then((data) => {
                setDirty(false);
                setTodoItem(data);
            });
        }
    }, [todoItem, isDirty])

    function updateTask () {
        setTodoItem({ ...todoItem, task: e.target.value});
    }

    return (
        <div>
            <Checkbox 
                //type='checkbox' 
                checked={todoItem.isDone} 
                onChange={() => {
                    setDirty(true);
                    setTodoItem({...todoItem, isDone: !todoItem.isDone});
                }}
            />
            <TextField className="TextField" label="Task" variant="outlined" value={todoItem.task} onChange={updateTask} />
        </div>
    );
};

export default TodoItem;