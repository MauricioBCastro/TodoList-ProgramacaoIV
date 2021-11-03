//import './App.css';
import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoitem";
import "./components/todoitem.jsx";

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
      mode: "cors",
      cache: "default",
    })
      .then((response) => response.json())
      .then((aTodoItem) => {
        //todoItems.push(aTodoItem);
        setTodoItems([...todoItems, aTodoItem]);
      });
  }

  async function handleDeleTodoItem(item) {
    const updatedTodoItems = todoItems.filter(
      (aTodoItem) => aTodoItem.id !== item.id
    );
    setTodoItems([...updatedTodoItems]);
  }

  return (
    <div class="flex-col bg-gray-800 h-screen w-screen flex items-center justify-center">
      {/* <!-- Todo List --> */}
      <div class="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
        <div class="mb-4">
          <div class="flex flex-row justify-between items-center mb-8">
            {/* <!-- add new item --> */}
            <h1 class="text-white font-bold text-xl">Todo List</h1>
            <button
              class="p-0 w-12 h-10 bg-gray-500 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
              onClick={addNewTodoItem}
            >
              <svg
                viewBox="0 0 20 20"
                enable-background="new 0 0 20 20"
                class="w-6 h-6 inline-block"
              >
                <path
                  fill="#FFFFFF"
                  d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
                />
              </svg>
            </button>
          </div>
          <div className="flex mt-4 flex-col">
            <div className="flex-row space-y-4">
              {todoItems
                ? todoItems.map((todoItem) => {
                    return (
                      <TodoItem
                        key={todoItem.id}
                        data={todoItem}
                        emitDeleteTodoItem={handleDeleTodoItem}
                      />
                    );
                  })
                : "loading data..."}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Completed --> */}
      <div class="w-full bg-gray-800 flex flex-col items-center justify-center font-sans md:max-w-2xl">
        <div class="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div class="mb-4">
            <h1 class="text-white font-bold text-xl">Completed</h1>
            <div class="flex mt-4 text-white">xxxxxxxxxxxxxxx</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
