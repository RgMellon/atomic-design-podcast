import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Home } from "./src/pages/App/Home";
import { Provider } from "react-redux";

import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1A2028" }}>
        <StatusBar translucent />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
