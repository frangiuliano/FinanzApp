import DolarCard from "@/components/DolarCard";
import { AppDispatch, RootState } from "@/redux/store";
import { getDolares } from "@/services/dolarServices";
import React, { useEffect } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

function DolarScreen() {
  const { dolares } = useSelector((state: RootState) => state.utils);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDolares());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text className="text-2xl font-bold">Cotización del dólar</Text>
      </View>
      <ScrollView className="flex gap-5 mt-4">
        {dolares?.map((dolar, index) => {
          return (
            <View key={dolar.casa}>
              <DolarCard dolar={dolar} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DolarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    gap: 10,
    backgroundColor: "#e7eef3",
  },
});
