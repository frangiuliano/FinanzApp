import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SpendForm() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Acá toy en Prueba</Text>
      <Link href="/home">Home</Link>
    </View>
  );
}
