import React from "react";

function Modal({ closeModal }) {
  /*
  fetch("http://localhost:8080/api/todoItems", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    mode: "cors",
    cache: "default",
  });
  */
  return (
    <div class="h-screen flex items-center justify-center">
      <div class="w-3/4 rounded-lg bg-gray-800 shadow">
        <div
          class="border-b border-white text-white"
          onClick={() => closeModal(false)}
        >
          <div class="p-4">X</div>
        </div>

        <div class="relative p-4">
          <input
            className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black"
            size="small"
            id="filled-hidden-label-normal"
            label="Task"
            variant="filled"
            //value={todoItem.task}
            //onChange={updateTask}
          ></input>
        </div>

        {/* <!-- Buttons --> */}
        <div className="mt-3 flex justify-end space-x-3">
          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-black-500 hover:border-transparent rounded"
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black-500 hover:border-transparent rounded"
            onClick={() => closeModal(false)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
