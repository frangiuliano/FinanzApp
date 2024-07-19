import NavBar from "@/components/NavBar";
import QuickAccess from "@/components/QuickAccess";
import ResumeCardHome from "@/components/ResumeCardHome";
import { Link } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <ResumeCardHome />
      <QuickAccess />
      <Link href="/home">Añadir un gasto</Link>
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
