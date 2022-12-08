import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../redux/sendDataToTodoArray/actions";

const TodoCard = ({ todoName, todoDesc, todoId, date, time }) => {
  const handleToggleButtonDialog = useSelector(
    (stage) => stage.handleToggleButtonDailogReducer.handleToggleButtonDailog
  );
  const dispatch = useDispatch();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginVertical: 10,
        width: Dimensions.get("window").width - 30,
        borderRadius: 10,
        padding: 15,
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 15,
          fontWeight: "bold",
          marginVertical: 10,
        }}
      >
        {todoName}
      </Text>
      <Text style={{ color: "#787878" }}>{todoDesc}</Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* <TouchableOpacity style={{marginRight:10}}>
          <Icon name="plus" size={20} color="black" />
        </TouchableOpacity> */}
        <View>
          <Text>
            {time}
            {"  "}
            {date}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              handleToggleButtonDialog({ toggle: true, mode: "edit", data:{todoName,todoDesc,todoId} })
            }
            style={{ marginHorizontal: 10 }}
          >
            <Icon name="pencil" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(deleteTodo(todoId))}
            style={{ marginLeft: 10 }}
          >
            <Icon name="trash" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TodoCard;
