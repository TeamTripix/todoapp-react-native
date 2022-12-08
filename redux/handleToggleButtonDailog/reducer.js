const initialStage = null;
const handleToggleButtonDailogReducer = (stage = initialStage, action) => {
  switch (action.type) {
    case "handleToggleButtonDailog":
      const handleToggleButtonDailog = action.data;
      return {
        handleToggleButtonDailog,
      };

    default:
      return stage;
  }
};

export default handleToggleButtonDailogReducer;
