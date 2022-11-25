import { StyleSheet, Text, View } from "react-native";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return <Sidebar />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
