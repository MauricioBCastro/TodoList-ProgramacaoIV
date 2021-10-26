import React, { useEffect, useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import './todoitem.css';

const TodoItem = (props) => {
    const { emitDeleteTodoItem } = props;
    const [todoItem, setTodoItem] = useState(props.data);
    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        if (isDirty) {
            //ERROR Doesn't fetch
                fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todoItem),
                
            }).then((response) => response.json())
                .then((data) => {
                setDirty(false);
                setTodoItem(data);
            });
        }
    }, [todoItem, isDirty])

    /*useEffect(() => {
        console.log(todoItem);
    }, [todoItem]);
    */


    function updateTask(e) {
        setDirty(true);
        setTodoItem({ ...todoItem, task: e.target.value})
    }

    function deleteTodoItem() {
        fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((data) => {
            emitDeleteTodoItem(todoItem);
        });
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
            {todoItem.isDone ? (
                <span>{todoItem.task}</span> 
            ) : (
                <TextField className="TextField" label="Task" variant="outlined" value={todoItem.task} onChange={updateTask}/>
            )}
            
            <span style={{cursor: "pointer"}} onClick={deleteTodoItem}>🗑️</span>
        </div>
    );
};

export default TodoItem;