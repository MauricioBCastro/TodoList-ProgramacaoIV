import React, { useEffect, useState } from "react";
import { Checkbox, IconButton, Tooltip } from "@material-ui/core";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Modal from "./Modal/Modal.js";

const TodoItem = (props) => {
  const { emitDeleteTodoItem } = props;
  const [todoItem, setTodoItem] = useState(props.data);
  const [isDirty, setDirty] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
        mode: "cors",
        cache: "default",
        body: JSON.stringify(todoItem),
      })
        .then((response) => response.json())
        .then((data) => {
          setDirty(false);
          setTodoItem(data);
        });
    }
  }, [todoItem, isDirty]);

  /*useEffect(() => {
        console.log(todoItem);
    }, [todoItem]);
    */

  async function updateTask(e) {
    setDirty(true);
    setTodoItem({ ...todoItem, task: e.target.value });
  }

  function deleteTodoItem() {
    fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      emitDeleteTodoItem(todoItem);
    });
  }

  /*
    function addComment() {
        fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }).then((data) => {
            emitDeleteTodoItem(todoItem);
        });
    }
    */

  return (
    <div className="flex flex-row w-full items-center">
      <Checkbox
        className="border-white"
        //type='checkbox'
        checked={todoItem.isDone}
        onChange={() => {
          setDirty(true);
          setTodoItem({ ...todoItem, isDone: !todoItem.isDone });
        }}
      />
      {todoItem.isDone ? (
        <p class="line-through w-full text-white">{todoItem.task}</p>
      ) : (
        <input
          className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black"
          size="small"
          id="filled-hidden-label-normal"
          label="Task"
          variant="filled"
          value={todoItem.task}
          onChange={updateTask}
        />
      )}
      <div className="Addcomment">
        <IconButton>
          <AddCommentIcon
            class="uppercase p-3 flex items-center bg-white hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10"
            onClick={() => {
              setOpenModal(true);
            }}
          />
          {openModal && <Modal closeModal={setOpenModal} />}
        </IconButton>
      </div>
      <Tooltip>
        <IconButton onClick={deleteTodoItem}>
          <DeleteOutlineRoundedIcon class="uppercase p-3 flex items-center bg-white hover:bg-gray-400 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default TodoItem;
