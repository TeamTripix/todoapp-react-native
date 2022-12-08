const initialStage = {
  list: [],
};
const addTodoReducer = (stage = initialStage, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;
      return {
        ...stage,
        list: [
          ...stage.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "delete":
      const { deleteId } = action.payload;
      const newList = stage.list.filter((elem) => elem.id !== deleteId);
      return {
        ...stage,
        list: newList,
      };

    case "edit":
      const { editId, editData } = action.payload;
      const index = stage.list.findIndex((id) => id.id === editId);

      const editNewData = {
        ...stage,
        list: [
          ...stage.list,
          {
            id: editId,
            data: (stage.list[index].data = editData),
          },
        ],
      };
      const returnData = editNewData.list.slice(0, editNewData.list.length - 1);
      const Data = { list: returnData };
      return Data;

    default:
      return stage;
  }
};

export default addTodoReducer;
