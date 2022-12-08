import { StyleSheet, View, Text } from "react-native";
import Home from "./screen/Home";
import { Provider } from "react-redux";
import { Dimensions } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.safeArea}>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#f0f0f0",
    height: Dimensions.get("screen").height,
  },
});
