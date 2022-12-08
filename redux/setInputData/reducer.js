const initialStage = {
  name: "",
  desc: "",
};
const inputReducer = (stage = initialStage, action) => {
  switch (action.type) {
    case "nameInput":
      return {
        stage: {
          name: [...stage.name, action.data],
          desc: [...stage.desc],
        },
      };

    case "descInput":
      return {
        stage: action.data,
      };

    default:
      return stage;
  }
};

export default inputReducer;
