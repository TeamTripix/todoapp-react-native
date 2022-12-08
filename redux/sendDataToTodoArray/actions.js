export const addTodo = (addTodoData) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      data: addTodoData,
    },
  };
};

export const editTodo = (editTodoData, id) => {
  return {
    type: "edit",
    payload: {
      editId: id,
      editData: editTodoData,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "delete",
    payload: {
      deleteId: id,
    },
  };
};


