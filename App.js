import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignedInStack from "./screens/navigation";

export default function App() {
  return <SignedInStack />;
}
