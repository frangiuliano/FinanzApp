import NavBar from "@/components/NavBar";
import QuickAccess from "@/components/QuickAccess";
import ResumeCardHome from "@/components/ResumeCardHome";
import { RootState } from "@/redux/store";
import { auth } from "@/services/database/firebase";
import { NavigationProp } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ResumeCardHome />
      <QuickAccess />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
    gap: 10,
  },
});
