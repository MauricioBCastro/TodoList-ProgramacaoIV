import './App.css';
import React, { useEffect, useState } from 'react';
import TodoItem from "./components/todoitem";
import { Button } from '@material-ui/core';


function App() {

  const [todoItems, setTodoItems] = useState(null);

  
  useEffect(() => {

    if (!todoItems) {
      fetch("http://localhost:8080/api/todoItems")
        .then((response) => response.json())
        .then((data) => {
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  //Função Adicionar Nova Task
  function addNewTodoItem() {
    //Fetch = ("URL", Object that represents all the props that need to have consideration )
    fetch("http://localhost:8080/api/todoItems", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    }).then(response => response.json())
    .then((aTodoItem) => {
      //todoItems.push(aTodoItem);
      setTodoItems([...todoItems, aTodoItem]);
      console.log(aTodoItem)
      console.log(todoItems)
    });
    
  }


  return (
    <>
      <div className="todo--list">
        <div className="button--add">
          <Button size="large" variant="outlined" onClick={addNewTodoItem}>Add a New Task</Button>
        </div>
        <div className="task--list">
          <div className="task--items">
            {todoItems 
            ? todoItems.map((todoItem) => {
                return <TodoItem key={todoItem.id} data={todoItem}/>;
              }) 
            : "loading data..."}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
