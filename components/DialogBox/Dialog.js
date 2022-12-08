import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { addTodo, editTodo } from "../../redux/sendDataToTodoArray/actions";
import { useDispatch, useSelector } from "react-redux";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Dialog = ({ toggleDialogValue }) => {
  const [name, setName] = useState(
    toggleDialogValue.mode === "edit" ? toggleDialogValue.data.todoName : ""
  );
  const [desc, setDesc] = useState(
    toggleDialogValue.mode === "edit" ? toggleDialogValue.data.todoDesc : ""
  );
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleToggleButtonDialog = useSelector(
    (stage) => stage.handleToggleButtonDailogReducer.handleToggleButtonDailog
  );

  //timeFormatter

  function timeFormatter(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  // Button

  const Button = ({ text, color, bgColor, mode }) => {
    // addTodo handler
    const handleSubmitAddButton = () => {
      if (name === "" || desc === "") {
        setError("Please fill all fields");
      } else {
        const date = new Date().toLocaleDateString("pt-PT");
        const time = timeFormatter(new Date());
        dispatch(
          addTodo({
            name: name,
            desc: desc,
            date: date,
            time: time,
          })
        );

        handleToggleButtonDialog({ toggle: false, mode: "" });
      }
    };

    // editTodo handler

    const handleSubmitEditButton = () => {
      if (name === "" || desc === "") {
        setError("Please fill all fields");
      } else {
        const date = new Date().toLocaleDateString("pt-PT");
        const time = timeFormatter(new Date());
        dispatch(
          editTodo(
            {
              name: name,
              desc: desc,
              date: date,
              time: time,
            },
            toggleDialogValue.data.todoId
          )
        );
        handleToggleButtonDialog({ toggle: false, mode: "" });
      }
    };

    return (
      <TouchableOpacity
        onPress={
          text === "Cancel"
            ? () => handleToggleButtonDialog({ toggle: false, mode: "" })
            : mode.mode === "edit"
            ? handleSubmitEditButton
            : handleSubmitAddButton
        }
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bgColor,
          maxWidth: 60,
          maxHeight: 30,
          borderRadius: 5,
          marginRight: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: color, fontWeight: "bold" }}>
            {text === "Cancel" ? text : mode.mode === "edit" ? "Edit" : text}
          </Text>
          {text === "Add" && mode.mode === "" ? (
            <Icon name="plus" size={15} color="white" />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        height: Dimensions.get("screen").height,
        width: "100%",
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <View
        style={{
          height: 300,
          width: "80%",
          backgroundColor: "#f5f5f5",
          padding: 15,
          borderRadius: 5,
        }}
      >
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Name</Text>
          <TextInput
            autoFocus={true}
            style={{
              height: 40,
              marginVertical: 8,
              borderWidth: 0.5,
              borderColor: "#c4c4c4",
              borderRadius: 5,
              padding: 10,
              backgroundColor: "white",
            }}
            onChangeText={(value) => setName(value)}
            value={name}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold" }}> Description </Text>
          <TextInput
            multiline
            style={{
              height: 80,
              borderWidth: 0.5,
              padding: 10,
              marginVertical: 8,
              borderColor: "#c4c4c4",
              borderRadius: 5,
              backgroundColor: "white",
            }}
            onChangeText={(value) => setDesc(value)}
            value={desc}
          />
        </View>
        <Text
          style={{ position: "absolute", bottom: 50, left: 15, color: "red" }}
        >
          {error}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: 20,
          }}
        >
          <Button
            text="Cancel"
            color="red"
            bgColor="transparent"
            mode={toggleDialogValue}
            inputValues={{ name, desc }}
          />
          <Button
            text="Add"
            color="white"
            bgColor="black"
            mode={toggleDialogValue}
          />
        </View>
      </View>
    </View>
  );
};

export default Dialog;
