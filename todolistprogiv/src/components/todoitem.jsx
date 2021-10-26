import React, { useEffect, useState } from 'react';
import { TextField, Checkbox, IconButton, Tooltip } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import './todoitem.css';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

const TodoItem = (props) => {
    const { emitDeleteTodoItem } = props;
    const [todoItem, setTodoItem] = useState(props.data);
    const [isDirty, setDirty] = useState(false);
    /*const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
          borderColor: 'green',
          borderWidth: 2,
        }
    });
    */

    useEffect(() => {
        if (isDirty) {
            //ERROR Doesn't fetch
                fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors',
                cache: 'default',
                body: JSON.stringify(todoItem)
                
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
                <TextField className="TextField" size="small" id="filled-hidden-label-normal" label="Task" variant="filled" value={todoItem.task} onChange={updateTask}/>
            )}
            <Tooltip>
                <IconButton onClick={deleteTodoItem}>
                    <DeleteOutlineRoundedIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default TodoItem;