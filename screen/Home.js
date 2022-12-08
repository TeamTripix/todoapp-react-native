import { Text, View, FlatList } from "react-native";
import React from "react";
import TodoCard from "../components/Home/TodoCard";
import AddButton from "../components/AddButton/AddButton";
import { useSelector } from "react-redux";
import { Dimensions } from "react-native";

const Home = () => {
  const todoData = useSelector((state) => state.addTodoReducer.list);
  return (
    <>
        <View
          style={{
            alignItems: "center",
            paddingTop: 50,
            height: Dimensions.get("screen").height,
            width: Dimensions.get("screen").width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {todoData.length == 0 ? (
            <Text>No item here... Click add button to add todos</Text>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={todoData}
              renderItem={({ item }) => {
                return (
                  <>
                    <TodoCard
                      todoName={item.data.name}
                      todoDesc={item.data.desc}
                      date={item.data.date}
                      time={item.data.time}
                      todoId={item.id}
                    />
                  </>
                );
              }}
            />
          )}

          <AddButton />
        </View>
    </>
  );
};

export default Home;
