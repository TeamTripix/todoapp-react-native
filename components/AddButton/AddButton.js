import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Dialog from "../DialogBox/Dialog";
import { handleToggleButtonDailog } from "../../redux/handleToggleButtonDailog/action";
import { useDispatch } from "react-redux";

const AddButton = () => {
  const [handleToggleButtonForDialog, setHandleToggleButtonForDialog] =
    useState({
      toggle: false,
      mode: "",
    });
  useEffect(() => {
    <Dialog />;
    dispatch(handleToggleButtonDailog(setHandleToggleButtonForDialog));
  }, [handleToggleButtonForDialog]);

  const dispatch = useDispatch();

  return (
    <>
      {handleToggleButtonForDialog.toggle ? (
        <Dialog toggleDialogValue={handleToggleButtonForDialog} />
      ) : null}
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          right: 50,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            handleToggleButtonForDialog.toggle
              ? setHandleToggleButtonForDialog({ toggle: false, mode: "" })
              : setHandleToggleButtonForDialog({ toggle: true, mode: "add" })
          }
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddButton;
